(()=>{
const modules = [
{id:'soil',name:'Pôda a jej život',icon:'🌱',color:'#527c42',desc:'Začni od základov. Doslova.',tag:'Pôdoznalectvo'},
{id:'botany',name:'Ako fungujú rastliny',icon:'🌿',color:'#2c8571',desc:'Od koreňa až po semeno.',tag:'Biológia'},
{id:'crops',name:'Od semena k úrode',icon:'🌾',color:'#b57925',desc:'Pestovanie s rozumom.',tag:'Rastlinná výroba'},
{id:'animals',name:'Život na farme',icon:'🐄',color:'#a26956',desc:'Pochop zvieratá a ich potreby.',tag:'Živočíšna výroba'},
{id:'tech',name:'Technika a bezpečnosť',icon:'🚜',color:'#567ca2',desc:'Dobrá práca začína bezpečne.',tag:'Mechanizácia'},
{id:'farm',name:'Farma v súvislostiach',icon:'🌻',color:'#866a9f',desc:'Počítaj, plánuj a chráň prírodu.',tag:'Hospodárenie'}
];
const C=(prompt,answer,a,b,why)=>({type:'choice',prompt,answer,options:[answer,a,b],why});
const N=(prompt,answer,unit,why)=>({type:'number',prompt,answer,unit,why});
const O=(prompt,answer,why)=>({type:'order',prompt,answer,why});
const L=(id,module,title,icon,points,example,source,url,questions)=>({id,module,title,icon,points,example,source,url,questions});
const lessons=[
L('s1','soil','Čo tvorí pôdu?','🪴',[
'Pôda obsahuje minerálne častice, organickú hmotu, vodu, vzduch a živé organizmy.',
'Zrnitosť vyjadruje pomer piesku, prachu a ílu. Štruktúra opisuje, ako sa častice spájajú do agregátov.',
'Piesčitá pôda zvyčajne prepúšťa vodu rýchlejšie než ílovitá. Korene potrebujú aj vzduch v póroch.'
],'Dve vzorky pôdy sa môžu líšiť zrnitosťou aj schopnosťou prepúšťať vodu.','FAO · Soil and water','https://www.fao.org/4/r4082e/r4082e03.htm',[
C('Čo vyjadruje zrnitosť pôdy?','Pomer piesku, prachu a ílu','Počet rastlín na poli','Farbu traktora','Zrnitosť sa týka veľkosti a zastúpenia minerálnych častíc.'),
C('Čo sa nachádza v pôdnych póroch?','Voda a vzduch','Iba kamene','Iba korene','Póry umožňujú pohyb vody a prístup vzduchu.'),
C('Ktorá pôda zvyčajne prepúšťa vodu rýchlejšie?','Piesčitá','Ílovitá','Obe vždy rovnako','V piesčitej pôde bývajú väčšie póry.'),
C('Štruktúra pôdy opisuje…','Usporiadanie pôdnych agregátov','Iba množstvo ílu','Iba teplotu pôdy','Zrnitosť a štruktúra sú odlišné vlastnosti.')]),
L('s2','soil','Organická hmota a humus','🪱',[
'Organická hmota zahŕňa zvyšky organizmov aj živú pôdnu biotu. Humus je jej stabilnejšia zložka.',
'Pri rozklade sa uvoľňujú živiny. Organická hmota podporuje spájanie častíc a dobrú štruktúru.',
'Rastlinné zvyšky a vhodné organické vstupy pomáhajú dopĺňať organickú hmotu.'
],'Pozberové zvyšky nie sú iba odpad: vracajú do pôdy organický materiál.','FAO · Importance of soil organic matter','https://www.fao.org/4/a0100e/a0100e04.htm',[
C('Čo je humus?','Stabilnejšia zložka organickej hmoty','Minerálne zrno piesku','Chemický postrek','Humus sa rozkladá pomalšie než čerstvé zvyšky.'),
C('Čo môže dopĺňať organickú hmotu?','Rastlinné zvyšky','Odstraňovanie všetkých zvyškov','Samotný piesok','Zvyšky prinášajú do pôdy organický materiál.'),
C('Čo sa pri rozklade organickej hmoty uvoľňuje?','Živiny','Nové kamene','Plast','Rozklad je súčasťou kolobehu živín.'),
C('Organická hmota pomáha…','Vytvárať pôdne agregáty','Odstrániť všetok vzduch','Zastaviť život v pôde','Agregáty podporujú štruktúru a prevzdušnenie.')]),
L('s3','soil','pH: kyslá alebo zásaditá?','🧪',[
'pH vyjadruje kyslosť alebo zásaditosť. Hodnota 7 je neutrálna, nižšia kyslá a vyššia zásaditá.',
'pH ovplyvňuje dostupnosť živín. Jednotlivé plodiny majú odlišné nároky.',
'Vápnenie môže zvýšiť pH kyslej pôdy. O potrebe a dávke rozhoduje rozbor, plodina a odporúčanie odborníka.'
],'Vzorka s pH 5 je kyslá. Z hodnoty samotnej ešte nevypočítaš dávku vápna.','University of Maryland · Soil test report','https://www.extension.umd.edu/resource/understanding-your-soil-test-report',[
C('Pôda s pH 5 je…','Kyslá','Neutrálna','Zásaditá','Hodnoty pod 7 označujú kyslé prostredie.'),
N('Aká hodnota pH je neutrálna?',7,'pH','Neutrálna hodnota je 7.'),
C('Čo môže vápnenie kyslej pôdy urobiť?','Zvýšiť pH','Vždy znížiť pH','Nahradiť všetky živiny','Vápnenie sa používa na úpravu kyslosti.'),
C('Podľa čoho určujeme potrebu vápnenia?','Rozboru a nárokov plodiny','Iba farby pôdy','Podľa počtu traktorov','Dávku nemožno bezpečne určiť iba odhadom.')]),
L('s4','soil','Keď sa pôda utlačí','👣',[
'Zhutnenie zmenšuje pórový priestor. Sťažuje rast koreňov aj pohyb vody a vzduchu.',
'Prejazdy ťažkej techniky po príliš vlhkej pôde zvyšujú riziko zhutnenia.',
'Pomáha obmedziť zbytočné prejazdy a pracovať pri vhodnej pôdnej vlhkosti.'
],'Po daždi nemusí byť pole vhodné na prejazd, aj keď sa práca ponáhľa.','University of Minnesota · Soil compaction','https://extension.umn.edu/natural-resources/conservation/agricultural-soil-and-water/soil-compaction',[
C('Pri zhutnení sa pórový priestor…','Zmenšuje','Vždy zväčšuje','Nemení','Tlak stláča častice bližšie k sebe.'),
C('Kedy je riziko poškodenia prejazdom vyššie?','Na príliš vlhkej pôde','Vždy iba v zime','Iba pri ručnej práci','Vlhká pôda sa ľahšie deformuje.'),
C('Čo môže zhutnenie obmedziť?','Rast koreňov','Iba farbu listov','Iba predajnú cenu traktora','Korene prenikajú zhutnenou vrstvou ťažšie.'),
C('Čo pomáha predchádzať zhutneniu?','Obmedzenie zbytočných prejazdov','Viac prejazdov po mokrom poli','Odstránenie všetkých koreňov','Plánovanie prejazdov znižuje zaťaženie pôdy.')]),
L('b1','botany','Telo rastliny','🌿',[
'Koreň rastlinu upevňuje a prijíma vodu a minerálne látky.',
'Stonka nesie nadzemné orgány a obsahuje vodivé pletivá. Listy sú dôležité pre fotosyntézu.',
'Kvety a plody súvisia s rozmnožovaním. Orgány tvoria pletivá a pletivá tvoria bunky.'
],'Poškodenie koreňov môže obmedziť príjem vody aj pri zelených listoch.','OpenStax · The plant body (vecné overenie)','https://openstax.org/books/biology-2e/pages/30-1-the-plant-body',[
C('Ktorý orgán prijíma vodu z pôdy?','Koreň','Kvet','Plod','Koreňový systém prijíma vodu aj minerálne látky.'),
C('Ktorý orgán nesie listy?','Stonka','Semeno','Peľ','Stonka poskytuje oporu nadzemným orgánom.'),
O('Usporiadaj od menšej úrovne organizácie po väčšiu.',['Bunka','Pletivo','Orgán'],'Bunky tvoria pletivá; pletivá tvoria orgány.'),
C('Ktoré orgány súvisia s rozmnožovaním?','Kvety a plody','Iba korene','Iba listy','Kvety a plody patria medzi rozmnožovacie orgány.')]),
L('b2','botany','Fotosyntéza bez záhad','☀️',[
'Pri fotosyntéze rastlina využíva svetelnú energiu na tvorbu organických látok z oxidu uhličitého a vody.',
'Pri kyslíkovej fotosyntéze sa uvoľňuje kyslík. Chlorofyl zachytáva svetlo v chloroplastoch.',
'Rastlina tiež dýcha. Fotosyntéza a bunkové dýchanie sú rozdielne procesy.'
],'Svetlo nie je hnojivo. Dodáva energiu procesu, ktorý vytvára cukry.','OpenStax · Photosynthesis (vecné overenie)','https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis',[
C('Odkiaľ pochádza energia pre fotosyntézu?','Zo svetla','Zo zvuku','Zo soli','Fotosyntéza premieňa svetelnú energiu.'),
C('Ktorý plyn rastlina využíva pri tvorbe cukrov?','Oxid uhličitý','Hélium','Metán','Uhlík do cukrov prichádza z CO₂.'),
C('Kde prebieha fotosyntéza rastlín?','V chloroplastoch','V kostiach','V jadre piesku','Chloroplasty obsahujú fotosyntetický aparát.'),
C('Rastliny vykonávajú…','Fotosyntézu aj bunkové dýchanie','Iba fotosyntézu','Ani jeden proces','Aj rastlinné bunky získavajú energiu bunkovým dýchaním.')]),
L('b3','botany','Cesta vody rastlinou','💧',[
'Xylém vedie vodu a minerálne látky z koreňov. Floém rozvádza produkty fotosyntézy.',
'Transpirácia je výdaj vody vo forme pary, najmä cez prieduchy listov.',
'Prieduchy sa podieľajú na výmene plynov. Pri nedostatku vody ich uzatvorenie obmedzuje straty vody aj príjem CO₂.'
],'List odparuje vodu, hoci ju priamo nevidíš.','OpenStax · Transport in plants (vecné overenie)','https://openstax.org/books/biology-2e/pages/30-5-transport-of-water-and-solutes-in-plants',[
C('Ktoré pletivo vedie vodu z koreňov?','Xylém','Floém','Peľ','Xylém je vodivé pletivo pre vodu a minerálne látky.'),
C('Čo rozvádza floém?','Produkty fotosyntézy','Iba vzduch','Iba piesok','Floém zásobuje časti rastliny organickými látkami.'),
C('Čo je transpirácia?','Výdaj vody vo forme pary','Príjem peľu','Tvorba semien','Najväčšia časť transpirácie prebieha cez prieduchy.'),
C('Uzatvorenie prieduchov obmedzí…','Straty vody aj príjem CO₂','Iba tvorbu koreňov','Vždy všetko dýchanie','Prieduchy zabezpečujú výmenu plynov aj únik vodnej pary.')]),
L('b4','botany','Od kvetu k semenu','🌸',[
'Opelenie je prenos peľu na bliznu kvetu. Oplodnenie je splynutie pohlavných buniek.',
'Peľ môže prenášať vietor alebo živočíchy. Opelenie a oplodnenie nie sú to isté.',
'Po oplodnení sa vajíčko mení na semeno; zo semenníka sa spravidla vyvíja plod.'
],'Včela môže preniesť peľ. Samotné splynutie buniek sa odohrá v rastline.','OpenStax · Pollination and fertilization (vecné overenie)','https://openstax.org/books/biology-2e/pages/32-2-pollination-and-fertilization',[
C('Čo je opelenie?','Prenos peľu na bliznu','Splynutie buniek','Zber plodov','Opelenie predchádza oplodneniu.'),
C('Čo je oplodnenie?','Splynutie pohlavných buniek','Prenos vody do listu','Výsev na pole','Ide o spojenie pohlavných buniek.'),
C('Čo vzniká z oplodneného vajíčka?','Semeno','Koreňový vlások','Prach','Vajíčko sa vyvíja na semeno.'),
O('Zoraď zjednodušený sled.',['Opelenie','Oplodnenie','Vývoj semena'],'Prenos peľu umožní následné oplodnenie a vývoj semena.')]),
L('c1','crops','Prebúdzanie semena','🌱',[
'Živé semeno potrebuje na klíčenie vhodnú vlhkosť, kyslík a teplotu. Nároky sa líšia podľa druhu.',
'Začínajúci klíčenec využíva zásoby semena. Premokrenie môže obmedziť kyslík a podporiť choroby.',
'Pri výseve rešpektuj vlastnosti osiva a odporúčané podmienky; univerzálna teplota pre všetky plodiny neexistuje.'
],'Chladná pôda môže spomaliť vzchádzanie. Viac vody nemusí byť riešením.','University of Minnesota · Starting seeds','https://extension.umn.edu/garden-and-home/yard-and-garden/gardening-in-minnesota/starting-seeds-indoors',[
C('Čo potrebuje semeno na klíčenie?','Vodu, kyslík a vhodnú teplotu','Iba tmu','Iba hnojivo','Základné podmienky musia zodpovedať druhu.'),
C('Odkiaľ má klíčenec počiatočné zásoby?','Zo semena','Zo zvuku','Zo všetkého svetla v noci','Semeno obsahuje zásobné látky.'),
C('Prečo škodí premokrenie?','Môže obmedziť prístup kyslíka','Voda vždy zvyšuje teplotu','Vytvára okamžite plody','Korene a klíčiace semená potrebujú kyslík.'),
C('Majú všetky plodiny rovnakú teplotu klíčenia?','Nie, nároky sa líšia','Áno, vždy 0 °C','Áno, vždy 40 °C','Výsev prispôsobujeme konkrétnemu druhu.')]),
L('c2','crops','Spoznaj obilniny','🌾',[
'Pšenica, jačmeň, raž a ovos patria medzi obilniny. Pestujú sa najmä pre zrno.',
'Odrody sa odlišujú úrodou, kvalitou zrna a odolnosťou voči chorobám či poliehaniu.',
'Odrodu vyberáme podľa podmienok pestovania a plánovaného použitia úrody.'
],'Najvyššia úroda v jednom pokuse ešte neznamená najlepšiu odrodu pre každé pole.','University of Minnesota · Small grain selection','https://extension.umn.edu/small-grains/small-grains-crop-and-variety-selection',[
C('Ktorá skupina obsahuje iba obilniny?','Pšenica, jačmeň, ovos','Hrach, fazuľa, šošovica','Zemiak, repa, mrkva','Všetky tri prvé rastliny sú obilniny.'),
C('Pre čo sa obilniny často pestujú?','Pre zrno','Iba pre kvety','Pre drevo','Zrno je hlavný produkt mnohých obilnín.'),
C('Čo sledujeme pri výbere odrody?','Úrodu, kvalitu a odolnosť','Iba názov','Iba farbu obalu osiva','Výber je kombinácia úžitkových vlastností.'),
C('Výber odrody treba prispôsobiť…','Podmienkam a účelu pestovania','Iba reklame','Iba dĺžke názvu','Odroda musí vyhovovať poľu aj zamýšľanému využitiu.')]),
L('c3','crops','Bôbovité a ich pomocníci','🫛',[
'Bôbovité rastliny môžu žiť v symbióze s hľuzkovými baktériami na koreňoch.',
'Baktérie viažu vzdušný dusík; rastlina im poskytuje energiu a organické látky.',
'Po rozklade zvyškov môže časť dusíka využiť ďalšia plodina. Účinok závisí od podmienok a množstva zvyškov.'
],'Ďatelina či lucerna môžu priniesť do osevného postupu aj dusík viazaný baktériami.','University of Minnesota · Legume characteristics','https://extension.umn.edu/agriculture/crop-production/forages/legume-life-cycles-and-characteristics',[
C('Kde sa nachádzajú hľuzkové baktérie?','V koreňových hľuzkách','V kabíne traktora','Iba na kvetoch','Hľuzky vznikajú na koreňoch vhodných hostiteľov.'),
C('Ktorý prvok baktérie viažu zo vzduchu?','Dusík','Železo','Vápnik','Symbiotická fixácia sprístupňuje vzdušný dusík.'),
C('Čo poskytuje rastlina baktériám?','Energiu a organické látky','Naftu','Peľ inej rastliny','Symbióza je vzájomne prospešné spolužitie.'),
C('Je prínos dusíka pre ďalšiu plodinu vždy rovnaký?','Nie, závisí od podmienok','Áno, vždy presne rovnaký','Nie je možný nikdy','Záleží aj na množstve ponechaných zvyškov.')]),
L('c4','crops','Prečo striedať plodiny?','🔄',[
'Osevný postup je plánované striedanie plodín na pozemku v čase.',
'Striedanie môže znižovať tlak niektorých chorôb, škodcov a burín; nie je univerzálnym riešením.',
'Zohľadňujeme príbuznosť plodín, potrebu živín a vody aj organizáciu práce.'
],'Opakovať stále tú istú obilninu môže zvýšiť tlak jej chorôb.','University of Minnesota · Crop rotations','https://extension.umn.edu/agriculture/crop-production/small-grains/small-grain-crop-rotations',[
C('Čo je osevný postup?','Plán striedania plodín v čase','Návod na opravu traktora','Zoznam zvierat','Týka sa následnosti pestovaných plodín.'),
C('Čo môže vhodné striedanie obmedziť?','Tlak niektorých chorôb','Všetky problémy navždy','Každú potrebu vody','Efekt závisí od plodín a konkrétnej choroby.'),
C('Čo treba pri pláne zohľadniť?','Živiny, vodu a príbuznosť plodín','Iba farbu kvetov','Iba počet pracovných topánok','Rôzne plodiny majú odlišné nároky.'),
C('Je striedanie náhrada za všetku ochranu rastlín?','Nie','Áno, úplne','Áno, iba cez víkend','Je súčasťou súboru pestovateľských opatrení.')]),
L('a1','animals','Prežúvavce a trávenie','🐄',[
'Žalúdok dospelého prežúvavca má štyri oddiely: bachor, čepiec, knihu a slez.',
'V bachore mikroorganizmy fermentujú krmivo a umožňujú využívať vlákninu.',
'Slez je žľaznatý oddiel. Tráviace enzýmy a kyselina pôsobia podobne ako v jednoduchom žalúdku.'
],'Krava nevyužíva trávu sama: v bachore jej pomáhajú mikroorganizmy.','University of Minnesota · Ruminant digestive system','https://extension.umn.edu/agriculture/animals-and-livestock/dairy/the-ruminant-digestive-system',[
N('Koľko oddielov má žalúdok dospelého prežúvavca?',4,'oddiely','Bachor, čepiec, kniha a slez tvoria štyri oddiely.'),
C('Kde prebieha významná mikrobiálna fermentácia?','V bachore','V pľúcach','V kopyte','Bachor je prostredím pre fermentujúce mikroorganizmy.'),
C('Ktorý oddiel je žľaznatý?','Slez','Kniha','Čepiec','Slez vylučuje kyselinu a tráviace enzýmy.'),
C('Čo pomáha prežúvavcom využívať vlákninu?','Mikroorganizmy bachora','Iba zuby','Iba srsť','Mikrobiálna činnosť umožňuje spracovať vláknité krmivo.')]),
L('a2','animals','Pastva, seno a siláž','🌾',[
'Objemové krmivá môžu byť čerstvé alebo konzervované. Pastva je čerstvý porast využívaný zvieratami.',
'Seno vzniká sušením; siláž konzerváciou fermentáciou pri obmedzenom prístupe vzduchu.',
'Kvalitu krmiva treba sledovať. Spôsob skladovania ovplyvňuje straty a použiteľnosť.'
],'Zelený porast na pastvine, seno v balíku a siláž sú rôzne formy uchovania krmovín.','University of Maryland · Forage program','https://extension.umd.edu/programs/agriculture-food-systems/program-areas/row-crop-forage-production/forage-program',[
C('Ktoré krmivo vzniká sušením?','Seno','Siláž','Čerstvá pastva','Pri sušení sa znižuje obsah vody.'),
C('Čo je pastva?','Využívanie čerstvého porastu zvieratami','Sušenie zrna','Oprava pluhu','Zvieratá prijímajú krmivo priamo na poraste.'),
C('Siláž sa konzervuje najmä…','Fermentáciou bez prístupu vzduchu','Úplným vysušením na seno','Solením ako mäso','Silážovanie využíva fermentačné procesy.'),
C('Prečo záleží na skladovaní krmiva?','Ovplyvňuje kvalitu a straty','Iba kvôli vzhľadu skladu','Kvalita sa nikdy nemení','Nevhodné skladovanie môže krmivo znehodnotiť.')]),
L('a3','animals','Dobré podmienky pre zvieratá','💚',[
'Welfare znamená životnú pohodu zvieraťa, zahŕňajúcu telesný aj psychický stav.',
'Päť slobôd zahŕňa ochranu pred hladom a smädom, nepohodou, bolesťou a chorobou, strachom a možnosť prirodzeného správania.',
'Potreby posudzujeme podľa druhu. Samotná vysoká produkcia nedokazuje dobrú životnú pohodu.'
],'Napájačka musí byť dostupná a funkčná; prázdna napájačka potrebu vody nerieši.','WOAH · Animal welfare','https://www.woah.org/en/what-we-do/animal-health-and-welfare/animal-welfare/',[
C('Čo znamená welfare?','Životnú pohodu zvieraťa','Iba cenu zvieraťa','Iba množstvo produkcie','Ide o telesný aj psychický stav.'),
N('Koľko slobôd obsahuje známy rámec welfare?',5,'slobôd','Rámec piatich slobôd pomáha pomenovať potreby zvierat.'),
C('Ktorá možnosť patrí k welfare?','Možnosť prirodzeného správania','Trvalý smäd','Zbytočná bolesť','Podmienky majú umožňovať druhovo typické správanie.'),
C('Vysoká produkcia sama osebe…','Nedokazuje dobrú životnú pohodu','Zaručuje všetkých päť slobôd','Nahrádza napájanie','Pohodu treba posúdiť podľa viacerých ukazovateľov.')]),
L('a4','animals','Hygiena a prevencia','🧼',[
'Zoonózy sú infekcie prenosné medzi zvieratami a ľuďmi.',
'Po kontakte so zvieratami si umývame ruky mydlom a tečúcou vodou. Gél nie je na farme plnohodnotnou náhradou umytia.',
'V priestore zvierat nejeme. Čistota pomôcok a vhodné pracovné oblečenie pomáhajú znižovať prenos znečistenia.'
],'Pred desiatou po práci so zvieratami si najprv dôkladne umy ruky.','HSE · Farm hygiene','https://www.hse.gov.uk/agriculture/topics/visitor-attractions.htm',[
C('Čo sú zoonózy?','Infekcie prenosné medzi zvieratami a ľuďmi','Druhy krmív','Odrody obilnín','Niektoré infekcie sa prenášajú zo zvierat na človeka.'),
C('Čo urobíš pred jedlom po kontakte so zvieratami?','Umyjem ruky mydlom a vodou','Iba utriem do nohavíc','Nič','Mydlo a tečúca voda odstraňujú znečistenie.'),
C('Kde je vhodné jesť desiatu?','V oddelenom čistom priestore','Pri znečistených kotercoch','Počas čistenia maštale','Oddelenie jedla od znečisteného priestoru znižuje riziko.'),
C('Je gél náhradou umytia znečistených rúk na farme?','Nie','Vždy áno','Áno, aj bez vody navždy','Pri farmárskom znečistení uprednostníme mydlo a tečúcu vodu.')]),
L('t1','tech','Bezpečné zastavenie','🛑',[
'Pred zásahom do stroja treba bezpečne zastaviť: zabrzdiť, dať ovládanie do neutrálnej polohy, vypnúť pohon a vybrať kľúč.',
'Počkáme na úplné zastavenie dielov. Nebezpečná môže zostať aj uložená energia.',
'Zásah vykonáva iba vyškolená osoba podľa návodu. Žiak pracuje pod dozorom a v rozsahu poverenia.'
],'Upchatý stroj sa neuvoľňuje počas chodu.','HSE · Using machines safely','https://www.hse.gov.uk/agriculture/topics/machinery/safe-use-1.htm',[
O('Zoraď princíp bezpečného zastavenia.',['Zabrzdiť','Ovládanie do neutrálu','Vypnúť pohon','Vybrať kľúč'],'Tento sled pomáha predchádzať nechcenému pohybu a spusteniu.'),
C('Možno uvoľniť upchatý mechanizmus za chodu?','Nie','Áno, rýchlo rukou','Áno, bez rukavíc','Zásah za chodu hrozí vážnym úrazom.'),
C('Po vypnutí treba…','Počkať na zastavenie dielov','Hneď chytiť rotujúci diel','Odobrať kryt počas dobehu','Diely môžu ešte dobiehať.'),
C('Kto vykonáva zásah do stroja?','Vyškolená poverená osoba','Ktokoľvek bez návodu','Žiak bez dozoru','Rozhoduje zaškolenie, poverenie a návod.')]),
L('t2','tech','Vývodový hriadeľ PTO','⚙️',[
'PTO prenáša výkon z traktora na pracovný stroj. Rotujúci hriadeľ môže zachytiť oblečenie.',
'Kryt musí byť vhodný, nepoškodený a správne zaistený proti otáčaniu.',
'Poškodený kryt je dôvod prácu zastaviť a závadu vyriešiť; neprekračujeme rotujúci hriadeľ.'
],'Aj pomaly vyzerajúci rotujúci hriadeľ môže človeka zachytiť v okamihu.','HSE · PTO shafts','https://www.hse.gov.uk/agriculture/topics/machinery/safe-use-3.htm',[
C('Na čo slúži PTO?','Na prenos výkonu na pracovný stroj','Na uskladnenie obilia','Na meranie pH','PTO je vývodový hriadeľ.'),
C('Aké nebezpečenstvo má rotujúci hriadeľ?','Zachytenie oblečenia','Iba zmenu farby','Iba stratu signálu','Zachytenie môže mať vážne následky.'),
C('Čo urobíme pri poškodenom kryte?','Zastavíme prácu a riešime závadu','Pokračujeme opatrne','Kryt odstránime','Ochranný kryt je bezpečnostná súčasť.'),
C('Správny kryt hriadeľa má byť…','Zaistený proti otáčaniu','Odstránený pri práci','Vždy voľne rotujúci','Zaistenie bráni otáčaniu krytu s hriadeľom.')]),
L('t3','tech','Náradie a obrábanie pôdy','🚜',[
'Odhrňovací pluh obracia pôdu. Iné nástroje, napríklad kypriče, ju kypria bez rovnakého obracania.',
'Intenzívnejšie obrábanie môže znižovať pokrytie zvyškami a zvyšovať spotrebu paliva či riziko erózie.',
'Výber spôsobu obrábania závisí od pôdy, plodiny, zvyškov a podmienok poľa.'
],'Viac prejazdov a hlbšia práca nemusia znamenať lepšiu prípravu pôdy.','University of Minnesota · Tillage implements','https://extension.umn.edu/natural-resources/conservation/agricultural-soil-and-water/tillage-implements-purpose-and-ideal-use',[
C('Čo robí odhrňovací pluh?','Obracia pôdu','Dojí kravy','Meria zrážky','Odhrňovacia radlica obracia pôdnu vrstvu.'),
C('Intenzívne obrábanie môže zvýšiť…','Spotrebu paliva a riziko erózie','Vždy pokrytie pôdy','Vždy počet opelovačov','Narušenie pôdy a ďalšie prejazdy majú náklady.'),
C('Podľa čoho volíme spôsob obrábania?','Pôdy, plodiny a podmienok','Iba veľkosti loga','Iba farby náradia','Voľba má zodpovedať agronomickému cieľu.'),
C('Viac obrábania je vždy lepšie.','Nie','Áno','Áno, na každom poli','Príliš intenzívny zásah môže poškodiť štruktúru.')]),
L('t4','tech','Kontrola pred prácou','🔎',[
'Pred použitím kontrolujeme stav stroja, brzdy, pneumatiky, kryty a pripojenie podľa návodu.',
'Bezpečnostné prvky neobchádzame. Poruchu oznámime zodpovednej osobe.',
'Voľné oblečenie a dlhé nezviazané vlasy môžu byť zachytené pohyblivými časťami.'
],'Predštartová kontrola patrí k práci, aj keď sa stroj používal včera.','HSE · Using machines safely','https://www.hse.gov.uk/agriculture/topics/machinery/safe-use-1.htm',[
C('Čo kontrolujeme pred použitím?','Brzdy, kryty a pripojenie','Iba lak','Iba rádio','Kontrola sleduje funkčnosť a bezpečnosť.'),
C('Možno obísť bezpečnostný spínač?','Nie','Áno, kvôli rýchlosti','Áno, keď sa nikto nepozerá','Bezpečnostné prvky sa nesmú vyradiť.'),
C('Aké oblečenie je rizikové pri rotujúcich dieloch?','Voľné a zachytiteľné','Vhodné priliehavé pracovné','Každé vždy rovnako','Voľné časti sa môžu zachytiť.'),
C('Čo urobí žiak pri zistenej závade?','Oznámi ju a stroj nepoužije','Zatají ju','Skúsi ju prekonať rýchlosťou','Závadu má riešiť poverená osoba.')]),
L('f1','farm','Hektáre a úroda','📐',[
'1 hektár (ha) je 10 000 m². 1 tona (t) je 1 000 kg.',
'Úroda na hektár vyjadruje produkciu na jednotku plochy. Celková úroda = plocha × úroda na hektár.',
'Pri výpočte kontroluj jednotky. Nasledujúce úlohy sú modelové príklady, nie predpoveď výnosov.'
],'Pole s 2 ha a úrodou 5 t/ha poskytne v modelovom príklade 10 t.','Vlastné modelové príklady · metrické jednotky','https://www.bipm.org/en/measurement-units',[
N('Koľko m² má 1 hektár?',10000,'m²','Hektár je plocha štvorca 100 × 100 m.'),
N('Koľko kg sú 2 t?',2000,'kg','2 × 1 000 = 2 000 kg.'),
N('Pole má 3 ha a úrodu 4 t/ha. Koľko ton spolu?',12,'t','3 ha × 4 t/ha = 12 t.'),
N('Koľko hektárov je 5 000 m²?',0.5,'ha','5 000 ÷ 10 000 = 0,5 ha.')]),
L('f2','farm','Tržba nie je zisk','🧮',[
'Tržba z predaja = predané množstvo × jednotková cena.',
'Zjednodušený výsledok = tržby − náklady. V úlohách počítame iba uvedené modelové náklady.',
'Pri skutočnom hospodárení treba zohľadniť všetky relevantné náklady; vysoká tržba sama nezaručuje zisk.'
],'Predaj za 300 € pri modelových nákladoch 220 € prináša výsledok 80 €.','OpenStax · Costs and profit (vecné overenie)','https://openstax.org/books/principles-economics-3e/pages/7-1-explicit-and-implicit-costs-and-accounting-and-economic-profit',[
N('Predáš 100 kg po 2 €/kg. Aká je tržba?',200,'€','100 × 2 = 200 €.'),
N('Tržby 500 €, všetky modelové náklady 350 €. Výsledok?',150,'€','500 − 350 = 150 €.'),
C('Tržba a zisk sú…','Odlišné veličiny','Vždy rovnaké','Jednotky plochy','Zisk zohľadňuje náklady.'),
C('Náklady sú vyššie než tržby. Výsledok je…','Strata','Vždy zisk','Vždy nula','Po odpočítaní vyšších nákladov je výsledok záporný.')]),
L('f3','farm','Pôda potrebuje prikrývku','🍂',[
'Pokrytie pôdy rastlinnými zvyškami alebo medziplodinou pomáha chrániť jej povrch.',
'Kryt zmierňuje účinok dažďa a môže obmedziť eróziu. Medziplodina sa pestuje medzi hlavnými plodinami.',
'Výber a ukončenie medziplodiny plánujeme tak, aby nevhodne nekonkurovala hlavnej plodine.'
],'Po zbere nemusí pole zostať holé do ďalšej sejby.','FAO · Soil organic cover','https://www.fao.org/conservation-agriculture/in-practice/soil-organic-cover/en/',[
C('Čo chráni povrch pôdy?','Rastlinný kryt a zvyšky','Trvalé odstránenie všetkých zvyškov','Iba lak na traktore','Pokrytie tlmí vplyv dažďa a chráni povrch.'),
C('Kedy sa pestuje medziplodina?','Medzi hlavnými plodinami','Iba v kvetináči','Iba namiesto každej úrody','Je súčasťou plánovania obdobia medzi hlavnými plodinami.'),
C('Čo môže pôdny kryt obmedziť?','Eróziu','Každú potrebu vody navždy','Každú chorobu','Kryt pomáha chrániť pôdu pred odnosom.'),
C('Prečo plánujeme ukončenie medziplodiny?','Aby nekonkurovala hlavnej plodine','Aby sa pôda vždy úplne odkryla','Kvôli farbe stroja','Treba zosúladiť medziplodinu s ďalším pestovaním.')]),
L('f4','farm','Farma je ekosystém','🦋',[
'Ekosystém zahŕňa organizmy aj neživé prostredie a ich vzájomné vzťahy.',
'Rastliny sú producenti, živočíchy konzumenti. Rozkladače pomáhajú vracať živiny do kolobehu.',
'Potravové siete spájajú viac potravových reťazcov. Voda, svetlo a teplota sú neživé faktory.'
],'Zvyšok rastliny môže byť potravou rozkladačov a zdrojom živín pre ďalší rast.','OpenStax · Ecology of ecosystems (vecné overenie)','https://openstax.org/books/biology-2e/pages/46-1-ecology-of-ecosystems',[
C('Čo zahŕňa ekosystém?','Organizmy aj neživé prostredie','Iba zvieratá','Iba pôdu bez života','Podstatné sú aj vzájomné vzťahy.'),
C('Kto je producent v bežnom potravovom reťazci?','Zelená rastlina','Krava','Líška','Zelené rastliny tvoria organické látky fotosyntézou.'),
C('Čo robia rozkladače?','Rozkladajú zvyšky a vracajú živiny','Vyrábajú traktory','Zastavujú kolobeh látok','Rozklad sprístupňuje látky pre ďalšie využitie.'),
C('Ktorý faktor je neživý?','Teplota','Dážďovka','Pšenica','Teplota je abiotický faktor prostredia.')])
];

'use strict';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const today=()=>{try{const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Bratislava',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const value=k=>parts.find(p=>p.type===k).value;return `${value('year')}-${value('month')}-${value('day')}`}catch{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}};
const shift=(day,n)=>{const d=new Date(day+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10)};
const blank=()=>({version:1,name:'',goal:1,xp:0,completed:{},mistakes:[],activity:{},notes:{},review:{}});
function validateState(raw){
 if(!raw||raw.version!==1||typeof raw!=='object')throw new Error('Neznámy formát zálohy.');
 const s=blank();s.name=typeof raw.name==='string'?raw.name.slice(0,24):'';s.goal=[1,2,3].includes(raw.goal)?raw.goal:1;s.xp=Number.isInteger(raw.xp)&&raw.xp>=0&&raw.xp<=10000000?raw.xp:0;
 const validId=id=>lessons.some(l=>l.id===id);const validQ=k=>typeof k==='string'&&lessons.some(l=>l.questions.some((_,i)=>`${l.id}:${i}`===k));
 for(const [id,v]of Object.entries(raw.completed||{}))if(validId(id)&&v&&Number.isInteger(v.best)&&v.best>=0&&v.best<=100&&/^\d{4}-\d{2}-\d{2}$/.test(v.date))s.completed[id]={best:v.best,date:v.date};
 s.mistakes=Array.isArray(raw.mistakes)?[...new Set(raw.mistakes.filter(validQ))]:[];
 for(const [day,ids] of Object.entries(raw.activity||{}))if(/^\d{4}-\d{2}-\d{2}$/.test(day)&&Array.isArray(ids))s.activity[day]=[...new Set(ids.filter(id=>validId(id)||['@review','@challenge'].includes(id)))];
 for(const [id,n]of Object.entries(raw.notes||{}))if(validId(id)&&typeof n==='string')s.notes[id]=n.slice(0,3000);
 for(const [id,r]of Object.entries(raw.review||{}))if(validId(id)&&r&&/^\d{4}-\d{2}-\d{2}$/.test(r.due)&&/^\d{4}-\d{2}-\d{2}$/.test(r.last)&&Number.isInteger(r.step)&&r.step>=0&&r.step<=3)s.review[id]={due:r.due,last:r.last,step:r.step};
 return s;
}
let state;let storageOK=true;
try{const saved=localStorage.getItem('agrokrok-v1');state=saved?validateState(JSON.parse(saved)):blank()}catch{state=blank();storageOK=false}
let view='learn',selectedModule='soil',libraryFilter='all',session=null;
function toast(t){$('toast').textContent=t;$('toast').style.display='block';setTimeout(()=>$('toast').style.display='none',3500)}
function save(){try{localStorage.setItem('agrokrok-v1',JSON.stringify(state))}catch{storageOK=false;toast('Prehliadač neuložil pokrok. Exportuj zálohu v Môj pokrok.')}updateHeader()}
function streak(){let d=today();if(!state.activity[d]?.length)d=shift(d,-1);let n=0;while(state.activity[d]?.length){n++;d=shift(d,-1)}return n}
function dueLessons(){return lessons.filter(l=>state.completed[l.id]&&state.review[l.id]?.due<=today())}
function reviewKeys(){return [...new Set([...state.mistakes,...dueLessons().flatMap(l=>l.questions.map((_,i)=>`${l.id}:${i}`))])]}
function updateHeader(){$('xp').textContent=state.xp;$('streak').textContent=streak();$('profile').textContent=(state.name||'Farmár')[0].toUpperCase();$('review-count').textContent=reviewKeys().length||''}
const art=`<svg class="farm-art" viewBox="0 0 300 230" aria-hidden="true"><circle cx="222" cy="53" r="32" fill="#e9bf6d"/><path d="M15 174Q112 66 303 120V230H0Z" fill="#51744b"/><path d="M0 180Q168 100 300 178V230H0Z" fill="#749054"/><path d="M0 200Q130 154 300 213V230H0Z" fill="#94ab64"/><path d="M98 161V101L133 75L171 102V163Z" fill="#f0dbb7"/><path d="M89 105L133 70L180 105H168L133 80L101 105Z" fill="#b97653"/><path d="M126 163V127H148V163" fill="#294e3c"/><path d="M102 113H117V128H102ZM153 113H164V128H153Z" fill="#899e83"/><path d="M205 153V100" stroke="#dac09c" stroke-width="8"/><circle cx="206" cy="104" r="27" fill="#244d3a"/><circle cx="188" cy="111" r="20" fill="#365f42"/><circle cx="222" cy="114" r="19" fill="#3d6947"/><g stroke="#b8c786" stroke-width="3" fill="none"><path d="M26 221V182M25 199l-10-9M26 192l10-10M48 225V183M47 200l-10-9M48 194l10-10M72 229V191M71 208l-10-9M72 201l10-10"/></g><path d="M230 218Q215 187 222 177Q236 188 242 221" fill="#becb8b"/><path d="M249 225Q251 192 269 181Q274 205 263 229" fill="#b2c079"/></svg>`;
function welcome(title,desc){return `<div class="welcome"><div><div class="eyebrow">AGROPODNIKANIE — FARMÁRSTVO</div><h1>${title}</h1><p>${desc}</p></div><div class="date-chip">${new Intl.DateTimeFormat('sk-SK',{day:'numeric',month:'long'}).format(new Date())}</div></div>`}
function moduleProgress(m){return lessons.filter(l=>l.module===m&&state.completed[l.id]).length}
function nextLesson(){return lessons.find(l=>!state.completed[l.id])||lessons[0]}
function stars(l){const b=state.completed[l.id]?.best||0;return b===100?'★★★':b>=75?'★★☆':''}
function render(){updateHeader();document.querySelectorAll('[data-view]').forEach(n=>{n.classList.toggle('active',n.dataset.view===view);n.setAttribute('aria-current',n.dataset.view===view?'page':'false')});
 if(view==='learn')renderLearn();else if(view==='review')renderReview();else if(view==='library')renderLibrary();else if(view==='progress')renderProgress();else renderSources();
 bindMain();
}
function renderLearn(){const n=nextLesson(),m=modules.find(m=>m.id===selectedModule),count=(state.activity[today()]||[]).length;const finished=Object.keys(state.completed).length===lessons.length;
 $('main').innerHTML=welcome(`Ahoj, ${esc(state.name||'mladý farmár')} <span style="font-size:25px">👋</span>`,'Každá veľká úroda sa začína malým krokom.')+`<div class="dashboard"><div><section class="hero"><div class="hero-content"><div class="eyebrow">${finished?'TVOJE VEDOMOSTI RASTÚ':'DNES JE DOBRÝ DEŇ ZAČAŤ'}</div><h2>${finished?'Vypestuj si pevné vedomosti.':'Vedomosti, ktoré<br>zapustia korene.'}</h2><p>Krátke lekcie. Praktické príklady.<br>Tvoje farmárske dobrodružstvo.</p><button class="primary" data-start="${n.id}">${state.completed[n.id]?'Precvičiť si učivo':'Pokračovať v učení'} <span>→</span></button></div>${art}</section><div class="rowheading"><h2>Čo dnes vypestujeme?</h2><span>6 oblastí · 24 lekcií</span></div><div class="module-grid">${modules.map(mod=>`<button class="module-card ${mod.id===selectedModule?'selected':''}" data-module="${mod.id}" aria-pressed="${mod.id===selectedModule}"><span class="arrow">↗</span><div class="module-icon">${mod.icon}</div><h3>${mod.name}</h3><p>${mod.desc}</p><div class="module-meta"><span>${mod.tag}</span><span>${moduleProgress(mod.id)} / 4 lekcie</span></div><div class="progressbar"><i style="width:${moduleProgress(mod.id)*25}%;background:${mod.color}"></i></div></button>`).join('')}</div><section class="path-card" id="path"><div class="path-head"><div class="module-icon" style="margin:0">${m.icon}</div><div><div class="eyebrow">TVOJA CESTA · ${m.tag}</div><h3 style="margin:4px 0">${m.name}</h3><p>Prejdi lekcie po poradí alebo si vyber vlastnú.</p></div></div>${lessons.filter(l=>l.module===selectedModule).map((l,i)=>`<div class="lesson-row"><div class="node ${state.completed[l.id]?'done':''}">${state.completed[l.id]?'✓':l.icon}</div><div class="lessoninfo"><h4>${i+1}. ${l.title}</h4><p>4 úlohy · približne 5 minút ${state.completed[l.id]?`<span class="stars">${stars(l)}</span>`:''}</p></div><button class="outline" data-start="${l.id}">${state.completed[l.id]?'Zopakovať':'Začať'} →</button></div>`).join('')}</section><p class="notice">Pracovný odborný základ pre prvákov. Poradie tém upravíme podľa osnov tvojej školy. Všetky lekcie si môžeš otvoriť.</p></div><aside class="rightcol"><section class="card"><h3>Tvoj denný cieľ <span style="float:right">🎯</span></h3><div class="goalring" style="--percent:${Math.min(100,count/state.goal*100)}%"><div>${count}/${state.goal}<small>LEKCIE</small></div></div><div class="goal-description">${count>=state.goal?'Hotovo! Dnes si spravil svoj krok.':'Stačí pár minút. Zvládneš to.'}</div><button class="text-button full" id="change-goal">Upraviť cieľ</button></section><section class="card reviewmini"><div class="module-icon">↻</div><h3>Nech vedomosti zostanú.</h3><p>${reviewKeys().length?`${reviewKeys().length} úloh čaká na zopakovanie. Vráť sa k nim a upevni si učivo.`:'Zopakuj si základy. Chyby sú prirodzená súčasť učenia.'}</p><button class="outline full" id="review-launch">${reviewKeys().length?'Zopakovať učivo':'Denná výzva'} →</button></section><section class="card badge-card"><h3>Najbližší míľnik</h3><div class="badge-preview"><div class="medal">${Object.keys(state.completed).length?'🌿':'🌱'}</div><div><b>${Object.keys(state.completed).length?'Pevné korene':'Prvý výhonok'}</b><p>${Object.keys(state.completed).length?'Dokonči 4 lekcie jednej oblasti.':'Dokonči svoju prvú lekciu.'}</p></div></div></section><div class="tip">✦ <b>Vedeli ste?</b><br>Krátke opakovanie v rôznych dňoch pomáha upevňovať učivo.</div></aside></div>`;
}
function renderReview(){const keys=reviewKeys();$('main').innerHTML=welcome('Vráť sa. Zapamätaj si. ↻','Chyby nie sú koniec cesty. Ukazujú, čo si ešte precvičiť.')+`<div class="statsgrid"><div class="stat"><b>${state.mistakes.length}</b><span>Úlohy z chybných odpovedí</span></div><div class="stat"><b>${dueLessons().length}</b><span>Lekcie na opakovanie</span></div><div class="stat"><b>${keys.length}</b><span>Úlohy spolu</span></div></div><section class="card"><h2>${keys.length?'Tvoje opakovanie je pripravené.':'Momentálne nemáš čakajúce opakovanie.'}</h2><p class="muted">${keys.length?'Začneme najviac 8 úlohami. Správne vyriešené chyby zmiznú zo zoznamu.':'Môžeš si vyskúšať dennú výzvu z náhodne vybraných tém.'}</p><button class="primary" id="review-launch">${keys.length?'Spustiť opakovanie':'Spustiť dennú výzvu'} →</button></section><h2>Čo sa zopakuje?</h2><div class="list">${[...new Set(keys.map(k=>k.split(':')[0]))].map(id=>{const l=lessons.find(l=>l.id===id);return `<div class="card"><span class="pill">${state.mistakes.some(k=>k.startsWith(id+':'))?'Precvičiť chyby':'Čas zopakovať'}</span><h3>${l.icon} ${l.title}</h3><button class="text-button" data-start="${l.id}">Otvoriť celú lekciu →</button></div>`}).join('')||'<div class="empty">🌿 Vedomosti majú čas rásť.<br>Po úspešnej lekcii sa opakovanie naplánuje o 1, 3, 7 a potom 14 dní.</div>'}</div>`}
function normalize(t){return t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
function renderLibrary(){const old=$('search')?.value||'';$('main').innerHTML=welcome('Tvoje malé učebnice. ▤','Stručné vysvetlenia, praktické príklady a vlastné poznámky.')+`<input class="search" id="search" type="search" placeholder="Hľadaj pojem, napríklad humus, pH alebo bachor…" aria-label="Hľadať v učive" value="${esc(old)}"><div class="filter-row"><button data-filter="all" class="${libraryFilter==='all'?'selected':''}">Všetky témy</button>${modules.map(m=>`<button data-filter="${m.id}" class="${libraryFilter===m.id?'selected':''}">${m.icon} ${m.tag}</button>`).join('')}</div><div class="list" id="notes-list"></div>`;renderNotes(old)}
function renderNotes(search=''){const found=lessons.filter(l=>(libraryFilter==='all'||l.module===libraryFilter)&&normalize([l.title,...l.points,l.example].join(' ')).includes(normalize(search)));
 $('notes-list').innerHTML=found.map(l=>`<article class="card note-card"><span class="pill">${modules.find(m=>m.id===l.module).tag}</span><h3>${l.icon} ${l.title}</h3><ul class="note-points">${l.points.map(p=>`<li>${p}</li>`).join('')}</ul><div class="example">💡 ${l.example}</div><a class="source" target="_blank" rel="noopener" href="${l.url}">Odborný podklad: ${l.source} ↗</a><details><summary>Moja poznámka</summary><textarea class="search" style="margin:12px 0 0;min-height:90px" data-note="${l.id}" maxlength="3000" aria-label="Vlastná poznámka k ${l.title}" placeholder="Čo nám k tejto téme povedal učiteľ?">${esc(state.notes[l.id]||'')}</textarea><small class="muted">Ukladá sa automaticky v tomto prehliadači.</small></details><button class="text-button" data-start="${l.id}" style="margin-top:14px">Precvičiť lekciu →</button></article>`).join('')||'<div class="empty">Nenašli sme tento pojem. Skús kratšie slovo alebo inú oblasť.</div>';
 $('notes-list').querySelectorAll('[data-start]').forEach(b=>b.onclick=()=>startLesson(b.dataset.start));$('notes-list').querySelectorAll('[data-note]').forEach(n=>n.oninput=()=>{state.notes[n.dataset.note]=n.value;save()})}
function badges(){const n=Object.keys(state.completed).length;return [{icon:'🌱',name:'Prvý výhonok',desc:'Dokonči 1 lekciu.',earned:n>=1},{icon:'🌿',name:'Pevné korene',desc:'Dokonči 4 lekcie jednej oblasti.',earned:modules.some(m=>moduleProgress(m.id)===4)},{icon:'🔥',name:'Pravidelný pestovateľ',desc:'Uč sa 3 dni za sebou.',earned:streak()>=3},{icon:'⭐',name:'Bez chybičky',desc:'Získaj 100 % v jednej lekcii.',earned:Object.values(state.completed).some(c=>c.best===100)},{icon:'🌻',name:'Polovica cesty',desc:'Dokonči 12 lekcií.',earned:n>=12},{icon:'🏆',name:'Základy v malíčku',desc:'Dokonči všetkých 24 lekcií.',earned:n===24}]}
function renderProgress(){const completed=Object.keys(state.completed).length;$('main').innerHTML=welcome('Pozri, ako rastieš. ◈','Každá dokončená lekcia je ďalší krok k samostatnosti.')+`<div class="statsgrid"><div class="stat"><b>${completed}/24</b><span>Dokončené lekcie</span></div><div class="stat"><b>${state.xp}</b><span>Skúsenostné body</span></div><div class="stat"><b>${streak()}</b><span>Denná séria</span></div></div><section class="card"><h3>Tvojich posledných 7 dní</h3><div class="days">${Array.from({length:7},(_,i)=>shift(today(),i-6)).map(d=>`<div class="day ${state.activity[d]?.length?'active':''}">${new Intl.DateTimeFormat('sk-SK',{weekday:'short'}).format(new Date(d+'T12:00:00Z'))}<i>${state.activity[d]?.length?'✓':'·'}</i></div>`).join('')}</div></section><h2>Tvoje odznaky</h2><div class="achievements">${badges().map(b=>`<div class="achievement ${b.earned?'':'locked'}"><div class="emoji">${b.icon}</div><h3>${b.name}</h3><p>${b.desc}</p><span class="pill">${b.earned?'Získaný':'Ešte rastie'}</span></div>`).join('')}</div><section class="card" style="margin-top:24px"><h3>Uchovaj si svoj pokrok</h3><p class="muted">Pokrok patrí tejto aplikácii v tvojom zariadení. Nesynchronizuje sa s webovou verziou. Exportuj zálohu a prenes ju na iné zariadenie. Import nahradí aktuálny pokrok.</p><div class="data-actions"><button class="outline" id="export">↓ Exportovať zálohu</button><button class="outline" id="import">↑ Importovať zálohu</button><button class="outline" id="clear-data">Vymazať moje údaje</button><button class="text-button" id="edit-profile">Upraviť profil</button><input hidden type="file" id="import-file" accept="application/json,.json"></div>${!storageOK?'<p style="color:#a64d32">Ukladanie v prehliadači nie je dostupné. Pred zatvorením si exportuj zálohu.</p>':''}<p class="muted">Prvá úspešná lekcia: 30 XP. Ďalšie precvičenie: 10 XP, najviac raz denne za danú lekciu alebo režim. Za úspešnú lekciu sa počíta aspoň 75 % správnych prvých odpovedí. Chyby vždy môžeš opraviť.</p></section>`}
function renderSources(){const sources=[...new Map(lessons.map(l=>[l.url,l])).values()];$('main').innerHTML=welcome('Dobré vedomosti majú pôvod. ☷','Odborné podklady, rozsah kurzu a pravidlá učenia.')+`<section class="card"><span class="pill">4210 M 04 · AGROPODNIKANIE — FARMÁRSTVO</span><h2>Pre mladých farmárov z Levíc aj odinakiaľ.</h2><p class="muted">Východiskom je odbor na SOŠ poľnohospodárstva a služieb na vidieku, Na lúkach 18, Levice. Škola na svojom webe uvádza odbor 4210 M 04. AgroKrok je nezávislá pomôcka, nevydaná ani neschválená školou.</p><p class="muted">Táto verzia obsahuje 24 úvodných odborných lekcií a 96 úloh. Nie je úplnou učebnicou celého prvého ročníka. Presné poradie a rozsah treba porovnať s aktuálnym školským vzdelávacím programom a učivom učiteľov; podrobný plán prvého ročníka školy sa pri rešerši nepodarilo overiť. Všeobecnovzdelávacie predmety zatiaľ nie sú zahrnuté.</p><p class="muted">Vysvetlenia a úlohy sú vlastné stručné spracovanie základných faktov, nie prepis učebníc. Odkazy slúžia na vecné overenie a ďalšie čítanie; zdroje neznamenajú schválenie aplikácie ich autormi. Zahraničné podklady používame pre všeobecné princípy, nie ako slovenské právne predpisy či miestne pestovateľské dávky.</p><a class="source" href="https://sposlv.edupage.org/a/studijne-a-ucebne-odbory" target="_blank" rel="noopener">Škola v Leviciach · študijné odbory ↗</a><br><a class="source" href="https://siov.sk/skupina-4245-polnohospodarstvo-lesne-hospodarstvo-a-rozvoj-vidieka-iii/" target="_blank" rel="noopener">ŠIOV · skupiny odborov 42 a 45 ↗</a></section><section class="card"><h3>Ako učenie funguje?</h3><p class="muted">Krátke vysvetlenie → 4 úlohy → vysvetlenie odpovedí → oprava chýb. Pri aspoň 75 % správnych prvých odpovedí je lekcia dokončená. Opakovanie sa plánuje v odstupoch 1, 3, 7 a 14 dní. Dennú sériu počítame podľa času na Slovensku. Zmeškaný deň sériu preruší.</p><p class="muted">Pri technike a chove ide o učebné princípy. Praktický výcvik musí viesť učiteľ alebo poverený odborník podľa konkrétneho pracoviska a návodu.</p></section><p><a href="privacy.html">Ochrana súkromia</a></p><h2>Podklady jednotlivých lekcií</h2><p class="muted">Rešerš: 13. október 2026 · časť podkladov je v angličtine.</p><div class="source-list">${sources.map(l=>`<a target="_blank" rel="noopener" href="${l.url}">${l.source} ↗<small>${lessons.filter(x=>x.url===l.url).map(x=>x.title).join(' · ')}</small></a>`).join('')}</div>`}
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function qByKey(key){const [id,i]=key.split(':');const l=lessons.find(l=>l.id===id);return {...l.questions[Number(i)],key,lesson:l}}
function startLesson(id){const l=lessons.find(l=>l.id===id);if(!l)return;session={mode:'lesson',lesson:l,queue:l.questions.map((_,i)=>qByKey(`${id}:${i}`)),index:0,firstCorrect:0,firstAnswered:new Set(),ordered:[],selection:null,checked:false,errors:0};showPrimer();$('lesson-dialog').showModal()}
function startReview(){const keys=reviewKeys(),chosen=keys.length?keys.slice(0,8):shuffle(lessons.flatMap(l=>l.questions.map((_,i)=>`${l.id}:${i}`))).slice(0,8);session={mode:keys.length?'review':'challenge',queue:chosen.map(qByKey),initialCount:chosen.length,index:0,firstCorrect:0,firstAnswered:new Set(),ordered:[],selection:null,checked:false,errors:0,reviewed:new Set()};showQuestion();$('lesson-dialog').showModal()}
function top(progress){return `<div class="lesson-top"><button class="close" id="exit-lesson" aria-label="Zavrieť lekciu">×</button><div class="progressbar"><i style="width:${progress}%"></i></div><small style="font-size:11px;color:#8b957f">${session.mode==='lesson'?'LEKCIA':'TRÉNING'}</small></div>`}
function closeBind(){$('exit-lesson').onclick=()=>{$('lesson-dialog').close();session=null;render()}}
function showPrimer(){const l=session.lesson;$('lesson-body').innerHTML=top(0)+`<div class="lesson-inner"><div class="lesson-big-icon">${l.icon}</div><div class="eyebrow">NAJPRV POCHOP, POTOM SI VYSKÚŠAJ</div><h2 id="lesson-title">${l.title}</h2><ul class="lesson-facts">${l.points.map(p=>`<li>${p}</li>`).join('')}</ul><div class="example">💡 ${l.example}</div><a class="source" href="${l.url}" target="_blank" rel="noopener">Podklad: ${l.source} ↗</a></div><div class="lesson-bottom"><small>4 úlohy · žiadne časové obmedzenie</small><button class="primary" id="begin">Rozumiem, poďme →</button></div>`;closeBind();$('begin').onclick=showQuestion}
function showQuestion(){if(session.index>=session.queue.length)return finishSession();session.selection=null;session.ordered=[];session.checked=false;const q=session.queue[session.index];session.current=q;session.options=q.type==='choice'?shuffle(q.options):q.type==='order'?shuffle(q.answer):[];const initial=session.mode==='lesson'?4:session.initialCount;let content='';
 if(q.type==='choice')content=`<div class="options">${session.options.map((o,i)=>`<button class="option" data-option="${i}"><span>${i+1}</span>${esc(o)}</button>`).join('')}</div>`;
 if(q.type==='number')content=`<label class="numeric"><input id="number-answer" type="text" inputmode="decimal" placeholder="Tvoja odpoveď" autocomplete="off" aria-label="Číselná odpoveď"><span>${q.unit}</span></label>`;
 if(q.type==='order')content=`<p class="muted">Klikaj na pojmy v správnom poradí. Kliknutím hore ich vrátiš späť.</p><div class="order-answer" id="order-answer"></div><div class="order-pool" id="order-pool"></div>`;
 $('lesson-body').innerHTML=top(session.firstAnswered.size/initial*100)+`<div class="lesson-inner"><div class="eyebrow">${session.index<initial?`ÚLOHA ${session.index+1} Z ${initial}`:'OPRAVA · UPEVNI SI VEDOMOSTI'} · ${q.type==='number'?'VYPOČÍTAJ':q.type==='order'?'ZORAĎ':'VYBER ODPOVEĎ'}</div><h2 id="lesson-title">${q.prompt}</h2>${content}<div id="feedback" aria-live="polite"></div></div><div class="lesson-bottom"><small>${esc(q.lesson.title)}</small><button class="primary" id="check" disabled>Skontrolovať</button></div>`;closeBind();
 document.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>{if(session.checked)return;session.selection=session.options[Number(b.dataset.option)];document.querySelectorAll('[data-option]').forEach(x=>{x.classList.toggle('selected',x===b);x.setAttribute('aria-pressed',x===b?'true':'false')});$('check').disabled=false});
 if(q.type==='number'){$('number-answer').oninput=()=>{$('check').disabled=!$('number-answer').value.trim()};$('number-answer').onkeydown=e=>{if(e.key==='Enter'&&!$('check').disabled)$('check').click()}}
 if(q.type==='order')renderOrder();$('check').onclick=checkAnswer;
}
function renderOrder(){const q=session.current;$('order-answer').innerHTML=session.ordered.map((t,i)=>`<button class="tile" data-remove="${i}">${esc(t)}</button>`).join('');$('order-pool').innerHTML=session.options.filter(t=>!session.ordered.includes(t)).map(t=>`<button class="tile" data-add="${esc(t)}">${esc(t)}</button>`).join('');document.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>{if(session.checked)return;session.ordered.push(b.dataset.add);renderOrder()});document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{if(session.checked)return;session.ordered.splice(Number(b.dataset.remove),1);renderOrder()});$('check').disabled=session.ordered.length!==q.answer.length}
function getAnswer(){const q=session.current;if(q.type==='choice')return session.selection;if(q.type==='order')return session.ordered;const raw=$('number-answer').value.trim().replace(/\s/g,'').replace(',','.');return /^-?(?:\d+(?:\.\d*)?|\.\d+)$/.test(raw)?Number(raw):NaN}
function isCorrect(q,a){return q.type==='order'?JSON.stringify(a)===JSON.stringify(q.answer):q.type==='number'?Number.isFinite(a)&&Math.abs(a-q.answer)<0.00001:a===q.answer}
function recordAnswer(q,ok){const first=!session.firstAnswered.has(q.key);if(first){session.firstAnswered.add(q.key);if(ok)session.firstCorrect++}if(ok){if(first)state.mistakes=state.mistakes.filter(k=>k!==q.key);if(session.reviewed)session.reviewed.add(q.key)}else{session.errors++;if(!state.mistakes.includes(q.key))state.mistakes.push(q.key);session.queue.push(q)}save()}
function checkAnswer(){if(!session||session.checked)return;session.checked=true;const q=session.current,ok=isCorrect(q,getAnswer());recordAnswer(q,ok);document.querySelectorAll('[data-option]').forEach(b=>{b.disabled=true;const value=session.options[Number(b.dataset.option)];if(value===q.answer)b.classList.add('correct');else if(value===session.selection)b.classList.add('incorrect')});if(q.type==='number')$('number-answer').disabled=true;document.querySelectorAll('.tile').forEach(b=>b.disabled=true);
 const answer=Array.isArray(q.answer)?q.answer.join(' → '):q.answer;$('feedback').innerHTML=`<div class="feedback ${ok?'good':'bad'}"><b>${ok?'✓ Správne. Dobrý krok!':'Ešte jeden krok k pochopeniu.'}</b>${!ok?`Správna odpoveď: <strong>${esc(answer)}</strong>.<br>`:''}${q.why}${!ok?'<br>Táto úloha sa na konci vráti.':''}<br><a class="source" href="${q.lesson.url}" target="_blank" rel="noopener">Overiť v podklade ↗</a></div>`;$('check').disabled=false;$('check').textContent='Pokračovať →';$('check').onclick=()=>{session.index++;showQuestion()}}
function scheduleReview(id){const old=state.review[id];if(old?.last===today())return;const step=old?Math.min(3,old.step+1):0;state.review[id]={step,last:today(),due:shift(today(),[1,3,7,14][step])}}
function finishSession(){const initial=session.mode==='lesson'?4:session.initialCount;const score=Math.round(session.firstCorrect/initial*100),passed=score>=75;const activityId=session.mode==='lesson'?session.lesson.id:'@'+session.mode;state.activity[today()]??=[];const alreadyToday=state.activity[today()].includes(activityId);let reward=0;
 if(session.mode==='lesson'&&passed){const id=session.lesson.id,old=state.completed[id];reward=old?(alreadyToday?0:10):30;state.completed[id]={best:Math.max(old?.best||0,score),date:old?.date||today()};scheduleReview(id)}else reward=alreadyToday?0:10;
 if(session.mode==='review'){for(const l of dueLessons())if(l.questions.every((_,i)=>session.reviewed.has(`${l.id}:${i}`)))scheduleReview(l.id)}
 if(!alreadyToday)state.activity[today()].push(activityId);state.xp+=reward;save();
 $('lesson-body').innerHTML=`<div class="result"><div class="result-icon">${passed?'🌻':'🌱'}</div><div class="eyebrow">${session.mode==='lesson'&&passed?'LEKCIA DOKONČENÁ':'TRÉNING DOKONČENÝ'}</div><h2 id="lesson-title">${passed?'Tvoje vedomosti rastú!':'Každá oprava ťa posúva.'}</h2><p class="muted">${session.mode==='lesson'&&!passed?'Na dokončenie lekcie potrebuješ aspoň 75 % správnych prvých odpovedí. Teraz už poznáš vysvetlenia — vyskúšaj ju znova.':session.mode==='lesson'?'Výborne. Učivo sa ti neskôr vráti na zopakovanie.':'Odpovede si precvičil a chyby opravil. Pokračuj vlastným tempom.'}</p><div class="resultstats"><div><b>+${reward}</b><small>XP BODOV</small></div><div><b>${score} %</b><small>PRVÉ ODPOVEDE</small></div><div><b>${session.errors}</b><small>OPRÁV</small></div></div><button class="primary" id="finish">Späť na svoju farmu →</button>${session.mode==='lesson'&&!passed?'<p><button class="text-button" id="retry">Vyskúšať lekciu znova</button></p>':''}</div>`;$('finish').onclick=()=>{$('lesson-dialog').close();session=null;render()};if($('retry'))$('retry').onclick=()=>{const id=session.lesson.id;$('lesson-dialog').close();startLesson(id)}}
function profile(){$('name').value=state.name;$('goal').value=state.goal;$('profile-dialog').showModal()}
function download(){if(window.AndroidBackup){window.AndroidBackup.exportBackup(JSON.stringify(state,null,2));return;}const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='agrokrok-pokrok-'+today()+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Záloha bola pripravená na stiahnutie.')}
async function importFile(file){if(!file)return;if(file.size>2000000){toast('Záloha je príliš veľká.');return}try{const incoming=validateState(JSON.parse(await file.text()));if(!confirm('Import nahradí aktuálny pokrok. Chceš pokračovať?'))return;state=incoming;save();render();toast('Pokrok bol obnovený.')}catch{toast('Záloha nie je platná. Aktuálny pokrok zostal zachovaný.')}}
window.agroKrokImportNative=async(raw)=>{await importFile({size:new TextEncoder().encode(raw).length,text:async()=>raw})};
function bindMain(){if($('clear-data'))$('clear-data').onclick=()=>{if(confirm('Vymazať všetok pokrok a poznámky v tomto zariadení?')){state=blank();save();render()}};document.querySelectorAll('[data-start]').forEach(b=>b.onclick=()=>startLesson(b.dataset.start));document.querySelectorAll('[data-module]').forEach(b=>b.onclick=()=>{selectedModule=b.dataset.module;render();$('path').scrollIntoView({behavior:'smooth',block:'start'})});if($('review-launch'))$('review-launch').onclick=startReview;if($('change-goal'))$('change-goal').onclick=profile;if($('edit-profile'))$('edit-profile').onclick=profile;if($('search'))$('search').oninput=e=>renderNotes(e.target.value);document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{libraryFilter=b.dataset.filter;renderLibrary();bindMain()});if($('export'))$('export').onclick=download;if($('import'))$('import').onclick=()=>window.AndroidBackup?window.AndroidBackup.importBackup():$('import-file').click();if($('import-file'))$('import-file').onchange=e=>importFile(e.target.files[0])}
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{view=b.dataset.view;location.hash=view;render();window.scrollTo({top:0,behavior:'smooth'})});$('profile').onclick=profile;$('profile-close').onclick=()=>$('profile-dialog').close();$('profile-form').onsubmit=e=>{e.preventDefault();state.name=$('name').value.trim().slice(0,24);state.goal=Number($('goal').value);save();$('profile-dialog').close();render()};$('lesson-dialog').addEventListener('cancel',()=>{session=null;render()});
function hashView(){const v=location.hash.slice(1);if(['learn','review','library','progress','sources'].includes(v))view=v;render()}window.addEventListener('hashchange',hashView);hashView();

})();