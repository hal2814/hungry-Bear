import { HungryBear, Food } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");
  let food = new Food();

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger(1);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    fuzzy.foodLevel = 10;
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.feed(food.salmon);
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should not be able to feed if food level is below 0', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.feed(food.salmon)).toEqual(false);
  });

  it('should be able to feed if bear food level is above 0', function() {
    jasmine.clock().tick(5001);
    expect(fuzzy.feed(food.apple)).toEqual(true);
  });

  it('should tick faster when higher difficulty is set', function() {
    fuzzy.setHunger(2)
    jasmine.clock().tick(5001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should check if the food and mood levels go down to 0', function() {
    jasmine.clock().tick(20001);
    expect(fuzzy.foodLevel).toEqual(0);
    expect(fuzzy.moodLevel).toEqual(0);
  });
  // you can test attributes or function
});
