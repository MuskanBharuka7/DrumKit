
// Make Sound by Button Press

var DrumBtn = document.querySelectorAll(".drum").length;

for(var i=0; i<DrumBtn; i++){

   document.querySelectorAll(".drum")[i].addEventListener("click",function() {
   var buttonHTML = this.innerHTML;

   playSound(buttonHTML);
   
   buttonAnimation(buttonHTML);
   });
   
}

// Make Sound by Keyboard key press
// event is the events (here keys) that is reflected when keyboard is press which gives us which key is pressed
// key is by default which key value it represents


 document.addEventListener("keypress" , function(event){
      playSound(event.key);
      buttonAnimation(event.key);
})


function playSound(key){

   switch(key) {
      
      case "w":
         var audioW = new Audio('sounds/crash.mp3');
         audioW.play();
         break;

      case "a":
         var audioA = new Audio('sounds/kick-bass.mp3');
         audioA.play();
         break;

      case "s":
         var audioS = new Audio('sounds/snare.mp3');
         audioS.play();
         break;

      case "d":
         var audioD = new Audio('sounds/tom-1.mp3');
         audioD.play();
         break;

      case "j":
         var audioJ = new Audio('sounds/tom-2.mp3');
         audioJ.play();
         break;

      case "k":
         var audioK = new Audio('sounds/tom-3.mp3');
         audioK.play();
         break;

      case "l":
         var audioL = new Audio('sounds/tom-4.mp3');
         audioL.play();
         break;
   
      default:
         console.log(key);
         break;
   }   

}

function buttonAnimation(currentKey){
   document.querySelector("."+currentKey).classList.add("pressed");
   setTimeout(function () {
      document.querySelector("."+currentKey).classList.remove("pressed");
   },200);
}