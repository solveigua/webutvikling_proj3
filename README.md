# Prosjekt 3 - Marveldatabase

## Prosjektet
Vi så på prosjektet som en mulighet til å lære oss nye ting. Medlemmer som tidligere har jobbet mest på frontend jobbet nå med backend, og omvendt. Vi har opplevd dette som veldig lærerikt og utfordrende, da vi følte vi fikk komme litt utenfor komfortsonen og at vi har fått større forståelse for ulike aspekter ved webutvikling.

Prosjektet vårt inneholder en database med alle Marvel Cinematic Universe-filmene og de 21 viktigste karakterene som er med. For øyeblikket er det filmene alene som er hovedfokuset. Poenget er at en bruker da kan finne en Marvel-film den vil se, kunne se de i rekkefølgen de ønsker (kronologisk rekkefølge eller etter utgivelsesdato), søke etter filmer og gi dem en rating på 1-5 stjerner etter de har sett den. Rett og slett en nyttig nettside for Marvelfans som vil se en film!:)

## Backend

**Database**

Databasen er opprettet med MongoDB, og vi benytter oss av apollo, express, og mongoose for konfigurasjon. 
Da vi helst ville lære oss databasemanipulasjon på egen hånd så valgte vi å opprette en database der vi har lagt inn data og drifter den selv heller enn å hente inn fra et eksisterende API. Dataen er fordelt på to collections: Movie og Character. Ettersom MongoDB ikke er en relasjonsdatabase valgte vi å gjøre relasjonen mellom de to collectionsene ved å legge et Array-felt med Movies i hver Character.

Da vi hadde medlemmer på grupper som var syke under store deler av arbeidstiden for prosjektet, valgte vi å gå bort ifra å vise karakter-collectionen i prosjektet. Det var likevel en fin øving i å opprette collections i mongoDB med “relasjoner”. Vi ser på dette som en mulig forbedring til prosjekt 4.

Det er definert Schema i typeDefs.ts, og resolvers i resolvers.ts. Modellene for Character og Movie ligger i models-mappen. Server er koblet sammen med API i server.ts, via express, apollo-server og mongoose.

Vi startet med å deploye databasen på ubuntu med en gang, og backend skal kjøre kontinuerlig på hosten nå. Vi brukte nohup til dette.

**Fetching**

Fetching av data skjer ved queries skrevet i util-mappen. Siden vi bruker graphQL ligger denne i frontend (“marvel”)-mappen. Vi har queries som går på å hente alle filmer i en liste, én film fra ID (og tilsvarende for karakterene, selv om vi ikke endte opp med å bruke de i fremvisning). For at bruker skal kunne endre data har vi også lagt til en mutation “setRating”, som endrer vurderingen av filmen. Bruker som gir filmen en vurdering vil da endre verdien i databasen. Selv om ikke dette er en løsning som ville blitt brukt i en reell applikasjon, ville vi gjøre dette i vår løsning likevel for å vise kunnskaper i mutations.

Resterende manipulasjon av data for sortering og søk er implementert med logikk i frontend.

## Testing

**Ende-til-ende**

End-to-end testing er gjort med cypress, og kan kjøres fra rotnivå med kommandoen npm run cypress:run (for å kjøre testene i konsoll) og/eller npm run cypress:open for å kjøre Cypress Test Runner gjennom Electron window.
Vi har skrevet tester for Header-komponentet, hovedsiden med Movies, søke-feltet og søkelogikken, samt at siden loader med riktig deployment. Cypress hjelper med all funksjonalitet relatert til ende-til-ende-testing, og lar oss skrive tester som tester hele applikasjonens “workflow” ved å gjenskape reelle brukerscenarioer. Slik kan systemet valideres for integrasjon og dataintegritet.
Det finnes videoer for testene i mappen cypress/movies.

**Enhetstesting**

Enhetstesting er utført med jest og Enzyme, samt reacts testbibliotek. Vi har veldig mange komponenter, og har ikke implementert tester for alle. Vi har brukt snapshot-tester for å sjekke at komponenter vil rendere riktig, samt mock-funksjoner for å sikre riktig funksjonalitet i komponentene. Testene finnes under marvel/components/__tests__, i en egen branch kalt "test". Dette er fordi vi hadde feil i moduler som vi ikke rakk å fikse før fristen, som vi ikke ville skulle ødelegge for master-branchen. Mest sannsynlig er det to importerte versjoner av React som forårsaker feilen.

