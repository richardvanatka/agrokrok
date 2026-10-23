# AgroKrok pre Google Play — príprava vydania

Aktualizované 24. októbra 2026. Android balík `sk.agrokrok.app`, verzia 2.0.1, versionCode 4; compile/target SDK 36, minimum 23. Offline obsah: 178 tém, 1 527 položiek úloh, 890 stupňov v 18 oblastiach. Podrobný rozsah: course/RESEARCH.md.

## Zásady súkromia

Dokončený text je v app/src/main/assets/privacy.html a store/SUKROMIE-NAVRH.txt (historický názov súboru). Vydavateľ Cowboysbase — Richard Vaňatka, kontakt richard.vanatka@gmail.com.
Verejná HTTPS adresa pre Play Console:
https://agrokrok-farmarstvo.pracovn-prie-3256.chatgpt.site/android-privacy.html

Aplikácia nemá INTERNET oprávnenie, reklamy, analytiku ani účty. Údaje o učení sú lokálne. Export obsahuje aj poznámky a prezývku; výsledková správa ich neobsahuje. Export a zdieľanie iniciuje používateľ cez systémové dialógy. Podporný e-mail spracúva údaje dobrovoľne poslané používateľom. Vymazanie v aplikácii zahŕňa všetky tri používané lokálne kľúče vrátane interných záloh. Pred odoslaním do Google Play vyplň Data safety podľa finálneho balíka a aktuálnych pravidiel; pri používateľom iniciovanom zdieľaní rozlišuj výnimky opísané v oficiálnej dokumentácii.

## Podpis a zachovanie pokroku

Verejný downloads/AgroKrok.apk je release zostava podpísaná stabilným certifikátom; kľúč a heslo sú uchované mimo repozitára. Aktualizácia podpísanej 2.0 na 2.0.1 zachováva applicationId, podpis aj kľúč pokroku. Aplikáciu netreba odinštalovať. Zo starých skúšobných 1.0.x treba pred odinštalovaním exportovať zálohu a po inštalácii importovať; ich dočasný podpis nebol uchovaný.

CI vytvára nepodpísaný AAB, ktorý ešte nie je upload-ready. Na Google Play treba podpísaný AAB a správne nastavený Play App Signing. Súkromný kľúč ani jeho záloha nepatria do verejného repozitára. Automatický workflow nič do Play Console neodosiela.

## Ďalšie kroky v Play Console

Dokonči popis obchodu, kontaktný e-mail, verejnú adresu zásad, obsahový dotazník, kategóriu a pravdivé cieľové publikum. Prilož reálne snímky Android aplikácie. Over ju na fyzickom telefóne aj bez internetu: učenie, veľké písmo, tlačidlo Späť, zatvorenie a návrat, export/import, zrušenie dialógov, zdieľanie a vymazanie. Spusti interný test a spracuj pre-launch report.

Podľa aktuálne zobrazenej požiadavky tohto osobného účtu je pred žiadosťou o produkčný prístup potrebný uzavretý test s aspoň 12 nepretržite prihlásenými testermi počas 14 dní. Následné sprístupnenie závisí od kontroly Google. Aplikácia zatiaľ nebola odoslaná do Google Play.

## Oficiálne podklady

- Zásady údajov: https://support.google.com/googleplay/android-developer/answer/10144311
- Data safety: https://support.google.com/googleplay/android-developer/answer/10787469
- Testovanie osobných účtov: https://support.google.com/googleplay/android-developer/answer/14151465
- Práva dotknutých osôb: https://dataprotection.gov.sk/sk/dotknute-osoby/prava-dotknutych-osob-slovensko/
