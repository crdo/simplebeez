import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    const [activeTab, setActiveTab] = useState(1)
    const [expand, setExpand] = useState(false)
    return (
        <div className="spacing-wrapper" id="about">
            <div className="card">
                <div className="container">
                    <div className="about">
                        <h1>O nás</h1>
                        <nav>
                            <ul>
                                <li className={activeTab == 1 && "active"} onClick={() => setActiveTab(1)}>Naše vize</li>
                                <li className={activeTab == 2 && "active"} onClick={() => setActiveTab(2)}>Naše mise</li>
                                <li className={activeTab == 3 && "active"} onClick={() => setActiveTab(3)}>Proč se na nás obrátit</li>
                            </ul>
                        </nav>
                        {activeTab == 1 && <div className="tab">
                            <h2>Kdo jsme</h2>
                            <p>Jsme tým lidí, které i přes rozdílné zájmy, vzdělání a profesní historii spojuje stejná vize a nadšení pomáhat firmám a hlavně jejich lidem v
                        tom, aby jejich práce byla jednodušší, chytřejší a smysluplná. Je to právě jedinečná kombinace naší vize, myšlení a zkušeností, která, jak věříme, umožní jednotlivcům i týmům být lepší v tom, co dělají.</p>
                            <h2>Optimističtí realisté</h2>
                            <p>Jsme životní optimisté a věříme, že i mnohdy zaběhlé a fungující pracovní postupy jde dělat lépe. Jednoduché otázky, jako „proč to děláte
                        takhle?“ a „dává to pořád smysl?“ dokážou divy. Zlepšení mnohdy není jen o technologii. Právě naopak. Neustále musíme hledat vhodnou kombinaci a vyváženost mezi lidmi, procesem a technologií.</p>
                            <h2>Pravidelnost vítězí nad intenzitou</h2>
                            <p>Jsme sportovci, takže víme, že i malý kamínek v botě po čase ucítíte - jak je nesnesitelný, jak se zvětšuje - a bude vás brzdit v běhu.
                            Dokud nezastavíte, nesundáte botu a onen malý kamínek nevytřepete, tak nezrychlíte. Ba co víc, možná ani nedoběhnete. Jen
                        dlouhodobý a systematický rozvoj pod odborným vedením může zaručit kýžený efekt. Energie a odhodlání jsou důležité předpoklady,narážejí však na nesystematičnost, nekonzistenci a nahodilost, které je ubíjí.</p>
                            <h2>Práce musí mít smysl</h2>
                            <p>Jsme otcové od rodin, kteří nevěří v klišé „work-life balance“. Žijeme jen jeden život a dlouhodobě nejde kompenzovat jednu frustraci jiným
                        uspokojením. I naše práce musí mít smysl - a i kdyby ji neměla zrovna dnes, musíme aktivně a systematicky pracovat na změně. Totéž platí i o našem soukromém životě.</p>
                        </div>}
                        {activeTab == 2 && <div className="tab">
                            <h2>Realita není úplně růžová</h2>
                            <p>Podle výzkumu společnosti Gartner, Inc. z roku 2019 (Hallmarks of winning finance transformations), <b>pouze 35 % business partnerů</b>,
                            myšleno interních oddělení ve firmě, <b>je spokojeno s podporou a přínosem</b>, který jim poskytuje finanční oddělení. My v SIMPLEBEEZ
                            vidíme příležitost především ve zlepšení spolupráce a propojení financí se všemi aktivitami orientovanými na zákazníka. Finance mají
                        před sebou velkou výzvu, jelikož musí udržet současnou kvalitu v oblasti shody (compliance) a k tomu ještě výrazně přidat na znalosti a podpoře ostatních klíčových oblastí firmy.</p>
                            <p>Současně, Gartner dále uvádí, že <b>7 z 10 projektů transformace financí</b>, jak uvedeno výše, <b>je neúspěšných</b>. Z našeho pohledu nejde
                            jen o neefektivní využití zdrojů společností, ztracené příležitosti, ale převážně pak o frustraci zaměstnanců, dodavatelů řešení a
                        nenaplněná očekávání vedení a majitelů firem. Bohužel sami z vlastních zkušeností můžeme tento trend potvrdit, což je pro nás všechny do budoucna velká výzva.</p>
                            <h2>Lépe, chytřeji a smysluplně</h2>
                            <p>Pro nás tento trend byl a je jeden z hlavních impulzů založení SIMPLEBEEZ. Naši roli nevidíme pouze v eliminaci podobných neúspěchů
                        důrazem na veškeré aspekty těchto transformací, ale i v napomáhání vytvářet nové příležitosti, zlepšování efektivity a finančních výsledků a zavádění nových inovativních řešení. Zkrátka dělat věci lépe, chytřeji a smysluplněji.</p>
                        </div>}
                        {activeTab == 3 && <div className="tab">
                            <h2>Zajišťujeme udržitelnou rovnováhu mezi investováním do všech 3 pilířů: lidí, procesů a technologií.</h2>
                            <ul>
                                <li className="triangle">Umíme pojmenovat a specifikovat příležitosti a koncepty firemních transformací.</li>
                                <li className="triangle">Navrhujeme řešení (nejen technologické) na míru, které podpoří nové služby a inovativní postupy.</li>
                                <li className="triangle">Řídíme či podporujeme Vaše týmy během potřebné doby či v rámci transformačních projektů.</li>
                                <li className="triangle">Poskytujeme na výsledek orientované experty s holistickým přístupem a zaměřením na přínos pro firmu jako celek.</li>
                                <li className="triangle">Vytváříme prostředí pro koncepční propojování financí, byznysu a IT.</li>
                            </ul>
                        </div>}
                    </div>
                    <div className="profile-list">
                        <div className="profile">
                            <div className="profile-img"><img src="/martin.jpg" alt="Martin Prášek" /></div>
                            <div className="profile-text">
                                <h3>Martin Prášek, partner a spoluzakladatel <a href="https://www.linkedin.com/in/martin-prášek-cma-8109ba18/"><FontAwesomeIcon className="linkedin" icon={faLinkedinIn} /></a></h3>
                                <p>Martin má na starosti služby především pro podporu inovativních řešení, centralizace back-office funkcí a digitalizace financí a
                                souvisejících procesů. Jeho osobní specializací jsou <b>implementace ERP a EPM</b> řešení, <b>procesní optimalizace</b>, návrhy a realizace
                                řešení pro P2P (řízení výdajů firmy), procesní workflow či aplikace RPA. Pomůže Vám také s vybudováním centra sdílených služeb či
                                s <b>funkčním designem operativních nástrojů</b> pro automatizaci nejen financí.</p>
                                <p>Martin pracoval více než 15 let v mezinárodním prostředí. Je přesvědčen, že přínos projektů či inovativních řešení se měří tím, zda splňuje
                                očekávání většiny lidí a zda lidé lépe spolupracují a tvoří hodnoty. Řídil mezinárodní týmy v rámci desítek transformačních projektů s
                                vazbou na finance. Stál také u zrodu a fungování globálního centra sdílených služeb, a to se zákazníky z celého světa. {!expand && <a onClick={() => setExpand(!expand)}>{expand ? 'Méně' : 'Více'}</a>}</p>
                                {expand && <><p>SIMPLEBEEZ spoluzaložil s vizí úzkého partnerství s klientem a přímou rolí na jeho transformačních iniciativách. Chce poskytovat firmám
                                ucelené služby od identifikace příležitostí, definování konceptu transformace, poskytnutí chybějící expertízy, návrhu konkrétních řešení až
                                po jejich zavedení.</p>
                                    <p>“Každý máme svůj profesní či životní příběh, lidské emoce, očekávání a to, co je pro nás dnes a do budoucna důležité a méně důležité.
                                    Vybudovat něco inovativního, nepředstavitelného, z principu složitého, ale současně přínosného a obdivuhodného, není o konkrétních
                                    nástrojích či technologických řešeních, jakých k tomu využít. Je to o spojení různých lidí a rozvinutí jejich skutečného potenciálu a energie
                                směrem ke smysluplnému cíli, který je každému jasný a ke kterému budou společně táhnout.”</p>
                                    <p>Rád tráví hodiny na jednom ze svých tří kol a sbírá energii z nových míst. Rád bere sportovní výzvy za své, protože posouvat své hranice
                                    ho strašně baví. Většinu času rád tráví se svými třemi dětmi a partnerkou. Když čas umožní, relaxuje tvorbou elektronické hudby ve svém
                                    domácím studiu či focením. {expand && <a onClick={() => setExpand(!expand)}>{expand ? 'Méně' : 'Více'}</a>}</p>
                                </>}
                            </div>
                        </div>
                        <div className="profile">
                            <div className="profile-img">
                                <img src="/david.jpg" alt="David Štěpán" />
                            </div>
                            <div className="profile-text">
                                <h3>David Štěpán, partner a spoluzakladatel <a href="https://www.linkedin.com/in/david-stepan-fcca-2708661/"><FontAwesomeIcon className="linkedin" icon={faLinkedinIn} /></a></h3>
                                <p>David pomáhá firmám s transformací financí a vedením lidí. David za posledních více než 15 let pracoval nejen v ČR ale i v Austrálii,
                                Rumunsku či Bulharsku na různých pozicích v mezinárodních financích. Aby se pustil do podnikání v SIMPLEBEEZ, zanechal svou roli
                                CFO pro soukromou zahraniční televizi. Od auditu a účetních standardů se David přirozenou cestou posunul k operativě, <b>řídil krizové
                            projekty, restrukturalizace firem</b>, vymýšlel a <b>zaváděl nové skupinové postupy a systémy</b>.</p>
                                <p>Jako rozený optimista David nachází inspiraci všude kolem sebe. “Každá dobrá myšlenka stojí za to, aby se nad ní člověk zamyslel a
                                začal měnit věci k lepšímu, i kdyby to vyžadovalo krátkodobou nejistotu a vystoupení z komfortní zóny.” Takové přesvědčení a energii
                                vkládá David do SIMPLEBEEZ. ”Budu rád, když se najdou takoví, kteří se chtějí posunout dál a dají právě nám šanci být při této jejich
                                proměně.” {!expand && <a onClick={() => setExpand(!expand)}>{expand ? 'Méně' : 'Více'}</a>}</p>
                                {expand && <>
                                    <p>„Pro mě byla vždy efektivní komunikace a důvěra mezi lidmi klíčová. Excel je možná skvělý analytický nástroj, ale nelze se za něj
                                    schovávat. Hlavně ve financích. Abychom byli lepší, musíme mít všichni jasno, kam kráčíme a proč. No a pak to teprve může začít
                            finančně plánovat a řídit.“</p>
                                    <p>David je přesvědčen, že tradiční budget v dnešní době výrazně naráží na své limity, tak jako tradiční manažerský přístup “příkaz-kontrola”.
                            Proto se věnuje principům Beyond Budgetingu, o kterých neváhá mluvit při jakémkoli setkání.</p>
                                    <p>David rád jezdí na všem co má dvě kola, takže ho můžete potkat na kole ve městě, na horách, nebo v zahraničí na motorce se stanem,
                                    spacákem a foťákem, jak se kochá místní přírodou. “Sport mě mnoho naučil a přinesl mi inspiraci, nadšení, povinnost, radost, individuální
                                    odpovědnost i týmovou hru. Přesto je moje manželka a dvě dcery to nejlepší, co mě na tomto světě potkalo.” {expand && <a onClick={() => setExpand(!expand)}>{expand ? 'Méně' : 'Více'}</a>}</p>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .about {
                padding: 20px 0;
            }
            h3 {
                font-size: 22px;
                margin-top: 0;
            }
            h3 a {
                vertical-align: middle;
            }
            a {
                color: #f4ae9c;
                cursor: pointer;
            }
            .profile-text :global(.linkedin) {
                width: 22px;
                color: #f4ae9c;
                margin-left: 10px;
            }
            .profile {
                display: flex;
                flex-direction: column;
                padding-bottom: 30px;
            }
            .profile-list {
                padding-bottom: 20px;
            }
            .profile-img {
                flex: 0 0 35%;
                margin-bottom: 30px;
                
            }
            .profile-text {
                flex: 0 0 65%;
                background: #393939;
                color: white;
                padding: 40px;
            }
            .profile-text p {
                text-align: justify;
            }
            img {
                min-height: 100%;
                min-width: 100%;
                max-width: 100%;
                -o-object-fit: cover;
                object-fit: cover;
            }
            nav ul {
                display: flex;
                background: black;
                color: white;
                margin-bottom: 30px;
            }
            nav li {
                margin: 20px 15px;
                font-size: 17px;
                cursor: pointer;
            }

            @media (min-width: 1024px) {
                nav li {
                    margin: 20px;
                }
                .profile {
                    flex-direction: row;
                }

                .profile-img {
                    margin-bottom: 0;
                }
                .profile-text {
                    margin-left: 20px;
                }
            }
            .active {
                position: relative;
            }

            .active:after, nav li:hover:after {
                content: '';
                display: block;
                position: absolute;
                bottom: -2px;
                height: 2px;
                width: 100%;
                background: #f4ae9c;
            }

            .tab {
                padding: 40px;
                background-color: #dedede;
            }

            .tab h2 {
                margin-top: 0;
                margin-bottom: 10px;
                font-size: 20px;
            }

            .tab p {
                margin-top: 0;
                margin-bottom: 20px;
            }
        `}</style>
        </div>
    )
}