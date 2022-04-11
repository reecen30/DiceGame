var randomnum1 = Math.floor(Math.random()*6) +1;

var imagedice1 = "dice"+ randomnum1 +".png";

var imagedicespic1 = "images/"+imagedice1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imagedicespic1);

var randomnum2 = Math.floor(Math.random()*6)+1;

var imagedice2 = "dice"+randomnum2+".png";

var imagedicespic2 = "images/"+imagedice2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",imagedicespic2);

if  (randomnum1>randomnum2) {
  document.querySelector("h1").innerHTML= "💪Player 1 Wins! -PRESS REFRESH";
}
else if  (randomnum1<randomnum2){
  document.querySelector("h1").innerHTML= "💪Player 2 Wins! -PRESS REFRESH";
}
else {
  document.querySelector("h1").innerHTML= "👀DRAW! -PRESS REFRESH";
}