Til neste prosjekt ønsker vi å fokusere enda mer på tester, og ha muligheten til å teste mer. 

## Frontend 

**Redux**

Vi har valgt å bruke redux for å håndtere global state. State som håndteres i applikasjonen er filmene som hentes fra databasen og hvilken sortering som er valgt.

I koden har vi store.ts som bruker redux-thunk, applyMiddleware og en rootreducer (som ligger i reducers/index.tsx) for å opprette en store: movies. Rootreducer er opprettet for å legge til rette for flere reducers, selv om vi foreløpig kun har én reducer. I movies lagres en state som har verdier for text, movies, movie og sort. Disse brukes for å kunne lagre tilstanden til henholdsvis teksten i søkefeltet, filmene som skal vises på siden, én enkelt film og hvilken type sortering som er valgt. Til denne innleveringen har vi ingen funksjonalitet som bruker state.movies.movie, men dette er noe vi kan legge til funksjonalitet for senere. 

Vi har én reducer, searchReducer, der vi håndterer forskjellige typer states. Det vil si at vi har tre forskjellige “case” som endrer på tilstanden til text, movies og sort i forhold til hvilken action som utføres. Her brukes også localStorage for å sette den initielle tilstanden til sort. 

Vi har én action-fil, searchActions.ts, som inneholder tre forskjellige actions: searchMovie, fetchMovies og sortMovies. searchMovie tar inn en text, som er teksten som søkes på i søkefeltet, og dispatcher en SEARCH_MOVIE case med text som payload. fetchMovies tar også inn text og bruker en apolloklient for å hente dataen vår (alle filmene) fra databasen med en query. Deretter lagres dataen i en array som mappes gjennom og filtreres i henhold til søkeordet, altså text. Den filtrerte listen er det som blir payloaden når FETCH_MOVIES dispatches. sortMovies tar inn en string “sort” og dispatcher SORT_MOVIES med payloaden sort. 

Tilstanden vi lagrer bruker vi i MoviesContainer, MovieSummary og SearchBar, og der er hensikten å henholdsvis fremvise de riktige filmene i riktig rekkefølge, ha en knapp som viser frem alle filmene, og å kunne søke på en tittel for å vise frem ønskede filmer. 

**Layout**

Hver film dukker opp i en egen boks, med tilhørende bilde, tittel, utgivelsesår og muligheten for å gi en rating. Her har vi brukt Card komponentet fra Ant Design, og lagt til egen styling.

Bildene er lagt inn manuelt, da vi lagde databasen selv, og koblet hver film gjennom seqNr, som er unikt for hvert objekt. Det ga oss en mer helhetlig og mer visuell utforming på siden, som samtidig passet til dataen vår. 

Rating ved bruk av stjerner er lagt til for å være intuitiv, og viser hvor mange stjerner du gir før du trykker. Logikken er laget selv, men stjernene er hentet fra React-Icons. Det er og mulighet for å se skriftlig hva ratingen er, og vi valgte at det skulle stå en rating i starten som brukeren kan endre på.

Om brukeren vil se spesifikke filmer kan det bli gjort via søkefelt. Brukeren kan og sortere alle filmene, eller filmene de har søkt på, via radiobuttons. Det er da mulighet til å se filmene etter utgivelsesår, eller i kronologisk rekkefølge etter filmuniversets tidslinje. 

**Universell utforming**

For å opprettholde god universell utforming har vi tatt utgangspunkt i denne nettsiden: https://webaccess.berkeley.edu/resources/tips/web-accessibility

For å opprettholde god universell utforming, har vi blant annet valgt å ha intuitiv bruk av headings, høy kontrast i fargebruken for lettere lesing, store knapper samt mulighet for zoom på siden ved bruk av mus. Vi har også accessibility på keyboardet i søkefunksjonen, da men kan søke ved å trykke enter-tasten, ikke bare ved å trykke på knappen. 



