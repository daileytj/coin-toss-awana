$(document).ready(function() {
let coinFlipResult = "heads";
$(".coin").css("background-image", "url(./heads.jpg)");


const coinFlip = () => {
  var coinResult = Math.floor(Math.random() * 2);
  if (coinResult === 0) {
    coinFlipResult = "Heads";
  } else {
    coinFlipResult = "Tails";
  }
};

$(".flip").on('click', function() {
  $(".resultText").html("");
  coinFlip();
  setTimeout(function(){
    $(".resultText").html(coinFlipResult);
},2000);
  if (coinFlipResult === "Heads") {
    $(".coin").css("background-image", "url(./heads.jpg)");
    $('#coin').removeClass();
    setTimeout(function() {
      $('#coin').addClass('animation1800');
    }, 100);
    setTimeout(function(){
      $("<audio></audio>").attr({
  		'src':'pastorRonVictory.m4a',
  		'volume':0.6,
  		'autoplay':'autoplay'
  	}).appendTo("body");
    },2000);
  } else {
    $(".coin").css("background-image", "url(./tails.jpg)");
    $('#coin').removeClass();
    setTimeout(function() {
      $('#coin').addClass('animation1620');
    }, 100);
    setTimeout(function(){
      $("<audio></audio>").attr({
      'src':'pastorRonVictory.m4a',
      'volume':0.8,
      'autoplay':'autoplay'
    }).appendTo("body");
    },2000);
  }
});
});
