Oppgave 1
=========

Denne oppgaven går ut på å kjøre opp et enkelt Docker-image, og se på loggen.

```
# Pull
docker pull hello-world
# Se at du har klart å laste ned image'et ved å liste opp alle
docker image ls
# Kjør image'et
docker run <navn-på-image>
# Prøv å liste opp containerene docker kjører
docker ps
# Ingenting? Prøv å liste opp alle som har kjørt
docker ps --all
# Prøv å kjøre et image direkte
docker run docker/whalesay cowsay Hello whale!
* Klarer du å få hvalen til å si noe annet?
```

`docker run` vil automatisk laste ned image du prøver å kjøre hvis den ikke finner de på maskinen din. Derfor kunne du har sløyfet `docker pull` i denne oppgaven.

PS: Husk at du alltid kan sjekke hvilke kontainere som kjører med `docker ps`.


Når du er ferdig, gå til [Oppgave 2](../oppgave2/).


## Tillegg

De fleste Docker-kommandoer støtter argumenter, som kan gjøre jobben litt enklere.

PS: Beskrivelsene er copy-paste fra `docker <command> --help`


### docker run

`-it` - Run the container interactively - let's you enter shell commands inside your container

`--rm` - Automatically remove the container when it exits
Kjekt så man slipper å rydde opp etter seg

`-d/--detach` - Run container in background and print container ID

`-p/--publish`- Publish a container's port(s) to the host

`--name` - Assign a name to the container
