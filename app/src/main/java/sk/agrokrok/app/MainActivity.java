package sk.agrokrok.app;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.webkit.*;
import android.widget.FrameLayout;
import android.widget.Toast;
import androidx.webkit.WebViewAssetLoader;
import java.io.*;
import java.nio.charset.StandardCharsets;
import org.json.JSONObject;

public class MainActivity extends Activity {
 private static final String ORIGIN = "appassets.androidplatform.net";
 private static final String START = "https://" + ORIGIN + "/assets/index.html";
 private static final int EXPORT = 40, IMPORT = 41;
 private WebView web;
 private String pendingExport;
 private static boolean local(Uri uri) { return "https".equals(uri.getScheme()) && ORIGIN.equals(uri.getHost()) && uri.getPath()!=null && uri.getPath().startsWith("/assets/"); }
 @Override public void onCreate(Bundle state) {
  super.onCreate(state);
  FrameLayout root = new FrameLayout(this);root.setBackgroundColor(Color.rgb(36,76,59));
  web = new WebView(this);web.setBackgroundColor(Color.rgb(248,249,244));root.addView(web);setContentView(root);
  root.setOnApplyWindowInsetsListener((v,insets)->{
   int left,top,right,bottom;
   if(Build.VERSION.SDK_INT>=30){android.graphics.Insets bars=insets.getInsets(android.view.WindowInsets.Type.systemBars()|android.view.WindowInsets.Type.displayCutout()|android.view.WindowInsets.Type.ime());left=bars.left;top=bars.top;right=bars.right;bottom=bars.bottom;}
   else {left=insets.getSystemWindowInsetLeft();top=insets.getSystemWindowInsetTop();right=insets.getSystemWindowInsetRight();bottom=insets.getSystemWindowInsetBottom();}
   v.setPadding(left,top,right,bottom);return insets;
  });
  WebSettings settings=web.getSettings();settings.setJavaScriptEnabled(true);settings.setDomStorageEnabled(true);
  settings.setAllowFileAccess(false);settings.setAllowContentAccess(false);settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
  settings.setBlockNetworkLoads(true);settings.setSupportMultipleWindows(false);settings.setJavaScriptCanOpenWindowsAutomatically(false);
  CookieManager.getInstance().setAcceptCookie(false);CookieManager.getInstance().setAcceptThirdPartyCookies(web,false);
  WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG);
  WebViewAssetLoader loader=new WebViewAssetLoader.Builder().addPathHandler("/assets/",new WebViewAssetLoader.AssetsPathHandler(this)).build();
  web.setWebViewClient(new WebViewClient(){
   @Override public WebResourceResponse shouldInterceptRequest(WebView view,WebResourceRequest request){
    if(local(request.getUrl()))return loader.shouldInterceptRequest(request.getUrl());
    return new WebResourceResponse("text/plain","UTF-8",new ByteArrayInputStream(new byte[0]));
   }
   @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest request){return navigate(request.getUrl());}
   @Override public boolean shouldOverrideUrlLoading(WebView view,String url){return navigate(Uri.parse(url));}
   @Override public void onReceivedError(WebView view,WebResourceRequest request,WebResourceError error){if(request.isForMainFrame())notice("Obsah sa nepodarilo otvoriť. Zatvor a znovu otvor aplikáciu.");}
  });
  web.setWebChromeClient(new WebChromeClient(){
   @Override public boolean onJsConfirm(WebView view,String url,String message,JsResult result){new AlertDialog.Builder(MainActivity.this).setMessage(message).setPositiveButton("Áno",(d,w)->result.confirm()).setNegativeButton("Nie",(d,w)->result.cancel()).setOnCancelListener(d->result.cancel()).show();return true;}
   @Override public boolean onJsAlert(WebView view,String url,String message,JsResult result){new AlertDialog.Builder(MainActivity.this).setMessage(message).setPositiveButton("OK",(d,w)->result.confirm()).setOnCancelListener(d->result.confirm()).show();return true;}
  });
  web.addJavascriptInterface(new BackupBridge(),"AndroidBackup");
  if(Build.VERSION.SDK_INT>=33)getOnBackInvokedDispatcher().registerOnBackInvokedCallback(android.window.OnBackInvokedDispatcher.PRIORITY_DEFAULT,this::back);
  web.loadUrl(START);
 }
 private boolean navigate(Uri uri){if(local(uri))return false;if("https".equals(uri.getScheme())||"mailto".equals(uri.getScheme())){try{startActivity(new Intent(Intent.ACTION_VIEW,uri));}catch(Exception e){notice("Na otvorenie odkazu chýba vhodná aplikácia.");}}return true;}
 private void notice(String text){Toast.makeText(this,text,Toast.LENGTH_LONG).show();}
 private void back(){web.evaluateJavascript("(function(){const d=document.querySelector('dialog[open]');if(d){d.dispatchEvent(new Event('cancel'));d.close();return true;}return false;})()",value->{if("true".equals(value))return;if(web.canGoBack())web.goBack();else finish();});}
 @Override public void onBackPressed(){back();}
 public class BackupBridge {
  @JavascriptInterface public void shareResult(String text){if(text==null||text.length()>6000)return;runOnUiThread(()->{try{Intent send=new Intent(Intent.ACTION_SEND).setType("text/plain").putExtra(Intent.EXTRA_TEXT,text);startActivity(Intent.createChooser(send,"Zdieľať výsledok a AgroKrok"));}catch(Exception e){notice("Zdieľanie nie je dostupné.");}});}

  @JavascriptInterface public void exportBackup(String json){if(json==null||json.length()>2_000_000)return;runOnUiThread(()->{try{if(pendingExport!=null)return;new JSONObject(json);pendingExport=json;Intent intent=new Intent(Intent.ACTION_CREATE_DOCUMENT).setType("application/json").addCategory(Intent.CATEGORY_OPENABLE).putExtra(Intent.EXTRA_TITLE,"agrokrok-pokrok.json");startActivityForResult(intent,EXPORT);}catch(Exception e){pendingExport=null;notice("Zálohu sa nepodarilo pripraviť.");}});}
  @JavascriptInterface public void importBackup(){runOnUiThread(()->{try{startActivityForResult(new Intent(Intent.ACTION_OPEN_DOCUMENT).setType("*/*").addCategory(Intent.CATEGORY_OPENABLE),IMPORT);}catch(Exception e){notice("Výber súboru nie je dostupný.");}});}
 }
 @Override public void onActivityResult(int request,int result,Intent data){
  super.onActivityResult(request,result,data);
  if(request==EXPORT){String json=pendingExport;pendingExport=null;if(result!=RESULT_OK||data==null||data.getData()==null||json==null)return;try(OutputStream out=getContentResolver().openOutputStream(data.getData(),"wt")){if(out==null)throw new IOException();out.write(json.getBytes(StandardCharsets.UTF_8));notice("Záloha bola uložená.");}catch(Exception e){notice("Zálohu sa nepodarilo uložiť.");}}
  if(request==IMPORT&&result==RESULT_OK&&data!=null&&data.getData()!=null){try(InputStream in=getContentResolver().openInputStream(data.getData());ByteArrayOutputStream out=new ByteArrayOutputStream()){
   if(in==null)throw new IOException();byte[] buffer=new byte[8192];int n,total=0;while((n=in.read(buffer))!=-1){total+=n;if(total>2_000_000)throw new IOException("large");out.write(buffer,0,n);}String json=out.toString("UTF-8");new JSONObject(json);web.evaluateJavascript("window.agroKrokImportNative("+JSONObject.quote(json)+")",null);
  }catch(Exception e){notice("Neplatná alebo príliš veľká záloha. Pokrok zostal zachovaný.");}}
 }
 @Override public void onDestroy(){if(web!=null){web.removeJavascriptInterface("AndroidBackup");web.destroy();}super.onDestroy();}
}
