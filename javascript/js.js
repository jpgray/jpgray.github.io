// $((event) => {
// dom ready function seems redundant
let encounterCount = 0;
let encounterArray = [];
let probArray = [];
// let fight;
let tUnit = 1200;
// 1200 seems appropriate
let fBbuttons = document.getElementsByClassName('buttons');

class encounter {
  constructor(name, strength, charisma, speed, health, resilience, endurance, encounterChance, image, fightMessage, friendMessage, fleeMessage, arrIndex) {
  this.name = name;
  this.strength = strength;
  this.charisma = charisma;
  this.speed = speed;
  this.health = health;
  this.resilience = resilience;
  this.endurance = endurance;
  this.encounterChance = encounterChance;
  this.image = image;
  this.fightMessage = fightMessage || `The ${name} counter-attacks!`;
  this.friendMessage = friendMessage || `The ${name} is unconvinced. The ${name} attacks!`;
  this.fleeMessage = fleeMessage || `The ${name} takes the opportunity to attack!`;
  this.arrIndex = encounterCount;
  encounterArray.push(this);
  encounterCount++;
  probArray.push(this.encounterChance);
  }
}

//actions to be set up here!!

class monster extends encounter{
  constructor(name, strength, charisma, speed, health, resilience, endurance, encounterChance, image, fightMessage, friendMessage, fleeMessage) {
    super (name, strength, charisma, speed, health, resilience, endurance, encounterChance, image, fightMessage, friendMessage, fleeMessage);

  }
}


PName = prompt("Please enter a name for your daring adventurer...") || "Bob";
if (PName == "Obi-Wan") {console.log("Hello there!")};
document.getElementById('gameTitle').innerHTML = `Trials of a Spartan: ${PName}'s Trial`;




let player = new encounter(PName, (PName == "Steven Seagal") ? 1000 : 10, (PName == "Obi-Wan") ? 1000 : 10, (PName == "Usain") ? 1000 : 10, (PName == "Jon Gray") ? 1000 : 100, 0, 0, 0);
const playerR = new encounter(PName, (PName == "Steven Seagal") ? 1000 : 10, (PName == "Obi-Wan") ? 1000 : 10, (PName == "Usain") ? 1000 : 10, (PName == "Jon Gray") ? 1000 : 100, 0, 0, 0);
let playerPlus = new encounter(PName, (PName == "Steven Seagal") ? 1000 : 10, (PName == "Obi-Wan") ? 1000 : 10, (PName == "Usain") ? 1000 : 10, (PName == "Jon Gray") ? 1000 : 100, 0, 0, 0);

console.log(player);

const Slime = new monster("Slime", 1, 1, 1, 30, 20, 3, 10, "url('Images/Slime.png')");
const SlimeR = new monster("", 0, 0, 0, 30, 20, 3, 0, "");
console.log(Slime);

const Rock = new monster("Rock", 0, 1000, 0, 200, 1000, 0, 1, "url('Images/rock.png')");
const RockR = new monster("", 0, 0, 0, 200, 1000, 0, 0, "");
Rock.fightMessage = "The Rock remains unstirred"
Rock.friendMessage = "The Rock remains unstirred"
console.log(Rock);

const furiousRockShards = new monster("Furious Rock Shards", 22, 1000, 0, 120, 65, 30, 0, "url('Images/angryRockShards.png')");
const furiousRockShardsR = new monster("", 0, 0, 0, 120, 65, 30, 0, "");
furiousRockShards.fightMessage = "The Furious Rock Shards strike in revenge!"
console.log(furiousRockShards);

const GiantRat = new monster("Giant Rat", 3, 3, 3, 30, 5, 20, 5, "url('Images/giantRat.png')");
const GiantRatR = new monster("", 0, 0, 0, 30, 5, 20, 0, "");
console.log(GiantRat);

const TastyBanana = new monster("Tasty Banana", -100, 4, 6, 0.01, 100, 0.01, 2, "url('Images/tastyBanana.png')");
const TastyBananaR = new monster("", 0, 0, 0, 1, 100, 0, 0, "");
TastyBanana.fiWinMessage = "You destroy what most assuredly was a villainous opponent plotting evil in a fit of rage against it's insulting attempt of temptation.";
TastyBanana.friendMessage = "You successfully negotiate the banana into your stomach. It is tasty."
console.log(TastyBanana);

