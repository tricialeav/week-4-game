let avatar;
let avatarText;
let opponentText;
let opponent;
let attack;
let title;
let dir;
let leia;
let luke;
let vader;
let boba;
let attackPower;
let attackPowerUp;
let p1HpBar;
let p2HpBar;
let p1HpText;
let p2HpText;
let hp1;
let hp2;
let curHp1;
let curHp2;
let gamesPlayed;

// Make unused elements invisible @ start
$("#avatar").css("visibility", "hidden");
$("#opponents").css("visibility", "hidden");
$(".attack").css("visibility", "hidden");
$(".healthbar").css("visibility", "hidden");
$("#h1No").css("visibility", "hidden");

// Allow for scroll text
function timeOut() {
  $("#star").hide();
  $("#wars").hide();
  $("#gameTitle").hide();
  dir.hide();
  leia.hide();
  luke.hide();
  vader.hide();
  boba.hide();
}

// Hide scroll text on refresh
function hideIntro() {
  $(".fade").hide();
  $(".creditRoll").hide();
  $(".crawl").hide();
  $(".title").hide();
  $(".scrollText").hide();
}

function clickToAttack() {
  $(attack).removeAttr("style");
  $(attack).text("Click to Attack");
  attack.on("click", function() {
    $(attack).show();
  });
}

function stopAttack() {
  attack.off("click");
}

// Retry on tie/loss
function replay() {
  hideIntro();
  healthReset();
  gamesPlayed = 0;
  attackPower = Math.floor(Math.random() * (8 - 4 + 1) + 4);
  attackPowerUp = attackPower;
  $(".attack").css("visibility", "hidden");
  dir.text("Please Select a Character");
  avatar.removeAttr('style');
  leia.removeAttr("style");
  leia.css("visibility", "visible");
  luke.removeAttr("style");
  luke.css("visibility", "visible");
  vader.removeAttr("style");
  vader.css("visibility", "visible");
  boba.removeAttr("style");
  boba.css("visibility", "visible");
  leia.on("click", function() {
    stopAttack();
    avatar = leia;
    beginGame();
  });
  luke.on("click", function() {
    stopAttack();
    avatar = luke;
    beginGame();
  });
  vader.on("click", function() {
    stopAttack();
    avatar = vader;
    beginGame();
  });
  boba.on("click", function() {
    stopAttack();
    avatar = boba;
    beginGame();
  });
}

// General Functions

function showHealth1() {
  p1HpBar.css("visibility", "visible");
}
function showHealth2() {
  p2HpBar.css("visibility", "visible");
}

function healthReset() {
  hp2 = 500;
  p1HpText.text(hp1);
  p2HpText.text(hp2);
  p1HpBar.val(hp1);
  p2HpBar.val(hp2);
  curHp1 = hp1;
  curHp2 = hp2;
}

function avatarClickOff() {
  leia.off("click");
  luke.off("click");
  vader.off("click");
  boba.off("click");
}

function hideAll() {
  leia.css("visibility", "hidden");
  luke.css("visibility", "hidden");
  vader.css("visibility", "hidden");
  boba.css("visibility", "hidden");
  avatarText.css("visibility", "hidden");
  opponentText.css("visibility", "hidden");
  p1HpBar.css("visibility", "hidden");
  p2HpBar.css("visibility", "hidden");
  p1HpText.css("visibility", "hidden");
  p2HpText.css("visibility", "hidden");
}

function hideOnWin() {
  avatarText.css("visibility", "hidden");
  opponentText.css("visibility", "hidden");
  p1HpBar.css("visibility", "hidden");
  p2HpBar.css("visibility", "hidden");
  p1HpText.css("visibility", "hidden");
  p2HpText.css("visibility", "hidden");
}

function showOnRound() {
  avatarText.css("visibility", "visible");
  opponentText.css("visibility", "visible");
  p1HpBar.css("visibility", "visible");
  p2HpBar.css("visibility", "visible");
  p1HpText.css("visibility", "visible");
  p2HpText.css("visibility", "visible");
}

//   Gameplay Functions

