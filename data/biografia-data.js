/**
 * DANTE ALIGHIERI - Dati Biografici Completi
 * Timeline dettagliata della vita del Sommo Poeta
 */

const biografiaData = {
    eras: [
        {
            period: "1265 - 1283",
            title: "Infanzia e Giovinezza a Firenze",
            events: [
                {
                    year: "1265",
                    period: "Maggio - Giugno",
                    title: "Nascita di Durante degli Alighieri",
                    description: "Dante nasce a Firenze, nel quartiere di San Martino del Vescovo, in una famiglia della piccola nobiltà guelfa. Il padre, Alighiero di Bellincione, è un cambiavalute; la madre, Bella degli Abati, proviene da una famiglia ghibellina. Il nome completo è Durante, poi abbreviato in Dante. La data esatta della nascita è incerta, ma è compresa tra il 14 maggio e il 13 giugno 1265, quando il Sole si trovava nella costellazione dei Gemelli, come Dante stesso ricorderà nel Paradiso.",
                    quote: "L'aiuola che ci fa tanto feroci",
                    source: "Paradiso, XXII, 151"
                },
                {
                    year: "1266",
                    title: "Battaglia di Benevento",
                    description: "La battaglia di Benevento segna la definitiva sconfitta degli Svevi in Italia. Carlo I d'Angiò, chiamato dal papa Clemente IV, sconfigge Manfredi, figlio naturale di Federico II. Questo evento consolida il dominio guelfo in Toscana e a Firenze, creando il contesto politico in cui Dante crescerà. La vittoria guelfa assicura alla famiglia Alighieri, di parte guelfa, una posizione relativamente stabile nella società fiorentina."
                },
                {
                    year: "1267",
                    period: "Circa",
                    title: "Morte della madre Bella",
                    description: "Dante perde la madre Bella degli Abati in tenera età, probabilmente intorno ai due anni. Questo lutto precoce segnerà profondamente la sua sensibilità. Il padre Alighiero si risposerà poco dopo con Lapa di Chiarissimo Cialuffi, dalla quale avrà altri figli: Francesco e Tana (Gaetana). Dante avrà anche una sorella, molto probabilmente dal primo matrimonio del padre."
                },
                {
                    year: "1274",
                    period: "1° Maggio",
                    title: "Primo incontro con Beatrice",
                    description: "Durante una festa di Calendimaggio, il giovane Dante, di quasi nove anni, incontra per la prima volta Beatrice Portinari, figlia del banchiere Folco Portinari, anch'ella di circa nove anni. Questo incontro, descritto nella Vita Nova, segna l'inizio dell'amore che dominerà tutta la vita e l'opera di Dante. Beatrice appariva vestita di rosso sangue ('sanguigno'), colore che simboleggia la carità e l'amore divino.",
                    quote: "Apparve vestita di nobilissimo colore, umile e onesto, sanguigno, cinta e ornata a la guisa che a la sua giovanissima etade si convenia.",
                    source: "Vita Nova, II"
                },
                {
                    year: "1277",
                    period: "9 Febbraio",
                    title: "Promessa di matrimonio con Gemma Donati",
                    description: "All'età di circa dodici anni, Dante viene promesso in sposo a Gemma di Manetto Donati, appartenente a una delle più importanti famiglie guelfe di Firenze. I Donati sono imparentati con i Cerchi, un'altra potente famiglia, e questo matrimonio combinato ha evidenti motivazioni politiche e patrimoniali. Il contratto dotale viene stipulato formalmente, anche se il matrimonio sarà celebrato solo anni dopo."
                },
                {
                    year: "1280",
                    period: "Circa",
                    title: "Inizio degli studi",
                    description: "Dante inizia la sua formazione culturale, studiando probabilmente presso la scuola conventuale di Santa Croce, tenuta dai Francescani, o presso Santa Maria Novella, dei Domenicani. Impara la grammatica latina, la retorica e la logica (il Trivio), poi l'aritmetica, la geometria, la musica e l'astronomia (il Quadrivio). Studia i classici latini, in particolare Virgilio, che diventerà la sua guida ideale."
                },
                {
                    year: "1282",
                    title: "I Priori delle Arti",
                    description: "A Firenze viene istituito il governo dei Priori delle Arti, un organo collegiale formato da sei rappresentanti delle principali corporazioni artigiane (Arti Maggiori). Questo sistema di governo comunale sarà quello in cui Dante stesso opererà politicamente. Il giovane Dante cresce quindi in una città in fermento politico, dove il potere passa progressivamente dalla nobiltà magnatizia alla borghesia mercantile."
                },
                {
                    year: "1283",
                    period: "Primavera",
                    title: "Secondo incontro con Beatrice",
                    description: "Nove anni dopo il primo incontro, Dante rivede Beatrice che, vestita di bianco tra due gentildonne, lo saluta per la prima volta. Questo saluto ('salute') ha per Dante un significato mistico: è insieme salvezza e beatitudine. L'effetto è tale che Dante deve ritirarsi nella sua camera, dove ha una visione durante il sonno che descriverà nel primo sonetto della Vita Nova. Da questo momento, l'amore per Beatrice assume una dimensione sempre più spirituale.",
                    quote: "Quando ella apparia da parte alcuna, per la speranza de la mirabile salute nullo nemico mi rimanea, anzi mi giugnea una fiamma di caritade.",
                    source: "Vita Nova, XI"
                }
            ]
        },
        {
            period: "1283 - 1290",
            title: "La Giovinezza Poetica e l'Amore per Beatrice",
            events: [
                {
                    year: "1283",
                    period: "Dopo il saluto",
                    title: "Primo sonetto: 'A ciascun'alma presa'",
                    description: "Dopo la visione seguita al saluto di Beatrice, Dante compone il suo primo sonetto documentato, 'A ciascun'alma presa e gentil core'. Lo invia ai 'fedeli d'Amore', i poeti del tempo, chiedendo l'interpretazione della visione. Tra coloro che rispondono c'è Guido Cavalcanti, che diventerà il 'primo amico' di Dante. Questo sonetto segna l'ingresso ufficiale di Dante nella cerchia dei poeti stilnovisti fiorentini.",
                    quote: "A ciascun'alma presa e gentil core / nel cui cospetto ven lo dir presente, / in ciò che mi rescrivan suo parvente, / salute in lor segnor, cioè Amore.",
                    source: "Vita Nova, III"
                },
                {
                    year: "1284",
                    title: "Morte del padre Alighiero",
                    description: "Dante perde il padre Alighiero, rimanendo orfano di entrambi i genitori prima dei vent'anni. Come primogenito maschio, eredita la responsabilità della famiglia e del modesto patrimonio paterno. Da questo momento deve gestire gli affari familiari, inclusi alcuni piccoli prestiti e proprietà. Nonostante le responsabilità, continua a dedicarsi agli studi e alla poesia, mantenendo stretti rapporti con la cerchia degli stilnovisti."
                },
                {
                    year: "1285",
                    period: "Circa",
                    title: "Matrimonio con Gemma Donati",
                    description: "Dante sposa Gemma Donati, formalizzando l'accordo stipulato anni prima. Dal matrimonio nasceranno almeno tre figli certi: Jacopo, Pietro e Antonia (che diventerà suora col nome di Beatrice). È possibile che vi sia stato anche un quarto figlio, Giovanni. Il matrimonio è un'unione di convenienza secondo gli usi del tempo, e Gemma non apparirà mai nelle opere di Dante. Dopo l'esilio del poeta, Gemma rimarrà a Firenze con i figli."
                },
                {
                    year: "1285",
                    title: "Amicizia con Guido Cavalcanti",
                    description: "Si consolida l'amicizia con Guido Cavalcanti (1255-1300), che Dante definirà 'il primo de li miei amici'. Cavalcanti è il maggiore esponente dello Stil Novo fiorentino, poeta e filosofo di tendenze averroiste. La loro amicizia letteraria è profonda: si scambiano sonetti e discutono di poesia e filosofia. Cavalcanti è anche figura politica di spicco tra i Guelfi Bianchi. Dante lo porrà tra i Golosi nell'Inferno per la sua incredulità nella vita eterna.",
                    quote: "Guido, i' vorrei che tu e Lapo ed io / fossimo presi per incantamento / e messi in un vasel ch'ad ogni vento / per mare andasse al voler vostro e mio.",
                    source: "Rime, LII"
                },
                {
                    year: "1286",
                    title: "Le 'Donne dello schermo'",
                    description: "Per nascondere il suo amore per Beatrice e proteggerla dalle maldicenze, Dante finge di amare altre donne, che chiama 'donne dello schermo'. Scrive poesie apparentemente dedicate a loro, ma in realtà pensando a Beatrice. Questa simulazione è descritta nella Vita Nova e riflette la concezione cortese dell'amore segreto. Tuttavia, le voci su questi amori fittizi raggiungeranno Beatrice, che negherà a Dante il suo saluto."
                },
                {
                    year: "1287",
                    title: "Soggiorno a Bologna",
                    description: "Dante trascorre un periodo a Bologna, probabilmente per completare la sua formazione presso lo Studio (l'Università). Bologna è il centro culturale più importante dell'Italia centro-settentrionale, famoso per gli studi di diritto e retorica. Qui Dante approfondisce la conoscenza della poesia provenzale e dei rimatori della scuola siciliana. Entra in contatto con la vivace cultura bolognese e conosce altri poeti e intellettuali."
                },
                {
                    year: "1287",
                    title: "Beatrice nega il saluto",
                    description: "A causa delle voci sulla 'donna dello schermo', Beatrice nega il suo saluto a Dante. Questo è per il poeta una crisi profondissima, perché nel saluto di Beatrice risiedeva la sua 'beatitudine'. La perdita del saluto lo porta a una riflessione sulla natura dell'amore: decide che la sua felicità non può dipendere da qualcosa che può essergli negato, ma deve risiedere nelle parole stesse con cui celebra Beatrice. Nasce così la poetica della 'lode'.",
                    quote: "Io dico che pensando lo suo mirabile ed eccelso valore, propuosi di pigliar per matera del mio parlare sempre mai quello che fosse loda di questa gentilissima.",
                    source: "Vita Nova, XVIII"
                },
                {
                    year: "1289",
                    period: "11 Giugno",
                    title: "Battaglia di Campaldino",
                    description: "Dante partecipa come 'feditore a cavallo' (cavaliere nella prima linea d'urto) alla battaglia di Campaldino, dove i Guelfi fiorentini sconfiggono i Ghibellini aretini guidati dal vescovo Guglielmino degli Ubertini. È una delle esperienze più intense della vita di Dante: la violenza della mischia, il terrore, i morti. Tra i caduti ghibellini c'è Buonconte da Montefeltro, che Dante ricorderà nel Purgatorio. La battaglia segna la definitiva supremazia guelfa in Toscana.",
                    quote: "Io fui nel luogo là 've l'Arno torce, / l'abate d'Aquileia che m'aveva / messo per quella battaglia a quel varco.",
                    source: "Lettera perduta, citata da Leonardo Bruni"
                },
                {
                    year: "1289",
                    period: "Agosto",
                    title: "Assedio di Caprona",
                    description: "Poco dopo Campaldino, Dante partecipa all'assedio del castello di Caprona, presso Pisa. La rocca viene presa dai Guelfi fiorentini e lucchesi. Dante ricorderà questo episodio nell'Inferno, quando descrive la paura dei diavoli della quinta bolgia: paragona il suo timore a quello della guarnigione pisana che, uscendo con l'accordo di avere salva la vita, deve passare tra i nemici armati.",
                    quote: "Così vid'io già temer li fanti / ch'uscivan patteggiati di Caprona, / veggendo sé tra nemici cotanti.",
                    source: "Inferno, XXI, 94-96"
                },
                {
                    year: "1290",
                    period: "8 Giugno",
                    title: "Morte di Beatrice",
                    description: "Beatrice Portinari muore a soli ventiquattro anni. Le cause della morte non sono note con certezza, forse un parto difficile o una malattia. Dante è devastato dal dolore. Nella Vita Nova descriverà la propria sofferenza e le visioni che ha durante la malattia successiva. Da questo momento Beatrice non è più solo la donna amata, ma diventa progressivamente simbolo della teologia, della grazia divina, della salvezza stessa. Sarà la guida di Dante nel Paradiso.",
                    quote: "Quomodo sedet sola civitas plena populo! facta est quasi vidua domina gentium.",
                    source: "Vita Nova, XXVIII (citando Geremia)"
                },
                {
                    year: "1290",
                    period: "Dopo Giugno",
                    title: "La crisi e la 'donna gentile'",
                    description: "Dopo la morte di Beatrice, Dante attraversa una profonda crisi spirituale. Per un periodo, trova consolazione in una 'donna gentile' che lo guarda con pietà dalla finestra. Questo episodio, descritto nella Vita Nova, sarà reinterpretato nel Convivio come allegoria della filosofia. La donna gentile rappresenta la tentazione di un amore terreno che distoglie dalla fedeltà a Beatrice, ma anche l'attrazione per la sapienza mondana rispetto alla contemplazione divina."
                }
            ]
        },
        {
            period: "1290 - 1300",
            title: "Studi Filosofici e Vita Politica",
            events: [
                {
                    year: "1291",
                    title: "Studi filosofici intensivi",
                    description: "Dopo la morte di Beatrice, Dante si dedica intensamente agli studi filosofici come forma di consolazione. Frequenta le scuole conventuali di Santa Maria Novella (domenicani) e Santa Croce (francescani), approfondendo la conoscenza di Aristotele, Tommaso d'Aquino, Alberto Magno. Legge Boezio (La consolazione della filosofia) e Cicerone. Questo periodo di studio 'tra le scuole de li religiosi e le disputazioni de li filosofanti' durerà 'forse trenta mesi'."
                },
                {
                    year: "1292",
                    title: "Visione finale e chiusura della Vita Nova",
                    description: "Dante ha una 'mirabile visione' che lo convince a non scrivere più di Beatrice finché non possa farlo più degnamente. Con questa visione si conclude la Vita Nova, il prosimetro che raccoglie le poesie giovanili inquadrate in una narrazione in prosa. Dante promette di dire di Beatrice 'quello che mai non fue detto d'alcuna': questa promessa sarà mantenuta con la Divina Commedia, dove Beatrice appare come guida celeste."
                },
                {
                    year: "1293",
                    title: "Ordinamenti di Giustizia di Giano della Bella",
                    description: "A Firenze vengono promulgati gli Ordinamenti di Giustizia, voluti da Giano della Bella, che escludono i magnati dalle cariche pubbliche e consolidano il potere delle Arti. Per accedere alle cariche, è necessario essere iscritti a una corporazione. Dante si iscriverà all'Arte dei Medici e Speziali, che include anche filosofi e letterati. Questi ordinamenti rappresentano il trionfo della borghesia mercantile sull'antica nobiltà."
                },
                {
                    year: "1294",
                    period: "Luglio - Dicembre",
                    title: "Pontificato di Celestino V",
                    description: "Pietro del Morrone, eremita del monte Maiella, viene eletto papa con il nome di Celestino V. Dopo soli cinque mesi, in dicembre, abdica al pontificato: è il 'gran rifiuto' che Dante probabilmente condannerà nell'Inferno. Gli succede Benedetto Caetani, che prende il nome di Bonifacio VIII. Questo papa sarà il grande antagonista di Dante, responsabile delle manovre che porteranno al suo esilio."
                },
                {
                    year: "1295",
                    period: "6 Luglio",
                    title: "Iscrizione all'Arte dei Medici e Speziali",
                    description: "Dante si iscrive all'Arte dei Medici e Speziali, compiendo il passo necessario per entrare nella vita politica fiorentina. Questa corporazione include anche intellettuali, letterati e filosofi. Da questo momento Dante può accedere alle cariche pubbliche della Repubblica. La scelta politica comporta anche rischi: Firenze è attraversata da conflitti tra fazioni, e chi entra in politica deve schierarsi."
                },
                {
                    year: "1295",
                    title: "Inizio dell'attività politica",
                    description: "Dante inizia la sua carriera politica attiva. Partecipa ai Consigli del Comune e alle discussioni su questioni di governo. Le fonti documentano la sua presenza in vari consigli cittadini negli anni successivi. Dante si schiera con i Guelfi Bianchi, la fazione più moderata, vicina al popolo e ostile all'ingerenza papale, contrapposta ai Guelfi Neri, legati a Bonifacio VIII e alle grandi famiglie bancarie."
                },
                {
                    year: "1296",
                    title: "Membro del Consiglio dei Cento",
                    description: "Dante diventa membro del Consiglio dei Cento, uno degli organi di governo della Repubblica fiorentina. In questo ruolo partecipa alle decisioni politiche e finanziarie della città. I documenti mostrano i suoi interventi su questioni fiscali e militari. La sua posizione è coerentemente favorevole all'autonomia cittadina e contraria alle ingerenze esterne, sia papali che imperiali."
                },
                {
                    year: "1297",
                    title: "Intensificazione delle lotte tra Bianchi e Neri",
                    description: "Le tensioni tra le fazioni guelfe si intensificano. I Cerchi guidano i Bianchi, i Donati (famiglia della moglie di Dante) guidano i Neri. I Bianchi rappresentano la nuova borghesia mercantile e finanziaria, più moderata e gelosa dell'autonomia comunale; i Neri sono legati alle vecchie famiglie magnatizie e cercano l'appoggio del papa. Dante, pur imparentato con i Donati, si schiera decisamente con i Bianchi."
                },
                {
                    year: "1298",
                    title: "Nascita dei figli",
                    description: "In questi anni nascono i figli di Dante e Gemma: Jacopo (che diventerà commentatore della Commedia), Pietro (che sarà giudice e scriverà un importante commento alla Commedia), e probabilmente Antonia (che diventerà suora col nome di Beatrice). Un quarto figlio, Giovanni, è menzionato in alcuni documenti ma la sua esistenza è incerta. I figli seguiranno il padre in esilio dopo qualche anno."
                },
                {
                    year: "1299",
                    title: "Scontri aperti tra le fazioni",
                    description: "Gli scontri tra Bianchi e Neri diventano violenti. Corso Donati, capo dei Neri, tenta un colpo di stato. Viene esiliato insieme ad altri Neri. Papa Bonifacio VIII osserva la situazione fiorentina con crescente interesse, vedendo un'opportunità per estendere l'influenza papale sulla ricca città toscana. Dante, nei consigli cittadini, si oppone costantemente alle richieste di aiuto militare avanzate dal papa."
                },
                {
                    year: "1300",
                    period: "Marzo - Maggio",
                    title: "Anno del Giubileo",
                    description: "Papa Bonifacio VIII indice il primo Giubileo della storia cristiana. Roma si riempie di pellegrini: Dante stesso potrebbe aver partecipato al pellegrinaggio, come suggerirebbero alcuni riferimenti nell'Inferno. Il Giubileo mostra la potenza del papato e le sue ambizioni temporali. Nella Commedia, Dante situerà il proprio viaggio oltremondano nella Settimana Santa di quest'anno: la finzione letteraria colloca il viaggio dal 7 al 14 aprile 1300.",
                    quote: "Come i Roman per l'essercito molto, / l'anno del giubileo, su per lo ponte / hanno a passar la gente modo colto.",
                    source: "Inferno, XVIII, 28-30"
                },
                {
                    year: "1300",
                    period: "15 Giugno - 15 Agosto",
                    title: "Priorato",
                    description: "Dante viene eletto tra i sei Priori di Firenze, la massima carica del governo cittadino. È il culmine della sua carriera politica. Durante il suo priorato, per sedare le lotte tra fazioni, il collegio priorale decide di esiliare i capi di entrambe le parti: tra i Neri va in esilio Corso Donati, tra i Bianchi anche il 'primo amico' Guido Cavalcanti. Cavalcanti morirà poco dopo a causa della malaria contratta a Sarzana. Dante se ne addolorerà amaramente.",
                    quote: "Di quella radice nacque / la morte del mio diletto Guido, che s'io credessi che mia risposta fosse / a persona che mai tornasse al mondo, / questa fiamma staria sanza più scosse.",
                    source: "Riferimento indiretto in Inferno, X"
                },
                {
                    year: "1300",
                    period: "Agosto - Dicembre",
                    title: "Dopo il Priorato: crescenti tensioni",
                    description: "Terminato il priorato, Dante continua la sua attività politica. I Neri esiliati tramano con Bonifacio VIII per rientrare a Firenze. Il papa vede in loro uno strumento per sottomettere la città. Dante interviene nei consigli per opporsi alle richieste papali di aiuto militare per la conquista della Sicilia. La sua posizione diventa sempre più esposta e rischiosa."
                }
            ]
        },
        {
            period: "1301 - 1302",
            title: "La Caduta e l'Esilio",
            events: [
                {
                    year: "1301",
                    period: "Settembre",
                    title: "Ambasceria a Roma",
                    description: "Dante viene inviato a Roma come ambasciatore presso Bonifacio VIII, insieme a Maso Minerbetti e Corazza da Signa. La missione ha lo scopo di placare il papa e impedire l'intervento di Carlo di Valois a Firenze. È una trappola: mentre Dante è trattenuto a Roma, gli eventi precipitano a Firenze. Non tornerà mai più nella sua città."
                },
                {
                    year: "1301",
                    period: "1 Novembre",
                    title: "Entrata di Carlo di Valois a Firenze",
                    description: "Carlo di Valois, fratello del re di Francia, entra a Firenze come 'paciere' inviato dal papa. In realtà, favorisce immediatamente i Neri. Corso Donati rientra con le armi dall'esilio. Per cinque giorni la città è in balia della violenza: case saccheggiate, omicidi, vendette. I Bianchi sono perseguitati, uccisi, esiliati. È il colpo di stato che Bonifacio VIII aveva pianificato."
                },
                {
                    year: "1302",
                    period: "27 Gennaio",
                    title: "Prima condanna",
                    description: "Dante viene condannato in contumacia dal podestà Cante de' Gabrielli da Gubbio. Le accuse sono di baratteria (corruzione), frode, opposizione al papa e a Carlo di Valois. La condanna prevede il pagamento di 5000 fiorini piccoli entro tre giorni, l'esclusione perpetua dagli uffici pubblici, e due anni di confino. Non avendo pagato né essendosi presentato, la pena si aggraverà.",
                    quote: "Lo bello ovile ov'io dormi' agnello, / nimico ai lupi che li danno guerra.",
                    source: "Paradiso, XXV, 4-5"
                },
                {
                    year: "1302",
                    period: "10 Marzo",
                    title: "Condanna a morte",
                    description: "Con una seconda sentenza, Dante viene condannato a morte per il rogo, se mai fosse caduto in mano al Comune di Firenze. Tutti i suoi beni sono confiscati. La condanna sarà estesa ai figli maschi raggiunta l'età di 14 anni. Da questo momento Dante è un esule, privato della patria, dei beni, dell'onore. Non rivedrà mai più Firenze, né la moglie Gemma che resta in città con i figli.",
                    quote: "Tu lascerai ogne cosa diletta / più caramente; e questo è quello strale / che l'arco de lo essilio pria saetta.",
                    source: "Paradiso, XVII, 55-57"
                },
                {
                    year: "1302",
                    period: "Giugno",
                    title: "Tentativi dei Bianchi esiliati",
                    description: "I Guelfi Bianchi esiliati, insieme ai Ghibellini, organizzano tentativi di rientrare a Firenze con le armi. Dante partecipa inizialmente a queste iniziative, unendosi alla 'compagnia malvagia e scempia' degli esuli. Questi tentativi falliscono uno dopo l'altro. Dante si rende conto dell'incompetenza e della cattiveria dei suoi compagni di esilio e decide di fare 'parte per sé stesso'."
                }
            ]
        },
        {
            period: "1302 - 1310",
            title: "I Primi Anni dell'Esilio",
            events: [
                {
                    year: "1303",
                    period: "8 Giugno",
                    title: "Congresso di San Godenzo",
                    description: "Al congresso di San Godenzo, nell'Appennino tosco-romagnolo, gli esuli Bianchi e Ghibellini si accordano con gli Ubaldini per un'azione militare contro Firenze. Dante è tra i presenti. Questo è l'ultimo tentativo organizzato a cui partecipa. La sconfitta alla Lastra nel luglio 1304 segnerà il fallimento definitivo di questi sforzi."
                },
                {
                    year: "1303",
                    period: "Settembre",
                    title: "Morte di Bonifacio VIII",
                    description: "A Anagni, emissari del re di Francia Filippo il Bello e della famiglia Colonna aggrediscono Bonifacio VIII. Il papa muore poco dopo, il 12 ottobre. Dante vedrà in questa fine una punizione divina per i peccati del pontefice, ma manterrà il rispetto per l'istituzione papale. Nel Purgatorio, farà dire a Ugo Capeto che a Anagni Cristo fu 'nel suo Vicario' catturato, condannando così l'oltraggio fatto alla dignità pontificia."
                },
                {
                    year: "1303",
                    title: "Ospite dei Malaspina",
                    description: "Dante trova ospitalità presso i marchesi Malaspina in Lunigiana. Franceschino Malaspina, signore della Lunigiana, lo accoglie con onore. Nel Purgatorio, Dante ricorderà con gratitudine questa famiglia, lodandone la liberalità e il valore. Corrado Malaspina profetizza che entro sette anni Dante conoscerà la cortesia dei Malaspina 'non pur per udire'. Il soggiorno in Lunigiana è documentato fino al 1306.",
                    quote: "Lo pregio de la borsa e de la spada / che ormai per altre vie è sì buona gente.",
                    source: "Purgatorio, VIII, 129-130"
                },
                {
                    year: "1304",
                    period: "20 Luglio",
                    title: "Disfatta della Lastra",
                    description: "L'esercito degli esuli Bianchi e Ghibellini viene sconfitto dai Fiorentini alla Lastra, presso Firenze. È l'ultimo tentativo armato di rientrare in città. Dante non partecipa direttamente alla battaglia: ha già preso le distanze dalla 'compagnia malvagia e scempia'. Da questo momento decide di percorrere la sua strada solitaria, facendosi 'parte per sé stesso', dedicandosi completamente alla sua opera letteraria."
                },
                {
                    year: "1304",
                    title: "Inizio del Convivio",
                    description: "Dante inizia la stesura del Convivio, un trattato filosofico in volgare. L'opera, rimasta incompiuta, doveva comprendere quindici trattati che commentavano altrettante canzoni. Ne vengono scritti solo quattro, che affrontano temi di filosofia, etica, politica e linguistica. Il Convivio rappresenta il tentativo di Dante di diffondere la sapienza filosofica anche a chi non conosce il latino."
                },
                {
                    year: "1304",
                    title: "Inizio del De vulgari eloquentia",
                    description: "Contemporaneamente al Convivio, Dante inizia il De vulgari eloquentia, un trattato in latino sulla lingua e lo stile poetico. L'opera, anch'essa incompiuta (restano solo due dei quattro libri previsti), rappresenta la prima riflessione teorica sulla lingua italiana. Dante cerca il 'volgare illustre', la lingua letteraria ideale, e analizza tutti i dialetti italiani."
                },
                {
                    year: "1306",
                    title: "In Lunigiana: pace di Castelnuovo",
                    description: "Il 6 ottobre 1306, Dante agisce come procuratore dei marchesi Malaspina per la stipula di un trattato di pace con il vescovo-conte di Luni, Antonio da Camilla. Il documento, conservato nell'archivio capitolare di Sarzana, è la testimonianza più importante della presenza di Dante in Lunigiana. Dimostra anche il ruolo di prestigio che il poeta aveva acquisito presso i suoi ospiti."
                },
                {
                    year: "1306",
                    title: "Inizio della Commedia?",
                    description: "Secondo alcune ipotesi, Dante potrebbe aver iniziato la Commedia in questo periodo, forse già nel 1304. Giovanni Boccaccio narra che i primi sette canti dell'Inferno furono scritti prima dell'esilio e poi ritrovati casualmente a Firenze. Altri studiosi collocano l'inizio dell'opera intorno al 1307-1308. La datazione esatta rimane incerta."
                },
                {
                    year: "1308",
                    title: "Arrigo VII eletto imperatore",
                    description: "Arrigo (Enrico) VII di Lussemburgo viene eletto re dei Romani. Scenderà in Italia nel 1310 per essere incoronato imperatore. Per Dante, questo rappresenta una speranza: l'imperatore potrebbe ristabilire l'ordine in Italia, punire i nemici della giustizia, permettere il suo ritorno a Firenze. Le speranze politiche di Dante si riaccendono dopo anni di pessimismo."
                },
                {
                    year: "1309",
                    title: "Trasferimento del papato ad Avignone",
                    description: "Papa Clemente V, francese, trasferisce la sede papale ad Avignone, dando inizio alla 'cattività avignonese' che durerà fino al 1377. Per Dante, questo abbandono di Roma è uno scandalo: il papa deve risiedere a Roma, sede di Pietro. Nella Commedia, Dante condannerà duramente questo trasferimento e i papi francesi che seguiranno."
                },
                {
                    year: "1310",
                    period: "Autunno",
                    title: "Discesa di Arrigo VII in Italia",
                    description: "Arrigo VII scende in Italia. Dante lo saluta con entusiasmo, vedendo in lui il restauratore dell'autorità imperiale e della giustizia. Scrive tre epistole latine: una ai principi e popoli d'Italia, una ai Fiorentini 'scelestissimi', una allo stesso Arrigo. In questi testi, Dante sviluppa la sua visione politica: l'impero universale come garanzia di pace e giustizia."
                }
            ]
        },
        {
            period: "1310 - 1321",
            title: "Gli Ultimi Anni e la Commedia",
            events: [
                {
                    year: "1310",
                    title: "Epistola ai Fiorentini",
                    description: "Dante scrive una violenta epistola ai 'Fiorentini intrinseci' (i Neri che controllano la città), minacciandoli con la discesa dell'imperatore Arrigo VII. Il tono è apocalittico: paragona i Fiorentini ai malvagi puniti dal diluvio universale e dalla distruzione di Sodoma. L'epistola rivela l'amarezza profonda dell'esule e la sua speranza nella giustizia imperiale.",
                    quote: "Cur non advertitis quod sitis soli qui, nomen Romani principis recusantes, in iura non scripta delirabatis?",
                    source: "Epistola VI"
                },
                {
                    year: "1311",
                    title: "Arrigo VII a Milano",
                    description: "Arrigo VII viene incoronato re d'Italia a Milano con la corona ferrea. Ma la spedizione incontra subito difficoltà: molte città guelfe resistono, Firenze guida l'opposizione. Arrigo assedia senza successo diverse città. Dante, dalla sua posizione di esule, segue con ansia gli eventi. Scrive ad Arrigo esortandolo a marciare contro Firenze, 'vipera che si rivolta contro le viscere della madre'."
                },
                {
                    year: "1312",
                    period: "29 Giugno",
                    title: "Incoronazione imperiale di Arrigo VII",
                    description: "Arrigo VII viene incoronato imperatore a Roma, ma nella chiesa di San Giovanni in Laterano anziché in San Pietro, perché i Romani alleati dei Francesi controllano il Vaticano. L'incoronazione avviene in un clima di guerra civile. Nonostante tutto, Dante vede in questo atto la restaurazione dell'autorità imperiale. Le sue speranze però sono destinate a essere deluse."
                },
                {
                    year: "1313",
                    period: "24 Agosto",
                    title: "Morte di Arrigo VII",
                    description: "Arrigo VII muore improvvisamente a Buonconvento, vicino a Siena, forse avvelenato durante la comunione. Con lui muoiono le speranze politiche di Dante. L'imperatore non ha potuto punire Firenze né ristabilire la giustizia in Italia. Nel Paradiso, Dante gli riserverà un seggio altissimo nell'Empireo, lamentando l'Italia 'non presta' a riceverlo e la 'cupidigia che vi ammalia'.",
                    quote: "Nel quale sederà l'anima, che già fu agosta, / de l'alto Arrigo, ch'a drizzare Italia / verrà in prima ch'ella sia disposta.",
                    source: "Paradiso, XXX, 137-139"
                },
                {
                    year: "1314",
                    title: "Dante a Verona",
                    description: "Dante si trasferisce a Verona, ospite di Cangrande della Scala, signore della città. Cangrande è un grande condottiero ghibellino, mecenate di artisti e letterati. Dante gli dedicherà il Paradiso con una celebre epistola. A Verona, Dante trova un ambiente stimolante: la corte scaligera è un centro di cultura, e il poeta può lavorare serenamente alla Commedia.",
                    quote: "Con lui vedrai colui che 'mpresso fue, / nascendo, sì da questa stella forte, / che notabili fier l'opere sue.",
                    source: "Paradiso, XVII, 76-78"
                },
                {
                    year: "1315",
                    period: "Giugno",
                    title: "Rifiuto dell'amnistia",
                    description: "Firenze offre un'amnistia agli esuli, a condizione che paghino una multa, confessino la colpa e si sottopongano a una umiliante cerimonia pubblica. Dante rifiuta sdegnosamente. Scrive a un amico (forse un religioso fiorentino) una lettera in cui dichiara che non rientrerà a Firenze 'per questa via'. Preferisce l'esilio all'umiliazione: 'Non è questa la via del mio ritorno'.",
                    quote: "Per hanc viam non redit patria, pater! Est alia via per quam ego revertar.",
                    source: "Epistola XII"
                },
                {
                    year: "1315",
                    period: "15 Ottobre",
                    title: "Nuova condanna a morte",
                    description: "Una nuova sentenza di Firenze condanna a morte Dante e i suoi figli Jacopo, Pietro e (forse) Giovanni. La condanna è estesa a tutti gli esuli che non hanno accettato l'amnistia. Questa sentenza conferma l'impossibilità del ritorno. Dante rimarrà in esilio fino alla morte, portando con sé l'amarezza ma anche la dignità di chi non si è piegato."
                },
                {
                    year: "1316",
                    title: "Completamento dell'Inferno e del Purgatorio?",
                    description: "Secondo le ipotesi più accreditate, Dante ha completato l'Inferno entro il 1314 e il Purgatorio entro il 1315-1316. Le due cantiche cominciano a circolare, suscitando ammirazione. A Verona e poi a Ravenna, Dante lavora al Paradiso, la cantica più complessa e sublime, che richiede la sintesi di teologia, filosofia e poesia."
                },
                {
                    year: "1318",
                    title: "Trasferimento a Ravenna",
                    description: "Dante si trasferisce a Ravenna, ospite di Guido Novello da Polenta, signore della città. Ravenna, antica capitale dell'Impero romano d'Occidente, offre a Dante un ambiente di pace dove completare la Commedia. I figli Jacopo e Pietro lo raggiungono. Dante tiene anche lezioni di retorica e poesia, formando un piccolo circolo di discepoli."
                },
                {
                    year: "1319",
                    title: "Questio de aqua et terra",
                    description: "A Verona, il 20 gennaio 1320, Dante tiene una disputa pubblica sulla questione filosofica se l'acqua nella sua sfera naturale sia più alta della terra. La Questio de aqua et terra, che ne riporta gli argomenti, è l'ultima opera latina di Dante e dimostra la sua competenza scientifica e filosofica secondo i canoni del tempo."
                },
                {
                    year: "1320",
                    title: "Completamento del Paradiso",
                    description: "Dante completa il Paradiso, concludendo così la Commedia. I cento canti, le tre cantiche, i 14.233 versi sono finalmente compiuti. L'opera che Dante ha definito 'poema sacro / al quale ha posto mano e cielo e terra' è terminata. Secondo la leggenda, gli ultimi tredici canti del Paradiso furono ritrovati da Jacopo dopo la morte del padre, grazie a un'apparizione in sogno."
                },
                {
                    year: "1321",
                    period: "Agosto",
                    title: "Ambasceria a Venezia",
                    description: "Guido Novello da Polenta invia Dante come ambasciatore a Venezia per trattare la pace tra Ravenna e la Serenissima. Il viaggio, via mare, espone Dante alle febbri malariche delle paludi. Il rientro a Ravenna avviene probabilmente per via di terra, attraversando zone paludose. Dante contrae la malaria che lo porterà alla morte."
                },
                {
                    year: "1321",
                    period: "13-14 Settembre",
                    title: "Morte di Dante",
                    description: "Dante muore a Ravenna nella notte tra il 13 e il 14 settembre 1321. Ha circa 56 anni. Le esequie solenni sono celebrate nella chiesa di San Francesco (allora San Pier Maggiore). Guido Novello da Polenta gli dedica un'orazione funebre e progetta un monumento che non realizzerà mai per la perdita del potere. Dante viene sepolto in un'arca di marmo accanto alla chiesa. Le sue spoglie rimarranno a Ravenna, nonostante i ripetuti tentativi di Firenze di reclamarle.",
                    quote: "L'amor che move il sole e l'altre stelle.",
                    source: "Paradiso, XXXIII, 145 - ultimo verso della Commedia"
                }
            ]
        },
        {
            period: "Post 1321",
            title: "Il Mito Eterno",
            events: [
                {
                    year: "1329",
                    title: "Celebrazione di Giovanni del Virgilio",
                    description: "Giovanni del Virgilio, umanista bolognese amico di Dante, compone un epitaffio latino in onore del poeta. È una delle prime testimonianze della venerazione che circonda la figura di Dante subito dopo la morte. Del Virgilio era stato in corrispondenza poetica con Dante negli ultimi anni della sua vita."
                },
                {
                    year: "1373",
                    title: "Giovanni Boccaccio legge la Commedia a Firenze",
                    description: "Il Comune di Firenze istituisce una cattedra per la lettura pubblica della Commedia e la affida a Giovanni Boccaccio. È il riconoscimento ufficiale, tardivo ma solenne, del valore del poeta esiliato. Boccaccio tiene le sue letture nella chiesa di Santo Stefano di Badia, commentando l'Inferno. Morirà nel 1375, prima di completare l'opera."
                },
                {
                    year: "1481",
                    title: "Prima edizione a stampa della Commedia",
                    description: "A Firenze viene pubblicata la prima edizione a stampa della Commedia, con il commento di Cristoforo Landino. La stampa permette una diffusione senza precedenti dell'opera di Dante. Da questo momento, la Commedia diventa parte del patrimonio culturale non solo italiano ma europeo."
                },
                {
                    year: "1519",
                    title: "Leone X nega le spoglie a Firenze",
                    description: "Papa Leone X, fiorentino della famiglia Medici, rifiuta la richiesta di Firenze di restituire le spoglie di Dante. Le ossa del poeta rimarranno a Ravenna, custodite dai frati francescani. Nel 1677 verranno nascoste per proteggerle, e saranno ritrovate solo nel 1865."
                },
                {
                    year: "1865",
                    title: "Sesto centenario della nascita",
                    description: "L'Italia, da poco unificata, celebra il sesto centenario della nascita di Dante. Le sue ossa, ritrovate casualmente durante lavori di restauro, vengono riesumate e autenticate. A Firenze viene eretto il grande monumento a Dante in piazza Santa Croce. Dante diventa simbolo dell'unità nazionale italiana, 'padre della patria' e della lingua italiana."
                },
                {
                    year: "2021",
                    title: "Settimo centenario della morte",
                    description: "L'Italia e il mondo celebrano i settecento anni dalla morte di Dante. La Commedia continua a essere letta, studiata, tradotta in tutte le lingue. L'opera di Dante rimane viva, parlando ancora agli uomini di oggi dei grandi temi dell'esistenza: l'amore, la giustizia, la fede, la libertà, la ricerca della verità e della bellezza. Come scrisse Boccaccio: 'Le Muse lo nutrivano più che ogni altro cibo'."
                }
            ]
        }
    ]
};

// Export per uso globale
window.biografiaData = biografiaData;
