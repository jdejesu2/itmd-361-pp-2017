function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

ringDoorbell.addEventListener("click", function(){
  ringDoorbell();
});


$(document).on("keypress", function(press) {
  if (press.key === "d") {
    ringDoorbell();
  }
});
