/**
 * DANTE ALIGHIERI - Opere Minori
 * Dati completi su tutte le opere di Dante esclusa la Commedia
 */

const opereData = {
    opere: [
        {
            titolo: "Vita Nova",
            sottotitolo: "Il libro della memoria e dell'amore per Beatrice",
            periodo: "1292-1295",
            tipo: "Prosimetro",
            icon: "💝",
            introduzione: `La Vita Nova (o Vita Nuova) è la prima opera organica di Dante Alighieri, composta probabilmente tra il 1292 e il 1295, poco dopo la morte di Beatrice avvenuta nel 1290. Il titolo può essere interpretato in duplice senso: "vita rinnovata" dall'amore per Beatrice, oppure "vita giovanile", riferendosi al periodo della giovinezza del poeta. L'opera rappresenta il manifesto poetico del Dolce Stil Novo e costituisce una sorta di autobiografia spirituale e amorosa di Dante.

Il prosimetro si presenta come un "libello" in cui Dante raccoglie e commenta le poesie composte in onore di Beatrice, inserendole in una cornice narrativa in prosa che ne spiega le circostanze e il significato. È strutturato in 42 capitoli (secondo la suddivisione tradizionale) o 31 (secondo quella moderna), e contiene 31 componimenti poetici: 25 sonetti, 5 canzoni, 1 ballata e alcune stanze isolate.

L'opera segna un momento fondamentale nella storia della letteratura italiana: per la prima volta, un poeta commenta le proprie poesie, fornendo una chiave interpretativa che trasforma l'esperienza amorosa individuale in un percorso di elevazione spirituale. La Vita Nova anticipa molti temi della Divina Commedia, in particolare il ruolo salvifico di Beatrice.`,

            contenuto: `La Vita Nova si apre con la celebre immagine del "libro della memoria", dove Dante dichiara di voler copiare le parole scritte sotto la rubrica "Incipit vita nova". L'opera si struttura in tre momenti fondamentali:

**Prima parte (capitoli I-XVI): L'amore come esperienza interiore**
Il racconto inizia con il primo incontro con Beatrice, avvenuto quando entrambi avevano nove anni. Dante descrive l'apparizione della "gentilissima" vestita di rosso ("sanguigno"), colore della carità. L'amore si manifesta attraverso visioni e turbamenti fisici: tremori, pallore, smarrimento. Per nove anni Dante coltiva questo amore in segreto, finché non rivede Beatrice che, vestita di bianco, lo saluta. Questo saluto diviene per Dante fonte di "beatitudine".

Per proteggere la segretezza del suo amore, Dante finge di amare altre donne ("donne dello schermo"), componendo poesie apparentemente dedicate a loro. Ma quando le voci raggiungono Beatrice, questa gli nega il saluto, gettandolo nella disperazione. In questa sezione emerge il tema del conflitto tra il desiderio del saluto (salvezza) e la dignità dell'amata.

**Seconda parte (capitoli XVII-XXVII): La poetica della lode**
Il cuore dell'opera è la svolta poetica che Dante compie: decide che la sua beatitudine non può risiedere in qualcosa che può essergli negato (il saluto), ma nella lode stessa di Beatrice. Nasce così la poetica della "loda", espressa nella celebre canzone "Donne ch'avete intelletto d'amore". La poesia non cerca più ricompensa, ma è pura celebrazione della virtù dell'amata.

Seguono componimenti che esaltano la natura quasi divina di Beatrice: ovunque passi, porta umiltà e gentilezza; il suo sguardo e il suo saluto hanno potere nobilitante su chiunque la incontri. La canzone "Amor che ne la mente mi ragiona" e il sonetto "Tanto gentile e tanto onesta pare" appartengono a questa fase.

**Terza parte (capitoli XXVIII-XLII): La morte di Beatrice e la "mirabile visione"**
L'8 giugno 1290 Beatrice muore. Dante non descrive direttamente la morte, ma la annuncia citando le Lamentazioni di Geremia sulla caduta di Gerusalemme: "Quomodo sedet sola civitas". Il parallelismo eleva Beatrice a figura cristologica e Firenze a città santa.

Il poeta attraversa un periodo di smarrimento e trova momentanea consolazione in una "donna gentile" che lo guarda con pietà. Ma un'apparizione di Beatrice in sogno lo richiama alla fedeltà. L'opera si chiude con una "mirabile visione" che convince Dante a non scrivere più di Beatrice finché non potrà farlo "più degnamente". Questa promessa sarà mantenuta nella Divina Commedia.`,

            temi: [
                "L'amore come forza nobilitante e spirituale, non come passione sensuale",
                "Il numero nove come numero di Beatrice (simbolo della Trinità moltiplicata per se stessa)",
                "La donna-angelo che conduce l'uomo a Dio attraverso la bellezza",
                "La poetica della lode: poesia come celebrazione disinteressata",
                "Il rapporto tra esperienza biografica e trasfigurazione letteraria",
                "La morte come passaggio alla vera vita e alla beatitudine eterna",
                "La memoria come strumento di ricostruzione del senso dell'esistenza",
                "Il saluto (salute/salvezza) come manifestazione della grazia divina",
                "Il conflitto tra amore terreno e amore spirituale",
                "La poesia come strumento di elevazione morale e conoscitiva"
            ],

            personaggi: [
                {
                    nome: "Beatrice",
                    descrizione: "Beatrice Portinari (1266-1290), figlia del banchiere Folco Portinari, è la figura centrale dell'opera. Dante la incontra per la prima volta a nove anni e se ne innamora istantaneamente. Nella Vita Nova, Beatrice non è solo una donna reale ma diventa progressivamente simbolo della grazia divina, anticipando il ruolo che avrà nella Commedia come guida celeste. Il suo nome stesso ('colei che dà beatitudine') diventa programmatico."
                },
                {
                    nome: "Dante narratore",
                    descrizione: "Dante si presenta sia come protagonista degli eventi narrati sia come narratore che rilegge la propria esperienza giovanile. Questa doppia prospettiva permette di dare all'opera una struttura di 'bildungsroman' spirituale, dove il giovane amante è guidato dall'esperienza verso una comprensione più profonda dell'amore e della poesia."
                },
                {
                    nome: "Amore",
                    descrizione: "Il dio Amore appare più volte come personificazione allegorica. Nella prima visione, tiene in braccio Beatrice addormentata e le fa mangiare il cuore ardente di Dante. Amore guida il poeta, gli parla in sogno, lo consiglia. È rappresentato come 'segnore di nobilitate' che dimora nel cuore gentile."
                },
                {
                    nome: "Le donne dello schermo",
                    descrizione: "Due donne che Dante finge di amare per nascondere il vero oggetto del suo affetto. La prima donna lascia Firenze, costringendo Dante a trovare una seconda 'donna dello schermo'. Rappresentano il tema cortese del segreto d'amore, ma anche l'iniziale immaturità poetica di Dante."
                },
                {
                    nome: "La donna gentile",
                    descrizione: "Una donna che, dopo la morte di Beatrice, guarda Dante con pietà dalla finestra. Rappresenta la tentazione di un nuovo amore terreno e, allegoricamente (come Dante spiegherà nel Convivio), la filosofia come consolazione. L'apparizione di Beatrice in sogno riconduce Dante alla fedeltà verso l'amata defunta."
                },
                {
                    nome: "Guido Cavalcanti",
                    descrizione: "Menzionato come il 'primo amico' a cui Dante invia il primo sonetto della raccolta. Cavalcanti (1255-1300) era il maggiore poeta stilnovista e mentore del giovane Dante. La sua risposta al sonetto segna l'ingresso ufficiale di Dante nella cerchia dei 'fedeli d'Amore'."
                }
            ],

            significato: `La Vita Nova rappresenta uno snodo cruciale nella storia della letteratura italiana e nella formazione poetica di Dante. Per la prima volta, un poeta italiano compone un'opera in cui riflette teoricamente sulla propria produzione, trasformando l'esperienza amorosa in un percorso di crescita spirituale e artistica.

L'opera segna il superamento della tradizione cortese e stilnovistica attraverso l'interiorizzazione dell'esperienza amorosa. L'amore per Beatrice non è più desiderio di possesso o piacere mondano, ma contemplazione della perfezione divina incarnata nella donna amata. In questo senso, la Vita Nova anticipa la concezione della Commedia: Beatrice non è solo oggetto d'amore, ma tramite verso Dio.

Sul piano stilistico, l'opera mostra già la straordinaria capacità dantesca di fondere registro alto e registro personale, di passare dalla meditazione filosofica all'intensità emotiva, di costruire una prosa ritmica che accompagna e integra la poesia. La struttura stessa del prosimetro, con le prose che incorniciano e commentano le poesie, diventerà modello per secoli di letteratura italiana.

La promessa finale di "dire di lei quello che mai non fu detto d'alcuna" sarà mantenuta trent'anni dopo nella Commedia, dove Beatrice appare come simbolo della teologia rivelata e guida di Dante attraverso il Paradiso fino alla visione di Dio.`,

            citazioni: [
                {
                    testo: "In quella parte del libro de la mia memoria dinanzi a la quale poco si potrebbe leggere, si trova una rubrica la quale dice: Incipit vita nova.",
                    fonte: "Vita Nova, I - Incipit dell'opera"
                },
                {
                    testo: "Apparve vestita di nobilissimo colore, umile e onesto, sanguigno, cinta e ornata a la guisa che a la sua giovanissima etade si convenia.",
                    fonte: "Vita Nova, II - Primo incontro con Beatrice"
                },
                {
                    testo: "Ecce deus fortior me, qui veniens dominabitur mihi.",
                    fonte: "Vita Nova, II - Parole di Amore ('Ecco un dio più forte di me, che viene a dominarmi')"
                },
                {
                    testo: "Tanto gentile e tanto onesta pare la donna mia quand'ella altrui saluta, ch'ogne lingua deven tremando muta, e li occhi no l'ardiscon di guardare.",
                    fonte: "Vita Nova, XXVI - Sonetto celeberrimo"
                },
                {
                    testo: "Apparve a me una mirabile visione, ne la quale io vidi cose che mi fecero proporre di non dire più di questa benedetta infino a tanto che io potessi più degnamente trattare di lei.",
                    fonte: "Vita Nova, XLII - Conclusione e promessa"
                }
            ]
        },

        {
            titolo: "Convivio",
            sottotitolo: "Il banchetto della sapienza per i nobili d'animo",
            periodo: "1304-1307",
            tipo: "Trattato filosofico in volgare",
            icon: "📚",
            introduzione: `Il Convivio è un trattato filosofico-dottrinale scritto da Dante durante i primi anni dell'esilio, tra il 1304 e il 1307 circa. L'opera, rimasta incompiuta, doveva comprendere quindici trattati: un primo introduttivo e quattordici di commento ad altrettante canzoni "dottrinali". Dante ne scrisse solo quattro, commentando tre canzoni.

Il titolo significa "banchetto" e allude alla metafora con cui Dante presenta l'opera: un convito in cui le vivande sono le canzoni (il pane) e il commento in prosa è la "vivanda" che le accompagna. I commensali invitati sono coloro che, pur non avendo potuto studiare il latino a causa degli impegni della vita attiva (principi, cavalieri, donne), possiedono la nobiltà d'animo necessaria per accedere alla sapienza.

L'opera rappresenta il tentativo di Dante di creare una grande enciclopedia del sapere in volgare italiano, accessibile a tutti i "nobili" non per nascita ma per virtù. È anche una difesa appassionata del volgare come lingua filosofica, in grado di esprimere i concetti più alti della speculazione medievale.`,

            contenuto: `**Trattato I: Introduzione e difesa del volgare**

Il primo trattato funge da introduzione generale. Dante spiega le ragioni dell'opera e soprattutto giustifica la scelta rivoluzionaria di scrivere di filosofia in volgare anziché in latino. Presenta la metafora del convivio: le canzoni sono il pane, il commento la vivanda. Coloro che hanno "impedimento" all'apprendimento (per doveri familiari, civili, o per difetto fisico di non poter viaggiare verso i centri di studio) sono invitati al banchetto.

Dante difende il volgare con tre argomenti: il desiderio naturale di giovare al maggior numero (il latino raggiunge pochi); l'amore verso la propria lingua madre, che lo ha "congiunto" fin dalla nascita; e la volontà di esaltare il volgare mostrandone le potenzialità espressive. Questa difesa del volgare anticipa le teorizzazioni del De vulgari eloquentia.

**Trattato II: Commento a "Voi che 'ntendendo il terzo ciel movete"**

Il secondo trattato commenta la canzone "Voi che 'ntendendo il terzo ciel movete", indirizzata alle intelligenze angeliche che muovono il cielo di Venere. Dante introduce la teoria dei quattro sensi delle scritture (letterale, allegorico, morale, anagogico) e la applica alle proprie canzoni.

La canzone parla del conflitto interiore del poeta tra la fedeltà a Beatrice morta e l'attrazione per una "donna gentile". Allegoricamente, Dante spiega che Beatrice rappresenta la filosofia prima (metafisica/teologia) mentre la donna gentile è la filosofia seconda (etica/scienze umane). Il passaggio dall'una all'altra rappresenta la conversione di Dante allo studio della filosofia dopo la morte di Beatrice.

Il trattato contiene una dettagliata esposizione della cosmologia medievale (i nove cieli e le intelligenze motrici) e della dottrina dell'anima.

**Trattato III: Commento a "Amor che ne la mente mi ragiona"**

Questo trattato commenta la canzone in lode della "donna gentile", identificata con la Filosofia. Dante sviluppa una lunga celebrazione della sapienza attraverso la descrizione delle virtù della donna-filosofia.

La filosofia è definita come "amoroso uso di sapienza" e il suo oggetto è la verità. Dante espone le dottrine aristoteliche e neoplatoniche sulla conoscenza, distinguendo tra sapienza speculativa e pratica. L'ammirazione per la filosofia si esprime in termini che ricordano la celebrazione di Beatrice nella Vita Nova: la sapienza rende l'uomo simile a Dio.

**Trattato IV: Commento a "Le dolci rime d'amor ch'i' solia"**

L'ultimo trattato, il più lungo, commenta una canzone sulla vera nobiltà. Dante confuta la definizione comune di nobiltà come discendenza da "antica ricchezza" e afferma che la vera nobiltà consiste nella virtù individuale, indipendentemente dalla nascita.

L'imperatore non può definire la nobiltà (non ha autorità in questioni morali), né può farlo il filosofo Aristotele (che definì solo la nobiltà politica). La vera nobiltà è "seme di felicità, messo da Dio ne l'anima ben posta". Questa concezione democratica della nobiltà ha conseguenze politiche: ogni uomo virtuoso è nobile, indipendentemente dalla classe sociale.

Il trattato si conclude con una descrizione delle virtù proprie di ciascuna età della vita (adolescenza, gioventù, senettute, senio).`,

            temi: [
                "La difesa del volgare come lingua della filosofia e della cultura alta",
                "La teoria dei quattro sensi delle scritture (letterale, allegorico, morale, anagogico)",
                "La Filosofia come 'donna gentile' che conduce alla sapienza",
                "La cosmologia medievale: i nove cieli, le intelligenze angeliche, l'Empireo",
                "La dottrina dell'anima e delle sue potenze (vegetativa, sensitiva, razionale)",
                "La vera nobiltà come virtù individuale, non come privilegio di nascita",
                "L'imperatore come autorità temporale distinta da quella spirituale",
                "Il rapporto tra filosofia e teologia come 'amiche' e non rivali",
                "L'enciclopedia del sapere medievale resa accessibile al volgo",
                "Le virtù delle diverse età della vita come percorso di perfezione"
            ],

            personaggi: [
                {
                    nome: "La donna gentile / Filosofia",
                    descrizione: "La 'donna gentile' della Vita Nova viene qui reinterpretata allegoricamente come la Filosofia. Dopo la morte di Beatrice, Dante si dedicò allo studio filosofico come consolazione, frequentando 'le scuole de li religiosi e le disputazioni de li filosofanti'. La Filosofia diventa così una nuova 'donna' che cattura l'amore intellettuale del poeta."
                },
                {
                    nome: "Beatrice",
                    descrizione: "Nella reinterpretazione del Convivio, Beatrice non è più solo la donna amata della Vita Nova ma rappresenta la filosofia prima, la metafisica o teologia. Il 'tradimento' a favore della donna gentile diventa così il passaggio dalla contemplazione delle verità eterne (teologia) allo studio delle scienze umane (filosofia morale)."
                },
                {
                    nome: "Aristotele",
                    descrizione: "Il 'maestro di color che sanno' (come sarà definito nell'Inferno) è la maggiore autorità filosofica citata nel Convivio. Le sue opere, tradotte in latino e commentate da Alberto Magno e Tommaso d'Aquino, costituiscono la base della dottrina esposta da Dante. In particolare, l'Etica Nicomachea è fondamentale per il IV trattato."
                },
                {
                    nome: "Boezio",
                    descrizione: "L'autore della 'Consolazione della filosofia' (VI secolo) è esplicitamente citato come fonte di ispirazione. Dante racconta di aver letto Boezio e Cicerone dopo la morte di Beatrice, trovando consolazione nella filosofia. Il modello del prosimetro boeziano influenza la struttura del Convivio."
                },
                {
                    nome: "Federico II di Svevia",
                    descrizione: "L'imperatore del XIII secolo viene citato (e confutato) nel IV trattato come sostenitore della definizione di nobiltà come 'antica ricchezza accompagnata da belli costumi'. Dante rifiuta questa definizione, negando all'imperatore l'autorità di definire concetti morali."
                }
            ],

            significato: `Il Convivio rappresenta un momento fondamentale nel progetto culturale di Dante. Per la prima volta nella storia della letteratura italiana, un autore tenta di creare un'opera enciclopedica in volgare che renda accessibile al pubblico non latinofono il patrimonio del sapere medievale.

La difesa del volgare è appassionata e programmatica: Dante vede nella lingua materna lo strumento per democratizzare la cultura, sottraendola al monopolio del clero e delle università. Il volgare, "nuovo sole" che sorgerà quando il latino tramonta, può esprimere qualsiasi concetto filosofico. Questa intuizione sarà sviluppata sistematicamente nel De vulgari eloquentia.

L'incompiutezza dell'opera (solo 4 trattati su 15) può essere spiegata con l'inizio della composizione della Commedia, che assorbirà tutte le energie creative di Dante. Molti temi del Convivio confluiranno nel poema: la cosmologia, la dottrina dell'anima, la riflessione sulla nobiltà, il rapporto tra sapienza e virtù.

Il IV trattato, con la sua concezione "democratica" della nobiltà, ha avuto particolare fortuna. L'affermazione che la vera nobiltà è virtù individuale, indipendente dalla nascita, anticipa concezioni moderne dell'uguaglianza e del merito. Questa idea sarà ripresa nel Purgatorio (VII, 121-123): "Rade volte risurge per li rami / l'umana probitate".`,

            citazioni: [
                {
                    testo: "Oh beati quelli pochi che seggono a quella mensa dove lo pane de li angeli si manuca!",
                    fonte: "Convivio, I, i - Sulla sapienza come 'pane degli angeli'"
                },
                {
                    testo: "Lo volgare seguita uso, e lo latino arte; onde concedere si può esser più bello lo latino che lo volgare, ma non più nobile.",
                    fonte: "Convivio, I, v - Sulla nobiltà del volgare"
                },
                {
                    testo: "Questo sarà luce nuova, sole nuovo, lo quale surgerà là dove l'usato tramonterà.",
                    fonte: "Convivio, I, xiii - Profezia sul trionfo del volgare"
                },
                {
                    testo: "Filosofia è uno amoroso uso di sapienza, lo quale massimamente è in Dio, però che in lui è somma sapienza e sommo amore e sommo atto.",
                    fonte: "Convivio, III, xii - Definizione della filosofia"
                },
                {
                    testo: "Gentilezza è dovunque è virtute, ma non virtute dovunque gentilezza.",
                    fonte: "Convivio, IV, xvi - Sulla vera nobiltà"
                }
            ]
        },

        {
            titolo: "De vulgari eloquentia",
            sottotitolo: "La prima teorizzazione della lingua italiana",
            periodo: "1303-1305",
            tipo: "Trattato in latino",
            icon: "📜",
            introduzione: `Il De vulgari eloquentia ("Sull'eloquenza in lingua volgare") è un trattato in latino composto da Dante nei primi anni dell'esilio, probabilmente tra il 1303 e il 1305, contemporaneamente al Convivio. L'opera, rimasta incompiuta, doveva comprendere almeno quattro libri; ne restano solo due: il primo completo, il secondo interrotto al capitolo XIV.

Paradossalmente, Dante scrive in latino per trattare della superiorità del volgare: la scelta si spiega con il destinatario dell'opera, i dotti e i letterati che potrebbero obiettare all'uso del volgare nella letteratura alta. Bisognava convincerli nella loro lingua.

Il De vulgari eloquentia è la prima opera teorica sulla lingua italiana e, più in generale, il primo trattato di linguistica romanza della storia. Dante affronta questioni fondamentali: l'origine del linguaggio umano, la diversificazione delle lingue dopo Babele, la classificazione dei volgari romanzi, la ricerca del "volgare illustre" italiano ideale.`,

            contenuto: `**Libro I: Teoria del linguaggio e ricerca del volgare illustre**

Il primo libro si apre con una definizione rivoluzionaria: il volgare è "naturale", appreso dalla nutrice senza regole, mentre il latino (chiamato "gramatica") è "artificiale", appreso attraverso lo studio. Contrariamente all'opinione comune che vedeva nel latino la lingua più nobile, Dante afferma la superiorità del volgare perché "primo" e "naturale".

Dante ricostruisce l'origine del linguaggio: Adamo parlò per primo, e la sua lingua fu l'ebraico. Dopo il diluvio, i costruttori della torre di Babele furono puniti con la confusione delle lingue. Da questa dispersione derivarono le famiglie linguistiche: le lingue settentrionali (germaniche), le lingue slave e greche, e le lingue romanze (idioma trifario).

Le lingue romanze si dividono a loro volta in tre rami, identificabili dalla particella affermativa: la lingua d'oïl (francese), la lingua d'oc (provenzale), la lingua del sì (italiano). Dante esamina quindi i volgari italiani, divisi geograficamente: transpadani (piemontese, lombardo, veneto), toscani (fiorentino, pisano, lucchese, senese, aretino), centro-meridionali (marchigiano, umbro, romano, pugliese, siciliano, sardo).

Nessun volgare municipale, nemmeno il fiorentino, è degno di essere il "volgare illustre": tutti hanno difetti e provincialità. Il volgare illustre non è un dialetto particolare ma una lingua ideale, costruita dai migliori poeti attingendo a tutti i volgari. È definito con quattro aggettivi: illustre (perché conferisce gloria), cardinale (perché è il cardine attorno a cui ruotano i volgari municipali), aulico (degno di una corte regia, se l'Italia ne avesse una), curiale (conforme alla "curialità", la rettitudine del giudizio).

**Libro II: La canzone come forma suprema**

Il secondo libro (incompiuto) tratta degli "oggetti" degni del volgare illustre: i temi più alti, che sono le armi (la prodezza), l'amore (Venus) e la rettitudine (virtus). Solo i poeti eccellenti possono trattare questi temi nella forma suprema, la canzone.

La canzone è definita tecnicamente: è composta di stanze che possono avere struttura divisa (con fronte e sirma) o continua. Dante analizza il numero di versi per stanza, la lunghezza dei versi (l'endecasillabo è il più nobile), gli schemi delle rime, le partizioni interne (piedi, volte, combinatio, diesis).

Questa sezione trasforma il trattato linguistico in un manuale di retorica e metrica, fornendo regole precise per la composizione della canzone nello stile "tragico" (il più alto, appropriato al volgare illustre).

Il trattato si interrompe mentre Dante sta trattando della struttura della canzone. Non sappiamo cosa avrebbero contenuto i libri successivi, forse lo stile "comico" (medio) e quello "elegiaco" (basso), corrispondenti alla ballata e al sonetto.`,

            temi: [
                "La superiorità del volgare sul latino come lingua 'naturale' e 'prima'",
                "L'origine divina del linguaggio: Adamo come primo parlante",
                "La confusione delle lingue dopo Babele e la nascita delle famiglie linguistiche",
                "La classificazione delle lingue romanze: oïl, oc, sì",
                "L'esame critico di tutti i volgari italiani e i loro difetti",
                "Il volgare illustre come lingua ideale, non coincidente con nessun dialetto",
                "I tre grandi temi della poesia: armi (salus), amore (venus), rettitudine (virtus)",
                "La canzone come forma metrica suprema",
                "L'endecasillabo come verso più nobile",
                "La teorizzazione degli stili: tragico, comico, elegiaco"
            ],

            personaggi: [
                {
                    nome: "Adamo",
                    descrizione: "Il primo uomo è anche il primo parlante. Dante affronta la questione del 'primo parlante' per stabilire l'origine divina del linguaggio: Dio creò Adamo dotato della capacità di parlare, e la prima parola pronunciata fu 'El' (Dio), forma dell'ebraico. Nel Paradiso Dante modificherà questa posizione, facendo dire ad Adamo che anche l'ebraico è lingua convenzionale, mutata prima di Babele."
                },
                {
                    nome: "Nimrod",
                    descrizione: "Il tiranno biblico che guidò la costruzione della torre di Babele viene citato come responsabile della confusione delle lingue. I costruttori, puniti per la superbia, si ritrovarono a parlare lingue diverse secondo i loro mestieri: gli architetti una lingua, i muratori un'altra. Da questa dispersione nascono le famiglie linguistiche."
                },
                {
                    nome: "I poeti provenzali",
                    descrizione: "Arnaut Daniel, Bertran de Born, Giraut de Bornelh sono citati come maestri della poesia in lingua d'oc. Dante li considera modelli per la lirica alta, anche se scrive in lingua del sì. Arnaut Daniel, il 'miglior fabbro del parlar materno', sarà incontrato nel Purgatorio (XXVI)."
                },
                {
                    nome: "I poeti siciliani",
                    descrizione: "I poeti della scuola siciliana (Giacomo da Lentini, Guido delle Colonne, Rinaldo d'Aquino) sono citati come primi autori di poesia illustre in italiano. Dante riconosce alla scuola siciliana il merito di aver creato la tradizione lirica italiana, anche se il loro volgare siciliano non è il 'volgare illustre'."
                },
                {
                    nome: "Gli stilnovisti",
                    descrizione: "Guido Guinizzelli ('il padre / mio e de li altri miei miglior che mai / rime d'amor usar dolci e leggiadre') e Guido Cavalcanti, insieme a Cino da Pistoia, sono citati come i maggiori poeti italiani. Dante si pone modestamente al loro fianco come prosecutore della ricerca del volgare illustre."
                }
            ],

            significato: `Il De vulgari eloquentia è un'opera rivoluzionaria per molti aspetti. È il primo tentativo di fondare una teoria linguistica del volgare, il primo studio comparativo delle lingue romanze, la prima classificazione sistematica dei dialetti italiani.

L'idea che il volgare sia superiore al latino perché "naturale" rovescia la gerarchia tradizionale e pone le basi per l'affermazione delle lingue nazionali europee. La ricerca del "volgare illustre" anticipa la questione della lingua che dominerà la cultura italiana per secoli fino a Manzoni.

La concezione del volgare illustre come lingua "ideale", non coincidente con nessun dialetto ma costruita dai migliori poeti, è geniale: risolve il problema della frammentazione dialettale italiana proponendo una lingua letteraria comune, basata non sulla legislazione ma sulla pratica dei grandi autori. Di fatto, sarà proprio la lingua di Dante (il fiorentino illustre) a diventare la base dell'italiano letterario.

L'incompiutezza dell'opera (come del Convivio) si spiega probabilmente con l'inizio della Commedia, che realizzerà in pratica ciò che il De vulgari eloquentia teorizzava: la creazione di una grande opera in volgare che dimostri la capacità di questa lingua di esprimere i contenuti più alti, dalla filosofia alla teologia, dalla politica alla scienza.`,

            citazioni: [
                {
                    testo: "Vulgarem locutionem appellamus eam qua infantes assuefiunt ab assistentibus cum primitus distinguere voces incipiunt.",
                    fonte: "De vulgari eloquentia, I, i - Definizione del volgare"
                },
                {
                    testo: "Harum quoque trium gentium unam, scilicet ydioma ypanorum, cum triphario vulgari, quod quidem in tria adhuc derivatur quasi a quodam uno eodemque idiomate triphariam variatum.",
                    fonte: "De vulgari eloquentia, I, viii - Le tre lingue romanze"
                },
                {
                    testo: "Quare sic, non sine ratione, dicimus illustre, cardinale, aulicum et curiale vulgare in Latio, quod omnis latiae civitatis est et nullius esse videtur.",
                    fonte: "De vulgari eloquentia, I, xvi - Definizione del volgare illustre"
                },
                {
                    testo: "Per cantionem nihil aliud intellegimus quam actionem completam dictantis verba modulationi armonica.",
                    fonte: "De vulgari eloquentia, II, iii - Definizione della canzone"
                },
                {
                    testo: "Cantio est concatenatio stantiarum una et eadem sententia completiva, sub uno modulamine constitutarum.",
                    fonte: "De vulgari eloquentia, II, x - La canzone come forma suprema"
                }
            ]
        },

        {
            titolo: "Monarchia",
            sottotitolo: "La teoria dell'Impero universale",
            periodo: "1310-1313",
            tipo: "Trattato politico in latino",
            icon: "👑",
            introduzione: `La Monarchia (De Monarchia) è il principale trattato politico di Dante, composto probabilmente tra il 1310 e il 1313, durante la discesa in Italia dell'imperatore Arrigo VII di Lussemburgo. L'opera, scritta in latino, è divisa in tre libri che affrontano sistematicamente la questione del rapporto tra potere temporale e potere spirituale.

Il trattato rappresenta la più compiuta esposizione del pensiero politico dantesco, che pervade anche la Commedia. Dante sostiene la necessità dell'Impero universale come garante della pace e della giustizia sulla terra, e afferma l'indipendenza del potere imperiale da quello papale: entrambi derivano direttamente da Dio, senza che l'uno sia subordinato all'altro.

L'opera ebbe una fortuna travagliata: fu condannata dalla Chiesa e bruciata pubblicamente nel 1329 per ordine del cardinale Bertrando del Poggetto, legato pontificio. Entrò nell'Indice dei libri proibiti dove rimase fino al 1881. Ciononostante, la Monarchia fu letta e citata per secoli nel dibattito sui rapporti tra Chiesa e Stato.`,

            contenuto: `**Libro I: La necessità della monarchia universale**

Il primo libro dimostra che la monarchia temporale (l'Impero universale) è necessaria al benessere del genere umano. Dante parte dal concetto aristotelico di fine: ogni cosa è ordinata a un fine, e il fine dell'umanità è l'attuazione di tutta la potenzialità dell'intelletto. Questo fine può essere raggiunto solo nella pace, condizione indispensabile per la contemplazione e l'operare virtuoso.

La monarchia universale garantisce la pace perché elimina le cause dei conflitti: le guerre nascono dalla cupidigia e dall'ingiustizia, e un monarca che possiede tutto non è tentato dalla cupidigia. Inoltre, un giudice supremo può dirimere le controversie tra stati senza ricorrere alle armi.

L'unità è superiore alla pluralità: come l'universo è governato da un unico Dio, così l'umanità deve essere governata da un unico monarca. L'argomento procede dalla cosmologia medievale: i cieli sono mossi da un unico primo mobile, le intelligenze angeliche sono subordinate gerarchicamente, la famiglia ha un solo capofamiglia, il villaggio un solo capo. Anche la genesi umana da un unico progenitore (Adamo) dimostra che l'umanità è una e deve avere un governo unico.

**Libro II: Il diritto dell'Impero romano**

Il secondo libro dimostra che Roma ha assunto legittimamente il potere imperiale. Roma non conquistò il mondo con la sola violenza ma per volere divino, manifestato attraverso segni e miracoli. I Romani possedevano la nobiltà e la virtù necessarie per governare; la loro storia è costellata di esempi di giustizia, sacrificio, abnegazione.

Dante interpreta la storia romana in chiave provvidenziale: le vittorie romane sono "giudizi di Dio". I duelli tra Orazi e Curiazi, tra Torquato e il Gallo, la guerra contro Pirro, le guerre puniche, sono prove giudiziarie divine ("duelli") in cui Dio manifesta la propria volontà.

L'argomento decisivo è cristologico: Cristo scelse di nascere sotto Augusto, quando Roma dominava il mondo in pace. Sottoponendosi alla giurisdizione di Pilato, rappresentante dell'Impero, Cristo legittimò implicitamente il potere romano. Se il dominio romano non fosse stato legittimo, la passione di Cristo non avrebbe avuto valore redentivo, perché la punizione inflitta da un giudice illegittimo non è giustizia.

**Libro III: Indipendenza dell'Impero dal Papato**

Il terzo libro, il più rivoluzionario, affronta la questione cruciale: l'autorità dell'Impero dipende dal Papa o deriva direttamente da Dio? Dante confuta sistematicamente gli argomenti dei sostenitori della teocrazia papale:

- L'argomento dei "due luminari" (il sole e la luna di Genesi 1) non dimostra la subordinazione dell'Impero, perché il sole e la luna furono creati prima dell'uomo, mentre Papato e Impero esistono solo dopo il peccato.
- L'argomento di Melchisedek, che riuniva sacerdozio e regalità, non prova nulla perché i due poteri in lui erano distinti, non subordinati.
- La "donazione di Costantino" (falsa, ma Dante la credeva autentica) era illegittima: Costantino non poteva donare ciò che non possedeva a titolo personale, e il Papa non poteva accettare senza tradire il divieto evangelico di possedere oro.
- La deposizione dell'ultimo Merovingio da parte di papa Zaccaria non fu vera deposizione ma semplice autorizzazione.

Dante conclude che l'imperatore riceve la propria autorità direttamente da Dio, non tramite il Papa. I due poteri sono come i due soli (non sole e luna), entrambi illuminati direttamente da Dio. L'imperatore governa gli uomini verso la felicità terrena secondo la filosofia; il Papa li guida alla beatitudine eterna secondo la rivelazione. I due fini, e i due poteri, sono distinti ma complementari.`,

            temi: [
                "La monarchia universale come condizione necessaria per la pace",
                "La pace come fine ultimo della convivenza umana e premessa della contemplazione",
                "L'unità del genere umano e la necessità di un governo unico",
                "La legittimità provvidenziale dell'Impero romano",
                "La storia di Roma come manifestazione della volontà divina",
                "Cristo che legittima l'Impero nascendo sotto Augusto",
                "L'indipendenza dell'autorità imperiale dall'autorità papale",
                "La confutazione degli argomenti teocratici",
                "I 'due soli': Papato e Impero come poteri paralleli, non subordinati",
                "La felicità terrena e la beatitudine eterna come fini distinti"
            ],

            personaggi: [
                {
                    nome: "Arrigo VII di Lussemburgo",
                    descrizione: "Eletto re dei Romani nel 1308, scese in Italia nel 1310 per essere incoronato imperatore. Dante lo vide come il restauratore dell'autorità imperiale in Italia, capace di riportare la pace e punire i malvagi. La Monarchia fu scritta probabilmente per sostenere teoricamente la missione di Arrigo. La sua morte improvvisa nel 1313 segnò la fine delle speranze politiche di Dante."
                },
                {
                    nome: "Bonifacio VIII",
                    descrizione: "Sebbene non esplicitamente nominato, il papa Bonifacio VIII (1294-1303) è il bersaglio polemico del trattato. La bolla Unam Sanctam (1302) aveva affermato nella forma più estrema la teocrazia papale. Dante confuta punto per punto le argomentazioni di quella bolla, affermando l'autonomia dell'Impero."
                },
                {
                    nome: "Costantino",
                    descrizione: "L'imperatore Costantino è citato per la 'donazione' con cui avrebbe ceduto al papa Silvestro il potere temporale sull'Occidente. Dante (che crede autentico il documento, in realtà un falso del VIII secolo) condanna questa donazione come illegittima: l'imperatore non poteva smembrare l'Impero, né il papa accettare beni temporali."
                },
                {
                    nome: "Augusto",
                    descrizione: "L'imperatore Augusto (27 a.C. - 14 d.C.) rappresenta l'apice dell'Impero romano. Sotto di lui nacque Cristo, e questa coincidenza è per Dante provvidenziale: dimostra che Dio volle l'Impero come cornice storica per la redenzione. La pax augustea prefigura la pace universale che l'Impero dovrebbe garantire."
                },
                {
                    nome: "Aristotele",
                    descrizione: "Il 'filosofo' per eccellenza fornisce a Dante la struttura argomentativa del trattato, in particolare per il Libro I. Le nozioni di potenza, atto, fine, unità, derivano dalla metafisica e dalla politica aristotelica. Il concetto stesso di felicità terrena come fine dell'attività umana è aristotelico."
                }
            ],

            significato: `La Monarchia rappresenta il contributo più originale di Dante al pensiero politico medievale. In un'epoca in cui la Chiesa rivendicava la supremazia su ogni potere terreno, Dante afferma l'autonomia e la dignità dell'autorità civile, anticipando di secoli la separazione tra Chiesa e Stato.

La teoria dei "due soli" è rivoluzionaria: non più la Luna (Impero) che riceve luce dal Sole (Papato), ma due soli paralleli che illuminano sfere diverse dell'esistenza umana. Questa dottrina sarà condannata dalla Chiesa ma influenzerà tutto il successivo dibattito sulla laicità dello Stato.

L'interpretazione provvidenziale della storia romana anticipa filosofie della storia successive: Roma non fu un impero qualunque ma lo strumento scelto da Dio per preparare la venuta di Cristo e la diffusione del cristianesimo. Questa lettura dà senso universale alla storia pagana, integrandola nella storia della salvezza.

La passione politica di Dante per l'Impero universale potrebbe sembrare anacronistica già nel XIV secolo, quando gli stati nazionali si stavano consolidando. Ma il suo ideale di un'autorità superiore garante della pace tra le nazioni anticipa concezioni moderne di ordine internazionale: dalla "pace perpetua" di Kant alle organizzazioni internazionali contemporanee.`,

            citazioni: [
                {
                    testo: "Proprium opus humani generis totaliter accepti est actuare semper totam potentiam intellectus possibilis.",
                    fonte: "Monarchia, I, iv - Il fine dell'umanità"
                },
                {
                    testo: "Genus humanum optime se habet quando ab unico principe gubernatur.",
                    fonte: "Monarchia, I, v - La necessità del monarca universale"
                },
                {
                    testo: "Romanus populus de iure, non usurpando, Monarchae officium, quod Imperium dicitur, sibi adscivit.",
                    fonte: "Monarchia, II, i - La legittimità dell'Impero"
                },
                {
                    testo: "Duo fines operantis Providentia ineffabilis homini proposuit: beatitudinem scilicet huius vitae, et beatitudinem vitae aeternae.",
                    fonte: "Monarchia, III, xvi - I due fini dell'uomo"
                },
                {
                    testo: "Propter quod opus fuit homini duplici directivo secundum duplicem finem: scilicet Summo Pontifice, qui secundum revelata humanum genus perduceret ad vitam aeternam, et Imperatore.",
                    fonte: "Monarchia, III, xvi - I due soli"
                }
            ]
        },

        {
            titolo: "Rime",
            sottotitolo: "L'officina poetica di Dante",
            periodo: "1283-1307 circa",
            tipo: "Raccolta poetica",
            icon: "🎭",
            introduzione: `Con il termine "Rime" si indica l'insieme delle poesie di Dante che non sono confluite nella Vita Nova o nel Convivio. Non si tratta di un'opera organica ma di una raccolta postuma, ordinata e titolata dai curatori moderni. Le Rime comprendono circa 80 componimenti certi (90 con quelli di attribuzione dubbia): sonetti, canzoni, ballate, sestine.

Questa produzione lirica copre un arco di circa venticinque anni, dagli esordi giovanili (1283 circa) fino agli ultimi anni dell'esilio (1307-1315). Vi si possono riconoscere diverse fasi stilistiche e tematiche: le rime giovanili di stile cortese, le rime stilnovistiche per Beatrice, le rime "petrose" d'amore sensuale, le rime dottrinali e morali, le rime comico-realistiche della tenzone con Forese Donati, le rime dell'esilio.

Le Rime costituiscono l'officina poetica di Dante: il laboratorio in cui sperimentò forme, stili, temi che confluiranno poi nella Commedia. Vi si trova il Dante cortese, il Dante stilnovista, il Dante petroso, il Dante comico, il Dante morale dell'esilio.`,

            contenuto: `**Rime giovanili e cortesi (1283-1287)**

Le prime rime di Dante si inseriscono nella tradizione cortese e guittoniana. Sonetti come "La dispietata mente, che pur mira" mostrano un Dante ancora legato ai moduli della lirica d'amore convenzionale: la donna crudele, il poeta sofferente, le pene d'amore. Lo stile è elaborato, talvolta oscuro, con frequenti giochi retorici.

A questa fase appartengono anche alcune corrispondenze poetiche: sonetti scambiati con Dante da Maiano, risposta a Lippo Pasci de' Bardi, corrispondenza con Cino da Pistoia sulla natura d'amore. Questi testi mostrano il giovane Dante che cerca il proprio spazio nella cerchia dei poeti fiorentini.

**Rime stilnovistiche (1287-1293)**

Le rime più note di questo periodo sono quelle poi confluite nella Vita Nova, ma altre ne restarono fuori. Sono caratterizzate dalla dottrina dell'amore stilnovistico: la donna-angelo, il "cor gentile" come sede naturale dell'amore, l'effetto nobilitante della contemplazione amorosa. Canzoni come "Amor che ne la mente mi ragiona" e "Donne ch'avete intelletto d'amore" mostrano la piena maturità dello stile dolce e chiaro.

**Le Rime petrose (1296 circa)**

Le quattro "rime petrose" sono dedicate a una donna dal cuore di pietra (petra), probabilmente una figura allegorica ma forse anche una donna reale. "Io son venuto al punto de la rota", "Al poco giorno e al gran cerchio d'ombra", "Amor, tu vedi ben che questa donna", "Così nel mio parlar voglio esser aspro": queste canzoni rappresentano una svolta radicale nella poesia di Dante.

L'amore non è più nobilitante ma frustrazione, desiderio inappagato, quasi ossessione erotica. Lo stile si fa "aspro e sottile": rime difficili (petra/impetro/ripetro), consonanze aspre, lessico duro. La donna non è più l'angelo salvifico ma la "giovane donna", bella e crudele, che non risponde all'amore del poeta. La sestina "Al poco giorno" inventa in italiano la forma metrica della sestina, mutuata dal provenzale Arnaut Daniel.

Le rime petrose influenzeranno profondamente i poeti successivi, dal Petrarca degli anniversari alla poesia novecentesca.

**Rime dottrinali (1295-1307)**

Le rime dottrinali o filosofiche sono quelle canzoni poi commentate nel Convivio: trattano temi etici e filosofici, dalla natura della vera nobiltà alla ricerca della sapienza. "Le dolci rime d'amor ch'i' solia" affronta il tema della gentilezza; "Poscia ch'Amor del tutto m'ha lasciato" discute della leggiadria; "Doglia mi reca ne lo core ardire" è una violenta invettiva contro l'avarizia e la cupidigia.

In queste canzoni lo stile si fa più argomentativo e didascalico, con lessico filosofico e tecnico. Sono esperimenti importanti verso la pluralità stilistica della Commedia.

**Tenzone con Forese Donati (1293-1296)**

I sei sonetti della tenzone con Forese Donati (tre di Dante, tre di Forese) rappresentano un aspetto inaspettato della produzione dantesca: la poesia comica e ingiuriosa. Dante e Forese si insultano reciprocamente con accuse di furto, povertà, gola, lussuria, nascita illegittima.

Questa poesia "bassa" appartiene alla tradizione comico-realistica toscana (Cecco Angiolieri, Rustico Filippi). Dante la rigetterà nel Purgatorio (XXIII-XXIV) dove, incontrando Forese tra i golosi, si vergognerà della "pastura" passata.

**Rime dell'esilio (1302-1315)**

Le rime dell'esilio esprimono la condizione dolorosa del poeta bandito: "Tre donne intorno al cor mi son venute" è un'allegoria della Giustizia, della Generosità e della Temperanza in esilio con il poeta; "Amor, da che convien pur ch'io mi doglia" (la "canzone montanina") canta l'amore per una donna alpigiana ma anche, allegoricamente, le sofferenze dell'esilio.

Il tono si fa grave, profetico, sdegnato. L'esperienza dell'esilio trasforma la poesia di Dante, preparando direttamente la Commedia.`,

            temi: [
                "L'evoluzione della concezione dell'amore: cortese, stilnovistico, petroso",
                "La sperimentazione di stili diversi: dolce, aspro, comico, dottrinale",
                "La donna come figura polimorfa: angelo, pietra, allegoria della filosofia",
                "Il conflitto tra amore e ragione, passione e virtù",
                "La poesia come strumento di conoscenza e nobilitazione",
                "L'invettiva morale contro la decadenza dei costumi",
                "Le sofferenze dell'esilio e la dignità del poeta",
                "L'allegoria come linguaggio della poesia civile",
                "La corrispondenza poetica come forma di dibattito culturale",
                "La musicalità della lingua italiana nelle diverse forme metriche"
            ],

            personaggi: [
                {
                    nome: "La donna petra",
                    descrizione: "Figura centrale delle rime petrose, è una donna bellissima ma crudele, dal cuore duro come la pietra. Non risponde all'amore del poeta, che ne è tormentato. Alcuni la identificano con una donna reale (si è proposto il nome 'Pietra degli Scrovigni'), altri con un'allegoria (forse la stessa Filosofia che resiste al corteggiamento intellettuale). In ogni caso, rappresenta un amore non nobilitante ma frustrato e sensuale."
                },
                {
                    nome: "Forese Donati",
                    descrizione: "Cugino della moglie di Dante, Gemma, Forese (morto nel 1296) fu amico del poeta. I sei sonetti della tenzone mostrano un rapporto confidenziale e giocoso, in cui l'insulto è convenzionale più che reale. Nel Purgatorio (XXIII), Dante incontrerà Forese tra i golosi; i due si riconcilieranno e ricorderanno con vergogna la tenzone giovanile."
                },
                {
                    nome: "Cino da Pistoia",
                    descrizione: "Poeta e giurista (1270-1336 circa), Cino fu uno dei principali corrispondenti poetici di Dante. I due si scambiarono sonetti su questioni d'amore e di poesia. Cino è il destinatario di alcune rime dottrinali e, nella Commedia, sarà lodato nel De vulgari eloquentia come uno dei migliori poeti italiani."
                },
                {
                    nome: "Guido Cavalcanti",
                    descrizione: "Il 'primo amico' di Dante, Cavalcanti (1255-1300) è presente come interlocutore ideale in molte rime giovanili. La sua concezione dell'amore come forza irrazionale e distruttiva influenzò le rime petrose. La rottura dell'amicizia, mai spiegata da Dante, resta uno dei misteri della sua biografia."
                },
                {
                    nome: "Le tre donne",
                    descrizione: "Nella canzone 'Tre donne intorno al cor mi son venute', tre figure allegoriche femminili (Drittura/Giustizia, Larghezza/Generosità, Temperanza) si presentano a Dante lamentando di essere in esilio come lui. Rappresentano le virtù civili bandite dall'Italia corrotta. La canzone trasforma l'esilio personale in condizione emblematica della crisi morale dell'epoca."
                }
            ],

            significato: `Le Rime, pur non essendo un'opera unitaria, costituiscono un documento fondamentale per comprendere l'evoluzione poetica di Dante. Dalla lirica cortese allo Stil Novo, dalle petrose alla poesia morale dell'esilio, le Rime mostrano un poeta in continua sperimentazione, mai soddisfatto, sempre alla ricerca di nuove forme espressive.

La varietà stilistica delle Rime anticipa la pluralità di registri della Commedia. Il Dante "petroso" prepara l'Inferno, con le sue rime aspre e il lessico violento. Il Dante stilnovistico prepara il Purgatorio e il Paradiso, con la dolcezza e la luce. Il Dante comico della tenzone prepara i momenti grotteschi dell'Inferno. Il Dante dottrinale prepara le parti didascaliche del poema.

Sul piano metrico, le Rime testimoniano la maestria di Dante: la sestina inventata per la petrosa "Al poco giorno", la canzone "a stanze collegate" delle rime dottrinali, il sonetto elaborato della corrispondenza, la ballata delle rime minori. Questa varietà sarà poi dominata dalla forma unica della terzina nella Commedia.

Le Rime mostrano anche l'evoluzione umana di Dante: il giovane cortese, l'amante stilnovistico, l'uomo tormentato dalla passione, il filosofo, il polemista, l'esule. È la storia di una vita attraverso la poesia.`,

            citazioni: [
                {
                    testo: "Al poco giorno e al gran cerchio d'ombra / son giunto, lasso, ed al bianchir de' colli, / quando si perde lo color ne l'erba.",
                    fonte: "Rime, Sestina 'Al poco giorno' (Petrosa)"
                },
                {
                    testo: "Così nel mio parlar voglio esser aspro / com'è ne li atti questa bella petra, / la quale ognora impetra / maggior durezza e più natura cruda.",
                    fonte: "Rime, Canzone petrosa 'Così nel mio parlar'"
                },
                {
                    testo: "Tre donne intorno al cor mi son venute, / e seggonsi di fore; / ché dentro siede Amore, / lo quale è in segnoria de la mia vita.",
                    fonte: "Rime, Canzone 'Tre donne'"
                },
                {
                    testo: "Bicci novel, figliuol di non so cui / (s'i' non ne domandasse monna Tessa), / giù per la gola tanta roba hai messa, / ch'a forza ti convien tôrre l'altrui.",
                    fonte: "Rime, Sonetto della tenzone con Forese"
                },
                {
                    testo: "Amor, da che convien pur ch'io mi doglia / perché la gente m'oda, / e mostri me d'ogni vertute spento.",
                    fonte: "Rime, Canzone montanina"
                }
            ]
        },

        {
            titolo: "Epistole",
            sottotitolo: "Le lettere politiche e personali",
            periodo: "1304-1320",
            tipo: "Epistolario latino",
            icon: "✉️",
            introduzione: `Le Epistole di Dante sono tredici lettere in latino, scritte tra il 1304 e il 1320 circa, che ci sono pervenute (altre furono certamente scritte ma sono perdute). Rappresentano una fonte preziosa per conoscere il pensiero politico di Dante, le sue vicende biografiche durante l'esilio, e la sua attività letteraria, in particolare per l'Epistola XIII a Cangrande della Scala.

Le epistole sono redatte secondo le norme dell'ars dictaminis medievale, la retorica epistolare insegnata nelle scuole. Lo stile è solenne, il tono profetico e biblico, ricco di citazioni dalle Scritture e dai classici. Dante si presenta come "exul inmeritus", esule immeritevole, ma anche come profeta che annuncia giudizi divini sui nemici della giustizia.

Alcune epistole sono indirizzate a potenti (l'imperatore Arrigo VII, i cardinali italiani), altre a comunità (i principi d'Italia, i fiorentini), altre ancora sono personali (a Cino da Pistoia, a un amico fiorentino, a Cangrande). Insieme, formano un corpus che illumina il pensiero e l'azione di Dante negli anni della Commedia.`,

            contenuto: `**Epistole I-II: Al cardinale Niccolò da Prato (1304)**

Le prime due lettere sono scritte a nome dei Guelfi Bianchi esiliati, di cui Dante faceva allora parte. Sono indirizzate al cardinale Niccolò da Prato, inviato a Firenze come paciere dal papa Benedetto XI. La missione fallì e le lettere ne accompagnano le fasi. Mostrano un Dante ancora speranzoso nel rientro a Firenze con l'aiuto della Chiesa.

**Epistola III: A Cino da Pistoia (1304-1306)**

Una lettera personale al poeta amico, in risposta a un suo quesito d'amore: se chi ama possa cambiare oggetto d'amore. Dante sostiene di sì, con argomenti tratti dalla filosofia scolastica e da Ovidio. È un documento del rapporto intellettuale tra i due poeti.

**Epistola IV: A Moroello Malaspina (1307-1308)**

Scritta dall'ospite al suo protettore, annuncia l'invio di una canzone (forse "Amor, da che convien") e allude a un nuovo amore che ha colpito Dante ("donna alpigiana", forse la donna della "canzone montanina"). Lo stile è elevato e cortese.

**Epistola V: Ai principi e ai popoli d'Italia (1310)**

Con la discesa di Arrigo VII, Dante torna a sperare nella restaurazione imperiale. Questa epistola, dal tono profetico, annuncia ai principi italiani l'avvento dell'imperatore come giudice mandato da Dio. Citazioni bibliche (specialmente Isaia e i Salmi) conferiscono al testo toni apocalittici.

**Epistola VI: Ai Fiorentini scelestissimi (1311)**

È la più violenta delle epistole: un'invettiva contro i fiorentini che resistono all'imperatore. Dante li chiama "scelestissimi" (sceleratissimi), li paragona ai costruttori di Babele, li minaccia della punizione divina. Il tono è profetico e giudicante; Dante si sente strumento della giustizia divina.

**Epistola VII: All'imperatore Arrigo VII (1311)**

Dante esorta Arrigo a non perdere tempo nell'Italia settentrionale ma a marciare su Firenze, "vipera che si rivolta contro le viscere della madre". L'imperatore è chiamato a essere il nuovo Mosè che libererà l'Italia dalla schiavitù. Lo stile è elevato, le citazioni bibliche fitte.

**Epistole VIII-IX: A Margherita di Brabante (1311)**

Due lettere alla moglie dell'imperatore, una a nome delle donne italiane, l'altra personale. Celebrano l'imperatrice come nuova madre per l'Italia, con toni encomiastici.

**Epistola X: Ai cardinali italiani (1314)**

Scritta in occasione del conclave che seguì la morte di Clemente V, esorta i cardinali italiani a riportare la sede papale a Roma da Avignone. Dante lamenta la "vedovanza" di Roma, privata di entrambe le luci (papa e imperatore, essendo morto anche Arrigo). Lo stile è elevato, con citazioni dalle Lamentazioni di Geremia.

**Epistola XI: A un amico fiorentino (1315)**

Lettera personale in risposta a un'offerta di amnistia condizionata (pagamento di una multa, cerimonia umiliante). Dante rifiuta sdegnosamente: "Non è questa la via del mio ritorno" (Per hanc viam non redit patria, pater!). È un documento fondamentale sulla dignità dell'esule.

**Epistola XII: A Cangrande della Scala (1316)**

Dedicatoria del Paradiso al signore di Verona, la lettera contiene anche un'introduzione critica alla Commedia. Dante spiega il titolo (Commedia perché inizia male e finisce bene, con stile "dimesso"), il soggetto (lo stato delle anime dopo la morte), il fine (condurre i vivi dalla miseria alla felicità), la polisemia del testo (letterale e allegorico).

L'autenticità di questa epistola è stata discussa, ma la maggioranza degli studiosi la ritiene genuina. È il più importante documento di autoesegesi dantesca.

**Epistola XIII: A un amico (data incerta)**

Frammento di una lettera di accompagnamento a un'opera poetica (forse l'Egloga I a Giovanni del Virgilio).`,

            temi: [
                "L'esilio come condizione profetica e come ingiustizia da riscattare",
                "La missione provvidenziale dell'Impero per la pace universale",
                "L'invettiva contro Firenze e i nemici della giustizia",
                "Il tono biblico e apocalittico delle lettere politiche",
                "La dignità dell'esule che non accetta condizioni umilianti",
                "Roma come centro spirituale e temporale del mondo cristiano",
                "La funzione del poeta come profeta e giudice morale",
                "L'autoesegesi della Commedia nell'epistola a Cangrande",
                "Il rapporto con i protettori: riconoscenza e indipendenza",
                "La dottrina dei quattro sensi applicata alla Commedia"
            ],

            personaggi: [
                {
                    nome: "Arrigo VII di Lussemburgo",
                    descrizione: "Imperatore (1308-1313), destinatario della VII Epistola. Dante lo vide come il restauratore dell'ordine imperiale, il giudice che avrebbe punito i nemici della giustizia. Lo esortò a marciare su Firenze. La morte improvvisa di Arrigo nel 1313 fu un colpo terribile per le speranze politiche di Dante, che nel Paradiso gli riserverà un seggio altissimo nell'Empireo."
                },
                {
                    nome: "I Fiorentini",
                    descrizione: "Destinatari collettivi della VI Epistola, i Guelfi Neri che controllavano Firenze sono oggetto dell'invettiva più violenta di Dante. Sono chiamati 'scelestissimi', paragonati ai costruttori di Babele, minacciati della punizione divina. L'epistola mostra la rabbia dell'esule contro la patria che lo ha tradito."
                },
                {
                    nome: "Cangrande della Scala",
                    descrizione: "Signore di Verona (1311-1329), ospite e protettore di Dante negli ultimi anni. Destinatario dell'Epistola XIII, in cui Dante gli dedica il Paradiso e spiega la struttura e il significato della Commedia. Cangrande è celebrato nel Paradiso (XVII) come colui le cui 'opere notabili' saranno."
                },
                {
                    nome: "L'amico fiorentino",
                    descrizione: "Destinatario anonimo dell'Epistola XI, forse un religioso (Dante lo chiama 'pater'). Gli comunicò l'offerta di amnistia che Dante rifiutò. Il rifiuto ('Non è questa la via del mio ritorno') è diventato simbolo della dignità dell'esule che non si piega all'umiliazione."
                },
                {
                    nome: "Cino da Pistoia",
                    descrizione: "Poeta e giurista, amico di Dante, destinatario dell'Epistola III. La lettera risponde a un quesito sull'amore, mostrando il rapporto intellettuale tra i due poeti. Cino è uno dei 'migliori' poeti celebrati nel De vulgari eloquentia."
                }
            ],

            significato: `Le Epistole sono il documento più diretto del pensiero politico di Dante e della sua esperienza dell'esilio. Mostrano un Dante profeta e giudice, che si sente investito di una missione divina: annunciare la giustizia, condannare i malvagi, sostenere l'imperatore restauratore.

Il tono biblico delle lettere politiche non è retorica ma convinzione: Dante crede veramente che la storia sia guidata dalla Provvidenza, che l'Impero sia voluto da Dio, che i nemici della giustizia saranno puniti. Questa visione profetica della storia informa anche la Commedia.

L'Epistola a Cangrande è il più importante documento di autoesegesi dantesca. Le indicazioni sul titolo, lo stile, il soggetto, il fine, i sensi della Commedia hanno guidato secoli di interpretazione. Anche se alcuni ne hanno discusso l'autenticità, rimane un testo fondamentale per capire come Dante volesse essere letto.

L'Epistola XI, con il rifiuto dell'amnistia umiliante, è diventata simbolo della dignità intellettuale. "Non è questa la via del mio ritorno": Dante preferisce l'esilio perpetuo al disonore. Questa intransigenza morale, che può sembrare orgoglio, è per Dante fedeltà alla verità e alla propria missione.`,

            citazioni: [
                {
                    testo: "Dantis Alagherii florentini natione, non moribus.",
                    fonte: "Epistola V - Dante si definisce 'fiorentino di nascita, non di costumi'"
                },
                {
                    testo: "Ecce nunc tempus acceptabile, quo signa surgunt consolationis et pacis.",
                    fonte: "Epistola V - Annuncio della discesa di Arrigo VII"
                },
                {
                    testo: "Florentini scelestissimi... vos in exitiale supplicium traditi Deus et ratio sic volunt.",
                    fonte: "Epistola VI - Invettiva contro i Fiorentini"
                },
                {
                    testo: "Per hanc viam non redit patria, pater! Est alia via per quam ego revertar.",
                    fonte: "Epistola XI - Rifiuto dell'amnistia"
                },
                {
                    testo: "Incipit Comedia Dantis Alagherii, florentini natione, non moribus.",
                    fonte: "Epistola XIII - Intestazione della Commedia"
                }
            ]
        },

        {
            titolo: "Egloghe",
            sottotitolo: "Il dialogo poetico con Giovanni del Virgilio",
            periodo: "1319-1320",
            tipo: "Poesia bucolica latina",
            icon: "🌿",
            introduzione: `Le Egloghe (o Ecloghe) sono due componimenti in esametri latini scritti da Dante negli ultimi anni della sua vita, tra il 1319 e il 1320, in risposta a due carmi latini del maestro bolognese Giovanni del Virgilio. Formano un ciclo di quattro egloghe (due di Giovanni, due di Dante) che costituiscono una corrispondenza poetica sul tema della poesia e della gloria.

Il genere bucolico, ispirato alle Egloghe di Virgilio, usa personaggi pastorali (Titiro, Melibeo, Mopso) come maschere dei poeti. Sotto questa veste allegorica, Giovanni e Dante discutono di questioni letterarie: Giovanni invita Dante a scrivere in latino per ottenere l'alloro poetico; Dante risponde difendendo la sua scelta del volgare e della Commedia.

Le Egloghe sono gli ultimi componimenti di Dante, scritti a Ravenna poco prima della morte. Testimoniano l'inserimento di Dante nella cultura umanistica nascente, ma anche la sua fedeltà alla scelta del volgare come lingua della grande poesia.`,

            contenuto: `**Prima coppia di egloghe (1319)**

Giovanni del Virgilio, ammiratore della fama di Dante, gli scrive lamentando che il grande poeta sprechi il suo talento scrivendo in volgare ("a coturnis canora Pieria") invece di usare il latino, l'unica lingua che gli garantirebbe la corona d'alloro e la gloria universale. Lo invita a Bologna per essere incoronato poeta.

Dante risponde con la prima egloga. Sotto il nome pastorale di Titiro (il pastore dell'egloga virgiliana), Dante dichiara che attende di essere incoronato a Firenze, nel "bel San Giovanni" dove fu battezzato, con una corona di foglie del suo "bel Paradiso" - alludendo al completamento della Commedia. Non abbandonerà il volgare, ma forse scriverà anche in latino dopo aver finito il poema.

L'egloga include un passo celebre in cui Dante descrive allegoricamente le tre cantiche: "dieci vasi di latte" (i dieci cieli del Paradiso), offerti a Mopso (Giovanni) che ne sarà stupito.

**Seconda coppia di egloghe (1320)**

Giovanni risponde compiaciuto, invitando di nuovo Dante a Bologna e promettendogli la corona. Teme però che il viaggio sia pericoloso e offre ospitalità sicura.

Dante risponde con la seconda egloga, dove rifiuta cortesemente l'invito, preferendo restare a Ravenna. Descrive il suo rifugio pastorale presso il "monte Pelio" (probabilmente il monastero camaldolese di Classe) e la serenità trovata presso Guido Novello da Polenta. L'egloga si chiude con la promessa di una visita futura che non avverrà mai.

Le Egloghe mostrano un Dante sereno, che scherza sui propri capelli ormai grigi, sulla sua attività di "poeta pastore" a Ravenna. È l'ultima immagine che abbiamo del poeta prima della morte.`,

            temi: [
                "La difesa della scelta del volgare contro il prestigio del latino",
                "La corona poetica: il sogno dell'alloro nel 'bel San Giovanni'",
                "L'allegoria pastorale come linguaggio del dibattito letterario",
                "Il rapporto tra Dante e la cultura umanistica nascente",
                "La serenità dell'ultimo Dante a Ravenna",
                "La fedeltà a Firenze nonostante l'esilio",
                "Il completamento della Commedia come opera suprema",
                "Il rifiuto del riconoscimento a Bologna per attendere quello fiorentino"
            ],

            personaggi: [
                {
                    nome: "Giovanni del Virgilio",
                    descrizione: "Maestro di retorica e poesia a Bologna (1280-1327 circa), Giovanni ammirava Dante e desiderava che scrivesse in latino per ottenere fama universale. Le sue due egloghe mostrano rispetto e amicizia per Dante. Dopo la morte del poeta, compose un epitaffio latino in suo onore. Il nome 'del Virgilio' indica la sua devozione al poeta latino."
                },
                {
                    nome: "Titiro (Dante)",
                    descrizione: "Dante assume il nome pastorale di Titiro, il vecchio pastore della prima egloga virgiliana. Sotto questa maschera, risponde a Giovanni difendendo la sua scelta del volgare e annunciando il completamento del Paradiso. I 'capelli bianchi' di Titiro sono quelli di Dante, ormai cinquantenne."
                },
                {
                    nome: "Mopso (Giovanni)",
                    descrizione: "Giovanni del Virgilio è chiamato Mopso, nome pastorale tradizionale che evoca il poeta-indovino. A lui Dante promette di far 'stupire' con i 'dieci vasi di latte' del Paradiso."
                },
                {
                    nome: "Melibeo (Dino Perini?)",
                    descrizione: "Personaggio delle egloghe di Dante, forse identificabile con Dino Perini, un notaio ravennate amico del poeta. Rappresenta la comunità di amici e discepoli che circondava Dante negli ultimi anni."
                }
            ],

            significato: `Le Egloghe, pur nella loro brevità, sono un documento prezioso degli ultimi anni di Dante. Mostrano un poeta che, pur avvicinandosi alla morte, mantiene la fermezza delle sue scelte: il volgare, la Commedia, l'attesa del ritorno a Firenze.

Il dialogo con Giovanni del Virgilio testimonia anche l'inserimento di Dante nel circolo degli umanisti nascenti. Giovanni ammira la fama di Dante ma vorrebbe che scrivesse in latino; Dante accoglie l'omaggio ma non rinuncia al volgare. È il confronto tra due concezioni della letteratura: quella umanistica che guarda ai classici latini, e quella dantesca che vede nel volgare la lingua della nuova poesia.

Il sogno dell'incoronazione nel Battistero fiorentino è commovente: l'esule, che non rivedrà mai Firenze, spera ancora in un riconoscimento dalla patria ingrata. Questo sogno passerà a Petrarca, che sarà effettivamente incoronato poeta in Campidoglio nel 1341.

Le Egloghe sono anche l'ultimo documento della serenità raggiunta da Dante a Ravenna. Il pastore Titiro, sotto gli alberi di Classe, attende tranquillo la conclusione del suo "mirabil canto". È un'immagine pacificata del poeta che sta per morire.`,

            citazioni: [
                {
                    testo: "Vidimus in nigris albo patiente lituris / Pieriis redolere rosis.",
                    fonte: "Egloga I, Giovanni del Virgilio - Elogio della Commedia"
                },
                {
                    testo: "Dehinc sua mira / Phasidos in gremio Colchidum s
