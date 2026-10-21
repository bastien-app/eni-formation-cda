export class Adresse {
    // Constructeurs
    constructor(mentionsCompl, numero, complNumero, rue, cp, ville) {
        this.mentionsCompl = mentionsCompl || null;
        this.numero = numero;
        this.complNumero = complNumero || null;
        this.rue = rue;
        this.cp = cp;
        this.ville = ville;
    }

    // Deuxième constructeur simulé
    static fromSansMentions(numero, complNumero, rue, cp, ville) {
        return new Adresse(null, numero, complNumero, rue, cp, ville);
    }

    // Méthodes
    afficher() {
        if (this.mentionsCompl) {
            console.log(this.mentionsCompl);
        }
        console.log(
            `${this.numero}${this.complNumero ?? ""} ${this.rue}\n${String(this.cp).padStart(5, "0")} ${this.ville.toUpperCase()}`
        );
    }


}

