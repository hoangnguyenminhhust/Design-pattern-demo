declare class OrderStatus {
    private name;
    private nextStatus;
    constructor(name: String, nextStatus: any);
    next(): any;
}
declare class WaitingForPayment extends OrderStatus {
    constructor();
}
declare class Shipping extends OrderStatus {
    constructor();
}
declare class Delivered extends OrderStatus {
    constructor();
}
declare class Return extends OrderStatus {
    constructor();
}
declare class Order {
    state: any;
    constructor();
    nextState(): void;
}
declare function testState(): void;
