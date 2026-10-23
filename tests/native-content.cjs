const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('app/src/main/assets/index.html','utf8');const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const elements=new Map();class E{constructor(){this.innerHTML='';this.textContent='';this.value='';this.style={};this.dataset={};this.classList={toggle(){},add(){}}}querySelectorAll(){return []}setAttribute(){}addEventListener(){}close(){}showModal(){}scrollIntoView(){}}
const doc={getElementById:id=>{if(!elements.has(id))elements.set(id,new E());return elements.get(id)},querySelectorAll:()=>[],createElement:()=>new E()};let exported;const store=new Map();const ctx=vm.createContext({document:doc,window:{addEventListener(){},AndroidBackup:{exportBackup:json=>exported=json,importBackup(){}}},location:{hash:'#learn'},localStorage:{getItem:k=>store.get(k),setItem:(k,v)=>store.set(k,v)},console,setTimeout:()=>0,confirm:()=>true,Intl,Date,Math,JSON,Set,Map,Blob,URL,TextEncoder});
// Test within the shipped IIFE before it closes, without exposing production globals.
const checks=`
if(lessons.length!==24||lessons.reduce((n,l)=>n+l.questions.length,0)!==96)throw Error('content counts');
for(const v of ['learn','review','library','progress','sources']){view=v;render();if($('main').innerHTML.length<500)throw Error('empty view '+v)}
state.name='Test';state.notes.s1='Lokálna poznámka';download();
if(!window.agroKrokImportNative)throw Error('native importer unavailable');
`;
vm.runInContext(code.replace(/\}\)\(\);\s*$/,checks+'\n})();'),ctx);assert.equal(JSON.parse(exported).notes.s1,'Lokálna poznámka');
assert(!html.includes('@import'),'no external font');assert(!html.includes('serviceWorker.register'),'no dependency on web cache');assert(!html.includes('src="app.js"'),'logic embedded');assert(html.includes('privacy.html'),'in-app privacy');assert(!html.includes('id="install-app"'),'no redundant install button');
const manifest=fs.readFileSync('app/src/main/AndroidManifest.xml','utf8');assert(!manifest.includes('uses-permission'),'no requested permissions');assert(manifest.includes('allowBackup="false"'),'cloud backup disabled');
console.log('PASS: 24 lessons, 96 tasks, five views, native JSON export/import bridge, local assets, privacy link, no permissions.');
