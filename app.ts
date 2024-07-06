interface IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];
    partecipaProgramma(programma: IProgrammaFormazione): void;
}

interface IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoDiSpecializzazione: string;
    durata: number;
    elencoPartecipanti: IProfessionistaMedia[];
    aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}

interface IPiattaforma {
    nome: string;
    tipo: string;
    descrizione: string;
    categorieDiContenuto: string[];
    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void;
}


class ProfessionistaMedia implements IProfessionistaMedia {
    nome: string;
    cognome: string;
    specializzazione: string;
    esperienza: number;
    interessi: string[];

    constructor(nome: string, cognome: string, specializzazione: string, esperienza: number, interessi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }

    partecipaProgramma(programma: IProgrammaFormazione): void {
        programma.aggiungiPartecipante(this);
    }
}

class ProgrammaFormazione implements IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoDiSpecializzazione: string;
    durata: number;
    elencoPartecipanti: IProfessionistaMedia[];

    constructor(titolo: string, descrizione: string, ambitoDiSpecializzazione: string, durata: number) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoDiSpecializzazione = ambitoDiSpecializzazione;
        this.durata = durata;
        this.elencoPartecipanti = [];
    }

    aggiungiPartecipante(professionista: IProfessionistaMedia): void {
        this.elencoPartecipanti.push(professionista);
    }
}

class Piattaforma implements IPiattaforma {
    nome: string;
    tipo: string;
    descrizione: string;
    categorieDiContenuto: string[];

    constructor(nome: string, tipo: string, descrizione: string, categorieDiContenuto: string[]) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieDiContenuto = categorieDiContenuto;
    }

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void {
        console.log(`Pubblicando il contenuto: "${contenuto}" di ${professionista.nome} ${professionista.cognome} sulla piattaforma ${this.nome}`);
    }
}


// Creazione di oggetti ProfessionistaMedia
const professionista1 = new ProfessionistaMedia("Maria", "Rossi", "Giornalismo", 5, ["Scrittura", "Fotografia"]);
const professionista2 = new ProfessionistaMedia("Lucia", "Bianchi", "Regia", 3, ["Cinema", "Documentari"]);

// Creazione di un oggetto ProgrammaFormazione
const programma1 = new ProgrammaFormazione("Mentorship Giornalistica", "Programma di mentorship per aspiranti giornaliste", "Giornalismo", 6);

// Iscrizione di professioniste al programma di formazione
professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma1);

console.log(programma1.elencoPartecipanti);

// Creazione di un oggetto Piattaforma
const piattaforma1 = new Piattaforma("Youtube", "online", "Piattaforma di pubblicazione online", ["Giornalismo", "Cinema", "Fotografia"]);

// Pubblicazione di un contenuto
piattaforma1.pubblicaContenuto(professionista1, "Un articolo sulle sfide del giornalismo moderno");
piattaforma1.pubblicaContenuto(professionista2, "Un documentario sulla vita nelle periferie");


