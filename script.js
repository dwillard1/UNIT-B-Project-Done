/* Declare variables below to save the different sections (divs) of your story*/
let buttons = document.querySelector(".buttons")
let PortaPottyscreen = document.querySelector(".PortaPotty-screen")
let TacoBellscreen = document.querySelector(".TacoBell-screen")
let PortaPottyend = document.querySelector(".PortaPotty-end")
let TacoBellend = document.querySelector(".TacoBell-end")
let storyopening = document.querySelector (".story-opening")
let title = document.querySelector (".title")
let button1 = document.querySelector(".PortaPotty")
let button2 = document.querySelector(".TacoBell")
let Morale1 = document.querySelector(".PPEB")



button1.onclick=function(){
  console.log("i'm here")
  PortaPottyscreen.style.display="block";
    storyopening.style.display="none";
  buttons.style.display="none";
  title.style.display="none";
};

button2.onclick=function(){
  TacoBellscreen.style.display="block";
    storyopening.style.display="none";
  buttons.style.display="none";
  title.style.display="none";
};

PortaPottyscreen.onclick=function(){
  PortaPottyscreen.style.display="none";
  PortaPottyend.style.display="block";
  var audio = document.getElementById("audio1");
        audio.play();
}

TacoBellscreen.onclick=function(){
  TacoBellscreen.style.display="none";
  TacoBellend.style.display="block";
  var audio = document.getElementById("audio2");
        audio.play(); 
}






/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){


};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
