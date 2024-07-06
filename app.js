var ProfessionistaMedia = /** @class */ (function () {
    function ProfessionistaMedia(nome, cognome, specializzazione, esperienza, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }
    ProfessionistaMedia.prototype.partecipaProgramma = function (programma) {
        programma.aggiungiPartecipante(this);
    };
    return ProfessionistaMedia;
}());
var ProgrammaFormazione = /** @class */ (function () {
    function ProgrammaFormazione(titolo, descrizione, ambitoDiSpecializzazione, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoDiSpecializzazione = ambitoDiSpecializzazione;
        this.durata = durata;
        this.elencoPartecipanti = [];
    }
    ProgrammaFormazione.prototype.aggiungiPartecipante = function (professionista) {
        this.elencoPartecipanti.push(professionista);
    };
    return ProgrammaFormazione;
}());
var Piattaforma = /** @class */ (function () {
    function Piattaforma(nome, tipo, descrizione, categorieDiContenuto) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieDiContenuto = categorieDiContenuto;
    }
    Piattaforma.prototype.pubblicaContenuto = function (professionista, contenuto) {
        console.log("Pubblicando il contenuto: \"".concat(contenuto, "\" di ").concat(professionista.nome, " ").concat(professionista.cognome, " sulla piattaforma ").concat(this.nome));
    };
    return Piattaforma;
}());
// Creazione di oggetti ProfessionistaMedia
var professionista1 = new ProfessionistaMedia("Maria", "Rossi", "Giornalismo", 5, ["Scrittura", "Fotografia"]);
var professionista2 = new ProfessionistaMedia("Lucia", "Bianchi", "Regia", 3, ["Cinema", "Documentari"]);
// Creazione di un oggetto ProgrammaFormazione
var programma1 = new ProgrammaFormazione("Mentorship Giornalistica", "Programma di mentorship per aspiranti giornaliste", "Giornalismo", 6);
// Iscrizione di professioniste al programma di formazione
professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma1);
console.log(programma1.elencoPartecipanti);
// Creazione di un oggetto Piattaforma
var piattaforma1 = new Piattaforma("Youtube", "online", "Piattaforma di pubblicazione online", ["Giornalismo", "Cinema", "Fotografia"]);
// Pubblicazione di un contenuto
piattaforma1.pubblicaContenuto(professionista1, "Un articolo sulle sfide del giornalismo moderno");
piattaforma1.pubblicaContenuto(professionista2, "Un documentario sulla vita nelle periferie");
