var cssText = document.querySelector("h3");
var colorLeft = document.getElementById("colorLeft");
var colorRight = document.getElementById("colorRight");
var body = document.getElementById("background");


function changeColor(){
    body.style.background = 
    "linear-gradient(to right, "
    +colorLeft.value
    +", "
    + colorRight.value
    + ")";

    cssText.textContent = body.style.background + ";";

}

colorLeft.addEventListener("input",changeColor);

colorRight.addEventListener("input", changeColor);



