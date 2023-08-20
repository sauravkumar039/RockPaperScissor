console.log("Click on any");
var pcsum = 0;
var usersum = 0;
function computerScore() {
  pcsum++;
  document.getElementById("box1value").innerHTML = parseInt(pcsum);
  console.log(pcsum);
}

function userScore() {
  usersum++;
  document.getElementById("box2value").innerHTML = parseInt(usersum);
  console.log(usersum);
}

let popup = document.getElementsByClassName("rulesbutton");
let cross = document.getElementsByClassName("cross");

function f1() {
  document.body.classList.add("popup-active");
  document.body.classList.add("cross-active");
}

function f2() {
  document.body.classList.remove("popup-active");
  document.body.classList.remove("cross-active");
}

popup[0].addEventListener("click", f1);
cross[0].addEventListener("click", f2);

var rock = document.getElementsByClassName("button1");
var scissor = document.getElementsByClassName("button2");
var paper = document.getElementsByClassName("button3");

var computer = ["Rock", "Paper", "Scissor"];

rock[0].addEventListener("click", function () {
  var computerInput = computer[Math.floor(Math.random() * computer.length)];
  console.log(computerInput);
  if (computerInput == "Rock") {
    console.log("tie");
    document.body.classList.add("page1-active");
    document.body.classList.add("page4-active");
  } else if (computerInput == "Paper") {
    console.log("You win");
    userScore();
    document.body.classList.add("page1-active");
    document.body.classList.add("page2-active");
    document.body.classList.add("next-active");
    document.body.classList.add("pcbuttonScissor-active");
    document.body.classList.add("pcbuttonPaper-active");
    // or we can change the color of button border and change the img of scisor-existing button here....
  } else {
    console.log("You win");
    userScore();
    document.body.classList.add("page1-active");
    document.body.classList.add("page2-active");
    document.body.classList.add("next-active");
    document.body.classList.remove("pcbuttonScissor-active");
  }
});

function scissorf() {
  var computerInput = computer[Math.floor(Math.random() * computer.length)];
  console.log(computerInput);
  if (computerInput == "Rock") {
    console.log("Computer win");
    computerScore();
    document.body.classList.add("page1-active");
    document.body.classList.add("page3-active");
  } else if (computerInput == "Paper") {
    console.log("You win");
    userScore();
    document.body.classList.add("page1-active");
    document.body.classList.add("page2-active");
    document.body.classList.add("next-active");
    document.body.classList.add("youbutton-active");
    document.body.classList.add("youbuttonScissor-active");
    document.body.classList.add("pcbuttonScissor-active");
    document.body.classList.add("pcbuttonPaper-active");
  } else {
    console.log("tie");
    document.body.classList.add("page1-active");
    document.body.classList.add("page4-active");
    document.body.classList.add("button1Page4-active");
    document.body.classList.add("button1Page4Scissor-active");
    document.body.classList.add("button2Page4-active");
    document.body.classList.add("button2Page4Scissor-active");
  }
}
scissor[0].addEventListener("click", scissorf);

paper[0].addEventListener("click", function () {
  var computerInput = computer[Math.floor(Math.random() * computer.length)];
  console.log(computerInput);
  if (computerInput == "Rock") {
    console.log("Computer win");
    computerScore();
    document.body.classList.add("page1-active");
    document.body.classList.add("page3-active");
    document.body.classList.add("youbuttonPage3-active");
    document.body.classList.add("youbuttonPage3Paper-active");
  } else if (computerInput == "Paper") {
    console.log("tie");
    document.body.classList.add("page1-active");
    document.body.classList.add("page4-active");
    document.body.classList.add("button1Page4-active");
    document.body.classList.add("button1Page4Paper-active");
    document.body.classList.add("button2Page4-active");
    document.body.classList.add("button2Page4Paper-active");
  } else {
    console.log("Computer win");
    computerScore();
    document.body.classList.add("page1-active");
    document.body.classList.add("page3-active");
    document.body.classList.add("pcbuttonPage3-active");
    document.body.classList.add("pcbuttonPage3Scissor-active");
    document.body.classList.add("youbuttonPage3-active");
    document.body.classList.add("youbuttonPage3Paper-active");
  }
});

// FOR REPLAY BUTTON
var replay = document.getElementsByClassName("replayPage4");
replay[0].addEventListener("click", function () {
  document.body.classList.remove("page1-active");
  document.body.classList.remove("page4-active");
  document.body.classList.remove("next-active");
  document.body.classList.remove("button1Page4-active");
  document.body.classList.remove("button1Page4Scissor-active");
  document.body.classList.remove("button2Page4-active");
  document.body.classList.remove("button2Page4Scissor-active");
  document.body.classList.remove("button1Page4Paper-active");
  document.body.classList.remove("button2Page4Paper-active");
});

//    FOR PLAYAGAIN PAGE2
var playagain = document.getElementsByClassName("playagain");
playagain[0].addEventListener("click", function () {
  document.body.classList.remove("page1-active");
  document.body.classList.remove("page2-active");
  document.body.classList.remove("next-active");
  document.body.classList.remove("pcbuttonScissor-active");
  document.body.classList.remove("pcbuttonPaper-active");
  document.body.classList.remove("youbutton-active");
  document.body.classList.remove("youbuttonScissor-active");
});

//  FOR PLAYAGAIN PAGE3
var playagain3 = document.getElementsByClassName("playagainPage3");
playagain3[0].addEventListener("click", function () {
  document.body.classList.remove("page1-active");
  document.body.classList.remove("page3-active");
  document.body.classList.remove("next-active");
  document.body.classList.remove("pcbuttonPage3-active");
  document.body.classList.remove("pcbuttonPage3Scissor-active");
  document.body.classList.remove("youbuttonPage3-active");
  document.body.classList.remove("youbuttonPage3Paper-active");
});

//FOR NEXT ON WON PAGE
var next = document.getElementsByClassName("next");
next[0].addEventListener("click", function () {
  document.body.classList.add("page1-active");
  document.body.classList.remove("page2-active");
  document.body.classList.remove("next-active");
  document.body.classList.add("resultPage5-active");
  document.body.classList.add("pcbuttonScissor-active");
  document.body.classList.remove("pcbuttonPaper-active");
  document.body.classList.add("header-active");
  document.body.classList.remove("youbuttonScissor-active");
});

// FOR PLAYAGAIN PAGE 5 RESULT
var playagain5 = document.getElementsByClassName("playagainPage5");
playagain5[0].addEventListener("click", function () {
  document.body.classList.remove("page1-active");
  document.body.classList.remove("header-active");
  document.body.classList.remove("resultPage5-active");
});
