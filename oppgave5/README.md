# Oppgave 5

Nå som vi har sett at frontenden og backenden kan kommunisere ved hverandre er det på tide å kjøre et deploy for å teste at det funker i skya også. Her kommer [nais](https://nais.io) inn i bildet.
Nais er NAV sin egen plattform bygd på Kubernetes som skal gjøre det enkelt for utviklere å deploye, oppdatere og monitorere sine egne applikasjoner.

## Push til Docker Hub
Det første vi trenger er å pushe frontend og backend til Docker Hub. I [oppgave 4](../oppgave4) bygde du images for frontend og backend. Push disse på samme måte som du gjorde i [oppgave 3](../oppgave3).

## Lag nais.yaml
For å kjøre et deploy til nais trenger vi både docker images og en fil som beskriver applikasjonen vår. Ta en titt på eksempelet på en slik definisjon i fila [nais.yaml](./nais-eksempel.yaml).

Vi kan definere:
- `name`: applikasjonens navn
- `image`: url til docker imaget
- `team`: teamet appen tilhører
- `port`: hvilken port vi skal eksponere

Lag en kopi av fila hvor du definerer backend-applikasjonen din. Gi den et passende navn, bruk url-en til backend imaget du pushet til Docker Hub, sett team til ditt brukernavn og porten til 8080.

Denne fila må være tilgjengelig for nais-plattformen når vi skal kjøre et deploy, så push det enten til din eget GitHub-konto eller lag en [gist](https://gist.github.com/).

## Deploy
Da er alt klart til å kjøre et deploy-kall.                     
Dette gjør vi ved å sende en PUSH request til [naisd](https://github.com/nais/naisd), nais deployment daemon. 
Vi har gjort naisd tilgjengelig på denne IP-en: INSERT-IP-HERE
Kopier kommandoen under og husk å bytte ut SETT-INN-APP-NAVN med navnet du satte i `nais.yaml` og `SETT-INN-MANIFEST-URL` med urlen til nais.yaml på GitHub.

```
curl -s -S -k -d '{"application": "SETT-INN-APP-NAVN", "version": "latest", "skipFasit": "true", "zone": "sbs", "manifesturl": "SETT-INN-MANIFEST-URL", "namespace": "DITT-DOCKER-HUB-BRUKERNAVN", "fasitUsername": "", "fasitPassword": ""}' http:///deploy
```

Sjekk at du ikke får noen error-meldinger.



