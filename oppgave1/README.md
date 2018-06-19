Oppgave 1
=========

Denne oppgaven går ut på å kjøre opp et enkelt Docker-image, og se på loggen.

```
# Pull
docker pull nginx
# Kjør
docker run <navn-på-image>
```

* Her vil du merke at du ikke får tak i Nginx, hva må du gjøre for å få kontakt på port 8080?

* Når du har fått kontakt med Docker, så kan du prøve å kjøre `docker run` i `detach`-mode, for da kan du se på loggen til kontaineren din med `docker logs <kontainer-navn>`.

PS: Husk at du alltid kan sjekke hvilke kontainere som kjører med `docker ps`.

Fun fact: `docker run` vil automatisk laste ned image du prøver å kjøre hvis den ikke finner de på maskinen din. Derfor kunne du har sløyfet `docker pull` i denne oppgaven.


## Tillegg

De fleste Docker-kommandoer støtter argumenter, som kan gjøre jobben litt enklere.

PS: Beskrivelsene er copy-paste fra `docker <command> --help`


### docker run

`--rm` - Automatically remove the container when it exits
Kjekt så man slipper å rydde opp etter seg

`-d/--detach` - Run container in background and print container ID

`-p/--publish`- Publish a container's port(s) to the host

`--name` - Assign a name to the container
