import { HungryBear,Food } from './../js/hungrybear.js';

$(document).ready(function() {
  // $('#bear-form').submit(function(event) {
  //   event.preventDefault();
  // });
  let theBear = new HungryBear("Bucko the Bear");
  theBear.setHunger(1);
  setInterval(function(){
    console.log("food: "+theBear.foodLevel);
    console.log("mood: "+theBear.moodLevel);
    $('#output').text(theBear.foodLevel);
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
