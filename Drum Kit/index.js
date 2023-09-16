for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttoninnerhtml = this.innerHTML;
    makeSound(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);
  });
}
document.addEventListener("keydown", function(event)
{
  makeSound(event.key);
  buttonanimation(event.key);
});
function makeSound(key)
{
  switch (key) {
    case "w":
      var tool1 = new Audio("sounds/tom-1.mp3");
      tool1.play();
      break;

    case "a":
      var tool2 = new Audio("sounds/tom-2.mp3");
      tool2.play();
      break;

    case "s":
      var tool3 = new Audio("sounds/tom-3.mp3");
      tool3.play();
      break;

    case "d":
      var tool4 = new Audio("sounds/tom-4.mp3");
      tool4.play();
      break;

    case "j":
      var tool5 = new Audio("sounds/snare.mp3");
      tool5.play();
      break;

    case "k":
      var tool6 = new Audio("sounds/crash.mp3");
      tool6.play();
      break;
      
    case "l":
      var tool7 = new Audio("sounds/kick-bass.mp3");
      tool7.play();
      break;

    default: console.log();
  }
}

function buttonanimation(currentkey){
  var v=document.querySelector("."+currentkey);
  v.classList.add("pressed");
  setTimeout(function()
  {
    v.classList.remove("pressed");
  },100);
}