function opponents() {
  counterAttack = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
  dir.text("Click the Button to Attack");
  showHealth2();
  clickToAttack();
  avatarText.css("visibility", "visible");
  avatarText.text("Attack Multiplier: " + attackPowerUp);
  opponentText.css("visibility", "visible");
  opponentText.text("Counter Attack Multiplier: " + counterAttack);
  avatarClickOff();
}

function leiaOpponent() {
  opponent = leia;
  leia.animate({ top: "268px", left: "0px" });
  healthReset();
  showOnRound();
  opponents();
  enableAttack();
}

function lukeOpponent() {
  opponent = luke;
  luke.animate({ top: "268px", left: "-204px" });
  healthReset();
  showOnRound();
  opponents();
  enableAttack();
}

function vaderOpponent() {
  opponent = vader;
  vader.animate({ top: "268px", left: "-408px" });
  healthReset();
  showOnRound();
  opponents();
  enableAttack();
}

function bobaOpponent() {
  opponent = boba;
  boba.animate({ top: "268px", left: "-613px" });
  healthReset();
  showOnRound();
  opponents();
  enableAttack();
}

function nextOpponent() {
  if (opponent.attr("id") === leia.attr("id")) {
    if (avatar.attr("id") === luke.attr("id")) {
      vader.on("click", vaderOpponent);
      boba.on("click", bobaOpponent);
    } else if (avatar.attr("id") === vader.attr("id")) {
      luke.on("click", lukeOpponent);
      boba.on("click", bobaOpponent);
    } else if (avatar.attr("id") === boba.attr("id")) {
      luke.on("click", lukeOpponent);
      vader.on("click", vaderOpponent);
    }
  } else if (opponent.attr("id") === luke.attr("id")) {
    if (avatar.attr("id") === leia.attr("id")) {
      vader.on("click", vaderOpponent);
      boba.on("click", bobaOpponent);
    } else if (avatar.attr("id") === vader.attr("id")) {
      leia.on("click", leiaOpponent);
      boba.on("click", bobaOpponent);
    } else if (avatar.attr("id") === boba.attr("id")) {
      leia.on("click", leiaOpponent);
      vader.on("click", vaderOpponent);
    }
  } else if (opponent.attr("id") === vader.attr("id")) {
    if (avatar.attr("id") === leia.attr("id")) {
      luke.on("click", lukeOpponent);
      boba.on("click", bobaOpponent);
    } else if (avatar.attr("id") === luke.attr("id")) {
      leia.on("click", leiaOpponent);
      boba.on("click", bobaOpponent);
    } else if (avatar.attr("id") === boba.attr("id")) {
      leia.on("click", leiaOpponent);
      luke.on("click", lukeOpponent);
    }
  } else if (opponent.attr("id") === boba.attr("id")) {
    if (avatar.attr("id") === leia.attr("id")) {
      luke.on("click", lukeOpponent);
      vader.on("click", vaderOpponent);
    } else if (avatar.attr("id") === luke.attr("id")) {
      leia.on("click", leiaOpponent);
      vader.on("click", vaderOpponent);
    } else if (avatar.attr("id") === vader.attr("id")) {
      leia.on("click", leiaOpponent);
      luke.on("click", lukeOpponent);
    }
  }
}

