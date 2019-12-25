class Sheep {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    clone() {
        return new Sheep(this.name, this.weight);
    }
}
function testPrototype() {
    const BlackSheep = new Sheep("Black Sheep", 45);
    console.log(BlackSheep.clone());
}
testPrototype();
//# sourceMappingURL=prototype.js.map