<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;

class ArticleFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager): void
    {
        $article = new Article();

        $article->setTitle('Individuali veikla pagal pažymą Lietuvoje: paprastas ir lankstus būdas pradėti verslą');
        $article->setDescription('Individuali veikla pagal pažymą Lietuvoje: paprastas ir lankstus būdas pradėti verslą');
        $article->setImage('images/idv.jpg');
        $article->setContent('
        
        <h2>Individuali veikla pagal pažymą (IDV): dažniausiai
užduodami klausimai ir atsakymai</h2>
Individuali veikla pagal pažymą (IDV) yra populiarus pasirinkimas tarp pradedančiųjų
verslininkų, laisvai samdomų specialistų ir smulkaus verslo atstovų Lietuvoje. Tačiau
natūralu, kad kyla klausimų apie šią veiklos formą. Šiame straipsnyje pateikiame atsakymus
į dažniausiai užduodamus klausimus apie IDV, kurie padės jums geriau suprasti šią verslo
formą ir priimti tinkamus sprendimus.
<br/>
<br/>
<b>1. Kas yra individuali veikla pagal pažymą (IDV)?</b>
<br/>
<br/>
IVP yra savarankiška ekonominė veikla, kurią asmuo vykdo savo vardu ir atsako už ją visu
savo turtu. Norint vykdyti IDV, reikia gauti pažymą iš Valstybinės mokesčių inspekcijos
(VMI).
<br/>
<br/>
<b>2. Kaip įregistruoti IDV?</b>
<br/>
<br/>
IDV registracija yra paprasta ir gali būti atlikta internetu per VMI elektroninę sistemą (Mano
VMI). Jums reikės pateikti asmens duomenis, veiklos rūšį ir pradžios datą.
<br/>
<br/>
<b>3. Kokius mokesčius moka IDV vykdytojai?</b>
<br/>
<br/>
IDV vykdytojai moka gyventojų pajamų mokestį (GPM) ir privalomojo sveikatos draudimo
(PSD) įmokas. Jei pajamos viršija nustatytą ribą, gali tekti mokėti ir valstybinio socialinio
draudimo (VSD) įmokas.
<br/>
<br/>
<b>4. Ar IDV vykdytojai privalo registruotis PVM mokėtojais?</b>
<br/>
<br/>
Ne visi IDV vykdytojai privalo registruotis PVM mokėtojais. PVM mokėtoju reikia registruotis,
jei per paskutinius 12 mėnesių pajamos iš PVM apmokestinamos veiklos viršija 45 000 eurų.
<br/>
<br/>
<b>5. Kokias veiklas galima vykdyti pagal IDV pažymą?</b>
<br/>
<br/>
Daugelį veiklų galima vykdyti pagal IDV pažymą, tačiau yra ir tam tikrų apribojimų.
Pavyzdžiui, negalima vykdyti veiklos, kuriai reikalinga licencija ar leidimas (pvz., alkoholio
prekyba, vaistų gamyba ir pan.).
<br/>
<br/>
<b>6. Ar galima samdyti darbuotojus vykdant IDV?</b>
<br/>
<br/>
Taip, IDV vykdytojai gali samdyti darbuotojus, tačiau jiems taikomi tam tikri apribojimai ir
reikalavimai.
<br/>
<br/>
<b>7. Ar galima vykdyti kelias veiklas pagal vieną IDV pažymą?</b>
<br/>
<br/>
Taip, galima vykdyti kelias veiklas pagal vieną IDV pažymą, jei jos yra susijusios. Jei veiklos
yra nesusijusios, gali reikėti gauti atskiras pažymas kiekvienai veiklai.
<br/>
<br/>
<b>8. Kaip nutraukti IDV?</b>
<br/>
<br/>
IDV nutraukimas yra gana paprastas procesas. Jums reikia informuoti VMI apie veiklos
nutraukimą ir pateikti metinę pajamų deklaraciją.
<br/>
<br/>
<b>9. Kur galima rasti daugiau informacijos apie IDV?</b>
<br/>
<br/>
Daugiau informacijos apie IVP galite rasti VMI interneto svetainėje arba kreiptis į VMI
konsultacijų centrą.
<br/>
<br/>
<b>10. Ar verta rinktis IDV?</b>
<br/>
<br/>
IDV yra puikus pasirinkimas, jei norite pradėti verslą greitai ir paprastai, tačiau svarbu
įvertinti ir šios veiklos formos trūkumus, tokius kaip neribota atsakomybė. Prieš priimdami
sprendimą, pasverkite visus privalumus ir trūkumus, atsižvelgdami į savo individualią
situaciją ir poreikius.
        
        ');
        $article->setButtonText('Individuali veikla');
        $article->setButtonType('regular');
        $article->setIconButtonType('iconregular');
        $article->setPlace(1);
        $article->setPublic(true);
        $article->setTagged(false);

        $manager->persist($article);

       //  --------------------------------------------------------------------------

        $article = new Article();

        $article->setTitle('Mažoji bendrija');
        $article->setDescription('Mažoji bendrija');
        $article->setImage('images/mb.jpg');
        $article->setContent('
        <h2>Mažoji bendrija</h2>
Mažoji bendrija (MB) yra viena populiariausių verslo formų Lietuvoje, ypač tarp pradedančiųjų
verslininkų ir smulkaus verslo atstovų. Ši juridinio asmens forma pasižymi paprastumu,
lankstumu ir ribota atsakomybe, todėl yra patraukli alternatyva individualiai veiklai (IDV) ar
uždarajai akcinei bendrovei (UAB).
<br/><br/>
<b>Kas yra mažoji bendrija?</b>
<br/><br/>
MB yra ribotos atsakomybės privatusis juridinis asmuo, kurio nariai (ne daugiau kaip 10) atsako
už bendrijos prievoles tik savo įnašais. Tai reiškia, kad narių asmeninis turtas yra apsaugotas
nuo bendrijos skolų ar įsipareigojimų. MB gali būti steigiama vieno ar kelių asmenų, o jos veikla
gali būti labai įvairi – nuo paslaugų teikimo iki prekybos ar gamybos.
<br/><br/>
<b style="padding-left: 20px;">● Privalumai:</b>
<br/>
<p style="padding-left: 40px;"> - Nariai rizikuoja tik savo įnašais, o ne asmeniniu turtu.</p>
<p style="padding-left: 40px;"> - MB steigimo procesas yra gana paprastas ir nereikalauja didelių išlaidų. Valdymas
taip pat yra lankstus, nereikalaujantis griežtų procedūrų.</p>
<p style="padding-left: 40px;"> - Nariai gali laisvai nuspręsti, kaip paskirstyti pelną tarpusavyje.</p>
<p style="padding-left: 40px;"> - Palyginti su UAB, MB moka mažesnius mokesčius, ypač jei pajamos yra
nedidelės.</p>
<p style="padding-left: 40px;"> - Jei verslas auga ir reikia daugiau kapitalo ar kitų išteklių, MB gali būti lengvai
transformuojama į UAB.</p>
<br/><br/>
<b style="padding-left: 20px;">● Trūkumai:</b>
<br/>
<p style="padding-left: 40px;"> - MB negali turėti daugiau nei 10 narių.</p>
<p style="padding-left: 40px;"> - Palyginti su UAB, MB gali būti sunkiau pritraukti investicijas dėl mažesnio
pasitikėjimo iš investuotojų pusės.</p>
<p style="padding-left: 40px;"> - MB negali vykdyti tam tikrų veiklų, pavyzdžiui, bankininkystės, draudimo ar
finansinių paslaugų.</p>
<br/><br/>
<b>Kada verta rinktis MB?</b>
<br/><br/>
MB yra puikus pasirinkimas pradedantiesiems verslininkams, smulkaus verslo atstovams, šeimos
verslams ar tiems, kurie nori pradėti verslą su ribota atsakomybe ir minimaliomis sąnaudomis.
Jei planuojate plėsti verslą ateityje, MB gali būti puikus tramplinas, nes vėliau ją galima lengvai
transformuoti į UAB.
<br/><br/>
<b>Steigimo procesas</b>
<br/><br/>
MB steigimo procesas yra gana paprastas ir apima šiuos pagrindinius žingsnius:
<br/><br/>
<p style="padding-left: 20px;">● Pasirinkti bendrijos pavadinimą ir adresą.</p>
<p style="padding-left: 20px;">● Parengti bendrijos įstatus.</p>
<p style="padding-left: 20px;">● Sudaryti steigimo sutartį.</p>
<p style="padding-left: 20px;">● Įnešti įstatinį kapitalą (minimalus įstatinis kapitalas yra 1 euras).</p>
<p style="padding-left: 20px;">● Registruoti bendriją Juridinių asmenų registre.</p>
<br/>
<b>Išvada</b>
<br/><br/>
Mažoji bendrija yra patraukli ir lanksti verslo forma, suteikianti daug privalumų
pradedantiesiems ir smulkaus verslo atstovams. Jei svarstote pradėti verslą Lietuvoje, MB gali
būti puikus pasirinkimas, leidžiantis sutelkti dėmesį į savo verslo idėją ir augimą, o ne į
sudėtingus administracinius procesus.
        
        ');
        $article->setButtonText('Mažoji bendrija');
        $article->setButtonType('regular');
        $article->setIconButtonType('iconregular');
        $article->setPlace(2);
        $article->setPublic(true);
        $article->setTagged(false);

        $manager->persist($article);

        //  --------------------------------------------------------------------------

        $article = new Article();

        $article->setTitle('Viešoji įstaiga: visuomenės labui veikiantis juridinis asmuo');
        $article->setDescription('Viešoji įstaiga: visuomenės labui veikiantis juridinis asmuo');
        $article->setImage('images/pl.jpg');
        $article->setContent('
        
        <h2>Viešoji įstaiga: visuomenės labui veikiantis juridinis asmuo</h2>
Viešoji įstaiga (VšĮ) yra unikalus juridinis asmuo Lietuvoje, kurio pagrindinis tikslas – ne
pelno siekimas, o visuomenei naudingos veiklos vykdymas. VšĮ gali būti įsteigta tiek vieno,
tiek kelių asmenų, o jos veiklos sritys yra labai įvairios – nuo švietimo ir kultūros iki
socialinės rūpybos ir aplinkosaugos.
<br/><br/>
<b>Kas yra viešoji įstaiga?</b>
<br/><br/>
VšĮ yra pelno nesiekiantis ribotos civilinės atsakomybės viešasis juridinis asmuo. Tai reiškia,
kad VšĮ steigėjai ir dalyviai neatsako už įstaigos skolas savo asmeniniu turtu, o visa įstaigos
veikla yra nukreipta į viešųjų interesų tenkinimą.
<br/><br/>
<b>VšĮ privalumai</b>
<br/><br/>
<p style="padding-left: 20px;">● VšĮ veikla yra nukreipta į visuomenės gerovės kūrimą, todėl ji dažnai sulaukia
palankaus visuomenės ir valstybės požiūrio.</p>
<p style="padding-left: 20px;">● VšĮ gali gauti paramą iš įvairių šaltinių, įskaitant valstybės ir savivaldybių biudžetus,
fondus, įmones ir privačius asmenis.</p>
<p style="padding-left: 20px;">● VšĮ gali būti taikomos tam tikros mokesčių lengvatos, pavyzdžiui, pelno mokesčio
lengvata, jei gautas pelnas yra naudojamas įstatuose numatytiems tikslams
įgyvendinti.</p>
<p style="padding-left: 20px;">● VšĮ dažnai asocijuojasi su skaidrumu, patikimumu ir socialine atsakomybe, todėl gali
būti lengviau užmegzti bendradarbiavimą su partneriais ir rėmėjais.</p>
<br/><br/>
<b>VšĮ trūkumai</b>
<br/><br/>
<p style="padding-left: 20px;">● VšĮ negali skirstyti pelno savo steigėjams ar dalyviams. Visos lėšos turi būti
naudojamos įstatuose numatytiems tikslams įgyvendinti.</p>
<p style="padding-left: 20px;">● VšĮ veikla yra griežčiau kontroliuojama nei kitų juridinių asmenų, nes ji naudoja
viešuosius išteklius.</p>
<p style="padding-left: 20px;">● VšĮ steigimo ir valdymo procesas gali būti sudėtingesnis nei kitų juridinių asmenų,
nes reikia laikytis specialių įstatymų ir taisyklių.</p>
<br/><br/>
<b>Kada verta steigti VšĮ?</b>
<br/><br/>
VšĮ yra tinkamas pasirinkimas, jei:
<br/>
<p style="padding-left: 20px;">● Norite vykdyti visuomenei naudingą veiklą.</p>
<p style="padding-left: 20px;">● Jei jūsų veikla atitinka viešuosius interesus, galite tikėtis gauti paramą iš įvairių</p>
šaltinių.
<p style="padding-left: 20px;">● VšĮ statusas gali padėti sustiprinti jūsų organizacijos reputaciją ir pritraukti daugiau
partnerių bei rėmėjų.</p>
<br/><br/>
<b>VšĮ steigimo procesas</b>
<br/><br/>
<p style="padding-left: 20px;">1. Apibrėžkite VšĮ tikslus, veiklos sritis ir valdymo struktūrą.</p>
<p style="padding-left: 20px;">2. Parenkite VšĮ įstatus ir steigimo sutartį (jei steigėjų yra daugiau nei vienas).</p>
<p style="padding-left: 20px;">3. Pateikite dokumentus Juridinių asmenų registrui.</p>
<p style="padding-left: 20px;">4. Gavę registracijos pažymėjimą, galite pradėti vykdyti VšĮ veiklą.</p>
<br/><br/>
<b>Išvada</b>
<br/><br/>
Viešoji įstaiga yra unikali ir svarbi juridinio asmens forma Lietuvoje, skirta visuomenei
naudingos veiklos vystymui. Jei jūsų tikslas – ne pelno siekimas, o visuomenės gerovės
kūrimas, VšĮ gali būti tinkamas pasirinkimas jūsų organizacijai.
        
        ');
        $article->setButtonText('Viešoji įstaiga');
        $article->setButtonType('regular');
        $article->setIconButtonType('iconregular');
        $article->setPlace(3);
        $article->setPublic(true);
        $article->setTagged(false);

        $manager->persist($article);

        //  --------------------------------------------------------------------------

        $article = new Article();

        $article->setTitle('Mažoji bendrija ir kiti juridiniai asmenys');
        $article->setDescription('Mažoji bendrija ir kiti juridiniai asmenys');
        $article->setImage('images/mb_and_other.jpg');
        $article->setContent('
        
        <h2>Mažoji bendrija ir kiti juridiniai asmenys</h2>
Lietuvoje verslo steigėjai turi platų juridinių asmenų pasirinkimą, o vienas populiariausių
variantų – mažoji bendrija (MB). Tačiau MB nėra vienintelė, ir kiekviena verslo forma turi savų
privalumų bei trūkumų. Šiame straipsnyje išsamiai aptarsime MB ir kitų juridinių asmenų
skirtumus, privalumus bei trūkumus, padėsiančius priimti geriausią sprendimą jūsų verslo
pradžiai Lietuvoje.
<br/><br/>
<b>Mažoji bendrija (MB)</b>
<br/><br/>
MB yra ribotos atsakomybės juridinis asmuo, kurio nariai rizikuoja tik įmonės turtu. Tai
patrauklus pasirinkimas dėl paprastesnio steigimo ir valdymo, palyginti su kitomis juridinių
asmenų formomis.
<br/><br/>
<b>● Privalumai:</b>
<br/>
<p style="padding-left: 20px;">- Nariai rizikuoja tik įmonės turtu, ne savo asmeniniu.</p>
<p style="padding-left: 20px;">- Paprastesnis steigimas ir valdymas.</p>
<p style="padding-left: 20px;">- Lankstus pelno paskirstymas. Nariai gali laisvai nuspręsti, kaip paskirstyti pelną.</p>
<p style="padding-left: 20px;">- Jei verslas auga, galima lengvai tapti UAB.</p>
<p style="padding-left: 20px;">- Minimalus įstatinis kapitalas yra tik 1 euras.</p>
<br/><br/>
<b>● Trūkumai:</b>
<br/>
<p style="padding-left: 20px;">- Narių skaičius ribotas iki 10 - Netinka didesnėms komandoms.</p>
<p style="padding-left: 20px;">- Palyginti su UAB, sunkiau pritraukti investicijas.</p>
<p style="padding-left: 20px;">- Negalima vykdyti tam tikrų veiklų, pvz., draudimo ar finansinių paslaugų.</p>
<br/><br/>
<b>Uždaroji akcinė bendrovė (UAB)</b>
<br/><br/>
UAB yra labiausiai paplitusi juridinio asmens forma Lietuvoje. Tai ribotos atsakomybės
bendrovė, kurios kapitalas padalintas į akcijas.
<br/><br/>
<b>● Privalumai:</b>
<br/>
<p style="padding-left: 20px;">- Akcininkai rizikuoja tik savo investicijomis.</p>
<p style="padding-left: 20px;">- Didesnis pasitikėjimas iš investuotojų. Lengviau pritraukti kapitalą.</p>
<p style="padding-left: 20px;">- Nėra apribojimų dėl akcininkų skaičiaus, tinka ir didesniems verslams.</p>
<p style="padding-left: 20px;">- Galimybė išleisti įvairių rūšių akcijas.</p>
<br/><br/>
<b>● Trūkumai:</b>
<br/>
<p style="padding-left: 20px;">- Sudėtingesnis steigimas ir valdymas.</p>
<p style="padding-left: 20px;">- Griežtesni reikalavimai buhalterinei apskaitai.</p>
<p style="padding-left: 20px;">- Steigimui reikia didesnio pradinio kapitalo (2500 eurų).</p>
<br/><br/>
<b>Individuali įmonė (IĮ)</b>
<br/><br/>
IĮ yra neribotos atsakomybės juridinis asmuo, t.y., savininkas atsako visu savo turtu. Tai tinkamas
pasirinkimas smulkiam verslui ar laisvai samdomiems specialistams.
<br/><br/>
<b>● Privalumai:</b>
<br/>
<p style="padding-left: 20px;">- Paprastas ir pigus steigimas, taip pat galima įsteigti per vieną dieną.</p>
<p style="padding-left: 20px;">- Paprastesnė buhalterinė apskaita - mažiau reikalavimų.</p>
<p style="padding-left: 20px;">- Visiška savininko kontrolė.</p>
<br/><br/>
<b>● Trūkumai:</b>
<br/>
<p style="padding-left: 20px;">- Savininkas rizikuoja visu savo turtu.</p>
<p style="padding-left: 20px;">- Bankai mažiau pasitiki IĮ, todėl sunkiau gauti paskolas.</p>
<p style="padding-left: 20px;">- Mažiau pasitikėjimo iš verslo partnerių: gali būti sunkiau užmegzti rimtus verslo
santykius.</p>
<br/><br/>
Kokią verslo formą pasirinkti?
<br/><br/>
Renkantis juridinio asmens formą, svarbu įvertinti šiuos aspektus:
<br/><br/>
<p style="padding-left: 20px;">● <b>Veiklos pobūdis ir mastas:</b> Smulkiam verslui gali pakakti individualios įmonės ar MB, o
didesniam verslui labiau tika UAB.</p>
<p style="padding-left: 20px;">● <b>Atsakomybė:</b> Jei norite riboti savo asmeninę atsakomybę, rinkitės MB ar UAB.</p>
<p style="padding-left: 20px;">● <b>Investicijų poreikis:</b> Jei planuojate pritraukti investicijas, UAB gali būti geresnis
pasirinkimas.</p>
<p style="padding-left: 20px;">● <b>Mokesčiai:</b> Skirtingos juridinių asmenų formos turi skirtingas mokestines prievoles.</p>
<p style="padding-left: 20px;">● <b>Komandos dydis:</b> Jei komanda didesnė nei 10 žmonių, MB nebetinka.</p>
<br/>
<b>Išvados</b>
<br/><br/>
Renkantis juridinio asmens formą verslo pradžiai Lietuvoje, svarbu įvertinti individualius
poreikius ir tikslus. Mažoji bendrija (MB) yra patrauklus pasirinkimas dėl paprastumo ir ribotos
atsakomybės, tačiau turi apribojimų dėl narių skaičiaus ir veiklos sričių. Uždaroji akcinė
bendrovė (UAB) suteikia daugiau lankstumo ir pasitikėjimo iš investuotojų, tačiau reikalauja
didesnių steigimo kaštų ir sudėtingesnio valdymo. Individuali įmonė (IĮ) tinka smulkiam verslui
dėl paprastumo ir mažų kaštų, tačiau savininkas rizikuoja visu savo turtu.
<br/><br/>
Svarbu atidžiai įvertinti veiklos pobūdį, mastą, komandos dydį, investicijų poreikį ir mokestines
prievoles, prieš priimant sprendimą. Jei kyla abejonių, rekomenduojama pasikonsultuoti su
teisininku ar buhalteriu, kurie padės pasirinkti tinkamiausią juridinio asmens formą jūsų verslui
Lietuvoje.
        
        ');
        $article->setButtonText('Mažoji bendrija ir kiti');
        $article->setButtonType('regular');
        $article->setIconButtonType('iconregular');
        $article->setPlace(4);
        $article->setPublic(true);
        $article->setTagged(false);

        $manager->persist($article);

        //  --------------------------------------------------------------------------

        $article = new Article();

        $article->setTitle('Individuali veikla ar mažoji bendrija?');
        $article->setDescription('Individuali veikla ar mažoji bendrija?');
        $article->setImage('images/idv_mb.jpg');
        $article->setContent('
        
        <h2>Individuali veikla ar mažoji bendrija?</h2>
Lietuvoje pradedantys verslininkai dažnai renkasi tarp dviejų populiariausių verslo formų:
individualios veiklos (IDV) ir mažosios bendrijos (MB). Abi šios formos turi savų privalumų ir
trūkumų, todėl svarbu atidžiai įvertinti savo poreikius ir tikslus prieš priimant sprendimą. Čia
pateiksime išsamų IDV ir MB palyginimą, apžvelgiant jų steigimo procesą, finansinius aspektus,
atsakomybę ir kitus svarbius veiksnius.
<br/><br/>
<b>Individuali veikla (IDV): Paprastumas ir lankstumas</b>
<br/><br/>
IV yra puikus pasirinkimas tiems, kurie nori pradėti verslą greitai ir paprastai. Šiai veiklos formai
nereikia steigti juridinio asmens, todėl registracijos procesas yra greitas ir nemokamas. Be to,
IDV buhalterinė apskaita yra paprastesnė nei MB, todėl nereikalauja specialių žinių ar
buhalterio paslaugų.
<br/><br/>
<b>● Privalumai:</b>
<br/>
<p style="padding-left: 20px;">- Greitas ir paprastas steigimas</p>
<p style="padding-left: 20px;">- Paprasta buhalterinė apskaita</p>
<p style="padding-left: 20px;">- Mažesni mokesčiai, jei pajamos nedidelės</p>
<p style="padding-left: 20px;">- Lengvas veiklos nutraukimas</p>
<p style="padding-left: 20px;">- Galimybė gauti 30% pajamų mokesčio lengvatą pirmaisiais veiklos metais</p>
<br/><br/>
<b>● Trūkumai:</b>
<br/>
<p style="padding-left: 20px;">- Neribota asmeninė atsakomybė (atsakoma visu asmeniniu turtu)</p>
<p style="padding-left: 20px;">- Mažiau galimybių pritraukti investicijas</p>
<p style="padding-left: 20px;">- Sunkiau rasti verslo partnerių</p>
<br/><br/>
<b>Mažoji bendrija (MB): Stabilumas ir augimo galimybės</b>
<br/><br/>
MB yra ribotos atsakomybės juridinis asmuo, todėl jos nariai rizikuoja tik įmonės turtu. Ši verslo
forma suteikia daugiau stabilumo ir pasitikėjimo verslo partneriams, todėl yra patrauklesnė
investuotojams. Be to, MB gali lengviau gauti paskolas ir kreditus.
<br/><br/>
<b>● Privalumai:</b>
<br/>
<p style="padding-left: 20px;">- Ribota asmeninė atsakomybė</p>
<p style="padding-left: 20px;">- Didesnis pasitikėjimas iš verslo partnerių</p>
<p style="padding-left: 20px;">- Lengvesnis investicijų pritraukimas</p>
<p style="padding-left: 20px;">- Galimybė paskirstyti pelną tarp narių</p>
<p style="padding-left: 20px;">- Paprastesnis perėjimas į UAB</p>
<br/><br/>
<b>● Trūkumai:</b>
<br/>
<p style="padding-left: 20px;">- Sudėtingesnis steigimas ir administravimas</p>
<p style="padding-left: 20px;">- Sudėtingesnė buhalterinė apskaita</p>
<p style="padding-left: 20px;">- Didesni mokesčiai, jei pajamos didelės</p>
<p style="padding-left: 20px;">- Sudėtingesnis veiklos nutraukimas</p>
<br/><br/>
<b>Kokią verslo formą pasirinkti?</b>
<br/><br/>
Renkantis tarp IDV ir MB, svarbu įvertinti šiuos veiksnius:
<br/>
<p style="padding-left: 20px;">● <b>Veiklos pobūdis:</b> Jei planuojate vykdyti veiklą, kuriai būdinga didelė rizika (pvz., statybos
darbai), MB gali būti saugesnis pasirinkimas dėl ribotos atsakomybės.</p>
<p style="padding-left: 20px;">● <b>Pajamos:</b> Jei planuojate gauti dideles pajamas, MB gali būti naudingesnė dėl galimybės
paskirstyti pelną tarp narių ir optimizuoti mokesčius.</p>
<p style="padding-left: 20px;">● <b>Ateities planai:</b> Jei planuojate plėsti verslą ir pritraukti investicijas, MB gali būti geresnis
pasirinkimas dėl didesnio pasitikėjimo iš investuotojų.</p>
<p style="padding-left: 20px;">● <b>Patirtis:</b> Jei neturite daug verslo patirties, IDV gali būti paprastesnis ir pigesnis būdas
pradėti.</p>
<br/><br/>
<b>Išvados</b>
<br/><br/>
Individuali veikla ir mažoji bendrija turi savo privalumus ir trūkumus, todėl pasirinkimas
priklauso nuo konkrečių verslo poreikių ir tikslų. Jei verslas pradedamas mažais mastais,
reikalaujant minimalios biurokratijos ir pradinio kapitalo, individuali veikla gali būti tinkamesnis
pasirinkimas. Tačiau, jei planuojama verslą plėsti, pritraukti investuotojus ir siekti ilgalaikio
augimo, mažoji bendrija suteikia daugiau galimybių ir saugumo. Jei vis dar abejojate, kuri verslo
forma jums tinka labiausiai, rekomenduojama pasikonsultuoti su teisininku ar buhalteriu. Jie
padės įvertinti jūsų individualią situaciją ir pasirinkti tinkamiausią sprendimą.
        
        ');
        $article->setButtonText('Individuali veikla');
        $article->setButtonType('regular');
        $article->setIconButtonType('iconregular');
        $article->setPlace(5);
        $article->setPublic(true);
        $article->setTagged(false);

        $manager->persist($article);

        //  --------------------------------------------------------------------------

        $article = new Article();

        $article->setTitle('Individuali veikla pagal pažymą (IDV): dažniausiai užduodami klausimai ir atsakymai');
        $article->setDescription('Individuali veikla pagal pažymą (IDV): dažniausiai užduodami klausimai ir atsakymai');
        $article->setImage('images/idv_qa.jpg');
        $article->setContent('
        
<h2>        Individuali veikla pagal pažymą (IDV): dažniausiai
užduodami klausimai ir atsakymai</h2>

Individuali veikla pagal pažymą (IDV) yra populiarus pasirinkimas tarp pradedančiųjų
verslininkų, laisvai samdomų specialistų ir smulkaus verslo atstovų Lietuvoje. Tačiau
natūralu, kad kyla klausimų apie šią veiklos formą. Šiame straipsnyje pateikiame atsakymus
į dažniausiai užduodamus klausimus apie IDV, kurie padės jums geriau suprasti šią verslo
formą ir priimti tinkamus sprendimus.
<br/><br/>
<b>1. Kas yra individuali veikla pagal pažymą (IDV)?</b>
<br/><br/>
IVP yra savarankiška ekonominė veikla, kurią asmuo vykdo savo vardu ir atsako už ją visu
savo turtu. Norint vykdyti IDV, reikia gauti pažymą iš Valstybinės mokesčių inspekcijos
(VMI).
<br/><br/>
<b>2. Kaip įregistruoti IDV?</b>
<br/><br/>
IDV registracija yra paprasta ir gali būti atlikta internetu per VMI elektroninę sistemą (Mano
VMI). Jums reikės pateikti asmens duomenis, veiklos rūšį ir pradžios datą.
<br/><br/>
<b>3. Kokius mokesčius moka IDV vykdytojai?</b>
<br/><br/>
IDV vykdytojai moka gyventojų pajamų mokestį (GPM) ir privalomojo sveikatos draudimo
(PSD) įmokas. Jei pajamos viršija nustatytą ribą, gali tekti mokėti ir valstybinio socialinio
draudimo (VSD) įmokas.
<br/><br/>
<b>4. Ar IDV vykdytojai privalo registruotis PVM mokėtojais?</b>
<br/><br/>
Ne visi IDV vykdytojai privalo registruotis PVM mokėtojais. PVM mokėtoju reikia registruotis,
jei per paskutinius 12 mėnesių pajamos iš PVM apmokestinamos veiklos viršija 45 000 eurų.
<br/><br/>
<b>5. Kokias veiklas galima vykdyti pagal IDV pažymą?</b>
<br/><br/>
Daugelį veiklų galima vykdyti pagal IDV pažymą, tačiau yra ir tam tikrų apribojimų.
Pavyzdžiui, negalima vykdyti veiklos, kuriai reikalinga licencija ar leidimas (pvz., alkoholio
prekyba, vaistų gamyba ir pan.).
<br/><br/>
<b>6. Ar galima samdyti darbuotojus vykdant IDV?</b>
<br/><br/>
Taip, IDV vykdytojai gali samdyti darbuotojus, tačiau jiems taikomi tam tikri apribojimai ir
reikalavimai.
<br/><br/>
<b>7. Ar galima vykdyti kelias veiklas pagal vieną IDV pažymą?</b>
<br/><br/>
Taip, galima vykdyti kelias veiklas pagal vieną IDV pažymą, jei jos yra susijusios. Jei veiklos
yra nesusijusios, gali reikėti gauti atskiras pažymas kiekvienai veiklai.
<br/><br/>
<b>8. Kaip nutraukti IDV?</b>
<br/><br/>
IDV nutraukimas yra gana paprastas procesas. Jums reikia informuoti VMI apie veiklos
nutraukimą ir pateikti metinę pajamų deklaraciją.
<br/><br/>
<b>9. Kur galima rasti daugiau informacijos apie IDV?</b>
<br/><br/>
Daugiau informacijos apie IVP galite rasti VMI interneto svetainėje arba kreiptis į VMI
konsultacijų centrą.
<br/><br/>
<b>10. Ar verta rinktis IDV?</b>
<br/><br/>
IDV yra puikus pasirinkimas, jei norite pradėti verslą greitai ir paprastai, tačiau svarbu
įvertinti ir šios veiklos formos trūkumus, tokius kaip neribota atsakomybė. Prieš priimdami
sprendimą, pasverkite visus privalumus ir trūkumus, atsižvelgdami į savo individualią
situaciją ir poreikius.
        
        ');
        $article->setButtonText('Individuali veikla');
        $article->setButtonType('regular');
        $article->setIconButtonType('iconregular');
        $article->setPlace(6);
        $article->setPublic(true);
        $article->setTagged(false);

        $manager->persist($article);

        //  --------------------------------------------------------------------------

        $article = new Article();

        $article->setTitle('Individualios veiklos mokesčiai Lietuvoje, išsamus gidas');
        $article->setDescription('Individualios veiklos mokesčiai Lietuvoje, išsamus gidas');
        $article->setImage('images/idv_tax.jpg');
        $article->setContent('
        
        <h2>Individualios veiklos mokesčiai Lietuvoje: išsamus gidas</h2>
Individuali veikla pagal pažymą (IDV) yra patrauklus pasirinkimas pradedantiesiems
verslininkams ir laisvai samdomiems specialistams Lietuvoje. Tačiau svarbu suprasti, kokie
mokesčiai taikomi šiai veiklos formai, kad galėtumėte tinkamai planuoti savo finansus ir
išvengti netikėtumų. Šiame straipsnyje pateikiame išsamų gidą apie individualios veiklos
mokesčius Lietuvoje.
<br/><br/>
<b>Pagrindiniai mokesčiai</b>
<br/><br/>
Vykdant individualią veiklą pagal pažymą, pagrindiniai mokesčiai, kuriuos turėsite mokėti,
yra šie:
<br/>
<p style="padding-left: 20px;">● <b>Gyventojų pajamų mokestis (GPM):</b> Tai mokestis, skaičiuojamas nuo jūsų gautų
pajamų. GPM tarifas priklauso nuo jūsų metinių pajamų dydžio ir gali būti nuo 5% iki
15%.</p>
<p style="padding-left: 20px;">● <b>Privalomojo sveikatos draudimo (PSD) įmokos:</b> Šios įmokos yra mokamos už
privalomąjį sveikatos draudimą ir sudaro 6,98% nuo jūsų pajamų.</p>
<p style="padding-left: 20px;">● <b>Valstybinio socialinio draudimo (VSD) įmokos:</b> Šios įmokos yra mokamos už pensijų,
ligos ir motinystės (tėvystės) socialinį draudimą. VSD įmokų dydis priklauso nuo to,
ar kaupiate papildomai pensijai, ir gali būti 12,52% arba 15,52% nuo jūsų pajamų.</p>
<br/><br/>
<b>Papildomi mokesčiai</b>
<br/><br/>
Be pagrindinių mokesčių, jums gali tekti mokėti ir šiuos papildomus mokesčius:
<br/>
<p style="padding-left: 20px;">● <b>Pridėtinės vertės mokestis (PVM):</b> Jei jūsų metinės apmokestinamosios pajamos
viršija 45 000 eurų, turėsite registruotis PVM mokėtoju ir mokėti PVM nuo savo
pardavimų.</p>
<p style="padding-left: 20px;">● <b>Nekilnojamojo turto mokestis:</b> Jei vykdote veiklą, susijusią su nekilnojamuoju turtu,
pvz., nuomojate patalpas, gali tekti mokėti nekilnojamo turto mokestį.</p>
<p style="padding-left: 20px;">● <b>Mokesčiai už aplinkos teršimą:</b> Jei jūsų veikla teršia aplinką, gali tekti mokėti
mokesčius už aplinkos taršą.</p>
<br/><br/>
<b>Mokesčių lengvatos</b>
<br/><br/>
Tam tikromis sąlygomis galite pasinaudoti mokesčių lengvatomis, pavyzdžiui:
<br/>
<p style="padding-left: 20px;">● <b>Lengvata pirmaisiais veiklos metais:</b> Pirmaisiais metais galite taikyti 5% GPM tarifą,
jei jūsų pajamos neviršija 20 000 eurų.</p>
<p style="padding-left: 20px;">● <b>Lengvatos už mokslinius tyrimus ir eksperimentinę plėtrą (MTEP):</b> Jei vykdote
MTEP veiklą, galite pasinaudoti mokesčių lengvatomis.</p>
<br/><br/>
<b>Mokesčių deklaravimas ir mokėjimas</b>
<br/><br/>
Individualios veiklos mokesčiai deklaruojami ir mokami kartą per metus, iki kitų metų
gegužės 1 d. Deklaraciją galite pateikti elektroniniu būdu per VMI elektroninę deklaravimo
sistemą (EDS).
<br/><br/>
<b>Svarbu žinoti</b>
<br/><br/>
<p style="padding-left: 20px;">● <b>Išlaidos:</b> Vykdant individualią veiklą, galite atskaityti su veikla susijusias išlaidas iš
savo pajamų, taip sumažindami mokėtiną GPM.</p>
<p style="padding-left: 20px;">● <b>Buhalterinė apskaita:</b> Individualios veiklos vykdytojai neprivalo vesti buhalterinės
apskaitos, tačiau rekomenduojama tai daryti, kad būtų lengviau sekti pajamas ir
išlaidas bei apskaičiuoti mokesčius.</p>
<p style="padding-left: 20px;">● <b>Konsultacijos:</b> Jei turite klausimų dėl individualios veiklos mokesčių, kreipkitės į VMI
konsultacijų centrą arba pasikonsultuokite su buhalteriu.</p>
<br/>
Šiame straipsnyje pateikta informacija yra bendro pobūdžio ir gali neatitikti jūsų
individualios situacijos. Prieš priimdami sprendimus dėl mokesčių, visada rekomenduojama
pasikonsultuoti su specialistu.
        
        ');
        $article->setButtonText('Individuali veikla');
        $article->setButtonType('regular');
        $article->setIconButtonType('iconregular');
        $article->setPlace(7);
        $article->setPublic(true);
        $article->setTagged(false);

        $manager->persist($article);


        //  --------------------------------------------------------------------------


        $article = new Article();

        $article->setTitle('Mažosios bendrijos steigimas');
        $article->setDescription('Mažosios bendrijos steigimas');
        $article->setImage('images/starting_mb.jpg');
        $article->setContent('
        
<h2>Mažosios bendrijos steigimas</h2>
Mažoji bendrija (MB) yra patraukli verslo forma Lietuvoje dėl savo paprastumo, lankstumo ir
ribotos atsakomybės. Čia mes pateiksime išsamią informaciją apie MB steigimo procesą,
padėsiantį jums lengvai ir sklandžiai įgyvendinti savo verslo idėją.
<br/><br/>
<b>1. Pasiruošimas steigimui:</b>
<br/>
<p style="padding-left: 20px;">● Pasirinkite unikalų ir įsimintiną MB pavadinimą, kuris atitiktų jūsų veiklos pobūdį ir
nebūtų užimtas kitų juridinių asmenų. Patikrinkite pavadinimo prieinamumą registrų
centre, juridinių asmenų registre.</p>
<p style="padding-left: 20px;">● Aiškiai apibrėžkite, kokia veikla užsiims jūsų MB. Tai padės pasirinkti tinkamus veiklos
kodus pagal ekonominės veiklos rūšių klasifikatorių (EVRK 2 red.).</p>
<p style="padding-left: 20px;">● Jei MB steigiate su kitais asmenimis, aptarkite ir susitarkite dėl esminių klausimų, tokių
kaip įstatinis kapitalas, pelno paskirstymas, valdymo struktūra ir pan.</p>
<br/><br/>
<b>2. Dokumentų rengimas:</b>
<br/>
<p style="padding-left: 20px;">● Jei MB steigia keli asmenys, reikia parengti steigimo sutartį, kurioje nurodomos visos
steigimo sąlygos ir narių teisės bei pareigos. Jei MB steigia vienas asmuo, pakanka
steigimo akto.</p>
<p style="padding-left: 20px;">● Įstatai yra pagrindinis MB dokumentas, kuriame nustatoma bendrijos teisinė forma,
pavadinimas, buveinė, veiklos tikslai, valdymo organai, narių teisės ir pareigos, pelno
paskirstymo tvarka ir kiti svarbūs klausimai.</p>
<br/><br/>
<b>3. Registracija Juridinių asmenų registre:</b>
<br/>
MB registraciją galima atlikti dviem būdais:
<br/>
<p style="padding-left: 20px;">● <b>Elektroniniu būdu:</b> Tai patogiausias ir greičiausias būdas, reikalaujantis kvalifikuoto
elektroninio parašo. Registracija atliekama per registrų centro savitarnos sistemą.</p>
<p style="padding-left: 20px;">● <b>Popieriniu būdu:</b> Dokumentus reikia pateikti registrų centrui tiesiogiai arba paštu.</p>
<br/><br/>
<b>4. Kiti žingsniai:</b>
<br/>
<p style="padding-left: 20px;">● Įsteigę MB, turėsite atidaryti banko sąskaitą įmonės vardu.</p>
<p style="padding-left: 20px;">● Po registracijos juridinių asmenų registre, MB turi būti įregistruota VMI kaip mokesčių
mokėtoja.</p>
<p style="padding-left: 20px;">● Jei MB samdys darbuotojus, reikės juos registruoti „Sodroje“.</p>
<br/><br/>
<b>Papildomi patarimai:</b>
<br/>
<p style="padding-left: 20px;">● Jei kyla klausimų dėl MB steigimo proceso ar dokumentų rengimo, rekomenduojama
pasikonsultuoti su teisininku ar buhalteriu.</p>
<p style="padding-left: 20px;">● Surinkite visą reikalingą informaciją ir dokumentus prieš pradėdami steigimo procesą,
kad išvengtumėte vėlavimų ir nesklandumų.</p>
<p style="padding-left: 20px;">● Įstatymai ir taisyklės, reglamentuojančios MB veiklą, gali keistis, todėl svarbu sekti
naujienas ir atnaujinti savo žinias.</p>
<br/><br/>
Pasiruošę iš anksto ir vadovaudamiesi šiais žingsniais, galėsite lengvai ir sklandžiai įsteigti savo
mažąją bendriją Lietuvoje.
        
        ');
        $article->setButtonText('MB steigimas');
        $article->setButtonType('regular');
        $article->setIconButtonType('iconregular');
        $article->setPlace(7);
        $article->setPublic(true);
        $article->setTagged(false);

        $manager->persist($article);


        //  --------------------------------------------------------------------------


        $article = new Article();

        $article->setTitle('Prisijunk prie universitetas.lt komandos!');
        $article->setDescription('Prisijunk prie universitetas.lt komandos!');
        $article->setImage('images/darbas.jpg');
        $article->setContent('
        <h2>Ieškome entuziastingų bendraminčių prisijungti prie universitetas.lt komandos!</h2>
Ar esate pasiruošę padėti kitiems įgyvendinti savo verslo svajones? Ar nuolat ieškote būdų,
kaip tobulėti ir įkvėpti kitus? Jei taip, mes ieškome būtent Tavęs!
<br/><br/>
Universitetas.lt yra daugiau nei tiesiog informacijos šaltinis. Mes esame bendruomenė,
kurioje verslumo dvasia susijungia su noru dalintis žiniomis. Mūsų tikslas – suteikti visus
įrankius ir įkvėpimą, kurių reikia norint pradėti, auginti ir klestėti versle.
<br/><br/>
<b>Mes siūlome:</b>
<br/>
<p style="padding-left: 20px;">● <b>Galimybę daryti įtaką:</b> Tavo indėlis padės formuoti tūkstančių skaitytojų verslo
keliones.</p>
<p style="padding-left: 20px;">● <b>Bendradarbiavimą:</b> Prisijunk prie dinamiškos komandos, kurioje ivisos idėjos bus
išgirstos, o kūrybiškumas - skatinamas.</p>
<p style="padding-left: 20px;">● <b>Asmenybės augimą:</b> Tobulėk kartu su mumis, gilink savo žinias verslo srityje ir plėsk
savo įgūdžius.</p>
<p style="padding-left: 20px;">● <b>Pasitikėjimą:</b> Tavo darbai bus pripažinti ir įvertinti mūsų platformoje.</p>
<br/><br/>
<b>Ko mes ieškome:</b>
<br/>
<p style="padding-left: 20px;">● <b>Aistringų rašytojų:</b> Žmonių, kurie geba perteikti sudėtingas verslo koncepcijas
aiškiai ir įdomiai.</p>
<p style="padding-left: 20px;">● <b>Patyrusių verslininkų:</b> Asmenų, kurie gali pasidalinti savo sėkmėmis, iššūkiais ir
pamokomis, kurias išmoko.</p>
<p style="padding-left: 20px;">● <b>Kūrybingų mąstytojų:</b> Žmonių, kurie gali pasiūlyti naujų idėjų ir požiūrių į verslo
pasaulį.</p>
<p style="padding-left: 20px;">● <b>Komandos žaidėjų:</b> Žmonių, kurie nori dirbti kartu, siekdami bendro tikslo.</p>
<br/><br/>
<b>Prisijunk prie mūsų kelionės!</b>
<br/><br/>
Jeigu esi pasiruošęs prisidėti prie mūsų misijos sukurti klestinčią verslo bendruomenę,
kviečiame susisiekti <b>info@universitetas.lt</b>.
        
        ');
        $article->setButtonText('Prisijunk prie komandos');
        $article->setButtonType('regular');
        $article->setIconButtonType('iconregular');
        $article->setPlace(9);
        $article->setPublic(true);
        $article->setTagged(true);
        $article->setJoinUs(true);

        $manager->persist($article);

        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['article'];
    }
}