function attacks() {
  let p1Roll = Math.floor(Math.random() * 12);
  let p2Roll = Math.floor(Math.random() * 12);
  let p1TotalDMG = p1Roll * attackPowerUp;
  let p2TotalDMG = p2Roll * counterAttack
  curHp1 = curHp1 - (p2TotalDMG);
  curHp2 = curHp2 - (p1TotalDMG);
  attackPowerUp = attackPower + attackPowerUp;
  avatarText.text("Attack Power: " + attackPowerUp);
  dir.text('P1 attack: ' + p1TotalDMG + ' P2 attack: ' + p2TotalDMG);
  //   both player's hp above 1
  if (parseInt(curHp1) > 0 && parseInt(curHp2) > 0) {
    p1HpBar.val(curHp1);
    p1HpText.text(curHp1);
    p2HpBar.val(curHp2);
    p2HpText.text(curHp2);
  } else if (parseInt(curHp1) <= 0 && parseInt(curHp2) >= 1) {
    //   Player loses
    attack.off("click");
    hideAll();
    avatar.css("visibility", "hidden");
    dir.text(
      "You underestimate the power of the dark side. Press the button to play again."
    );
    attack.animate({ left: "0px" });
    attack.text("Play Again?");
    attack.on("click", function() {
      replay();
    });
  } else if (parseInt(curHp1) >= 0 && parseInt(curHp2) <= 0) {
    //   Player wins
    hideOnWin();
    gamesPlayed += 1;
    if (gamesPlayed < 3) {
      dir.text("The force is strong with you. Select next opponent.");
      attack.off("click");
      opponent.fadeTo("fast", 0);
      attackPowerUp = attackPower;
      nextOpponent();
    } else {
      dir.text(
        "You've defeated your opponents! Remember – the Force will be with you, always."
      );
      opponent.css("visibility", "hidden");
      avatar.css("visibility", "hidden");
      attack.animate({ left: "0px" });
      attack.text("Play Again?");
      attack.on("click", function() {
        replay();
      });
    }
  } else {
    //   Both die
    hideAll();
    dir.text(
      "Never tell me the odds! Both players have died. Press the button to play again!"
    );
    attack.animate({ left: "0px" });
    attack.text("Play Again?");
    attack.on("click", function() {
      replay();
    });
  }
}

function selectOpponentText() {
  dir.text("Please Select an Opponent");
  p1HpText.css("visibility", "visible");
  p1HpText.text(hp1);
}

function beginGame() {
  hp1 = 500;
  showHealth1();
  if (avatar.attr("id") === leia.attr("id")) {
    leia.animate({ top: "-280px" });
    selectOpponentText();
    avatarClickOff();
  } else if (avatar.attr("id") === luke.attr("id")) {
    luke.animate({ top: "-280px", left: "-204px" });
    selectOpponentText();
    leia.animate({ left: "204px" });
    avatarClickOff();
  } else if (avatar.attr("id") === vader.attr("id")) {
    vader.animate({ top: "-280px", left: "-408px" });
    selectOpponentText();
    leia.animate({ left: "204px" });
    luke.animate({ left: "204px" });
    avatarClickOff();
  } else if (avatar.attr("id") === boba.attr("id")) {
    boba.animate({ top: "-280px", left: "-612px" });
    selectOpponentText();
    leia.animate({ left: "204px" });
    luke.animate({ left: "204px" });
    vader.animate({ left: "204px" });
    avatarClickOff();
  }

  // Opponent Leia
  leia.click(function() {
    leiaOpponent();
  });

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
    bobaOpponent();
  });
}

function enableAttack() {
  attack.css("visibility", "visible");
  attack.on("click", attacks);
}

$(document).ready(function() {
  avatar;
  avatarText = $("#avatar");
  opponentText = $("#opponents");
  opponent;
  attack = $("button");
  title = $("h1");
  dir = $("#instructionText");
  leia = $("#leia");
  luke = $("#luke");
  vader = $("#vader");
  boba = $("#boba");
  attackPower = Math.floor(Math.random() * (8 - 4 + 1)) + 1;
  attackPowerUp = attackPower;
  p1HpBar = $("#health1");
  p2HpBar = $("#health2");
  p1HpText = $("#h1No");
  p2HpText = $("#h2No");
  hp1;
  hp2;
  curHp1;
  curHp2;
  gamesPlayed = 0;

  timeOut();

  setTimeout(function() {
    $("#star").fadeIn();
    $("#wars").fadeIn();
    $("#gameTitle").fadeIn();
    dir.fadeIn();
    leia.fadeIn();
    luke.fadeIn();
    vader.fadeIn();
    boba.fadeIn();
  }, 90000);

  //  Choose Avatar to Begin

  dir.text("Please Select a Character");

  leia.on("click", function() {
    avatar = leia;
    beginGame();
  });
  luke.on("click", function() {
    avatar = luke;
    beginGame();
  });
  vader.on("click", function() {
    avatar = vader;
    beginGame();
  });
  boba.on("click", function() {
    avatar = boba;
    beginGame();
  });
});
