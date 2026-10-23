# AgroKrok pre Google Play — príprava vydania

Pripravené 23. októbra 2026. Tento projekt obsahuje samostatnú Android verziu overenej webovej aplikácie AgroKrok (24 úvodných odborných lekcií, 96 úloh). Obsah sa distribuuje priamo v aplikácii, bez potreby prihlásenia alebo internetového spojenia na učenie. Aktualizácia učiva vyžaduje nové vydanie aplikácie. Jej pokrok je oddelený od webovej/PWA verzie; prenesie sa JSON exportom a importom.

## Stav

Toto je kandidát na testovanie, nie schválená aplikácia v Google Play. Neobsahuje produkčný podpisový kľúč. Súbor s príponou AAB, ak je v balíku priložený ako unsigned, nemožno priamo nainštalovať ani bez podpisu odoslať do Play Console. Testovací APK, ak je priložený, je podpísaný iba vývojovým testovacím certifikátom. Nemožno ho zameniť za finálne vydanie. Výsledok kontroly zostavenia je v BUILD-STATUS.txt.

## Projekt

Android applicationId: sk.agrokrok.app (pred prvým odoslaním over dostupnosť v Play Console; registráciou sa stáva trvalým identifikátorom).
Verzia: 1.0.0 / versionCode 1.
compileSdk a targetSdk: 36, minSdk: 23. AGP: 8.13.0, Gradle: 8.13, JDK: 17, androidx.webkit: 1.15.0. Ide o vedome zvolenú stabilnú knižnicu s podporou API 23; nejde o najnovšiu verziu knižnice.

Otvor adresár ako existujúci projekt v aktuálnom Android Studio. Nainštaluj SDK 36 a potrebné Build Tools; lokálnu cestu si IDE vytvorí samo. Ak treba, spusti cez Gradle 8.13 úlohu `gradle wrapper --gradle-version 8.13`. Wrapper je pri úspešnom zostavení priložený. Zostavenie: `./gradlew assembleDebug bundleRelease` (Windows: gradlew.bat). Zostava release sa úmyselne nepodpisuje testovacím kľúčom.

## Pred odoslaním

1. Doplň oficiálne verejné meno vydavateľa a podporný e-mail do store/SUKROMIE-NAVRH.txt a app/src/main/assets/privacy.html. Návrh nie je hotovou právnou dokumentáciou.
2. Zverejni finálne zásady ochrany súkromia na verejnej stabilnej HTTPS adrese a vlož ju do Play Console. Aktuálne pribalená stránka je len návrh. Kontakt ani meno vydavateľa sme verejne nepublikovali.
3. Vygeneruj svoj upload kľúč v Android Studio (Build > Generate Signed App Bundle / APK > Android App Bundle). Kľúč a heslo bezpečne zálohuj mimo zdrojového kódu. Použi Play App Signing. Priložený unsigned AAB môžeš podpísať vlastným upload kľúčom alebo zostaviť nový podpísaný AAB. Neodosielaj debug APK do produkcie.
4. Prejdi aplikáciu na skutočných Android zariadeniach: štart bez internetu, všetky sekcie, odpovede vrátane čísel a poradia, dialógy, tlačidlo Späť, zatvorenie a opätovné otvorenie, výmena orientácie, export/import vrátane zrušenia výberu, vymazanie údajov, externé odkazy a veľké písmo. Skontroluj najmä systémové lišty na Android 15/16 a menšie displeje.
5. Urob skutočné snímky Android aplikácie pre Google Play; nepridávaj makety ako údajné reálne obrazovky. Grafika a 512 px ikona sú v store/.
6. Založ aplikáciu v Play Console, vyplň popisy, kategóriu, kontakt, zásady súkromia, cieľový vek, obsahový dotazník a Data safety podľa skutočného balíka. Návrh cieľovej skupiny: stredoškoláci 13–15 a 16–17 rokov aj dospelí; cieľové publikum musí vydavateľ potvrdiť podľa obsahu a zamýšľaného používania. Nepredstieraj, že aplikácia je len pre dospelých, aby sa obišli pravidlá pre mladých používateľov.
7. Začni interným testom a oprav zistenia z pre-launch reportu. Pri osobnom účte založenom po 13. 11. 2023 treba pred žiadosťou o produkčný prístup uzavretý test aspoň 12 nepretržite prihlásených testerov počas 14 dní. Testovanie nemá byť iba formálne prihlásenie bez spätnej väzby. Splnenie počtu samo o sebe nezaručuje schválenie.
8. Po splnení požiadaviek požiadaj o produkčný prístup a odošli aplikáciu na kontrolu. Verejnú dostupnosť schvaľuje Google. Bez prístupu do tvojho Play Console sme nič neodoslali.

## Súkromie a údaje

Balík nežiada INTERNET ani citlivé oprávnenia, nenačítava externé fonty, nepoužíva analytiku ani reklamy. Učivo a údaje sú lokálne. Externé odborné odkazy sa otvárajú mimo WebView v prehliadači. Záloha sa zapisuje iba do umiestnenia, ktoré vyberie používateľ. Android systémové automatické zálohovanie je vypnuté. Pred vyplnením Data safety over aj finálny zlúčený manifest a všetky závislosti. Ak pridáš server, analytiku, prihlásenie či monetizáciu, údaje a zásady treba prehodnotiť. Nesľubujeme schválenie Google Play.

## Overené oficiálne podklady

- Target API: https://support.google.com/googleplay/android-developer/answer/11926878
- Registrácia účtu a jednorazový poplatok 25 USD: https://support.google.com/googleplay/android-developer/answer/6112435
- Nové osobné účty a testovanie: https://support.google.com/googleplay/android-developer/answer/14151465
- Ochrana údajov: https://support.google.com/googleplay/android-developer/answer/10144311
- Lokálny obsah Android WebView: https://developer.android.com/develop/ui/views/layout/webapps/load-local-content
- Zostavovanie: https://developer.android.com/build/releases/agp-8-13-0-release-notes

## Obsah

Nie je to úplná učebnica prvého ročníka ani oficiálna aplikácia konkrétnej školy. Podklady a odkazy sú uvedené v časti Zdroje a kurz. Úlohy a stručné vysvetlenia sú pôvodné spracovanie základných odborných faktov. Obsah treba priebežne kontrolovať s pedagógmi; praktický výcvik a bezpečnostné pravidlá pracoviska aplikácia nenahrádza.
