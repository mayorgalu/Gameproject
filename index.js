let readlineSync = require("readline-sync");
csont prompt = require("Did you read the instructions how to play?")

console.log(
  "Welcome to Hogwarts School: Quiddich Tournament! Slytherin v. Griffindorf"
);
console.log("What do you want to do?");
let option = readlineSync.question(
  "Options: grab magic broom, zoom up, wait for the goldensnitch"
);

switch (option) {
  case "grab magic broom":
    console.log(
      "You are now equiped with a Nimbus 2020 and are prepared to compete!"
    );
    break;
  case "zoom up":
    console.log("Wait! You can't chase the Golden Snitch without your broom!");
    break;
  case "wait for the goldensnitch":
    console.log('You will never win! "Muggles can\'t fly."');
    break;
  default:
    console.log("You fell off your broom!");
    console.log('Get up, Harry!: "Quit messin\' around."');
}

let GrabMagicBroom = {value:0, tool: "Magic Broom"},
    ZoomUp = {value:0, action: "Zoom up"}
    