// Workshopprogramma Duurzaamheidsfestival 2026
//
// Deze data is eenmalig overgezet uit het aangeleverde Excel-bestand
// (Workshops_festivalprogramma.xlsx, tabblad "Workshopprogramma"). Het
// originele Excel-bestand staat bewust NIET in de repository: het tweede
// tabblad bevat persoonlijke contactgegevens. De site leest deze data
// runtime nooit uit Excel maar uit dit getypeerde bestand.
//
// Twee dubbelingen uit de bron zijn samengevoegd:
//  - "Beleef de Bush!" stond twee keer (identiek) -> één kaart.
//  - "Speed dating" stond twee keer (zelfde tekst, andere sprekers)
//    -> één kaart met beide sprekers.
//
// De beschrijvingen zijn ingekort tot een richtlijn van ~90 woorden zonder
// feiten toe te voegen. Enkele van oorsprong korte teksten (mokken,
// upcyclen) zijn bewust niet opgerekt.

export const THEMES = [
  "Natuur & buiten beleven",
  "Klimaat & voedsel",
  "Circulair & afval",
  "Beleid & curriculum",
  "Spel & ontmoeting",
  "Didactiek & werkvormen",
] as const

export type Theme = (typeof THEMES)[number]

export type Speaker = {
  name: string
  role?: string
}

export type Workshop = {
  id: string
  title: string
  theme: Theme
  /** Volledige beschrijving. Regeleindes (\n) worden als zodanig getoond. */
  description: string
  /** Voor wie de workshop bedoeld is. */
  audience: string
  speakers: Speaker[]
}

