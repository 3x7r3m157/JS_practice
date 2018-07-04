function ninjaConstructor(name, health = 100) {
    this.name = name
    this.health = health
    var speed = 3
    this.strength = 3
    this.sayName = function() {
        console.log('IT IS I, THE ONE TRUE AUSTIN!!!')
    }
    this.showStats = function() {
        console.log('Name: ' + this.name + ' | ' + 'Health: ' + this.health + ' | ' + 'Speed: ' + this.speed + ' | ' + 'Health: ' + this.health)
    }
    this.drinkSake = function() {
        this.health += 10
    }
}

var austin = new ninjaConstructor("Austin")
var somedude = new ninjaConstructor("Some dude")

austin.__proto__.punch = function(opponent) {
    opponent.health -= 5
    console.log(`${opponent.name} was punched by Austin and lost 5 health!`)
}

austin.__proto__.kick = function(opponent) {
    kick = 15 * austin.strength
    opponent.health -= kick
    console.log(`${opponent.name} was kicked by Austin and lost ${kick} health!`)
}

austin.punch(somedude)
austin.kick(somedude)
