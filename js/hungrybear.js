export class HungryBear {

  //constructor holds the class variables used in class functions
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
}


// let bear = new Object;
// bear.name = "Fuzzy Wuzzy";
//
// bear.introduction = function() {
//   console.log("Name in the outer function: " + this.name);
//   let doThis = () => {
//     console.log("Name in the inner function: " + this.name);
//     return `My name is ${this.name}`
//   }
//   return doThis()
// }
// bear.introduction();
