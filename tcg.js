class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;

    }
}
// CHILD UNIT
class Unit extends Card {
    constructor(name, cost, power, defense) {
        super(name, cost);
        this.power = power;
        this.defense = defense;
    }

    // METHODS
    attack(target) {
        if (target instanceof Unit) {
            target.defense -= this.power;
            console.log(`${this.name} atacó a ${target.name} causándole ${this.power} puntos de daño`);
        }
        else {
            throw new Error ("Debes hacer objetivo a una unidad!")
        }
    }
}

// CHILD EFFECT
class Effect extends Card {
    constructor (name, cost, stat, mag) {
        super(name,cost);
        this.stat = stat;
        this.mag = mag;
        let rOrL = "";
        if(mag > 0){
            rOrL = "Subió"
        }
        else {
            rOrL = "Bajó"
        }
        this.text = `${rOrL} defensa del objetivo ${this.stat} por ${Math.floor(this.mag)}.`;
    }

    // METHODS
    play(target) {
        if (target instanceof Unit) {
        if (this.stat === "poder") {
            target.power += this.mag;
            console.log(this.text);
        }
        else if (this.stat === "defensa") {
            target.defense += this.mag;
            console.log(this.text);
        } 
        else {
            console.log(`No es una jugada correcta!`);
        }
        } 
        else {
            throw new Error("Debes hacer objetivo a una unidad!");
        }
    }
}

// JUEGO
// Turno 1
const redBeltNinja = new Unit("Ninja Cinturón Rojo", 3, 3, 4);
const hardAlgorithm = new Effect("Algoritmo Duro", 2, "defensa", 3);
console.log(`${redBeltNinja.name} : Resistencia: ${redBeltNinja.defense}`)
hardAlgorithm.play(redBeltNinja)
console.log(`${redBeltNinja.name} : Resistencia: ${redBeltNinja.defense}`)

// Turno 2
const blackBeltNinja = new Unit("Ninja Cinturón Negro", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Rechazo de promesa no manejado", 1, "defensa", -2);
console.log(`${redBeltNinja.name} : Resistencia: ${redBeltNinja.defense}`);
unhandledPromiseRejection.play(redBeltNinja);
console.log(`${redBeltNinja.name} : Resistencia: ${redBeltNinja.defense}`);

// Turno 3
const pairProgramming = new Effect("Programación en pareja", 3, "poder", 2);
console.log(`${blackBeltNinja.name}: Resistencia: ${blackBeltNinja.defense}`);
redBeltNinja.attack(blackBeltNinja);
console.log(`${blackBeltNinja.name}: Resistencia: ${blackBeltNinja.defense}`);