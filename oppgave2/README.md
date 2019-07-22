Oppgave 2
=========

Nå skal du bruke en Dockerfile og bygge et image fra bunnen av, før du kjører den opp som en kontainer.

* Fyll ut manglende tekst i Dockerfile
* Bygg image med `docker build . -t <navn>`
* Se at image'et ditt har blitt bygget `docker image ls`
* Kjør imaget opp (se forrige oppgave for hvordan)


## Tillegg

De fleste Docker-kommandoer støtter argumenter, som kan gjøre jobben litt enklere.

PS: Beskrivelsene er copy-paste fra `docker <command> --help`


### docker build

`-t/--tag` - Name and optionally a tag in the 'name:tag' format

`--pull` - Always attempt to pull a newer version of the image
Sikrer at du har siste versjon av imaget du bruker i `FROM`
