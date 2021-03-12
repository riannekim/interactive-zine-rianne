// purple box

let purpleBox = document.querySelector(".box1");

function turnPurple() {

    document.body.style.background = "#A5B0E3";
    document.body.style.color = "#A5B0E3";
}

purpleBox.addEventListener("click", turnPurple);


// gray box

let grayBox = document.querySelector(".box2");

function turnGray() {

    document.body.style.background = "#C1C6C8";
    document.body.style.color = "#C1C6C8";
}

grayBox.addEventListener("click", turnGray);


// blue box

let blueBox = document.querySelector(".box3");

function turnBlue() {

    document.body.style.background = "#8DB9CA";
    document.body.style.color = "#8DB9CA";
}

blueBox.addEventListener("click", turnBlue);


// turquoise box

let turquoiseBox = document.querySelector(".box4");

function turnTurquoise() {

    document.body.style.background = "#003D4C";
    document.body.style.color = "#003D4C";
}

turquoiseBox.addEventListener("click", turnTurquoise);