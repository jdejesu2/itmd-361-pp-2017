function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

ringdoorbell.addEventListener("click", function(){
  ringDoorbell();
});

$(document).on("keypress", function(press) {
  if (press.key === "d") {
    ringDoorbell();
  }
});