const Zombie = new monster("Zombie", 15, 8, 3, 50, 28, 10, 3, "url('Images/zombie.png')");
const ZombieR = new monster("", 0, 0, 0, 50, 8, 20, 0, "");
console.log(Zombie);

const Goblin = new monster("Goblin", 9, 18, 14, 35, 8, 20, 4, "url('Images/goblin.png')");
const GoblinR = new monster("", 0, 0, 0, 35, 8, 20, 0, "");
console.log(Goblin);

const giantSpider = new monster("Giant Spider", 21, 12, 11, 18, 31, 50, 2, "url('Images/giantSpider.png')");
const giantSpiderR = new monster("", 0, 0, 0, 18, 31, 50, 0, "");
console.log(giantSpider);

const BBEG = new monster("BBEG", 25, 25, 25, 100, 100, 100, 0, "url('Images/BBEG.png')");
const BBEGR = new monster("", 0, 0, 0, 100, 100, 100, 0, "");
console.log(BBEG);

const accumulator = (a, b) => a + b;
let totalProb;

let kills = 0;
let escapes = 0;
let friends = 0;
let totalVictories = () => kills + escapes + friends;
























//Setting encounter


let probAccArray = [0];

const updateProbArray = () => {
  probArray = []
for (var i = 0; i < encounterArray.length; i++) {
  probArray.push(encounterArray[i].encounterChance)
}}

probArray.push(0);
const updateProbAcc = () => {
  updateProbArray();
  probAccArray = [0];
for (var i = 1; i < probArray.length; i++) {
  probAccArray.push(probArray[i] + probAccArray[i-1])
}}
updateProbAcc();


let currentEncounter;
let setEncounter = () => {
  updateProbAcc();
  console.log(totalVictories())
  if (totalVictories() == 20) {
    currentEncounter = BBEG;
    updateEvents(`The ${currentEncounter.name} has shown itself!`,2*tUnit);
    setEncImage(2*tUnit);
    // newMusic("Music/battle.mp3",2*tUnit,0.1)
    return BBEG;}

  else if (totalVictories() == 21) {
    currentEncounter = "";
    setTimeout(unhideNewGameButton,2*tUnit);
    music.loop=false;
    newMusic("Music/victory.mp3",tUnit,0.2);

    //variable win screens
    if (kills == 21) {
      newScreen(victoryFiScreen,2*tUnit);
      updateEvents(`${player.name} has successfully slaughtered all who stood in their path to domination! What conquest lies next?`,2*tUnit)}
    else if (friends == 21) {
      newScreen(victoryFrScreen,2*tUnit);
      updateEvents(`${player.name}'s new friends throw a huge party, in celebration of their victory!`,2*tUnit)}
    else if (escapes == 21) {
      newScreen(victoryFlScreen,2*tUnit);
      updateEvents(`${player.name} has run away from all their worldly concerns, and never intends to stop!`,2*tUnit)}
    else {
      newScreen(victoryScreen,2*tUnit);
      updateEvents(`${player.name} has won! ${player.name} slew ${kills} foes, befriended ${friends} locals and left ${escapes} chumps in the dust. Would you like to play again?`,2*tUnit)}
    }

  else{
    //random encouter
    totalProb = probArray.reduce(accumulator,0);
    let ranVal = Math.random() * totalProb;
    console.log(`${ranVal} out of ${totalProb} was rolled!`);
    for (var i = 1; i < probAccArray.length; i++) {
      if (probAccArray[i-1] <= ranVal && ranVal <= probAccArray[i]) {
        currentEncounter = encounterArray[i];
        updateEvents(`A ${currentEncounter.name} was encountered!`,2*tUnit);
        setEncImage(2*tUnit);
        if (totalVictories() == 0) {updateEvents("What would you like to do?",3*tUnit)};
        unhideAllTimer(4*tUnit);

        return encounterArray[i];
      }
    }
  }

}







let playerChar = document.getElementById("pImage");
const start = () => {setEncounter();
  // for new game after victory
  document.getElementById("eImage").style.backgroundImage = "";
  newScreen("");

  //Randomised player portrait
  let PImage = Math.floor(Math.random()*6+1);
  console.log(PImage)
  switch (PImage) {
    case 1:
    playerChar.style.backgroundImage = "url('Images/adventurer1.png')";
    break;
    case 2:
    playerChar.style.backgroundImage = "url('Images/adventurer2.png')";
    break;
    case 3:
    playerChar.style.backgroundImage = "url('Images/adventurer3.png')";
    break;
    case 4:
    playerChar.style.backgroundImage = "url('Images/adventurer4.png')";
    break;
    case 5:
    playerChar.style.backgroundImage = "url('Images/adventurer5.png')";
    break;
    case 6:
    playerChar.style.backgroundImage = "url('Images/adventurer6.png')";
    break;
    default:
    playerChar.style.backgroundImage = "url('Images/stevenSeagal.png')";
    break;

}
}

