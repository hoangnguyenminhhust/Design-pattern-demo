declare class Color {
    private name;
    constructor(name: String);
}
declare class colorFactory {
    private name;
    private colors;
    constructor(name: any);
    create(name: any): Promise<unknown>;
    delete(name: any): Promise<unknown>;
}
declare function testFlyweight(): Promise<void>;
