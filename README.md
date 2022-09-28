
## Hvordan kjøre appen

```bash
# Install dependencies
npm i
# Run server
npm run dev
```

Du finner så serveren kjørende på [http://localhost:3000](http://localhost:3000).

## Oppgaver:

[Case - PDF](Utviklingscase.pdf)

1. Sikkerhet:  
Tjenesten inneholder en del persondata, og jeg tror derfor det er implementert HTTPS slik at data blir ikke blir sent til bruker i klartekst. PDF-en bør lagres på en trygg måte, hvor linkene ikke kan tukles med for å aksessere andre brukere sine avtaledokument. Eksempel på dette er å generere en «blob»-link eller tilsvarende når brukeren ønsker å laste ned filen.
Da siden inneholder persondata tror jeg det også er tenkt en innlogging, om det lagres en token bør denne lagres et annet sted en for eksempel i localstorage.

3. Universell utforming:  
For å ivareta universell utforming tror jeg at utviklerne har valgt en font og tekstfarge til bakgrunnen som er mulig å lese for personer med ulike synshemminger. Klikkbare elementer følger et gitt mønster, slik at det er intuitivt at man for eksempel kan klikke på Avtaledokumentet for å komme til dokumentet. Selv om alle klikkabare elementer inneholder piler synes jeg derimot ikke at det var like intuitivt at "fakturaoversikt" er klikkbar, og kunne med fordel vært understreket som PDF-linken, eller være formet som en knapp.
