class Wall {
    constructor(level) {
        this.level = level;
    }
    defense() {
        return this.level * 1000;
    }
}
class Jedi {
    constructor(level) {
        this.level = level;
    }
    attachkwithJedi() {
        return this.level * 100;
    }
}
class Guns {
    constructor(level) {
        return this.level = level;
    }
    attackwithGuns() {
        return this.level * 10;
    }
}
class Adapter2 {
    constructor(jedi) {
        return this.jedi = jedi;
    }
    attachkwithJedi() {
        return this.jedi.attachkwithJedi();
    }
}
class Adapter {
    constructor(jedi, guns) {
        this.jedi = jedi;
        this.guns = guns;
    }
    attackwithGuns() {
        return this.guns.attackwithGuns();
    }
    attackwithJedi() {
        return this.jedi.attachkwithJedi();
    }
}
function testAdapter() {
    const tower = new Wall(1);
    const yoda = new Adapter(new Jedi(5), new Guns(5));
    const yoda2 = new Adapter2(new Jedi(10));
    if (tower.defense() <= (yoda.attackwithGuns() + yoda.attackwithJedi())) {
        console.log("Defeat");
    }
    else {
        console.log("Victory");
    }
}
testAdapter();
//# sourceMappingURL=adapter.js.map