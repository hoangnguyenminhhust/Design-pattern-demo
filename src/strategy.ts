
// DONE


class BehavioralTiger {
    private typeOfTiger: any
    private sound: String
    constructor(typeOfTiger: any) {
        this.typeOfTiger = typeOfTiger;
        this.sound = "";
    }

    checkout() {
        return this.typeOfTiger(this.sound);
    }

    setsound(sound: String) {
        this.sound = sound;
    }
}
function woodtiger(sound: String) {
    return console.log("null")
}

function redtiger(sound: String) {
    return console.log("I am red Tiger ", sound);
}

function whitetigher(sound: String) {
    return console.log("I am white Tiger ", sound);
}

function blacktiger(sound: String) {
    return console.log("I am black Tiger ", sound);
}
function test() {
    const newTiger = new BehavioralTiger(whitetigher)
    newTiger.setsound("blue")
    newTiger.checkout()


    const newTiger1 = new BehavioralTiger(blacktiger)
    newTiger1.setsound("blue")
    newTiger1.checkout()


    const newTiger2 = new BehavioralTiger(redtiger)
    newTiger2.setsound("blue")
    newTiger2.checkout()

    const newTiger3 = new BehavioralTiger(woodtiger)
    newTiger3.setsound("blue")
    newTiger3.checkout()
}
test()