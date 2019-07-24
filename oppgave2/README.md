Oppgave 2
=========

Nå skal du bruke en Dockerfile og bygge et image fra bunnen av, før du kjører den opp som en kontainer.

* Fyll ut manglende tekst i Dockerfile
* Bygg image med `docker build . -t <navn>`
* Se at image'et ditt har blitt bygget `docker image ls`
* Kjør imaget opp (se forrige oppgave for hvordan)
* Prøv å finne siden din i nettleseren
* Får du ikke opp noe? Prøv å kjøre imaget ditt med `-p <port ut fra containeren>:<port inn i containeren>`
* Prøv å stoppe containeren. Se hvilke prosesser som kjører med `docker ps` og se etter navnet (under NAMES) til containeren som kjører. Stopp så serveren med `docker stop <NAME>`


## Tillegg

De fleste Docker-kommandoer støtter argumenter, som kan gjøre jobben litt enklere.

PS: Beskrivelsene er copy-paste fra `docker <command> --help`


Når du er ferdig, gå til [Oppgave 3](../oppgave3/).

### docker build

`-t/--tag` - Name and optionally a tag in the 'name:tag' format

`--pull` - Always attempt to pull a newer version of the image
Sikrer at du har siste versjon av imaget du bruker i `FROM`

`-p/--publish` Publish a container's port(s) to the host