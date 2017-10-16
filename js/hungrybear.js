export class HungryBear {
  //constructor holds the class variables used in class functions
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 10;
    this.sleepLevel = 20;
    this.timer = 0;
  }

  masterTimer(){
    if(this.sleepLevel > 0){
      --this.sleepLevel;
    }
    if(this.foodLevel > 0){
      --this.foodLevel;
    }else if(this.moodLevel > 0){
      --this.moodLevel;
    }
  }

  setHunger(difficulty) {
    if(difficulty === 1){
      this.timer = setInterval(() => {
        this.masterTimer();
      }, 1000);
    }
    if(difficulty === 2){
      this.timer = setInterval(() => {
        this.masterTimer();
      }, 500);
    }
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  // setMood() {
  //   if(this.foodLevel <= 0){
  //     this.timer = setInterval(() => {
  //       this.moodLevel--;
  //     }, 1000);
  //   }
  // }

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
