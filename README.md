# AgroKrok — celoročný tréning

[Stiahnuť AgroKrok 2.0.3 pre Android (APK)](https://github.com/richardvanatka/agrokrok/raw/refs/heads/main/downloads/AgroKrok.apk)

Pred prechodom zo starých skúšobných verzií 1.0.x exportuj pokrok v Môj pokrok. Ich podpis je odlišný; po odinštalovaní a inštalácii 2.0 importuj zálohu.

Vyžaduje Android 7.0 alebo novší (minSdk 24), kompatibilné s automatickou ochranou Google Play.

Offline Android pomôcka pre prvý ročník farmárstva. 178 tém, 1 527 položiek v banke úloh, 890 stupňov v 18 oblastiach. Päť stupňov témy: poznaj, rozlíš, vybav si, prepoj, zvládni. Po dokončení pokračujú miešané majstrovské tréningy. Výsledky odpovedí riadia intervaly opakovania. Generované číselné príklady majú vypočítateľnú správnu odpoveď.

**Rozsah nie je potvrdený úplný obsah školských osnov.** AgroKrok je nezávislá učebná pomôcka; rozsah a poradie tém sa môžu líšiť podľa odboru a učebného plánu. Jazyky a všeobecné predmety predstavujú základný tréning; prax a telesná výchova iba teoretickú prípravu. Podrobnosti: [course/RESEARCH.md](course/RESEARCH.md).

## Pokrok a aktualizácie

Zachováva sa kľúč `agrokrok-v1`, pôvodné identifikátory lekcií, body, dátumy, poznámky aj starý formát JSON zálohy. Prvý stupeň pôvodnej prejdenej témy sa započíta automaticky. Nové stupne sa nedarujú bez tréningu. Pri migrácii sa ponechá lokálna kópia pôvodného stavu. Testy overujú import všetkých pôvodných lekcií so 730 XP bez straty.

Android môže nainštalovať aktualizáciu na existujúcu aplikáciu iba s kompatibilným podpisom. Staré testovacie 1.0.x zostavy z runnera mali dočasné podpisy; ich súkromné kľúče sa neuchovali. Pred prechodom treba export zálohy a následný import. Distribučné APK vydania 2.0 je podpísané stabilným kľúčom mimo repozitára. Súkromná záloha sa uchováva oddelene. Súkromný kľúč, heslá ani podpisová záloha nepatria do repozitára.

## Zdieľanie

Natívne Android zdieľanie odošle iba používateľom potvrdenú správu s úrovňou, XP, počtom tém a stupňov a verejným odkazom na `downloads/AgroKrok.apk`. Žiadne meno, poznámky ani súkromná záloha. Aplikácia nemá účet, chat ani online sledovanie spolužiakov.

## Zdroj a zostavenie

- `node scripts-build-native.cjs`: zostaví učivo a pribalené offline stránky.
- `node tests/native-content.cjs`: kontroly celého učiva, migrácie a tréningového systému.
- `node tests/browser.cjs`: test skutočného mobilného rozhrania s Playwright.
- `./gradlew assembleDebug bundleRelease`: Android zostavenie.

GitHub Actions sa spúšťa pri zmene hlavnej vetvy alebo cez Actions > AgroKrok Android > Run workflow, režim test/play. Režim test vytvorí testovacie APK a nepodpísané AAB, režim play vyžaduje upload kľúč v GitHub Secrets a finalizované zásady súkromia. Neuverejňuje aplikáciu na Google Play. Výstupy sú uložené sedem dní. Verejné distribučné APK sa po kontrole a podpise nachádza v downloads/.

Zásady súkromia sú dokončené: [verejná stránka](https://agrokrok-farmarstvo.pracovn-prie-3256.chatgpt.site/android-privacy.html). Kontakt vydavateľa Cowboysbase: richard.vanatka@gmail.com. Aktualizácia 2.0.3 zachováva pokrok z podpísaných verzií 2.0, 2.0.1 a 2.0.2; aplikáciu neodinštaluj. Vymazanie údajov na výslovnú žiadosť používateľa zahŕňa aj interné zálohy. Pred Google Play zostáva dokončenie údajov obchodu a požadovaných testov. Podklady v RELEASE-PREPARATION.md a BUILD-STATUS.txt.
