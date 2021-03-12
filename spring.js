// define our variables

// define yellow box
let yellowBox = document.querySelector(".box1");

// define our function
// turn background white and keep text white

function turnYellow() {

    document.body.style.background = "#F6EB61";
    document.body.style.color = "#F6EB61";
}

// add eventlistner
// when someonoe clicks on yellow box, change background to yellow

yellowBox.addEventListener("click", turnYellow);


// pink box

let pinkBox = document.querySelector(".box2");

function turnPink() {

    document.body.style.background = "#FCAFC0";
    document.body.style.color = "#FCAFC0";
}

pinkBox.addEventListener("click", turnPink);


// green box

let greenBox = document.querySelector(".box3");

function turnGreen() {

    document.body.style.background = "#8EDD65";
    document.body.style.color = "#8EDD65";
}

greenBox.addEventListener("click", turnGreen);


// purple box

let purpleBox = document.querySelector(".box4");

function turnPurple() {

    document.body.style.background = "#D7A9E3";
    document.body.style.color = "#D7A9E3";
}

purpleBox.addEventListener("click", turnPurple);