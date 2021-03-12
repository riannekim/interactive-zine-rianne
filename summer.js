// blue box

let blueBox = document.querySelector(".box1");

function turnBlue() {

    document.body.style.background = "#56B7E6";
    document.body.style.color = "#56B7E6";
}

blueBox.addEventListener("click", turnBlue);


// orange box

let orangeBox = document.querySelector(".box2");

function turnOrange() {

    document.body.style.background = "#FF8A3D";
    document.body.style.color = "#FF8A3D";
}

orangeBox.addEventListener("click", turnOrange);


// mint box

let mintBox = document.querySelector(".box3");

function turnMint() {

    document.body.style.background = "#2AD2C9";
    document.body.style.color = "#2AD2C9";
}

mintBox.addEventListener("click", turnMint);


// red box

let redBox = document.querySelector(".box4");

function turnRed() {

    document.body.style.background = "#E40046";
    document.body.style.color = "#E40046";
}

redBox.addEventListener("click", turnRed);