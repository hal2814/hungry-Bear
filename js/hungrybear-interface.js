import { HungryBear,Food } from './../js/hungrybear.js';

$(document).ready(function() {
  // $('#bear-form').submit(function(event) {
  //   event.preventDefault();
  // });
  let theBear = new HungryBear("Bucko the Bear");
  theBear.setHunger(1);
  $('#name').text(theBear.name);
  $( "#feed" ).click(function() {
    theBear.foodLevel += 5;
  });
  $( "#sleep" ).click(function() {
    theBear.sleepLevel += 5;
  });
  setInterval(function(){
    console.log("food: "+theBear.foodLevel);
    console.log("mood: "+theBear.moodLevel);
    $('#food-output').text(theBear.foodLevel);
    $('#mood-output').text(theBear.moodLevel);
    $('#sleep-output').text(theBear.sleepLevel);
    if(theBear.foodLevel === 0){
      $('#angry').show();
      $('#calm').hide();
    }
    if(theBear.moodLevel === 0){
      $('#ate').show();
      $('#angry').hide();
    }
  });

});
