declare class Sheep {
    private name;
    private weight;
    constructor(name: String, weight: Number);
    clone(): Sheep;
}
declare function testPrototype(): void;
