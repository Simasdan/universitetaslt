using System.Diagnostics;
using universitetas_articles.Data.Models;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;

namespace universitetas_articles
{
    public class AppDbInitializer
    {
        public static void Seed(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AppDbContext>();

                if (!context.Articles.Any())
                {
                    context.Articles.AddRange(
                        new Article()
                        {
                            Title = "Individuali veikla pagal pažymą Lietuvoje: paprastas ir lankstus būdas pradėti verslą",
                            ImageUrl = "https://picsum.photos/800/400?random=1",
                            Description = "Individuali veikla pagal pažymą Lietuvoje: paprastas ir lankstus būdas pradėti verslą",
                            ButtonText = "Individuali veikla",
                            ButtonType = "regular",
                            IconButtonType = "iconregular",
                            Content = @"<h2>Individuali veikla pagal pažymą (IDV): dažniausiai užduodami klausimai ir atsakymai</h2>
                                Individuali veikla pagal pažymą (IDV) yra populiarus pasirinkimas tarp pradedančiųjų
                                verslininkų, laisvai samdomų specialistų ir smulkaus verslo atstovų Lietuvoje. Tačiau
                                natūralu, kad kyla klausimų apie šią veiklos formą. Šiame straipsnyje pateikiame atsakymus
                                į dažniausiai užduodamus klausimus apie IDV, kurie padės jums geriau suprasti šią verslo
                                formą ir priimti tinkamus sprendimus.
                                <br/>
                                <br/>",
                            QnAs = new List<QnA>
                            {
                                new QnA { Question = "Kas yra individuali veikla pagal pažymą (IDV)?", Answer = "IDV yra savarankiška ekonominė veikla, kurią asmuo vykdo savo vardu ir atsako už ją visu savo turtu. Norint vykdyti IDV, reikia gauti pažymą iš Valstybinės mokesčių inspekcijos (VMI)." },
                                new QnA { Question = "Kaip įregistruoti IDV?", Answer = "IDV registracija yra paprasta ir gali būti atlikta internetu per VMI elektroninę sistemą (Mano VMI). Jums reikės pateikti asmens duomenis, veiklos rūšį ir pradžios datą." },
                                new QnA { Question = "Kokius mokesčius moka IDV vykdytojai?", Answer = "IDV vykdytojai moka gyventojų pajamų mokestį (GPM) ir privalomojo sveikatos draudimo (PSD) įmokas. Jei pajamos viršija nustatytą ribą, gali tekti mokėti ir valstybinio socialinio draudimo (VSD) įmokas." },
                                new QnA { Question = "Ar IDV vykdytojai privalo registruotis PVM mokėtojais?", Answer = "Ne visi IDV vykdytojai privalo registruotis PVM mokėtojais. PVM mokėtoju reikia registruotis, jei per paskutinius 12 mėnesių pajamos iš PVM apmokestinamos veiklos viršija 45 000 eurų." },
                                new QnA { Question = "Kokias veiklas galima vykdyti pagal IDV pažymą?", Answer = "Daugelį veiklų galima vykdyti pagal IDV pažymą, tačiau yra ir tam tikrų apribojimų. Pavyzdžiui, negalima vykdyti veiklos, kuriai reikalinga licencija ar leidimas (pvz., alkoholio prekyba, vaistų gamyba ir pan.)." },
                                new QnA { Question = "Ar galima samdyti darbuotojus vykdant IDV?", Answer = "Taip, IDV vykdytojai gali samdyti darbuotojus, tačiau jiems taikomi tam tikri apribojimai ir reikalavimai." },
                                new QnA { Question = "Ar galima vykdyti kelias veiklas pagal vieną IDV pažymą?", Answer = "Taip, galima vykdyti kelias veiklas pagal vieną IDV pažymą, jei jos yra susijusios. Jei veiklos yra nesusijusios, gali reikėti gauti atskiras pažymas kiekvienai veiklai." },
                                new QnA { Question = "Kaip nutraukti IDV?", Answer = "IDV nutraukimas yra gana paprastas procesas. Jums reikia informuoti VMI apie veiklos nutraukimą ir pateikti metinę pajamų deklaraciją." },
                                new QnA { Question = "Kur galima rasti daugiau informacijos apie IDV?", Answer = "Daugiau informacijos apie IVP galite rasti VMI interneto svetainėje arba kreiptis į VMI konsultacijų centrą." },
                                new QnA { Question = "Ar verta rinktis IDV?", Answer = "IDV yra puikus pasirinkimas, jei norite pradėti verslą greitai ir paprastai, tačiau svarbu įvertinti ir šios veiklos formos trūkumus, tokius kaip neribota atsakomybė. Prieš priimdami sprendimą, pasverkite visus privalumus ir trūkumus, atsižvelgdami į savo individualią situaciją ir poreikius." }
                            }
                        },
                        new Article()
                        {
                            Title = "Mažoji bendrija",
                            ImageUrl = "https://picsum.photos/800/400?random=2",
                            Description = "Mažoji bendrija",
                            ButtonText = "Mažoji bendrija",
                            ButtonType = "regular",
                            IconButtonType = "iconregular",
                            Content = @"<h2>Mažoji bendrija</h2>
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
                                <b style=""padding-left: 20px;"">● Privalumai:</b>
                                <br/>
                                <p style=""padding-left: 40px;""> - Nariai rizikuoja tik savo įnašais, o ne asmeniniu turtu.</p>
                                <p style=""padding-left: 40px;""> - MB steigimo procesas yra gana paprastas ir nereikalauja didelių išlaidų.</p>
                                <p style=""padding-left: 40px;""> - Nariai gali laisvai nuspręsti, kaip paskirstyti pelną tarpusavyje.</p>
                                <p style=""padding-left: 40px;""> - Palyginti su UAB, MB moka mažesnius mokesčius, ypač jei pajamos yra nedidelės.</p>
                                <p style=""padding-left: 40px;""> - Jei verslas auga ir reikia daugiau kapitalo ar kitų išteklių, MB gali būti lengvai transformuojama į UAB.</p>
                                <br/><br/>
                                <b style=""padding-left: 20px;"">● Trūkumai:</b>
                                <br/>
                                <p style=""padding-left: 40px;""> - MB negali turėti daugiau nei 10 narių.</p>
                                <p style=""padding-left: 40px;""> - Palyginti su UAB, MB gali būti sunkiau pritraukti investicijas dėl mažesnio pasitikėjimo iš investuotojų pusės.</p>
                                <p style=""padding-left: 40px;""> - MB negali vykdyti tam tikrų veiklų, pavyzdžiui, bankininkystės, draudimo ar finansinių paslaugų.</p>
                                <br/><br/>
                                <b>Kada verta rinktis MB?</b>
                                <br/><br/>
                                MB yra puikus pasirinkimas pradedantiesiems verslininkams, smulkaus verslo atstovams, šeimos
                                verslams ar tiems, kurie nori pradėti verslą su ribota atsakomybe ir minimaliomis sąnaudomis.
                                <br/><br/>
                                <b>Steigimo procesas</b>
                                <br/><br/>
                                MB steigimo procesas yra gana paprastas ir apima šiuos pagrindinius žingsnius:
                                <br/><br/>
                                <p style=""padding-left: 20px;"">● Pasirinkti bendrijos pavadinimą ir adresą.</p>
                                <p style=""padding-left: 20px;"">● Parengti bendrijos įstatus.</p>
                                <p style=""padding-left: 20px;"">● Sudaryti steigimo sutartį.</p>
                                <p style=""padding-left: 20px;"">● Įnešti įstatinį kapitalą (minimalus įstatinis kapitalas yra 1 euras).</p>
                                <p style=""padding-left: 20px;"">● Registruoti bendriją Juridinių asmenų registre.</p>
                                <br/>
                                <b>Išvada</b>
                                <br/><br/>
                                Mažoji bendrija yra patraukli ir lanksti verslo forma, suteikianti daug privalumų pradedantiesiems ir smulkaus verslo atstovams."
                        },
                        new Article()
                        {
                            Title = "Viešoji įstaiga: visuomenės labui veikiantis juridinis asmuo",
                            ImageUrl = "https://picsum.photos/800/400?random=3",
                            Description = "Viešoji įstaiga: visuomenės labui veikiantis juridinis asmuo",
                            ButtonText = "Viešoji įstaiga",
                            ButtonType = "regular",
                            IconButtonType = "iconregular",
                            Content = @"<h2>Viešoji įstaiga: visuomenės labui veikiantis juridinis asmuo</h2>
                                Viešoji įstaiga (VšĮ) yra unikalus juridinis asmuo Lietuvoje, kurio pagrindinis tikslas – ne
                                pelno siekimas, o visuomenei naudingos veiklos vykdymas. VšĮ gali būti įsteigta tiek vieno,
                                tiek kelių asmenų, o jos veiklos sritys yra labai įvairios – nuo švietimo ir kultūros iki
                                socialinės rūpybos ir aplinkosaugos.
                                <br/><br/>
                                <b>Kas yra viešoji įstaiga?</b>
                                <br/><br/>
                                VšĮ yra pelno nesiekiantis ribotos civilinės atsakomybės viešasis juridinis asmuo.
                                <br/><br/>
                                <b>VšĮ privalumai</b>
                                <br/><br/>
                                <p style=""padding-left: 20px;"">● VšĮ veikla yra nukreipta į visuomenės gerovės kūrimą, todėl ji dažnai sulaukia palankaus visuomenės ir valstybės požiūrio.</p>
                                <p style=""padding-left: 20px;"">● VšĮ gali gauti paramą iš įvairių šaltinių, įskaitant valstybės ir savivaldybių biudžetus, fondus, įmones ir privačius asmenis.</p>
                                <p style=""padding-left: 20px;"">● VšĮ gali būti taikomos tam tikros mokesčių lengvatos.</p>
                                <p style=""padding-left: 20px;"">● VšĮ dažnai asocijuojasi su skaidrumu, patikimumu ir socialine atsakomybe.</p>
                                <br/><br/>
                                <b>VšĮ trūkumai</b>
                                <br/><br/>
                                <p style=""padding-left: 20px;"">● VšĮ negali skirstyti pelno savo steigėjams ar dalyviams.</p>
                                <p style=""padding-left: 20px;"">● VšĮ veikla yra griežčiau kontroliuojama nei kitų juridinių asmenų.</p>
                                <p style=""padding-left: 20px;"">● VšĮ steigimo ir valdymo procesas gali būti sudėtingesnis nei kitų juridinių asmenų.</p>
                                <br/><br/>
                                <b>VšĮ steigimo procesas</b>
                                <br/><br/>
                                <p style=""padding-left: 20px;"">1. Apibrėžkite VšĮ tikslus, veiklos sritis ir valdymo struktūrą.</p>
                                <p style=""padding-left: 20px;"">2. Parenkite VšĮ įstatus ir steigimo sutartį.</p>
                                <p style=""padding-left: 20px;"">3. Pateikite dokumentus Juridinių asmenų registrui.</p>
                                <p style=""padding-left: 20px;"">4. Gavę registracijos pažymėjimą, galite pradėti vykdyti VšĮ veiklą.</p>
                                <br/><br/>
                                <b>Išvada</b>
                                <br/><br/>
                                Viešoji įstaiga yra unikali ir svarbi juridinio asmens forma Lietuvoje, skirta visuomenei naudingos veiklos vystymui."
                        },
                        new Article()
                        {
                            Title = "Mažoji bendrija ir kiti juridiniai asmenys",
                            ImageUrl = "https://picsum.photos/800/400?random=4",
                            Description = "Mažoji bendrija ir kiti juridiniai asmenys",
                            ButtonText = "Mažoji bendrija ir kiti",
                            ButtonType = "regular",
                            IconButtonType = "iconregular",
                            Content = @"<h2>Mažoji bendrija ir kiti juridiniai asmenys</h2>
                                Lietuvoje verslo steigėjai turi platų juridinių asmenų pasirinkimą, o vienas populiariausių
                                variantų – mažoji bendrija (MB).
                                <br/><br/>
                                <b>Mažoji bendrija (MB)</b>
                                <br/><br/>
                                MB yra ribotos atsakomybės juridinis asmuo, kurio nariai rizikuoja tik įmonės turtu.
                                <br/><br/>
                                <b>● Privalumai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">- Nariai rizikuoja tik įmonės turtu, ne savo asmeniniu.</p>
                                <p style=""padding-left: 20px;"">- Paprastesnis steigimas ir valdymas.</p>
                                <p style=""padding-left: 20px;"">- Lankstus pelno paskirstymas.</p>
                                <p style=""padding-left: 20px;"">- Jei verslas auga, galima lengvai tapti UAB.</p>
                                <p style=""padding-left: 20px;"">- Minimalus įstatinis kapitalas yra tik 1 euras.</p>
                                <br/><br/>
                                <b>● Trūkumai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">- Narių skaičius ribotas iki 10.</p>
                                <p style=""padding-left: 20px;"">- Palyginti su UAB, sunkiau pritraukti investicijas.</p>
                                <p style=""padding-left: 20px;"">- Negalima vykdyti tam tikrų veiklų, pvz., draudimo ar finansinių paslaugų.</p>
                                <br/><br/>
                                <b>Uždaroji akcinė bendrovė (UAB)</b>
                                <br/><br/>
                                UAB yra labiausiai paplitusi juridinio asmens forma Lietuvoje.
                                <br/><br/>
                                <b>● Privalumai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">- Akcininkai rizikuoja tik savo investicijomis.</p>
                                <p style=""padding-left: 20px;"">- Didesnis pasitikėjimas iš investuotojų.</p>
                                <p style=""padding-left: 20px;"">- Nėra apribojimų dėl akcininkų skaičiaus.</p>
                                <p style=""padding-left: 20px;"">- Galimybė išleisti įvairių rūšių akcijas.</p>
                                <br/><br/>
                                <b>● Trūkumai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">- Sudėtingesnis steigimas ir valdymas.</p>
                                <p style=""padding-left: 20px;"">- Griežtesni reikalavimai buhalterinei apskaitai.</p>
                                <p style=""padding-left: 20px;"">- Steigimui reikia didesnio pradinio kapitalo (2500 eurų).</p>
                                <br/><br/>
                                <b>Individuali įmonė (IĮ)</b>
                                <br/><br/>
                                IĮ yra neribotos atsakomybės juridinis asmuo.
                                <br/><br/>
                                <b>● Privalumai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">- Paprastas ir pigus steigimas.</p>
                                <p style=""padding-left: 20px;"">- Paprastesnė buhalterinė apskaita.</p>
                                <p style=""padding-left: 20px;"">- Visiška savininko kontrolė.</p>
                                <br/><br/>
                                <b>● Trūkumai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">- Savininkas rizikuoja visu savo turtu.</p>
                                <p style=""padding-left: 20px;"">- Sunkiau gauti paskolas.</p>
                                <p style=""padding-left: 20px;"">- Mažiau pasitikėjimo iš verslo partnerių.</p>
                                <br/><br/>
                                <b>Išvados</b>
                                <br/><br/>
                                Renkantis juridinio asmens formą verslo pradžiai Lietuvoje, svarbu įvertinti individualius poreikius ir tikslus."
                        },
                        new Article()
                        {
                            Title = "Individuali veikla ar mažoji bendrija?",
                            ImageUrl = "https://picsum.photos/800/400?random=5",
                            Description = "Individuali veikla ar mažoji bendrija?",
                            ButtonText = "Individuali veikla",
                            ButtonType = "regular",
                            IconButtonType = "iconregular",
                            Content = @"<h2>Individuali veikla ar mažoji bendrija?</h2>
                                Lietuvoje pradedantys verslininkai dažnai renkasi tarp dviejų populiariausių verslo formų:
                                individualios veiklos (IDV) ir mažosios bendrijos (MB).
                                <br/><br/>
                                <b>Individuali veikla (IDV): Paprastumas ir lankstumas</b>
                                <br/><br/>
                                IV yra puikus pasirinkimas tiems, kurie nori pradėti verslą greitai ir paprastai.
                                <br/><br/>
                                <b>● Privalumai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">- Greitas ir paprastas steigimas</p>
                                <p style=""padding-left: 20px;"">- Paprasta buhalterinė apskaita</p>
                                <p style=""padding-left: 20px;"">- Mažesni mokesčiai, jei pajamos nedidelės</p>
                                <p style=""padding-left: 20px;"">- Lengvas veiklos nutraukimas</p>
                                <p style=""padding-left: 20px;"">- Galimybė gauti 30% pajamų mokesčio lengvatą pirmaisiais veiklos metais</p>
                                <br/><br/>
                                <b>● Trūkumai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">- Neribota asmeninė atsakomybė (atsakoma visu asmeniniu turtu)</p>
                                <p style=""padding-left: 20px;"">- Mažiau galimybių pritraukti investicijas</p>
                                <p style=""padding-left: 20px;"">- Sunkiau rasti verslo partnerių</p>
                                <br/><br/>
                                <b>Mažoji bendrija (MB): Stabilumas ir augimo galimybės</b>
                                <br/><br/>
                                MB yra ribotos atsakomybės juridinis asmuo, todėl jos nariai rizikuoja tik įmonės turtu.
                                <br/><br/>
                                <b>● Privalumai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">- Ribota asmeninė atsakomybė</p>
                                <p style=""padding-left: 20px;"">- Didesnis pasitikėjimas iš verslo partnerių</p>
                                <p style=""padding-left: 20px;"">- Lengvesnis investicijų pritraukimas</p>
                                <p style=""padding-left: 20px;"">- Galimybė paskirstyti pelną tarp narių</p>
                                <p style=""padding-left: 20px;"">- Paprastesnis perėjimas į UAB</p>
                                <br/><br/>
                                <b>● Trūkumai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">- Sudėtingesnis steigimas ir administravimas</p>
                                <p style=""padding-left: 20px;"">- Sudėtingesnė buhalterinė apskaita</p>
                                <p style=""padding-left: 20px;"">- Didesni mokesčiai, jei pajamos didelės</p>
                                <p style=""padding-left: 20px;"">- Sudėtingesnis veiklos nutraukimas</p>
                                <br/><br/>
                                <b>Išvados</b>
                                <br/><br/>
                                Individuali veikla ir mažoji bendrija turi savo privalumus ir trūkumus, todėl pasirinkimas priklauso nuo konkrečių verslo poreikių ir tikslų."
                        },
                        new Article()
                        {
                            Title = "Individualios veiklos mokesčiai Lietuvoje, išsamus gidas",
                            ImageUrl = "https://picsum.photos/800/400?random=6",
                            Description = "Individualios veiklos mokesčiai Lietuvoje, išsamus gidas",
                            ButtonText = "Individuali veikla",
                            ButtonType = "regular",
                            IconButtonType = "iconregular",
                            Content = @"<h2>Individualios veiklos mokesčiai Lietuvoje: išsamus gidas</h2>
                                Individuali veikla pagal pažymą (IDV) yra patrauklus pasirinkimas pradedantiesiems
                                verslininkams ir laisvai samdomiems specialistams Lietuvoje.
                                <br/><br/>
                                <b>Pagrindiniai mokesčiai</b>
                                <br/><br/>
                                <p style=""padding-left: 20px;"">● <b>Gyventojų pajamų mokestis (GPM):</b> GPM tarifas priklauso nuo jūsų metinių pajamų dydžio ir gali būti nuo 5% iki 15%.</p>
                                <p style=""padding-left: 20px;"">● <b>Privalomojo sveikatos draudimo (PSD) įmokos:</b> Sudaro 6,98% nuo jūsų pajamų.</p>
                                <p style=""padding-left: 20px;"">● <b>Valstybinio socialinio draudimo (VSD) įmokos:</b> VSD įmokų dydis gali būti 12,52% arba 15,52% nuo jūsų pajamų.</p>
                                <br/><br/>
                                <b>Papildomi mokesčiai</b>
                                <br/><br/>
                                <p style=""padding-left: 20px;"">● <b>Pridėtinės vertės mokestis (PVM):</b> Jei jūsų metinės apmokestinamosios pajamos viršija 45 000 eurų, turėsite registruotis PVM mokėtoju.</p>
                                <p style=""padding-left: 20px;"">● <b>Nekilnojamojo turto mokestis:</b> Jei vykdote veiklą, susijusią su nekilnojamuoju turtu.</p>
                                <p style=""padding-left: 20px;"">● <b>Mokesčiai už aplinkos teršimą:</b> Jei jūsų veikla teršia aplinką.</p>
                                <br/><br/>
                                <b>Mokesčių lengvatos</b>
                                <br/><br/>
                                <p style=""padding-left: 20px;"">● <b>Lengvata pirmaisiais veiklos metais:</b> Pirmaisiais metais galite taikyti 5% GPM tarifą, jei jūsų pajamos neviršija 20 000 eurų.</p>
                                <p style=""padding-left: 20px;"">● <b>Lengvatos už mokslinius tyrimus ir eksperimentinę plėtrą (MTEP).</b></p>
                                <br/><br/>
                                <b>Mokesčių deklaravimas ir mokėjimas</b>
                                <br/><br/>
                                Individualios veiklos mokesčiai deklaruojami ir mokami kartą per metus, iki kitų metų gegužės 1 d.
                                <br/><br/>
                                <b>Svarbu žinoti</b>
                                <br/><br/>
                                <p style=""padding-left: 20px;"">● <b>Išlaidos:</b> Vykdant individualią veiklą, galite atskaityti su veikla susijusias išlaidas iš savo pajamų.</p>
                                <p style=""padding-left: 20px;"">● <b>Buhalterinė apskaita:</b> Individualios veiklos vykdytojai neprivalo vesti buhalterinės apskaitos, tačiau rekomenduojama tai daryti.</p>
                                <p style=""padding-left: 20px;"">● <b>Konsultacijos:</b> Jei turite klausimų dėl individualios veiklos mokesčių, kreipkitės į VMI konsultacijų centrą.</p>"
                        },
                        new Article()
                        {
                            Title = "Mažosios bendrijos steigimas",
                            ImageUrl = "https://picsum.photos/800/400?random=7",
                            Description = "Mažosios bendrijos steigimas",
                            ButtonText = "Mažoji bendrija",
                            ButtonType = "regular",
                            IconButtonType = "iconregular",
                            Content = @"<h2>Mažosios bendrijos steigimas</h2>
                                Mažoji bendrija (MB) yra patraukli verslo forma Lietuvoje dėl savo paprastumo, lankstumo ir
                                ribotos atsakomybės.
                                <br/><br/>
                                <b>1. Pasiruošimas steigimui:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">● Pasirinkite unikalų ir įsimintiną MB pavadinimą, kuris atitiktų jūsų veiklos pobūdį.</p>
                                <p style=""padding-left: 20px;"">● Aiškiai apibrėžkite, kokia veikla užsiims jūsų MB.</p>
                                <p style=""padding-left: 20px;"">● Jei MB steigiate su kitais asmenimis, aptarkite ir susitarkite dėl esminių klausimų.</p>
                                <br/><br/>
                                <b>2. Dokumentų rengimas:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">● Jei MB steigia keli asmenys, reikia parengti steigimo sutartį. Jei MB steigia vienas asmuo, pakanka steigimo akto.</p>
                                <p style=""padding-left: 20px;"">● Įstatai yra pagrindinis MB dokumentas, kuriame nustatoma bendrijos teisinė forma, pavadinimas, buveinė ir veiklos tikslai.</p>
                                <br/><br/>
                                <b>3. Registracija Juridinių asmenų registre:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">● <b>Elektroniniu būdu:</b> Registracija atliekama per registrų centro savitarnos sistemą.</p>
                                <p style=""padding-left: 20px;"">● <b>Popieriniu būdu:</b> Dokumentus reikia pateikti registrų centrui tiesiogiai arba paštu.</p>
                                <br/><br/>
                                <b>4. Kiti žingsniai:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">● Įsteigę MB, turėsite atidaryti banko sąskaitą įmonės vardu.</p>
                                <p style=""padding-left: 20px;"">● Po registracijos juridinių asmenų registre, MB turi būti įregistruota VMI kaip mokesčių mokėtoja.</p>
                                <p style=""padding-left: 20px;"">● Jei MB samdys darbuotojus, reikės juos registruoti „Sodroje."
                        },
                        new Article()
                        {
                            Title = "Prisijunk prie universitetas.lt komandos!",
                            ImageUrl = "https://picsum.photos/800/400?random=8",
                            Description = "Prisijunk prie universitetas.lt komandos!",
                            ButtonText = "Prisijunk prie komandos",
                            ButtonType = "regular",
                            IconButtonType = "iconregular",
                            Content = @"<h2>Ieškome entuziastingų bendraminčių prisijungti prie universitetas.lt komandos!</h2>
                                Ar esate pasiruošę padėti kitiems įgyvendinti savo verslo svajones?
                                <br/><br/>
                                Universitetas.lt yra daugiau nei tiesiog informacijos šaltinis. Mes esame bendruomenė,
                                kurioje verslumo dvasia susijungia su noru dalintis žiniomis.
                                <br/><br/>
                                <b>Mes siūlome:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">● <b>Galimybę daryti įtaką:</b> Tavo indėlis padės formuoti tūkstančių skaitytojų verslo keliones.</p>
                                <p style=""padding-left: 20px;"">● <b>Bendradarbiavimą:</b> Prisijunk prie dinamiškos komandos, kurioje visos idėjos bus išgirstos.</p>
                                <p style=""padding-left: 20px;"">● <b>Asmenybės augimą:</b> Tobulėk kartu su mumis, gilink savo žinias verslo srityje.</p>
                                <p style=""padding-left: 20px;"">● <b>Pasitikėjimą:</b> Tavo darbai bus pripažinti ir įvertinti mūsų platformoje.</p>
                                <br/><br/>
                                <b>Ko mes ieškome:</b>
                                <br/>
                                <p style=""padding-left: 20px;"">● <b>Aistringų rašytojų:</b> Žmonių, kurie geba perteikti sudėtingas verslo koncepcijas aiškiai ir įdomiai.</p>
                                <p style=""padding-left: 20px;"">● <b>Patyrusių verslininkų:</b> Asmenų, kurie gali pasidalinti savo sėkmėmis ir iššūkiais.</p>
                                <p style=""padding-left: 20px;"">● <b>Kūrybingų mąstytojų:</b> Žmonių, kurie gali pasiūlyti naujų idėjų ir požiūrių į verslo pasaulį.</p>
                                <p style=""padding-left: 20px;"">● <b>Komandos žaidėjų:</b> Žmonių, kurie nori dirbti kartu, siekdami bendro tikslo.</p>
                                <br/><br/>
                                <b>Prisijunk prie mūsų kelionės!</b>
                                <br/><br/>
                                Jeigu esi pasiruošęs prisidėti prie mūsų misijos, kviečiame susisiekti <b>info@universitetas.lt</b>."
                        },
                        new Article()
                        {
                            Title = "Individuali veikla pagal pažymą (IDV): dažniausiai užduodami klausimai ir atsakymai",
                            ImageUrl = "https://picsum.photos/800/400?random=9",
                            Description = "Individuali veikla pagal pažymą (IDV): dažniausiai užduodami klausimai ir atsakymai",
                            ButtonText = "Individuali veikla",
                            ButtonType = "regular",
                            IconButtonType = "iconregular",
                            Content = @"<h2>Individuali veikla pagal pažymą (IDV): dažniausiai užduodami klausimai ir atsakymai</h2>
                                Individuali veikla pagal pažymą (IDV) yra populiarus pasirinkimas tarp pradedančiųjų
                                verslininkų, laisvai samdomų specialistų ir smulkaus verslo atstovų Lietuvoje.",
                            QnAs = new List<QnA>
                            {
                                new QnA { Question = "Kas yra individuali veikla pagal pažymą (IDV)?", Answer = "IVP yra savarankiška ekonominė veikla, kurią asmuo vykdo savo vardu ir atsako už ją visu savo turtu. Norint vykdyti IDV, reikia gauti pažymą iš Valstybinės mokesčių inspekcijos (VMI)." },
                                new QnA { Question = "Kaip įregistruoti IDV?", Answer = "IDV registracija yra paprasta ir gali būti atlikta internetu per VMI elektroninę sistemą (Mano VMI). Jums reikės pateikti asmens duomenis, veiklos rūšį ir pradžios datą." },
                                new QnA { Question = "Kokius mokesčius moka IDV vykdytojai?", Answer = "IDV vykdytojai moka gyventojų pajamų mokestį (GPM) ir privalomojo sveikatos draudimo (PSD) įmokas. Jei pajamos viršija nustatytą ribą, gali tekti mokėti ir valstybinio socialinio draudimo (VSD) įmokas." },
                                new QnA { Question = "Ar IDV vykdytojai privalo registruotis PVM mokėtojais?", Answer = "Ne visi IDV vykdytojai privalo registruotis PVM mokėtojais. PVM mokėtoju reikia registruotis, jei per paskutinius 12 mėnesių pajamos iš PVM apmokestinamos veiklos viršija 45 000 eurų." },
                                new QnA { Question = "Kokias veiklas galima vykdyti pagal IDV pažymą?", Answer = "Daugelį veiklų galima vykdyti pagal IDV pažymą, tačiau yra ir tam tikrų apribojimų. Pavyzdžiui, negalima vykdyti veiklos, kuriai reikalinga licencija ar leidimas (pvz., alkoholio prekyba, vaistų gamyba ir pan.)." },
                                new QnA { Question = "Ar galima samdyti darbuotojus vykdant IDV?", Answer = "Taip, IDV vykdytojai gali samdyti darbuotojus, tačiau jiems taikomi tam tikri apribojimai ir reikalavimai." },
                                new QnA { Question = "Ar galima vykdyti kelias veiklas pagal vieną IDV pažymą?", Answer = "Taip, galima vykdyti kelias veiklas pagal vieną IDV pažymą, jei jos yra susijusios. Jei veiklos yra nesusijusios, gali reikėti gauti atskiras pažymas kiekvienai veiklai." },
                                new QnA { Question = "Kaip nutraukti IDV?", Answer = "IDV nutraukimas yra gana paprastas procesas. Jums reikia informuoti VMI apie veiklos nutraukimą ir pateikti metinę pajamų deklaraciją." },
                                new QnA { Question = "Kur galima rasti daugiau informacijos apie IDV?", Answer = "Daugiau informacijos apie IVP galite rasti VMI interneto svetainėje arba kreiptis į VMI konsultacijų centrą." },
                                new QnA { Question = "Ar verta rinktis IDV?", Answer = "IDV yra puikus pasirinkimas, jei norite pradėti verslą greitai ir paprastai, tačiau svarbu įvertinti ir šios veiklos formos trūkumus, tokius kaip neribota atsakomybė." }
                            }
                        }
                    );
                }

                if (!context.Adverts.Any())
                {
                    context.Adverts.AddRange(
                        new Advert
                        {
                            JobTitle = "Front-End programuotojas (-a)",
                            JobDescription = "Ieškome patyrusio Front-End programuotojo darbui su React ir moderniomis web technologijomis.",
                            PositionName = "Junior Front-End Developer",
                            PositionDescription = @"<b>Atsakomybės:</b>
                                <br/>
                                - React aplikacijų kūrimas ir palaikymas
                                <br/>           
                                - UI komponentų kūrimas pagal dizaino sistemą
                                <br/> 
                                - Bendradarbiavimas su back-end komanda
                                <br/>

                                <b>Reikalavimai:</b>
                                <br/> 
                                - Patirtis su React
                                <br/> 
                                - Geri HTML, CSS, JavaScript įgūdžiai
                                <br/> 
                                - Patirtis su REST API",
                            Email = "hr@universitetas.lt",
                            PhoneNumber = "+37060000001",
                            City = "Kaunas",
                        },
                        new Advert
                        {
                            JobTitle = "Junior Back-End programuotojas (-a)",
                            JobDescription = "Ieškome .NET programuotojo, kuris prisijungs prie mūsų augančios komandos.",
                            PositionName = "Back-End Developer (.NET)",
                            PositionDescription = @"<b>Atsakomybės:</b>
                            <br/>
                            - API kūrimas su ASP.NET Core
                            <br/>
                            - Darbas su SQL duomenų bazėmis
                            <br/>
                            - Sistemos architektūros tobulinimas
                            <br/>

                            <b>Reikalavimai:</b>
                            <br/>
                            - Patirtis su ASP.NET Core
                            <br/>
                            - Entity Framework žinios
                            <br/>
                            - Patirtis su MS SQL",
                            Email = "hr@universitetas.lt",
                            PhoneNumber = "+37060000002",
                            City = "Kaunas",
                        },
                        new Advert
                        {
                            JobTitle = "IT Projektų vadovas (-ė)",
                            JobDescription = "Ieškome projektų vadovo, kuris koordinuotų IT projektus ir užtikrintų jų sėkmingą įgyvendinimą.",
                            PositionName = "IT Project Manager",
                            PositionDescription = @"<b>Atsakomybės:</b>
                            <br/>
                            - Projektų planavimas ir valdymas
                            <br/>
                            - Komunikacija su klientais
                            <br/>
                            - Terminų ir biudžeto kontrolė
                            <br/>

                            <b>Reikalavimai:</b>
                            <br/>
                            - Patirtis IT projektų valdyme
                            <br/>
                            - Puikūs komunikacijos įgūdžiai
                            <br/>
                            - Agile/Scrum žinios",
                            Email = "hr@universitetas.lt",
                            PhoneNumber = "+37060000003",
                            City = "Kaunas",
                        },
                        new Advert
                        {
                            JobTitle = "Team Lead (Programuotojų komandos vadovas)",
                            JobDescription = "Ieškome patyrusio programuotojo, kuris galėtų vadovauti komandai ir priimti techninius sprendimus.",
                            PositionName = "Team Lead",
                            PositionDescription = @"<b>Atsakomybės:</b>
                            <br/>
                            - Techninių sprendimų priėmimas
                            <br/>
                            - Komandos mentoringas
                            <br/>
                            - Kodo peržiūros (code review)
                            <br/>
                            - Architektūros planavimas
                            <br/>

                            <b>Reikalavimai:</b>
                            <br/>
                            - 5+ metų programavimo patirtis
                            <br/>
                            - Patirtis vadovaujant komandai
                            <br/>
                            - Geri komunikacijos įgūdžiai",
                            Email = "hr@universitetas.lt",
                            PhoneNumber = "+37060000004",
                            City = "Kaunas",
                        },
                        new Advert
                        {
                            JobTitle = "Programinės įrangos testuotojas (-a)",
                            JobDescription = "Ieškome kruopštaus testuotojo, kuris užtikrintų kuriamos programinės įrangos kokybę.",
                            PositionName = "QA Tester",
                            PositionDescription = @"<b>Atsakomybės:</b>
                            <br/>
                            - Rankinis ir automatinis testavimas
                            <br/>
                            - Testavimo scenarijų kūrimas
                            <br/>
                            - Klaidų registravimas ir sekimas
                            <br/>

                            <b>Reikalavimai:</b>
                            <br/>
                            - Patirtis testavime
                            <br/>
                            - Supratimas apie SDLC
                            <br/>
                            - Patirtis su testavimo įrankiais",
                            Email = "hr@universitetas.lt",
                            PhoneNumber = "+37060000005",
                            City = "Kaunas",
                        }
                    );
                }

                context.SaveChanges();
            }
        }
    }
}
