# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Vincent de Jager

  #### Je startniveau:
  Ik zeg nog rood, maar gezien resultaten van vorige vakken kan ik misschien zwart zeggen.

  #### Je focus:
  Ik zal beginnen met responsive, maar doe graag allebei
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  (https://www.rituals.com/nl-nl/home#home)

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home pagina Rituals.
  
  <img src="readme-images/rituals-home-mobile.png" width="250px" alt="Rituals home pagina op telefoon">
  
  <img src="readme-images/rituals-home-pc.png" width="500px" alt="Rituals home pagina op desktop en laptop">

  #### Screenshot(s) van de tweede pagina (small screen):
  Product overzicht pagina advent kalendars bij Rituals.
  
  <img src="readme-images/rituals-advent-mobile.png" width="250px" alt="Rituals product overzicht pagina op telefoon">
  
  <img src="readme-images/rituals-advent-pc.png" width="500px" alt="Rituals product overzicht pagina op desktop en laptop">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  Ik ging de Rituals websites testen op toegankelijkheid. Daarbij gingen we testen doormiddel van de narrator optie op windows, deze leest de website voor, en zou je er simpel doorheen moeten kunnen navigeren met mijn keyboard.

  Screenreader:
  Vorig jaar kwam de screenreader niet verder dan de menubalk in de header. Nu is het ietsje beter voor de standaard webpagina, maar er is ook een toegankelijkheid knop toegevoegd.
  
  Zonder toegankelijkheid optie ingeschakeld:
  - Geen skip het menu, maar gaat ook niet door het hele menu.
  - Opent de zoekoeptie en laat die dan vervolgens de hele tijd openstaan.
  - Skipt ook veel info, zoals product prijzen.
  - Is erg traag, leest enorm veel onnodige achtergrond informatie op, bij een simpele button naar links bleef de narrator maar door babbelen, alsof de backend werd opgelezen, of een foutmelding op een loop.
  - Er was ook geen duidelijke focus state rond de elementen.
  
  Met toegankelijkheid optie geselecteerd:
  - Focus state was een stuk beter.
  - Er waren skip menu, en andere skip opties in het begin.
  - Layout van de website werd wel enorm anders.
  - Er was redelijk door te elementen te navigeren.
  - Niet overal duidelijke alt teksts, soms missen ze helemaal
  
  Over het algemeen vind ik het niet echt goed dat de website zelf eigenlijk niet goed toegankelijk is, al is het beter dan een jaar geleden, en dat je dus een speciale functie moet activeren om het toegankelijker te maken, maar tegelijkertijd visueel minder toegankelijk word, het is dus een beetje het ene of het andere. De toegangkelijkheid optie activeren via de narrator leuk soms ook wat moeilijker dan verwachten, soms leek die de toegankelijkheid functie meteen te vinden en als eerste optie te geven, maar heb ook genoeg momenten gehad waar hij niet gezien werd. Niet erg handig dus.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/scherm-schets-homepage-mobile.png" width="600px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dynamisch-deel-rituals-menu-breakdown.png" width="600px" alt="breakdown van een dynamisch deel, het menu">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  De basis van de html ging redelijk soepel, had daar toch al wel de meeste ervaring mee, samen met de css. Wat ik veelal geleerd heb is toch het juiste gebruik van tags, als in welke tag past waar het best, daarbij ook wel tags gebruikt waar ik minder ervaring mee had, zoals de article tag en de ook de video tag heb ik nog niet veel mee gewerkt.

  Wat ik wel een redelijke uitdaging vond was het structureren van het hamburger menu, dit omdat deze meerdere lagen had, wat redelijk diep geneste elementen/tags creerden.

  <img src="readme-images/code-img1-nav-html.png" width="600px" alt="html eerste laag hamburger menu">

  Hierboven de eerste laag van mijn hamburger menu, hij is ingeklapt, want uirgeklapt krijg ik hem niet goed in beeld, maar er is te zien hoeveel regels er verstopt zijn.

  Verder heb ik ook moeten wennen aan het video element, vooral ook omdat de video overal anders reageerde, op mobiel opende bijvoorbeeld een video player als je op play drukte, ipv dat die als achtergrond speelde, hier moesten weer oplossingen voor gevonden worden, ook de verschillende posters bij verschillende scherm grotes. Hieronder een screenshot hiervan.

  <img src="readme-images/code-img2-video-html.png" width="600px" alt="html van de video tag">

  ### Agenda voor meeting
  De vragen die ik ben tegen gekomen voor het vooruitgangsgesprek:
  - Is display none oke op de li in de ul (nav)
  - px of em voor header hoogte
  - Meer over px en em bij bijvoorbeeld img in het menu (want bij em komen verschillende maten)
  - SVG versimpelen, met een id en use? Of niet nodig? Belangrijkste of de id echt nodig is.
  - Juiste oplossing om voor scroll probleem in de nav? Dus de stijl in JS ipv transform: translateX
  - Sluit en terug knop naar zoek opties luisteren niet naar de juiste selectoren
  - SVG hoeken zijn niet recht

  ### Verslag van meeting
  Wat ik heb meegenomen van het gesprek:
  - Geen probleem display none te gebruiken als dat de beste optie is en element ook echt uit de dom gehaald moet worden wanneer het niet zichtbaar is.
  - em schaalt mee met de parent, dus het is minder consistent, maar beter dan px op veel plekken, rem zal dan het handigst zijn want is meer consistent.
  - id en use zeker niet nodig voor de werking van een svg tag. Voor basis gebruik is inline svg genoeg zonder al de extra's
  - De selectoren in de JS zaten elkaar een beetje dwars, deze wat specifieker maken lost het probleem op.
  - Problemen met afgesneden lijnen van een svg zal temaken hebben met de viewbox en positionering, deze moeten goed overeen komen, anders valt het buiten de viewbox.
  - Verder nog gehad over het gebruik van tags zoals article, ipv een li's in een ul onder andere. In dit geval voor de product cards.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik heb nu een stuk meer aan de css gedaan en een beetje js. Veel gewerkt aan de carausels en het juist visualiseren van de product cards. Ook veel gewerkt aan de footer, wat wel soepel ging gelukkig. Maar de carousels werkend krijgen met drag scroll en scroll snap was een flinke uitdaging, de drag scrolling met js was nog wel te doen met wat voorbeelden en proberen, de js:

  <img src="readme-images/code-img4-dragscroll-js.png" width="600px" alt="javascript voor de dragscroll">

  Buiten de screenshot bovenaan natuurlijk de variabelen die de drag state bijhouden. Dit werkte gelukkig redelijk soepel, het checken hoeveel de muis beweegt over de x as wanneer die is ingeklikt, met een aantal extra checks toegevoegd. Helaas toen ik scroll snap toevoegde werd de drag scroll heel haperig, want hij springt dan telkens naar de snap punten zeg maar. Hieronder de code van de scroll snap:

  <img src="readme-images/code-img3-scrollsnap-css.png" width="600px" alt="css code voor de scrollsnap">

  Het was een hoop proberen en de scroll snap anders toe te voegen, maar ar snel het idee dat de scroll snap uit moet tijdens het scrollen, in het begin werkte ik met style aanpassen via de js, maar dit voegde style direct op de html en leek niet soepel te werken. Dus toen gewerkt met de class scrolling die word toegevoegd op de scroll container tijdens het scrollen, en zo met de css het scrollen uitgezet wanneer de container deze class heeft. Dit werkte eerst niet helemaal soepel, want bij het stoppen met scrollen werd de scroll snap niet altijd goed opgepakt, geprobeerd met delays te werken, maar uiteindelijk een mini scroll moment toegevoegd van een px om de browser te forceren de css goed te lezen en te zien dat de scrollsnap weer actief is zeg maar, of eigenlijk de mini nudge forceert de browser om scroll-snap opnieuw te evalueren na het stoppen met drag-scroll.

  Dan heb ik ook nog handige dingen geleerd zoals onder andere :is(), dit omdat ik een soort product kaarten heb die ik gestyled heb met grid, maar niet elke kaart (article tag) had exact dezelfde content, dus moest zorgen dat ze wel allemaal dezelfde layout hebben ondanks missende elementen, die in een grid kunnen zorgen dat de ruimtes niet gelijk zijn. Hieronder de product kaarten visueel:

  <img src="readme-images/code-img6-is-site.png" width="600px" alt="De product kaarten op mijn nagemaakte website homepage">

  Moet eerlijk zeggen dat ik het nog steeds een lastige vind, en het was een hoop puzzelen, maar het selecteerd elementen gebaseerd op andere elementen die er altijd zullen zijn, zoals bijvoorbeeld buttons of titels, op deze manier als er minder p elementen zijn dan word het niet opgeschoven als je nth-of-type gebruikt, maar word nog steeds de juiste p geselecteerd voor styling ondanks dat er een aandere volgorde is zeg maar, lastig uit te leggen, hoop dat het duidelijk is. Hieronder een stukje van deze code:

  <img src="readme-images/code-img5-is-css.png" width="600px" alt="css code voor geavenceerde element selectoren">

  ### Agenda voor meeting
  Mijn voorbereiding voor meeting en de vragen die ik ben tegen gekomen tijden het werken aan de opdracht:
  - Vragen naar display none en visibility hidden, wat is handiger of beter in bepaalde situaties?
  - Hoe werkt het met font weight, kan het zomaar aangepast worden?
  - Is de manier waarop ik carousels maak goed? Of zou ik meer met iets als libraries moeten werken?
  - Hoe zit het met de onClick? Ik hoor veel dat dat niet heel gewenst is, liever edventlistners?
  - Button of a link bij het veranderen van de taal of land in de footer?

  - Buiten het gesprek nog gevraagd wat er verwacht word van de responsiveness, wat betreft @media en dergelijke.
  - En wat er verwacht word wat betreft de video op mijn tweede pagina, die met een heleboel losse animaties is gemaakt waardoor de pagina erg traag word. Zelf heb ik een video gemaakt, zodat de pagina niet zo hapert.

  ### Verslag van meeting
  Uitkomsten van het gesprek waren:
  - Display none waaschijnlijk beter voor het navigeren, zodat het helemaal uit beeld is.
  - Voor font weight moeten of alle fonts met de gewenste weights ingeladen worden of het moet een variable font zijn, die werken het meest flexibel.
  - Helemaal prima om hem zelf te maken, zolang de juiste elementen gebruikt worden. Libraries kunnen handig zijn en dingen versimpelen, maar er je hebt er minder controle over.
  - onClick kan nog wel, maar het is wat verouderd, EventListeners zijn moderner en flexibeler mee te werken.
  - Bij het veranderen van de taal of land veranderd de http, dit betekent dat het naar een andere pagina gaat, en de a die ik nu heb is dus ook de juiste keuze.

  - Voor responsive alleen @media gebruiken als het niet anders kan, probeer zoveel mogelijk gewoon met grid en flexbox te doen, en met echte sprongen dus @media.
  - Kan ook de achtergond video maken met svg's en transform, maar geen prioriteit, alleen als er tijd over is.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### WCAG Checklist
  <img src="readme-images/toegankelijkheid-test-page1.jpeg" width="350px" alt="WCAG Checklist pagina 1">
  <img src="readme-images/toegankelijkheid-test-page2.jpeg" width="350px" alt="WCAG Checklist pagina 2">
  <img src="readme-images/toegankelijkheid-test-page3.jpeg" width="350px" alt="WCAG Checklist pagina 3">
  <img src="readme-images/toegankelijkheid-test-page4.jpeg" width="350px" alt="WCAG Checklist pagina 4">
  <img src="readme-images/toegankelijkheid-test-page5.jpeg" width="350px" alt="WCAG Checklist pagina 5">

  ### Bevindingen
  De test ging redelijk soepel, heb wel nog eerst flink lopen werken aan het hamburger menu met aria en hidden en dergelijke om deze een beetje fatsoenlijk bruikbaar te maken. De meeste aspecten van de checklist zaten goed in mijn website, maar er misten ook nog wel wat dingen waar ik nog effe naar moet kijken. Dingen zoals onder andere Dark modus en reduced motion query. Maar een hoop deed de website ook goed gelukkig.
  - De skip link verschijnd goed, en werkt, skip goed naar de hoofdinhoud.
  - Het makkelijk en fijn om door de verschillende lagen van het hamburger menu te navigeren.
  - De verstopte lagen en menu items werden goed overgeslagen.
  - De verschillende key commands werkte prima, en kon zo goed vinden wat ik wou.
  - Er waren wel nog wat plekken waar ik wat aria attributen kan toevoegen, want er word teveel opgelezen door de narrator.

  Wat dus beter ging naar mijn meening is dat toegengkelijkheid meteen vanaf de basis te doen is, je hoeft er geen speciale functie voor inschakkelen. Ook blijft de layout van de website dus gewoon hetzelfde, dus dat voelde positief. 
  
  Wat ook beter ging is het afspelen van de video, of het pauzeren, het verschil is dat op de officiele website speeld de achtergrond video standaard af, maar de knop om hem te pauzeren staat standaard op play, dus je moet twee keer klikken om de video te stoppen. Ook stopt de achtergrond video ook in het moment, en ik heb het zo dat de poster terug komt, en je dus een netjes plaatje hebt als de video niet afspeeld, allemaal beter voor toegankelijkheid en gebruiksvriendelijkheid.

  Ik heb een hoop werkend gekregen, ook nog een hoop dat ik werkend wou maken maar niet aan toe gekomen ben. Ik heb wel het gevoel dat niet alles even soepel gaat zoals op de officiele website, maar een paar dingen ook wel wat soepeler. Maar dat kan zij omdat ik nog een hoop animaties toe te voegen heb.

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik ben nu erg veel met de responsiveness bezig geweest, en hier en daar met wat micro interacties, waar mijn aandacht toch wat sneller naar ging. Maar de responsiveness is goed ver gekomen, ik heb geprobeerd alleen @media te gebruiken waar echt niet anders kan, wat voor mijn gevoel op best wat plekken was, omdat deze site best een hoop rare verspringengen doet die niet zomaar te maken zijn met flexbox of grid. De volgende twee screenshots zijn voorbeelden van een responsive element op mijn site:

  <img src="readme-images/code-img8-res1advent-site.png" width="400px" alt="advent pagina small scherm">

  <img src="readme-images/code-img9-res2advent-site.png" width="600px" alt="advent pagina breed scherm">

  Dit is een breakpoint waar de drie elementen van 1 zichtbaar element in een scroll container naar alle drie de element in beeld gaat. Deze is eigenlijk met 1 regeltje in een @media opgelost, of eigenlijk een paar regeltjes, maar 2 regels in 1 selector. Die het van flexbox naar grid maakt:

  <img src="readme-images/code-img10-res3advent-css.png" width="400px" alt="advent pagina breed scherm">

  Het was een beetje spelen, ook omdat ik hetzelfde eigenlijk al een beetje op de homepagina had, maar dezelfde code er toch niet helemaal op leek te werken.

  Dan had ik ook nog de situatie dat ik een scrollbaar element had met een titel erboven. Vervolgens bij een breed scherm kwam deze titel met een extra uitleg en een knop binnen in het scroll element te staan, hieronder de twee screenshots die dit laten zien:

  <img src="readme-images/code-img11-prepend_s-site.png" width="350px" alt="home pagina small scherm, prepend element">

  <img src="readme-images/code-img12-prepend_l-site.png" width="450px" alt="home pagina breed scherm, prepend element">

  En dan hieronder de js die dit element binnen de scrollcontainer plaatst en weer terug afhankelijk van de breedte van het scherm:

  <img src="readme-images/code-img13-prepend-js.png" width="500px" alt="home pagina javascript voor prepend element">

  En dan hebben we natuurlijk ook nog de plekken waar we geen @media nodig hebben, zoals een hoop articles, waar ik bij breed scherm de img naast te teksten en knoppen in een row moest zetten ipv onder elkaar, dit met bijvoorbeeld grid en repeat(auto-fit, minmax(min(100%, 380px), 1fr)), maar ook met flex en dan grow, shrink en basis, om ze zo de gewenste ruimte te geven wanneer het scherm breed genoeg is, en dan dat de ruimte niet 50/50 is, maar dat bijvoorneeld de img wat meer ruimte krijgt dan de teksten en dergelijke. Hieronder een voorbeeld van deze css:

  <img src="readme-images/code-img14-res_articles-css.png" width="600px" alt="css code voor responsive behaviour met behulp van flex">

  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  Ik was in het buitenland helaas, maar er was nog een feedback moment na mijn trip. Ik had eigenlijk de vragen die ik tijdens mijn trip opdeed moeten opschrijven, gelukkig heb ik een hoop zelf kunnen oplossen met blijven proberen en opzoeken. Maar wat vragen waren:
  - Hoe zit het precies met de volgorde van de h1, h2, h3 en zo voort? Er zijn foutmeldingen dat de elkaar niet juist volgen, is dat heel erg?
  - In de footer bij het kiezen van het land en taal klopt de geselecteerd optie nog niet, word hier streng op geled?
  - Is het oke dat ik prepend heb gebruikt, of toch beter gewoon dubbele code, en dan die gene verbergen afhankelijk van de schermbreedte?

  ### Verslag van meeting
  Uitkomst van dit laatste feedback moment:
  - Over het algemeen is het wel belangrijk om de juiste volgorde van header elementen zoals h1, h2, h3 en zo voort aan te houden, als het echt voor de logica toch net wat anders moet is het prima, maar dan wel goed beargumenteerbaar waarom het beter is zo.
  - Niet de juiste info in de select elementen is niet direct een aftrek punt, het is leuk als het werkt natuurlijk, maar niet het belangrijkst nu.
  - Tuurlijk is prepend prima, als het goed werkt zeker een goede oplossing voor dit probleem.
  
  - Verder nog een beetje gekeken naar wat nog moet gebeuren, en dat nu nog effe de focus moet liggen op het volledig responsive maken, ook al zijn al die leuke interactieve elementen erg afleidend, ook nog zorgen dat de procces documentatie aangevoeld word.
  - Ook na dat de basis gelegd is handig nog eens alle media queries langs te gaan om te kijken of ze wel echt nodig zijn, en of het niet op en andere manier kan zonder @media.

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  Hieronder de screenshots van mijn nagemaakte website, links de mobiele versie en rechts de pc versie. Zo goed als helemaal responsive:

  <img src="readme-images/eigen-site-home-mobile.png" width="250px" alt="Home pagina mobiel eigen nagemaakte website">
  
  <img src="readme-images/eigen-site-home-pc.png" width="500px" alt="Home pagina pc eigen nagemaakte website">

  En hieronder mijn tweede pagina, de advent kalendar pagina, ik moet eerlijk zegen dat ik het gevoel heb niet helemaal de juiste keuze heb gemaakt wat betreft mijn tweede pagina, ik had wat meer uitdagends kunnen kiezen, iets met filteren en sorteren:

  <img src="readme-images/eigen-site-advent-mobile.png" width="250px" alt="Advent (2de) pagina mobiel eigen nagemaakte website">
  
  <img src="readme-images/eigen-site-advent-pc.png" width="500px" alt="Advent (2de) pagina pc eigen nagemaakte website">


  ### Dit ging goed/Heb ik geleerd: 
  Om te beginnen vind ik het best wel goed gelukt hoe het op elkaar lijkt, ben best tevreden over de gelijkheid tussen mijn nagemaakte paginas en die van de officiele rituals site.

  Ik heb een hoop nieuwe trucjes gevonden en geleerd die ik weer goed kan gebruiken, dingen als :is() en prepend onder ander. Verder ook nog leren werken met scrollsnap en drag scrolling door met walkX horizontaal scrollen te detecteren met mousedown en dergelijke. Was een hoop puzzelen wel.

  Ik ben ook wel trots op hoe het menu eruit is gekomen, er zit ook wel onnodig veel tijd in om al die lagen soepel werkend te krijgen, moet het alleen nog annimeren als ik er tijd voor heb:

  <img src="readme-images/eindgesprek-img1-menu.png" width="600px" alt="De main menu uitgeklapt">

  Dan ben ik ook nog tevreden met de eerste carousel op de homepagina, deze zelf opgebouwd met js en geanimeerd, ook met een video als achtergrond die de gebruiken kan afspelen.

  <img src="readme-images/eindgesprek-img4-carousel1.png" width="600px" alt="Deel van code voor de carousels">

  Zo is in de code hierboven te zien hoe er meerdere verschillende classes worden toegevoegd, dit om te zien welke kant op er gescrolled, want dit heeft effect op de animatie, als in welke kant de content op schuift, ook met timouts om delays te maken met het weg halen van classes zodat de animaties tijd hebben om soepel te verlopen, het was een hoop puzzelen, maar wel wat moois geworden. Hieronder nog wat code van de carousels:

  <img src="readme-images/eindgesprek-img5-carousel2.png" width="500px" alt="Deel van code voor de carousels 2">

  Dan heb ik wat meer geleerd van responsive maken zonder @media, want moet eerlijk zeggen dat ik wel snel denk aan @media, maakt sommige dingen toch makkelijk, maar het kan ook goed zonder, hieronder aangetoond, zonder @media:

  <img src="readme-images/eindgesprek-img3-advent-responsive.png" width="250px" alt="Responsive deel van advent pagina zonder @media mobiel">

  <img src="readme-images/eindgesprek-img2-advent-responsive.png" width="450px" alt="Responsive deel van advent pagina zonder @media pc">

  Dan ook weer veel kunnen oefenen met selectoren en dergelijke, maar ook het werken met dingen als :root is enorm handig voor de toekomst.


  ### Dit was lastig/Is niet gelukt:
  Er waren ook zeker een hoop dingen waar ik tegenaan liep die niet echt mee werkte, de hoeveelheid tijd die ik in het menu heb zitten om het scrollen overal werkend te krijgen, zodat er alleen op de geopende laag gescrollt kon worden. Verder nog een hoop kleine dingetjes die redelijk wat tijd hebben gekost om het op te lossen.

  Maar het gedeelte op mijn website wat mij zelf nog niet gelukt is en dus voornamelijk gedaan is door copilot met informatie van codepen, en dat is een infinite scroll waarbij het geselecteerde menu item altijd in het midden blijft staan:

  <img src="readme-images/eindgesprek-img6-infinite-scroll1.png" width="400px" alt="De infinite scroll met het active menu item altijd in het midden">

  In eerste instantie probeerde ik mijn code die ik voor de andere carousels op de home pagina gebruikte opnieuw te gebruiken, maar hiermee kreeg ik totaal niet het effect wat ik zocht, de bassis was er misschien wel, maar totaal geen succes met hoe het eruit moest komen te zien.

  Er zat al enorm veel tijd in, het werd laat, was in een land waar ik moest werken met een vpn die vaak verbinding verbrak, de frustraties hoopte op, en heb dit gedeelte uiteindelijk voornamelijk laten doen door copilot, in de bronnen is het gesprek te vinden. En hieronder een deel van de code die eruit is gekomen:

  <img src="readme-images/eindgesprek-img7-infinite-scroll2.png" width="500px" alt="Deel van de code voor de infinite scroll">

</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. [Video tag](https://mimo.org/glossary/html/video-tag)
      - Voor het vinden hoe de video tag in elkaar zit en te gebruiken is.
  2. [data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes)
      - Voor het gebruik van de verschillende attributen binnen in de video tag.
  3. [Underline animatie tutorial](https://www.youtube.com/watch?v=n8dPFkT0dpE*/)
      - Voor een annimatie van een lijn onder een element bij hover.
  4. [Scroll-snap](https://www.30secondsofcode.org/css/s/scroll-snap/?utm_source=chatgpt.com)
      - Leren heo de scroll-snap code werkt.
  5. [:is()](https://www.sitepoint.com/css-is-where-has-pseudo-class-selectors/?utm_source=chatgpt.com)
      - Leren over :is() voor specifiekere selectoren.
  6. [Verdwijnende header bij scroll-up](https://stackoverflow.com/questions/31223341/detecting-scroll-direction)
      - Het netjes verdwijnen van de header, top navbar, wanneer er omlaag gescrollt word en dat die terug komt bij het scrollen naar boven.
  7. [Drag-scrolling](https://codepen.io/Gutto/pen/GBLPyN)
      - Leren hoe ik elementen kan scrollen door te draggen.
  8. [Infinite scrolling](https://codepen.io/supah/pen/VwegJwV)
      - De basis voor het inifinite scroll element op de index (home pagina).
  9. [Prepend](https://stackoverflow.com/questions/1279957/how-to-move-an-element-into-another-element)
      - Zoeken naar manieren om elementen te verplaatsen naar andere parent elementen en weer terug.
  10. Blijkbaar ook wat chatGPT gebruikt voor het menu, onder ander het zoeken van de bijbehorende parent element, maar dat was vorig jaar, en heb mijn best gedaan deze chat terug te vinden maar geen succes.
  11. Copilot voor de infinite scroll:
  <details>
    <summary>screenshots</summary>
    
    <img src="readme-images/copilot-chat/1.png" width="500px" alt="copilot chat infinite scroll imgage 1">
    <img src="readme-images/copilot-chat/2.png" width="500px" alt="copilot chat infinite scroll imgage 2">
    <img src="readme-images/copilot-chat/3.png" width="500px" alt="copilot chat infinite scroll imgage 3">
    <img src="readme-images/copilot-chat/4.png" width="500px" alt="copilot chat infinite scroll imgage 4">
    <img src="readme-images/copilot-chat/5.png" width="500px" alt="copilot chat infinite scroll imgage 5">
    <img src="readme-images/copilot-chat/6.png" width="500px" alt="copilot chat infinite scroll imgage 6">
    <img src="readme-images/copilot-chat/7.png" width="500px" alt="copilot chat infinite scroll imgage 7">
    <img src="readme-images/copilot-chat/8.png" width="500px" alt="copilot chat infinite scroll imgage 8">
    <img src="readme-images/copilot-chat/9.png" width="500px" alt="copilot chat infinite scroll imgage 9">
    <img src="readme-images/copilot-chat/10.png" width="500px" alt="copilot chat infinite scroll imgage 10">
    <img src="readme-images/copilot-chat/11.png" width="500px" alt="copilot chat infinite scroll imgage 11">
    <img src="readme-images/copilot-chat/12.png" width="500px" alt="copilot chat infinite scroll imgage 12">
    <img src="readme-images/copilot-chat/13.png" width="500px" alt="copilot chat infinite scroll imgage 13">
    <img src="readme-images/copilot-chat/14.png" width="500px" alt="copilot chat infinite scroll imgage 14">
    <img src="readme-images/copilot-chat/15.png" width="500px" alt="copilot chat infinite scroll imgage 15">
    <img src="readme-images/copilot-chat/16.png" width="500px" alt="copilot chat infinite scroll imgage 16">
    <img src="readme-images/copilot-chat/17.png" width="500px" alt="copilot chat infinite scroll imgage 17">
    <img src="readme-images/copilot-chat/18.png" width="500px" alt="copilot chat infinite scroll imgage 18">
    <img src="readme-images/copilot-chat/19.png" width="500px" alt="copilot chat infinite scroll imgage 19">
    <img src="readme-images/copilot-chat/20.png" width="500px" alt="copilot chat infinite scroll imgage 20">
    <img src="readme-images/copilot-chat/21.png" width="500px" alt="copilot chat infinite scroll imgage 21">
  </details>

</details>