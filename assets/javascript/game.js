// Global Variables

let leia;
let luke;
let vader;
let boba;
let avatar;
let opponent;
let dir;
let p1HpBar;
let p2HpBar;
let attack;

// Hide elements on start
$(".characters").hide();
$(".gameplay").hide();
$(".attack").hide();
$(".healthbar").hide();

//   Functions

function showHealth1() {
    p1HpBar.show("slow");
  }
  function showHealth2() {
    p2HpBar.show("slow");
  }

  function removeDir() {
    dir.text("");
  }

  function healthReset() {
    p1HpText.text("100");
    p2HpText.text("100");
    p1HpBar.val(100);
    p2HpBar.val(100);
    curHp1 = 100;
    curHp2 = 100;
  }

  function clickOff() {
    leia.off("click");
    luke.off("click");
    vader.off("click");
    boba.off("click");
  }

  function pickRoundTwo() {
    if (opponent.attr("id") === leia.attr("id")) {
      if (avatar === "luke") {
        vader.on("click", vaderOpponent);
        boba.on("click", BobaOpponent);
      } else if (avatar === "vader") {
        leia.on("click", leiaOpponent);
        boba.on("click", BobaOpponent);
      } else if (avatar === "boba") {
        leia.on("click", leiaOpponent);
        vader.on("click", BobaOpponent);
      }
    } else if (opponent.attr("id") === luke.attr("id")) {
      if (avatar === "leia") {
        vader.on("click", vaderOpponent);
        boba.on("click", BobaOpponent);
      } else if (avatar === "vader") {
        leia.on("click", leiaOpponent);
        boba.on("click", BobaOpponent);
      } else if (avatar === "boba") {
        leia.on("click", leiaOpponent);
        vader.on("click", vaderOpponent);
      }
    } else if (opponent.attr("id") === vader.attr("id")) {
      if (avatar === "leia") {
        luke.on("click", lukeOpponent);
        boba.on("click", BobaOpponent);
      } else if (avatar === "luke") {
        leia.on("click", leiaOpponent);
        boba.on("click", BobaOpponent);
      } else if (avatar === "boba") {
        leia.on("click", leiaOpponent);
        luke.on("click", lukeOpponent);
      }
    } else if (opponent.attr("id") === boba.attr("id")) {
      if (avatar === "leia") {
        luke.on("click", lukeOpponent);
        vader.on("click", vaderOpponent);
      } else if (avatar === "luke") {
        leia.on("click", leiaOpponent);
        vader.on("click", vaderOpponent);
      } else if (avatar === "vader") {
        leia.on("click", leiaOpponent);
        luke.on("click", lukeOpponent);
      }
    }
  }

  function leiaOpponent() {
    healthReset();
    removeDir();
    opponent = leia;
    leia.animate({ top: "406px" });
    showHealth2();
    p2HpText.text(curHp2);
    vader.animate({ top: "50px", left: "234px" });
    boba.animate({ top: "279px", left: "30px" });
    $(".attack").show();
    clickOff();
    enableAttack()
  }

  function lukeOpponent() {
    healthReset();
    removeDir();
    opponent = luke;
    luke.animate({ top: "406px", left: "-204px" });
    showHealth2();
    p2HpText.text(curHp2);
    vader.animate({ top: "50px", left: "234px" });
    boba.animate({ top: "279px", left: "30px" });
    $(".attack").show();
    clickOff();
    enableAttack()
  }

  function vaderOpponent() {
    healthReset();
    removeDir();
    opponent = vader;
    vader.animate({ top: "406px", left: "-408px" });
    showHealth2();
    luke.animate({ top: "50px", left: "435px" });
    boba.animate({ top: "279px", left: "30px" });
    $(".attack").show();
    clickOff();
    enableAttack()
  }

  function BobaOpponent() {
    healthReset();
    removeDir();
    opponent = boba;
    boba.animate({ top: "406px", left: "-613px" });
    showHealth2();
    luke.animate({ top: "50px", left: "435px" });
    vader.animate({ top: "279px", left: "231px" });
    $(".attack").show();
    clickOff();
    enableAttack()
  }

  //   Gameplay Functions

  function attacks() {
    let p1Roll = Math.floor(Math.random() * 25);
    let p2Roll = Math.floor(Math.random() * 50);
    curHp1 = curHp1 - p1Roll;
    curHp2 = curHp2 - p2Roll;
    if (parseInt(curHp1) > 0 && parseInt(curHp2) > 0) {
      p1HpBar.val(curHp1);
      p1HpText.text(curHp1);
      p2HpBar.val(curHp2);
      p2HpText.text(curHp2);
    } else if (parseInt(curHp1) <= 0 && parseInt(curHp2) <= 1) {
      attack.off("click");
      p1HpText.text("0");
      p1HpBar.val(0);
      attack.text("");
      dir.text("You were defeated! Press the button to play again.");
      attack.text("Try Again?");
      attack.on("click", function() {
        location.reload();
      });
    } else if (parseInt(curHp1) >= 0 && parseInt(curHp2) <= 0) {
      p2HpText.text("0");
      p2HpBar.val(0);
      dir.text("You won! Please select new opponent.");
      attack.off("click");
      opponent.fadeTo("fast", 0.5);
      pickRoundTwo();
    } else {
      console.log(tie);
    }
  }

//   function rounds() {
//     console.log("attack");
//     // clickOff();
//     attacks();
//   }

  function beginGame() { 
    avatar = "leia";
    dir.text("Please Select an Opponent");
    leia.animate({ top: "-56px" });
    showHealth1();
    p1HpText.text("100");
    luke.animate({ top: "179px" });
    vader.animate({ top: "179px" });
    boba.animate({ top: "179px" });
    clickOff();

    // Opponent Luke
    luke.click(function() {
      lukeOpponent();
    });
    // Opponent Vader
    vader.click(function() {
      vaderOpponent();
    });

    // Opponent Boba Fett
    boba.click(function() {
      BobaOpponent();
    });

  }

function enableAttack() {
    attack.on('click', attacks);
}


$(document).ready(function() {
  avatar;
  opponent;
  attack = $("button");
  dir = $("#instructionText");
  leia = $("#leia");
  luke = $("#luke");
  vader = $("#vader");
  boba = $("#boba");
  p1HpBar = $("#health1");
  p2HpBar = $("#health2");
  p1HpText = $("#h1No");
  p2HpText = $("#h2No");
  let curHp1 = 100;
  let curHp2 = 100;

  dir.text("Please Select a Character");

  // Choose Avatar/Opponent

  // Avatar Leia
  leia.on("click", function() {
    beginGame();
  });
});