// for use when changing current enemy portrait
const changeEImage = () => {
  document.getElementById("eImage").style.backgroundImage = currentEncounter.image;
}
const setEncImage = (timeout) => {setTimeout(changeEImage,timeout)
}



















// let FIwin;
// let FRwin;
// let FLwin;


// action effects

fight = () => {
  hideAllF();
  playActionSound("Music/fight.wav",0,0.05);
  setTimeout(() => {document.getElementById('ambience').volume = 1},500)
  // FIwin = 0;0
  playerFight = player.strength * ((Math.random())/2 +0.5);
  console.log("player fight" + playerFight);
  currentEncounter.health -= playerFight;
  console.log("enemy hp" + currentEncounter.health)
  let ehp = currentEncounter.health;
  setTimeout(pAttackShow,0);

  instanceFiVictoryCheck(currentEncounter.health);

  if (ehp > 0) {
    playActionSound("Music/eAttackSound.mp3",2*tUnit,0.7);
    setTimeout(() => {document.getElementById('ambience').volume = 1},2*tUnit+500)
    setTimeout(eAttackShow,2*tUnit);
    updateEvents(currentEncounter.fightMessage, 2*tUnit);
    enemyFight = currentEncounter.strength * ((Math.random())/2 +0.5);
    console.log("enemy fight" + enemyFight);
    player.health -= enemyFight;
    console.log("player hp" + player.health);

    // if (currentEncounter.name == "Tasty Banana") {
    //   currentEncounter.health--;
    //   setEncounter()}
  }

  deathCheck(player.health);
  if(player.health>0 && currentEncounter != "" && currentEncounter != TastyBanana) {updateEvents("What would you like to do?",3*tUnit); unhideAllTimer(4*tUnit);};
  };

// }
// currentEncounter.fight;

friend = () => {
  playActionSound("Music/friend.mp3",0,5);
  hideAllF();
  // FRwin = 0;
  playerFriend = player.charisma * ((Math.random())/2 +0.5);
  console.log(playerFriend);
  currentEncounter.resilience -= playerFriend;
  console.log(currentEncounter.resilience)
  let res = currentEncounter.resilience

  instanceFrVictoryCheck(currentEncounter.resilience);

  if (res > 0) {
    playActionSound("Music/eAttackSound.mp3",2*tUnit,0.7);
    setTimeout(() => {document.getElementById('ambience').volume = 1},500)
    setTimeout(eAttackShow,2*tUnit);
    updateEvents(currentEncounter.friendMessage,2*tUnit);
    enemyFight = currentEncounter.strength * ((Math.random())/2 +0.5);
    console.log("enemy fight" + enemyFight);
    player.health -= enemyFight;
    console.log("player hp" + player.health);

  if (currentEncounter.name == "Tasty Banana") {
    // currentEncounter.health--;
    setTimeout(setEncounter,tUnit);
  }}
  deathCheck(player.health);
  if(player.health>0 && currentEncounter != "" && currentEncounter != TastyBanana) {updateEvents("What would you like to do?",3*tUnit); unhideAllTimer(4*tUnit);};
  // unhideAllTimer(4*tUnit);
}
// currentEncounter.fight;

flee = () => {
  playActionSound("Music/flee.mp3",0,0.2);
  setTimeout(() => {document.getElementById('ambience').volume = 1},500)
  hideAllF();
  // FLwin = 0;
  playerFlee = player.speed * ((Math.random())/2 +0.7);
  console.log(playerFlee);
  currentEncounter.endurance -= playerFlee;
  console.log(currentEncounter.endurance)
  let end = currentEncounter.endurance;

  instanceFlVictoryCheck(currentEncounter.endurance);

  if (end > 0) {
    playActionSound("Music/eAttackSound.mp3",2*tUnit,0.4);
    setTimeout(() => {document.getElementById('ambience').volume = 1},500)
    setTimeout(eAttackShow,2*tUnit);
    updateEvents(currentEncounter.fleeMessage,2*tUnit);
    enemyFight = currentEncounter.strength * ((Math.random())/2 +0.5);
    console.log("enemy fight" + enemyFight);
    player.health -= enemyFight;
    console.log("player hp" + player.health);

  // if (currentEncounter.name == "Tasty Banana") {
  //   currentEncounter.health--;
  //   setEncounter();
  }
  deathCheck(player.health);
  if(player.health>0 && currentEncounter != "" && currentEncounter != TastyBanana) {updateEvents("What would you like to do?",3*tUnit); unhideAllTimer(4*tUnit);};


}
// currentEncounter.fight;





























