# Oppgave 3 
Vi skal nå se på fila `.dockerignore`, som forteller hvilke filer som *ikke* skal være med i imaget ditt. I tillegg skal vi pushe imaget ditt ut på nettet.

## .dockerignore
Det er ikke alt i et prosjekt som er relevant for Dockerimaget ditt. For eksempel vil du sikkert ikke trenge noe Git-relatert i containeren din. Hvis du kjører opp en applikasjon basert på NodeJS vil du nok heller ikke ha noen av det som ligger i mappa `node_modules/`. Det er flere grunner til å bruke en `.dockerignore`. 
Det kan gjøre bygget mer effektivt fordi vi forteller hvilke filer og mapper som ikke trenger å være med i det ferdige imaget, slik at det blir mindre i størrelse. 
En annen grunn er sikkerhet. Si at du har noen credentials liggende i samme mappe, for eksempel passord eller andre tilgangsfiler. Ved å passe på at disse ikke blir med i imaget ditt, er du også sikker på at dine hemmeligheter ikke kommer på avveie dersom noen for eksempel skulle hacke seg inn i din container.

Hvis du tar en titt på filene i frontend-prosjektet vårt ser du at det består av en enkel `server.js`-fil som sier "Hello, World!". Det er også en fil `package.json`. Denne vil generere mappa `node_modules/` hvis du kjører opp Node serveren. Hvis du har installert npm, kan du godt prøve dette. Hvis ikke, kjør videre til neste steg.

Lag en fil som heter `.dockerignore` i mappa [docker-workshop/oppgave3/frontend/](docker-workshop/oppgave3/frontend/).

Siden lokal kjøring av denne enkle applikasjonen vil generere mappa `node_modules/` og siden denne blir generert i selve containeren også, kan vi ignorere den. Legg den til på en egen linje i fila.

## Dockerfile
Lag en ny Dockerfile på samme måte som du gjorde i [oppgave 2](../oppgave2/). Bytt ut `app.js` med `server.js`.

## Docker Hub
Docker er nyttig for kjøring og debugging lokalt. Men som med det meste vi utviklere driver med er det nyttig å ha det, gjerne versjonert, på nett et sted. Her kommer Docker Registry inn. Et Docker Registry er et sted du kan finne og laste opp images slik at de kan brukes for eksempel når du skal deploye applikasjonen din. Et eksempel er [Docker Hub](https://hub.docker.com/).


Logg inn fra kommandolinja:

```
docker login --username=<ditt-brukernavn>
``` 

Nå er du klar til å bygge og pushe imaget ditt. Husk å bytte ut username med ditt eget. Du kan for eksempel kalle imaget `hello-world`.

```
docker build --tag <ditt-brukernavn>/<navn-på-imaget> .
```

La oss pushe det til Docker Hub:

```
docker push username/hello-world
```

Gå tilbake til Docker Hub i nettleseren og se at du har fått et nytt repository på din profil.

Tagen username/hello-world er nyttig når man pusher imaget til et registry fordi den forteller Docker hvor imaget skal pushes.


Når du er ferdig, gå til [Oppgave 4](../oppgave4/).
