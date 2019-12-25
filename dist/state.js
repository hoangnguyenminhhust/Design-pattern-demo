class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }
    next() {
        return new this.nextStatus();
    }
}
class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
}
class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}
class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Return);
    }
}
class Return extends OrderStatus {
    constructor() {
        super('Return', "Not");
    }
}
class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }
    nextState() {
        this.state = this.state.next();
    }
    ;
}
function testState() {
    const newOrder = new Order();
    console.log(newOrder.state.name);
    newOrder.nextState();
    console.log(newOrder.state.name);
    newOrder.nextState();
    console.log(newOrder.state.name);
    newOrder.nextState();
    console.log(newOrder.state.name);
}
testState();
//# sourceMappingURL=state.js.map