// Instance Checks
const grayscaleP = () => playerChar.style.filter = "grayscale(1)";
const reverseGrayscaleP = () => playerChar.style.filter = "grayscale(0)";


const deathCheck = hp => {
  setTimeout(updateHP,3*tUnit);
  if (hp <= 0) {
    //create death game over screen here into encounter area
    updateEvents(`Game over! You killed ${kills} enemies, made ${friends} new friends and escaped ${escapes} encounters!`,3*tUnit)
    setTimeout(grayscaleP,3*tUnit);
    newScreen(defeatScreen,3*tUnit);
    setTimeout(unhideNewGameButton,4*tUnit);
  }
  else {
    // updateEvents(`Still alive! For now...`,3*tUnit)
  }
}
// deathCheck(player.health);

const instanceFiVictoryCheck = hp => {

  if (hp <= 0) {
    //create fight victory here
    if (currentEncounter.name == "Tasty Banana") {
      updateEvents(TastyBanana.fiWinMessage,tUnit);
    }


    else{
    updateEvents(`Congratulations! You killed the enemy ${currentEncounter.name}! `,tUnit);
    player.strength += 0.5 * currentEncounter.strength;
      if (currentEncounter.name == "Rock"){
        Rock.encounterChance = 0;
        furiousRockShards.encounterChance = 10;
        updateProbAcc();
      }
      else if (currentEncounter.name == "Furious Rock Shards") {
        Rock.encounterChance = 2;
        furiousRockShards.encounterChance = 0;
        updateProbAcc();
    }}
    kills++;
    currentEncounter.health = encounterArray[currentEncounter.arrIndex+1].health;
    currentEncounter.resilience = encounterArray[currentEncounter.arrIndex+1].resilience;
    currentEncounter.endurance = encounterArray[currentEncounter.arrIndex+1].endurance;
    setEncounter();
    // FIwin = 1;

}
  else {
    updateEvents(`The enemy ${currentEncounter.name} looks a bit shaken, but ready!`,tUnit);
    // move to encounter's action
  }
}
// instanceFVictoryCheck(currentEncounter.health)

const instanceFrVictoryCheck = res => {
  if (res <= 0) {
    //create fight victory here, including + player skills
    updateEvents(`Congratulations! You have become buddies with the ${currentEncounter.name}!`,tUnit)
    player.charisma += 0.5 * currentEncounter.charisma;
    friends++;
    currentEncounter.health = encounterArray[currentEncounter.arrIndex+1].health;
    currentEncounter.resilience = encounterArray[currentEncounter.arrIndex+1].resilience;
    currentEncounter.endurance = encounterArray[currentEncounter.arrIndex+1].endurance;
    setEncounter();
    // FRwin = 1;
  }
  else if (currentEncounter != TastyBanana){
    updateEvents(`The enemy ${currentEncounter.name} looks a bit conflicted, but remains angry!`,tUnit);
    // moves to encounter's action
  }
}
// instanceFrVictoryCheck(currentEncounter.charisma)

const instanceFlVictoryCheck = end => {
  if (end <= 0) {
    if (currentEncounter.name == "Tasty Banana") {
      updateEvents(TastyBanana.flWinMessage,tUnit);
    }
    else{
    updateEvents(`Congratulations! You gallantly fled the enemy ${currentEncounter.name}!`,tUnit)}
    player.speed += 0.5 * currentEncounter.speed;
    escapes++;
    currentEncounter.health = encounterArray[currentEncounter.arrIndex+1].health;
    currentEncounter.resilience = encounterArray[currentEncounter.arrIndex+1].resilience;
    currentEncounter.endurance = encounterArray[currentEncounter.arrIndex+1].endurance;
    setEncounter();
    // FLwin = 1;
  }
  else {
    updateEvents(`The enemy ${currentEncounter.name} looks a bit tired, but doggedly pursues you!`,tUnit);
    // move to encounter's action
  }
}
// instanceFlVictoryCheck(currentEncounter.speed)

















