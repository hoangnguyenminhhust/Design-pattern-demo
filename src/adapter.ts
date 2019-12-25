class Wall {
    private level: any
    constructor(level: any) {
        this.level = level
    }
    defense() {
        return this.level * 1000;
    }
}


class Jedi {
    private level : any
    constructor(level : any) {
        this.level = level;
    }
    attachkwithJedi() {
        return this.level * 100;
    }
}
class Guns {
    private level : any
    constructor(level : any) {
        return this.level = level;
    }
    attackwithGuns() {
        return this.level * 10;
    }
}
class Adapter2 {
    private jedi : any
    constructor(jedi : any) {
        return this.jedi = jedi;
    }
    attachkwithJedi() {
        return this.jedi.attachkwithJedi()
    }
}
class Adapter {
    private jedi: any
    private guns : any
    constructor(jedi: any, guns: any) {
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
function testAdapter(){
    const tower = new Wall(1);
    const yoda = new Adapter(new Jedi(5), new Guns(5));
    const yoda2 = new Adapter2(new Jedi(10))
    if (tower.defense() <= (yoda.attackwithGuns() + yoda.attackwithJedi())){
        console.log("Defeat")
    }
    else {
        console.log("Victory")
    }
}


testAdapter()