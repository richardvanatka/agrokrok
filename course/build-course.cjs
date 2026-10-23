const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');const legacy=JSON.parse(fs.readFileSync(path.join(__dirname,'legacy.json')));
const subjects=[
['soil','Pôda a počasie','🌱','Pestovanie rastlín','https://www.fao.org/4/r4082e/r4082e03.htm','FAO: pôda a voda'],
['botany','Biológia','🌿','Biológia','https://openstax.org/books/biology-2e/pages/1-introduction','Biológia: všeobecné princípy'],
['crops','Pestovanie rastlín','🌾','Pestovanie rastlín','https://extension.umn.edu/crop-production','Univerzitné podklady: pestovanie'],
['animals','Chov zvierat','🐄','Chov hospodárskych zvierat','https://openstax.org/books/biology-2e/pages/34-introduction','Biológia živočíchov; podklady pri úvodných lekciách'],
['tech','Mechanizácia','🚜','Mechanizácia','https://www.ip.gov.sk/bezpecnost-a-ochrana-zdravia-pri-praci/','Národný inšpektorát práce: BOZP'],
['farm','Ekonomika farmy','🌻','Ekonomika','https://openstax.org/books/principles-economics-3e/pages/1-introduction','Ekonomické princípy'],
['chem','Chémia','🧪','Chémia','https://openstax.org/books/chemistry-2e/pages/1-introduction','Chémia: základné princípy'],
['math','Matematika','📐','Matematika','https://openstax.org/books/elementary-algebra-2e/pages/1-introduction','Algebra a výpočty'],
['ict','Informatika','💻','Informatika','https://www.sk-cert.sk/sk/rady-a-navody/index.html','SK-CERT: digitálna bezpečnosť'],
['slovak','Slovenčina a literatúra','📖','Slovenský jazyk a literatúra','https://slovnik.juls.savba.sk/','Jazykovedný ústav Ľ. Štúra SAV; vzdelávacie štandardy ŠIOV'],
['english','Anglický jazyk','🇬🇧','Cudzí jazyk: angličtina','https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar','British Council: A1–A2 gramatika'],
['german','Nemecký jazyk – doplnok','🇩🇪','Cudzí jazyk: nemčina','https://learngerman.dw.com/en/learn-german/s-9528','Deutsche Welle: učenie nemčiny'],
['russian','Ruský jazyk – doplnok','🗣️','Cudzí jazyk: ruština','https://archiv.siov.sk/statne-vzdelavacie-programy/','ŠIOV: jazykové vzdelávanie'],
['history','Dejepis','🏛️','Dejepis','https://www.statpedu.sk/sk/svp/statny-vzdelavaci-program/svp-stredne-odborne-skoly/','Vzdelávacie štandardy; orientačná časová os'],
['civic','Občianska náuka','🤝','Občianska náuka','https://www.nrsr.sk/web/Default.aspx?sid=constitution','Národná rada SR: ústava; spoločenskovedné základy'],
['ethics','Etika a spolupráca','💚','Etická výchova','https://novy.siov.sk/vseobecne-vzdelavanie/','ŠIOV: všeobecné vzdelávanie'],
['practice','Odborná prax – príprava','🧰','Odborná prax','https://www.ip.gov.sk/bezpecnost-a-ochrana-zdravia-pri-praci/','NIP: BOZP; školský plán praxe'],
['health','Zdravie a pohyb – teória','🏃','Telesná a športová výchova','https://novy.siov.sk/vseobecne-vzdelavanie/','ŠIOV: všeobecné vzdelávanie']
];
const modules=subjects.map(([id,name,icon,tag,url,source],i)=>({id,name,icon,tag,url,source,color:['#527c42','#2c8571','#bc9843','#9b684a','#567ca2','#866a9f'][i%6],desc:'Poznaj → precvič → použi → prepoj → zvládni.'}));
const lessons=legacy.lessons;const lines=fs.readFileSync(path.join(__dirname,'expanded.tsv'),'utf8').split('\n').filter(x=>x&&!x.startsWith('#'));
let n=0;for(const line of lines){const [module,title,...cells]=line.split('|');const m=modules.find(x=>x.id===module);if(!m||cells.length!==3)throw Error('Malformed lesson '+line);const facts=cells.map(cell=>{const ix=cell.indexOf('=');return {term:cell.slice(0,ix),definition:cell.slice(ix+1)}});const questions=[];
 for(let i=0;i<facts.length;i++){const f=facts[i],others=facts.filter((_,j)=>i!==j);questions.push({type:'choice',prompt:`Ktoré vysvetlenie patrí k pojmu „${f.term}“?`,answer:f.definition,options:[f.definition,...others.map(x=>x.definition)],why:`${f.term}: ${f.definition}.`,skill:'poznanie'});questions.push({type:'choice',prompt:`Urči pojem podľa vysvetlenia: ${f.definition}.`,answer:f.term,options:[f.term,...others.map(x=>x.term)],why:`Toto vysvetlenie označuje pojem ${f.term}.`,skill:'rozlišovanie'});questions.push({type:'text',prompt:`Napíš pojem pre toto vysvetlenie: ${f.definition}.`,answer:f.term,why:`Správny pojem: ${f.term}. ${f.definition}.`,skill:'vybavenie'});}
 lessons.push({id:`year-${++n}`,module,title,icon:m.icon,points:facts.map(f=>`${f.term}: ${f.definition}.`),facts,example:'Pri učení si najprv vysvetli rozdiely medzi týmito pojmami vlastnými slovami. Potom ich rozpoznaj aj bez ponúknutých možností.',source:m.source,url:m.url,questions});}
for(const line of fs.readFileSync(path.join(__dirname,'scenarios.tsv'),'utf8').trim().split('\n')){const [module,prompt,answer,a,b,why]=line.split('|');if(!why)throw Error(line);const ls=lessons.filter(l=>l.module===module),target=ls.filter(l=>l.facts);const l=target.find(x=>!x.scenario)||target[0];l.scenario=true;l.example=prompt+' '+why;l.questions.push({type:'choice',prompt,answer,options:[answer,a,b],why,skill:'použitie'});}
const data={version:2,generated:'2026-10-23',schoolPlan:'https://sposlv.edupage.org/a/studijne-a-ucebne-odbory',modules,lessons};fs.writeFileSync(path.join(root,'course/course.json'),JSON.stringify(data,null,2));
console.log(JSON.stringify({topics:lessons.length,questions:lessons.reduce((a,l)=>a+l.questions.length,0),subjects:modules.length,stages:lessons.length*5}));
