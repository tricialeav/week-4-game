// Global Variables

let leia;
let luke;
let vader;
let boba;
let avatar;
let opponent;
let p1health;
let p2health;
let roll = Math.floor(Math.random() * 10);

// Hide elements on start
$(".characters").hide();
$(".gameplay").hide();
$(".attack").hide();
$(".healthbar").hide();

$(document).ready(function() {
  avatar;
  opponent;
  leia = $("#leia");
  luke = $("#luke");
  vader = $("#vader");
  boba = $("#boba");
  p1health = $("#health1");
  p2health = $("#health2");

  //   Functions

  function showHealth1() {
    p1health.show("slow");
  }
  function showHealth2() {
    p2health.show("slow");
  }

// Choose Avatar/Opponent

// Leia

  leia.on('click', function() {
    avatar = "leia";
    leia.animate({ top: "-137px" });
    showHealth1();
    luke.animate({ top: "95px" });
    vader.animate({ top: "95px" });
    boba.animate({ top: "95px" });
    luke.off('click');
    vader.off('click');
    boba.off('click');
    
    // Opponent Luke
    if( avatar == "leia"){
        luke.click(function() {
        luke.animate({ top: "350px", left: '-45px' });
        showHealth2();
        vader.animate({ top: "-25px", left: "400px" });
        boba.animate({ top: "233px", left: "200px" });
        $('.attack').show();
      });
    } 
  });

  luke.on('click', function() {
    avatar = "luke";
    leia.animate({ top: "95px" });
    luke.animate({ top: "-137px", left: "-204px" });
    showHealth1();
    vader.animate({ top: "95px", left: "-204px" });
    boba.animate({ top: "95px", left: "-204px" });
  });

  vader.on('click', function() {
    avatar = "vader";
    leia.animate({ top: "95px" });
    luke.animate({ top: "95px" });
    vader.animate({ top: "-137px", left: "-408px" });
    showHealth1();
    boba.animate({ top: "95px", left: "-204px" });
  });

  boba.on('click', function() {
    avatar = "boba";
    leia.animate({ top: "95px" });
    luke.animate({ top: "95px" });
    vader.animate({ top: "95px" });
    boba.animate({ top: "-137px", left: "-612px" });
    showHealth1();
  });


});
