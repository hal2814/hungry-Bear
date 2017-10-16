export class HungryBear {
  //constructor holds the class variables used in class functions
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger(difficulty) {
    if(difficulty === 1){
      setInterval(() => {
        this.foodLevel--;
      }, 1000);
    }
    else if(difficulty === 2){
      setInterval(() => {
        this.foodLevel--;
      }, 500);
    }else{ //defualt to easiest difficulty
      setInterval(() => {
        this.foodLevel--;
      }, 1000);
    }
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed(food) {
    if(this.didYouGetEaten()){
      return false;
    }
    else{
      this.foodLevel = food;
      return true;
    }
  }
}

export class Food {
  constructor() {
    this.apple = 2;
    this.salmon = 10;
    this.berries = 3;
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
