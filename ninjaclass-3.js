class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.self = this
    }
}

let austin = new Ninja("Austin")
let brad = new Ninja("Brad Pitt")

austin.__proto__.kick = function(opponent) {
    kick = austin.strength * 15
    opponent.health -= kick
    console.log(`Austin kicked ${opponent.name} and dealt ${kick} damage!`)
}
austin.__proto__.punch = function(opponent) {
    punch = 5
    opponent.health -= punch
    console.log(`Austin punched ${opponent.name} and dealt ${punch} damage!`)
}
austin.__proto__.drinkSake = function() {
    austin.health += 10
}

austin.kick(brad)
austin.punch(brad)
austin.drinkSake()


class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10) {
        super(name, health, speed, strength)
    }
}

let graham = new Sensei("Graham")

graham.__proto__.speakWisdom = function() {
    graham.drinkSake()
    console.log('Nothing dared, nothing gained.')
}

graham.kick(austin)
graham.speakWisdom()
