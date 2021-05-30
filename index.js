let randomnumber1 = Math.floor(Math.random() * 6) + 1;
let randomnumber2 = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelectorAll("img")[0];
let img2 = document.querySelectorAll("img")[1];

let file1 = "images/" + "dice" + randomnumber1 + ".png";
let file2 = "images/" + "dice" + randomnumber2 + ".png";

img1.setAttribute("src", file1);
img2.setAttribute("src", file2);



if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML= "🚩 Player 1 Wins!";
}
else if (randomnumber2 > randomnumber1) { 
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}