// display updates
const hideButton = (BUTTON) => BUTTON.style.visibility="hidden";
const hideNewGameButton = () => hideButton(document.getElementById('newGameButton'))
const fButtons = document.getElementsByClassName("fbuttons");
const hideAllF = () => {
  hideButton(fButtons[0]);
  hideButton(fButtons[1]);
  hideButton(fButtons[2]);
}

const unhideButton = (BUTTON) => BUTTON.style.visibility="visible";
const unhideNewGameButton = () => unhideButton(document.getElementById('newGameButton'))
const unhideAllF = () => {
  unhideButton(fButtons[0]);
  unhideButton(fButtons[1]);
  unhideButton(fButtons[2]);
}

const unhideAllTimer = (timeout) => setTimeout(unhideAllF,timeout)


const set = () => {
  updateEvents(`${player.name} has begun their attempt!`);
  newMusic("Music/ambience.mp3",0,1);
  music.loop = true;
  kills = 0;
  friends = 0;
  escapes = 0;
  player.health = playerR.health;
  player.strength = playerR.strength;
  player.charisma = playerR.charisma;
  player.charisma = playerR.charisma;
  updateHP();
  start();
  hideNewGameButton();
  reverseGrayscaleP();
  }

document.getElementById('newGameButton').addEventListener("click", set);

document.getElementById('FiButton').addEventListener("click", fight);
document.getElementById('FrButton').addEventListener("click", friend);
document.getElementById('FlButton').addEventListener("click", flee);

// const healthIcon = document.getElementById("lifeHeart");
const updateHP = () => {
  if (player.health<= 0) {
    document.getElementById("lifeHeart").src="Images/heart0.png"} else
  if (player.health<= 20) {
    document.getElementById("lifeHeart").src="Images/heart20.png"} else
  if (player.health<= 40) {
    document.getElementById("lifeHeart").src="Images/heart40.png"} else
  if (player.health<= 60) {
    document.getElementById("lifeHeart").src="Images/heart60.png"} else
  if (player.health<= 80) {
    document.getElementById("lifeHeart").src="Images/heart80.png"}
  else {document.getElementById("lifeHeart").src="Images/heart.png"}
}

const eventsBox = [" ",`Are you prepared, ${PName}?`," "];
document.getElementById('p0').innerHTML = eventsBox[0];
document.getElementById('p1').innerHTML = eventsBox[1];
document.getElementById('p2').innerHTML = eventsBox[2];

const updateEvents1 = (message) => {
  eventsBox.unshift(message);
  document.getElementById('p0').innerHTML = eventsBox[0];
  document.getElementById('p1').innerHTML = eventsBox[1];
  document.getElementById('p2').innerHTML = eventsBox[2];

  return eventsBox[0];
}

const updateEvents = (message, timeout) => setTimeout(() => updateEvents1(message),timeout);

const screen = document.getElementById('screen');
const newScreen = (address,timeout) => setTimeout(() => {screen.style.backgroundImage = `url(${address})`},timeout);
const defeatScreen = "Images/breaking-news.png";
const victoryScreen = "Images/victoryBase.png";
const victoryFiScreen = "Images/victoryFi.png";
const victoryFrScreen = "Images/victoryFr.png";
const victoryFlScreen = "Images/victoryFl.png";
const victoryBalScreen = "Images/victoryBal.png";

const pAttack = document.getElementById("pAttack");
const eAttack = document.getElementById("eAttack");
const pAttackShow = () => {
  pAttack.src = `Images/pAttack.gif`;
  setTimeout(() => {pAttack.src = ``},500);
};
const eAttackShow = () => {
  eAttack.src = `Images/eAttack1.gif`;
  setTimeout(() => {eAttack.src = ``},500);
};






// Sound effects


const music = document.getElementById('ambience');
const newMusic = (address,timeout,loudness) => setTimeout(() => {music.src = `${address}`; music.volume = loudness},timeout);

const actionSound = document.getElementById('pActionSound');
// actionSound.volume = 0.1;
actionSound.loop = false;
const playActionSound = (address,timeout,loudness) => setTimeout(() => {actionSound.src = address; actionSound.volume = loudness},timeout);











// reset kills = 0 in set function
// reset boss strength to 25




// DOM function ends here!
// })