export const workshops: Workshop[] = [
  {
    id: "programmatisch-werken",
    title: "Programmatisch werken aan onderwijs over natuur, duurzaamheid en klimaat",
    theme: "Beleid & curriculum",
    description:
      "Jutta Groosman en Monique Verstraten delen waarom Flores Onderwijs en Delta Scholengroep bewust kozen voor programmatisch werken en voor een duurzame samenwerking met een partnerorganisatie. Aan de hand van praktijkvoorbeelden gaan we in op drie vragen:\n• Waarom kies je voor een programma en niet voor een project?\n• Hoe helpt programmatisch werken om te schakelen in plaats van te stapelen?\n• Hoe draagt deze aanpak bij aan de duurzame borging van NDK-onderwijs?\nEr is volop ruimte voor interactie. Samen onderzoeken we hoe programmatisch werken bijdraagt aan blijvende verandering en toekomstbestendig onderwijs in jouw organisatie.",
    audience: "Duurzaamheidscoördinatoren, docenten, schoolleiders, bestuurders",
    speakers: [
      { name: "Jutta Groosman-Soeroredjo", role: "Programmamanager Delta Scholengroep & CLC Arnhem PO" },
      { name: "Monique Verstraten", role: "Directeur-bestuurder Natuurcentrum Arnhem" },
    ],
  },
  {
    id: "klimaatbestendige-stad",
    title: "Klimaatbestendige stad",
    theme: "Klimaat & voedsel",
    description:
      "Een flinke stortbui veroorzaken en straten onder laten lopen… dat is wat we doen in deze workshop! In de klimaatwatertafel zetten we de boel onder water om daarna te bedenken hoe je dat in het echt kunt voorkomen. Het gaat over klimaatadaptatie: wat kun je doen om de gevolgen van klimaatverandering te beperken? In het tweede deel trekken we met een waterscan de dierentuin in om te ontdekken wat werkt en waar nog winst valt te behalen. Een actieve workshop die je meteen handvatten geeft om in je eigen omgeving anders te kijken naar wateroverlast en hittestress.",
    audience: "Leerlingen PO en VO",
    speakers: [
      { name: "Maike Nelissen", role: "Adviseur Educatie, Natuurcentrum Arnhem" },
      { name: "Anneloes Louwerse", role: "Adviseur Educatie, Natuurcentrum Arnhem" },
    ],
  },
  {
    id: "kerndoelen",
    title: "Natuur en duurzaamheid in de kerndoelen",
    theme: "Beleid & curriculum",
    description:
      "De nieuwe kerndoelen komen eraan: een lijst met doelen waar alle leerlingen aan het eind mee in aanraking moeten zijn gekomen. Vanaf schooljaar 2027 moet elke school daarmee werken. Benieuwd wat erin staat en of die doelen een beetje groen en duurzaam zijn? We duiken samen in de kerndoelen, doen een kerndoelenbingo en aan het eind zit je vol inspiratie hoe jij leerlingen kunt klaarstomen voor een duurzame toekomst — gewoon tijdens jouw les!",
    audience: "Schoolleiders, bestuur, docenten, DuCo's",
    speakers: [{ name: "Yvette van Gastel", role: "Docent & team Educatie, SME" }],
  },
  {
    id: "beleef-de-bush",
    title: "Beleef de Bush!",
    theme: "Natuur & buiten beleven",
    description:
      "Gidsen van Burgers' Zoo laten je op een intensieve, interactieve manier kennismaken met het regenwoud. Burgers' Bush is een prachtig klein tropisch bos, met tientallen soorten dieren en meer dan duizend soorten planten. Bij deze wandeling gaat het niet om soortnamen leren of zo veel mogelijk feitjes opzuigen: de gidsen gaan samen met de deelnemers op ontdekking. Zij passen de 5 Pathways to Nature Connection toe, ontwikkeld door de University of Derby. Deze methode heeft een bewezen effect om de kloof tussen natuur en mens te dichten. Ervaar zelf hoe het werkt!",
    audience: "Iedereen",
    speakers: [{ name: "Gidsen van Burgers' Zoo", role: "Burgers' Zoo, Arnhem" }],
  },
  {
    id: "eigen-mokken",
    title: "Versieren van eigen mokken",
    theme: "Circulair & afval",
    description:
      "Op onze school werden veel wegwerpbekertjes gebruikt. Hoe we dit hebben opgelost? We hebben de docenten zelf mokken laten ontwerpen. Hoe we dit hebben aangepakt en wat het ons heeft opgeleverd, delen we graag met jullie. Daarnaast mag je ook zelf een mok ontwerpen, zodat je meteen weet hoe je dit op je eigen school kunt aanpakken.",
    audience: "Leerlingen PO en VO",
    speakers: [{ name: "Ecoteam Elzendaal Boxmeer", role: "Acht tot twaalf leerlingen, leerjaar 1 t/m 6" }],
  },
  {
    id: "upcycle-kledingstuk",
    title: "Upcycle een eigen kledingstuk!",
    theme: "Circulair & afval",
    description:
      "Samen met het eco-team van het Bonhoeffer College ga je aan de slag om oude kledingstukken nieuw leven in te blazen. Tijdens de workshop is er ruimte om met het eco-team laagdrempelig in gesprek te gaan.",
    audience: "Voor iedereen",
    speakers: [{ name: "Sara de Waard", role: "Leerling eco-team, Bonhoeffer College Castricum" }],
  },
  {
    id: "escaperoom-larenstein",
    title: "Escaperoom: Kennislandgoed Larenstein",
    theme: "Spel & ontmoeting",
    description:
      "Wil je een educatieve workshop met een competitief element? Kies dan voor de escaperoom in het teken van Kennislandgoed Larenstein, het educatieve buitenlokaal van Hogeschool Van Hall Larenstein in Velp. De opdrachten zijn gerelateerd aan het unieke studieaanbod en laten je kennismaken met de wereld van de fysieke leefomgeving. Durf jij de uitdaging aan en kraak jij samen met je groep als eerste de code?",
    audience: "Voor iedereen",
    speakers: [{ name: "Studentvoorlichters", role: "Hogeschool Van Hall Larenstein" }],
  },
  {
    id: "speed-dating",
    title: "Speed dating",
    theme: "Spel & ontmoeting",
    description:
      "Ontmoet collega's en leerlingen, wissel ervaringen uit en ga in gesprek over duurzame dilemma's op school. Op een dynamische manier maak je kennis met elkaar en praat je over prikkelende dilemma's rondom duurzaamheid op school. Goede kans dat je met veel nieuwe en frisse ideeën uit deze workshop komt, die je misschien direct kunt toepassen op jouw school. Zin in een date?",
    audience: "Iedereen",
    speakers: [
      { name: "Eva Mientjes", role: "Coördinator Eco-Schools Nederland" },
      { name: "Yvette van Gastel", role: "Team Educatie, SME / Vereniging GDO" },
    ],
  },
  {
    id: "duurzaamheid-in-dna",
    title: "Duurzaamheid in het DNA van je school brengen",
    theme: "Beleid & curriculum",
    description:
      "Je komt in contact met duurzaamheidscoördinatoren, docenten en schoolleiders uit heel Nederland, allemaal bezig om duurzaamheid te verankeren in hun onderwijs en schoolorganisatie. We leren actief van elkaar aan de hand van de SustainaBul: een toolkit die je als school helpt in beeld te brengen waar je nu staat. Deze momentopname kijkt naar schoolvisie, lesprogramma, manier van lesgeven, schoolomgeving, teamontwikkeling en bedrijfsvoering — een compleet beeld gebaseerd op de Whole School Approach. Daarmee kun je samen met collega's en leerlingen doelgericht stappen zetten naar een schoolcultuur waarin duurzaamheid in het DNA zit.",
    audience: "Schoolleiders, bestuurders, docenten, DuCo's",
    speakers: [
      { name: "Peter Luijten", role: "Netwerkcoördinator basisonderwijs, coöperatie Leren voor Morgen" },
      { name: "Suzanne Pepping", role: "Netwerkcoördinator voortgezet onderwijs, coöperatie Leren voor Morgen" },
      { name: "Eva Mientjes", role: "Coördinator Eco-Schools Nederland" },
    ],
  },
  {
    id: "wereld-op-je-bord",
    title: "De wereld op je bord",
    theme: "Klimaat & voedsel",
    description:
      "Waar komt je ontbijt vandaan? En hoeveel kilometers heeft je banaan, kaas of hagelslag gereisd voordat het op je bord lag? Leerlingen ontdekken dat in elk hapje een stukje van de wereld zit. Aan de hand van alledaagse producten zoeken ze naar de herkomst en de route die het voedsel aflegt, van het land waar het groeit tot de supermarkt om de hoek. Daarna duiken we in wat meespeelt — afstand, seizoen, prijs — en wat dat betekent voor biodiversiteit en klimaat. We sluiten af met een creatieve opdracht: in groepjes ontwerpen leerlingen de lunch van de toekomst.",
    audience: "Leerlingen PO en VO",
    speakers: [
      { name: "Famke Gerritsen", role: "VN-jongerenvertegenwoordiger Biodiversiteit en Voedsel" },
      { name: "Carmen Simons", role: "Werkgroep Voedsel en Natuur, Nationale Jeugdraad" },
      { name: "Hanna van den Broek", role: "Werkgroep Voedsel en Natuur, Nationale Jeugdraad" },
    ],
  },
  {
    id: "global-escape",
    title: "Global Escape – De Wereld in je Klas",
    theme: "Spel & ontmoeting",
    description:
      "Hoe breng je de wereld naar jouw school? Met de Global Escape stappen leerlingen in een interactieve escaperoom vol video's, wereldvraagstukken, puzzels en uitdagingen. Samen zoeken ze naar antwoorden en proberen ze binnen 60 minuten de escape op te lossen. Deze mobiele escaperoom kan op vrijwel iedere school of locatie worden opgebouwd. Spelenderwijs maken leerlingen kennis met mondiale thema's, verschillende culturen en internationale vraagstukken. Een unieke ervaring waarin samenwerken, creativiteit en kritisch denken centraal staan.",
    audience: "Leerlingen",
    speakers: [{ name: "Trainers van Global Exploration", role: "Global Exploration" }],
  },
  {
    id: "natuurinclusief-onderwijs",
    title: "Community of Practice Natuurinclusief onderwijs",
    theme: "Natuur & buiten beleven",
    description:
      "Wij zijn natuur — dat is de basisgedachte van natuurinclusief onderwijs. Deze beweging spreekt hoofd, hart en handen aan. Leerlingen en studenten trekken eropuit, ontdekken, werken samen en leren zorg dragen voor hun omgeving. Zo ontwikkelen ze niet alleen cognitieve vaardigheden, maar ook veerkracht, empathie en creativiteit. Het is veel meer dan een manier van lesgeven: het is een voedingsbodem voor de groei en het welzijn van de volgende generatie. Benieuwd hoe je natuur kunt verbinden met je eigen onderwijs? In deze Community of Practice ervaar je natuurinclusieve werkvormen en ga je naar huis met werkvormen die je morgen kunt toepassen.",
    audience: "Schoolleiders, bestuur, docenten, DuCo's",
    speakers: [
      {
        name: "Nanda Vrielink",
        role: "Projectleider/onderzoeker, Centre of Expertise Smart Sustainable Cities (Hogeschool Utrecht)",
      },
    ],
  },
  {
    id: "didactic-bricks",
    title: "Didactic Bricks",
    theme: "Didactiek & werkvormen",
    description:
      "Didactic Bricks zijn creatieve, actiegerichte activiteiten, ontworpen in een Europees project om leerlingen van 10 tot 15 jaar te betrekken bij lokale duurzaamheidsuitdagingen rond kleding, voedsel en natuur. Spelenderwijs ontwikkelen ze sociaal-ondernemende vaardigheden. Docenten kunnen de lesactiviteiten naar eigen inzicht combineren in lesplannen ('playlists') — een soort 'didactische spotify' waarmee je los van methodes snel inspeelt op actuele thema's. In deze workshop ervaar je zelf een brick-activiteit en ga je vervolgens zelf didactic bricks ontwikkelen.",
    audience: "Onderwijsprofessionals",
    speakers: [{ name: "Collega's van Duurzame Pabo, Koersmakers Educatie & Leren voor Morgen" }],
  },
  {
    id: "plantenrace",
    title: "Plantenrace",
    theme: "Didactiek & werkvormen",
    description:
      "Hoe ziet je klaslokaal er eigenlijk uit? Wist je dat planten in een lokaal niet alleen een rol spelen in de esthetiek, maar ook bijdragen aan een gezonde leef- en leeromgeving? Wil jij je klas vergroenen maar weet je niet waar je moet beginnen, welke planten geschikt zijn of hoe je de vakanties overbrugt? Starten met één plantje in je lokaal, een plank, of denk je groter? Zie en ervaar hoe wij dit hebben aangepakt. Een simpele maar doeltreffende manier om je eco-team meer zichtbaarheid te geven én je school op te fleuren!",
    audience: "VO en PO, ook voor leerlingen",
    speakers: [{ name: "Marieke Stoel", role: "Docent, Thomas a Kempis College" }],
  },
]
