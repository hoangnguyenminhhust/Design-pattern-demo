var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Color {
    constructor(name) {
        this.name = name;
    }
}
class colorFactory {
    constructor(name) {
        this.colors = {};
    }
    create(name) {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                resolve(this.colors[name] = new Color(name));
            }, 500);
        });
    }
    delete(name) {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                return resolve(this.colors[name] = "");
            }, 1000);
        });
    }
}
;
function testFlyweight() {
    return __awaiter(this, void 0, void 0, function* () {
        const cl = new colorFactory("SomeThingELSE");
        const cl1 = yield cl.create("RED");
        const cl2 = yield cl.create("BLUE");
        const cl3 = yield cl.create("GREEN");
        const cl4 = yield cl.create("WHITE");
        console.log(cl);
        console.log(cl1, "part1");
        console.log(cl2, "part1");
        console.log(cl3, "part1");
        console.log(cl4, "part1");
        console.log("***********");
        const data = yield cl.delete("WHITE");
        console.log(data);
    });
}
testFlyweight();
//# sourceMappingURL=flyweight.js.map