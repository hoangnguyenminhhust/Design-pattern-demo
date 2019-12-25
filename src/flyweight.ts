class Color {
    private name : String
    constructor(name : String) {
      this.name = name
    }
  }
  
  class colorFactory {
      private name : any
      private colors: any
    constructor(name: any) {
      this.colors = {};
    }
  
    create(name : any) {
      return new Promise((resolve, rejects) => {
        setTimeout(() => {
          resolve(this.colors[name] = new Color(name))
        }, 500);
      })
    }
    
    delete(name: any) {
      return new Promise((resolve, rejects) => {
        setTimeout(() => {
          return resolve(this.colors[name] = "")
        }, 1000);
      })
    }
   
  };
  
  async function testFlyweight() {
    const cl = new colorFactory("SomeThingELSE")
    const cl1 = await cl.create("RED")
    const cl2 = await cl.create("BLUE")
    const cl3 = await cl.create("GREEN")
    const cl4 = await cl.create("WHITE")
    console.log(cl)
    console.log(cl1, "part1")
    console.log(cl2, "part1")
    console.log(cl3, "part1")
    console.log(cl4, "part1")
    console.log("***********")
    const data = await cl.delete("WHITE")
  
    console.log(data)
  }
  
  testFlyweight()