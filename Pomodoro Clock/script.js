var session = 25;
var Break = 5;

var session_adjust = function(class_name, value){
  document.getElementsByClassName(class_name)[0].innerHTML = value;
}

//buttons for adjusting session time
document.getElementsByClassName('session--minus')[0].addEventListener('click', function(){
  if( session > 1){
    session -= 1;
    session_adjust('session-time', session);
  }
})
document.getElementsByClassName('session--add')[0].addEventListener('click', function(){
  session += 1;
  session_adjust('session-time', session);
})

//buttons for adjusting break time
document.getElementsByClassName('break--minus')[0].addEventListener('click', function(){
  if(Break > 1){
    Break -= 1;
    session_adjust('break-time', Break);
  }
})
document.getElementsByClassName('break--add')[0].addEventListener('click', function(){
  Break += 1;
  session_adjust('break-time', Break);
})

var current_period = 'Session';


//countdown timer
function formatTime(seconds) {
  var m = Math.floor(seconds / 60) % 60,
      s = seconds % 60;

  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  return m + ":" + s;
}

var count, counter;

function timer() {
  count--;
  if (count < 0){
    current_period == 'Session' ? current_period = 'Break' : current_period = 'Session';
    doing();
    return clearInterval(counter);
  }
  document.getElementsByClassName('time-left')[0].innerHTML = formatTime(count);
}

//this will make the timer start
function doing() {
  document.getElementsByClassName('period')[0].innerHTML = current_period;
  if(current_period == 'Session'){
    count = session*60;
  }
  else {
    count = Break*60;
  }
  //calls the timer:
  counter = setInterval(timer, 1000);

  progressing(count*10);
}

//buttons for start
document.getElementsByClassName('start')[0].addEventListener('click', function(){
  doing();
})

//progress bar
function progressing(time) {
  var elem = document.getElementsByClassName('bar')[0];   
  var width = 0;
  var id = setInterval(frame, time);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}











