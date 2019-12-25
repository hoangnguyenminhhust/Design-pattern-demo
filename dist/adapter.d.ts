declare class Wall {
    private level;
    constructor(level: any);
    defense(): number;
}
declare class Jedi {
    private level;
    constructor(level: any);
    attachkwithJedi(): number;
}
declare class Guns {
    private level;
    constructor(level: any);
    attackwithGuns(): number;
}
declare class Adapter2 {
    private jedi;
    constructor(jedi: any);
    attachkwithJedi(): any;
}
declare class Adapter {
    private jedi;
    private guns;
    constructor(jedi: any, guns: any);
    attackwithGuns(): any;
    attackwithJedi(): any;
}
declare function testAdapter(): void;
