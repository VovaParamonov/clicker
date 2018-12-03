import $ from "jquery";

var $block = $('.block');
var $counter = $(".counter");

var hp = 100;
var damage = 10;

$counter.text(hp);

function value_reload(val){
  hp =val;
  $('.counter').text(val);
  $block.attr('data-value', val);
}

$block.click(function(eventObj){
  if (hp > 0){
    let val = hp-damage;
    value_reload(val);
  } else {
    alert("Мертв");
  }
});
