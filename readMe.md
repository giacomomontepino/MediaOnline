# Media Online per la Parità di Genere
Questo progetto è un sistema sviluppato in TypeScript che modella le operazioni di un media online dedicato alla parità di genere, facilitando interazioni tra professioniste dei media, programmi di formazione e piattaforme di pubblicazione. 

## Struttura delle Classi e delle Interfacce
**Interfacce**
1. **IProfessionistaMedia**
    - Contiene le informazioni di base di un professionista dei media:
        -"nome", "cognome", "specializzazione", "esperienza", "interessi"
    - Supporta l'iscrizione a programmi di formazione attraverso il metodo "partecipaProgramma"
2. **IProgrammaFormazione**
    - Rappresenta un programma di formazione:
        - "titolo", "descrizione", "ambitoDiSpecializzazione", "durata"
    - Gestisce l'aggiunta di partecipanti e tiene traccia degli stessi
3. **IPiattaforma**
    - Definisce le caratteristiche di una piattaforma di pubblicazione:
        - "nome", "tipo", "descrizione", "categorieDiContenuto"
    - Permette ai professionisti di pubblicare contenuti attraverso il metodo "pubblicaContenuto". 

## Classi Implementative
1. **ProfessionistaMedia**
    - Implementa l'interfaccia "IProfessionistaMedia"
    - Rappresenta un professionista dei media con attributi come "nome", "cognome", "specializzazione", ecc.
    - Consente l'iscrizione a programmi di formazione. 
2. **ProgrammaFormazione**
    - Implementa l'interfaccia "IProgrammaFormazione"
    - Definisce un programma di formazine con attributi come "titolo", "descrizione", "durata", ecc.
    - Gestisce l'elenco dei partecipanti al programma
3. **Piattaforma**
    - Implementa l'interfaccia "IPiattaforma"
    - Rappresenta una piattaforma di pubblicazione con attributi come "nome", "descrizione", "categoriaDiContenuto", ecc.
    - Supporta la pubblicazione di contenuti da parte dei professionisti. 

## Utilizzo del Progetto
1. **Creazione di Professionisti**
    - Vengono creati oggetti "ProfessionistaMedia" rappresentanti professionisti come Maria Rossi e Lucia Bianchi, ciascuno con la propria specializzazione e interessi. 
2. **Gestione dei Programmi di Formazione**
    - Le piattaforme come "Youtube" supportano la pubblicazione di contenuti creati dai professionisti. 
    - Esempio: "piattaforma1.pubblicaContenuto(professionista1, "Un articolo sulle sfide del giornalismo moderno")

## Visione e Obiettivi
Questo progetto mira a promuovere la parità di genere nei media offrendo supporto tramite formazione specializzata e visibilità, attraverso una piattaforma dedicata. Gli strumenti forniti permettono ai professionisti di sviluppare le proprie competenze, collaborare e pubblicare contenuti significativi. 

