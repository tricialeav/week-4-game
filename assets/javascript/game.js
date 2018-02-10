// Player is asked to choose a character
// on click, character photo is highlighted
// player is asked to choose an enemy
// on click, character and enemy move into place and other characters move to the side

// both players start with full (100%) health
// player clicks fight
// character health and enemy health will be determined by a random number roll
// Whichever avatar rolls highest inflicts damage
// damage will also be determined by a random number roll and subtracted from loser health
// if damage over certain %, crit

// If player wins
// Enemy player is dismissed and moves to defeated div
// next character replaces
// health set to 100%

// If player loses
// game over

let leia;
let luke;
let vader;
let boba;
let p1health;
let p2health;

// Generates random number between 0 and 10
let roll = Math.floor(Math.random() * 10);

$(document).ready(function() {
    $(".characters").hide();
    $(".gameplay").hide();
    $(".attack").hide();
    $(".healthbar").hide();
    
    leia = $("#leia");
    luke = $("#luke");
    vader = $("#vader");
    boba = $("#boba");
    p1health = $("#health1");
    p2health = $("#health2");

  // character selection

  leia.click(function() {
    leia.animate({ top: '-137px' });
    luke.animate({top: '95px', left: '-204px'});
    vader.animate({top: '95px', left: '-204px'});
    boba.animate({top: '95px', left: '-204px'});
  });

  luke.click(function() {
    leia.animate({ top: '95px' });
    luke.animate({top: '-137px', left: '-204px'});
    vader.animate({top: '95px', left: '-204px'});
    boba.animate({top: '95px', left: '-204px'});
  });

  vader.click(function() {
    leia.animate({ top: '95px' });
    luke.animate({top: '95px' });
    vader.animate({top: '-137px', left: '-408px'});
    boba.animate({top: '95px', left: '-204px'});
  });

  boba.click(function() {
    leia.animate({ top: '95px' });
    luke.animate({top: '95px' });
    vader.animate({top: '95px' });
    boba.animate({top: '-137px', left: '-612px'});
  });





});


