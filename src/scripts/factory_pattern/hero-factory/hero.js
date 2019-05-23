export class Hero {

    constructor(name, health = 100) {
        this.name = name;

        if(this.health < this.maxHealth) {
            this.health = health;
        } else {
            this.maxHealth = health;
        }
    }

    attacked(attackValue) {
        var health = 100;
        if(attackValue > health) {
            console.log(`${this.name} is no more`);
        } else {
            health -= attackValue;
            console.log(`Hero attacked: ${attackValue} -- ${health}`)
        }
    }


}