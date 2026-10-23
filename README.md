# AgroKrok — Android

Slovenská offline učebná pomôcka pre základy agropodnikania a farmárstva: 24 lekcií a 96 úloh. Stav prípravy a vydania je v RELEASE-PREPARATION.md a BUILD-STATUS.txt.

## Zostavenie z mobilu cez GitHub Actions

Projekt patrí do koreňa samostatného repozitára. Nahraj aj adresár .github/workflows, Gradle Wrapper a celý app/. ZIP sa nerozbaľuje automaticky: nahratie samotného ZIPu workflow nespustí.

Pri nahratí do vetvy main sa automaticky zostaví testovacia verzia. Ďalší beh môžeš spustiť cez Actions > AgroKrok Android > Run workflow. Zvoľ mode `test` a potvrď Run workflow. Po úspešnom behu otvor Artifacts a stiahni AgroKrok-test-... . Súbor AgroKrok-TEST.apk je podpísaný testovacím certifikátom a slúži na kontrolu v mobile. AgroKrok-UNSIGNED.aab nie je pripravený na odoslanie do Google Play, pretože nemá upload podpis.

Výstupy sú uložené 7 dní; pred uplynutím si ich stiahni. Zostavenie vyžaduje dostupné Actions minúty a povolené GitHub Actions; nemení nastavenia platieb.

## Podpísaný kandidát pre Google Play

Najprv doplň vydavateľa a finálne zásady súkromia a over celý obsah. Upload kľúč vytvor a bezpečne zálohuj. Do Settings > Secrets and variables > Actions ulož:

- AGROKROK_KEYSTORE_BASE64: obsah existujúceho upload keystore zakódovaný do base64;
- AGROKROK_STORE_PASSWORD: heslo keystore;
- AGROKROK_KEY_ALIAS: alias upload kľúča;
- AGROKROK_KEY_PASSWORD: heslo upload kľúča.

Kľúč ani heslá nepatria do súborov repozitára, komentárov ani konverzácie. Režim `play` používa kľúč len v dočasnom adresári runnera a pribalí iba výsledný AAB. Dočasný kľúč sa po behu vymaže. Samotný záložný upload kľúč a heslá si musí vydavateľ uchovať bezpečne mimo GitHub Actions. Keď sú údaje a podpis nastavené, spusti režim `play`; výstup je AgroKrok-PLAY-CANDIDATE.aab. Workflow aplikáciu neposiela do Google Play.

Pre nové vydanie zvyš versionCode. Finalizuj zásady súkromia, kontakt, vekové určenie, Data safety a testovanie. Podrobnosti sú v RELEASE-PREPARATION.md. Overenie fyzického Android zariadenia a Google Play pre-launch report je stále potrebné.
