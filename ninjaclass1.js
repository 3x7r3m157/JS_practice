function ninjaConstructor(name, health = 100) {
    this.name = name
    this.health = health
    var speed = 3
    var strength = 3
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

austin.showStats()
austin.drinkSake()
austin.showStats()
