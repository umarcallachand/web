let session = 10;
let Break = 2;

let session_adjust = function(class_name, value){
  
  document.getElementsByClassName(class_name)[0]
    .innerHTML = value;
}

//buttons for adjusting session time
document.getElementsByClassName('session--minus')[0]
  .addEventListener('click', () => {
    if( session > 1){
      session -= 1;
      session_adjust('session-time', session);
    }
  })
document.getElementsByClassName('session--add')[0]
  .addEventListener('click', () => {
    session += 1;
    session_adjust('session-time', session);
  })

//buttons for adjusting break time
document.getElementsByClassName('break--minus')[0]
  .addEventListener('click', () => {
    if(Break > 1){
      Break -= 1;
      session_adjust('break-time', Break);
    }
  })
document.getElementsByClassName('break--add')[0]
  .addEventListener('click', () => {
    Break += 1;
    session_adjust('break-time', Break);
  })

var current_period = 'Session';


//countdown timer
function formatTime(seconds) {
  let m = Math.floor(seconds / 60) % 60,
      s = seconds % 60;

  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  return m + ":" + s;
}

let count, counter;

function timer() {
  count--;
  if (count < 0){
    current_period == 'Session' ? current_period = 'Break' : current_period = 'Session';
    doing();
    return clearInterval(counter);
  }
  
  document.getElementsByClassName('time-left')[0]
    .innerHTML = formatTime(count);
}

//this will make the timer start
function doing() {
  document.getElementsByClassName('period')[0]
    .innerHTML = current_period;
  
  current_period == 'Session' ? count = session*60 : count = Break*60;
  //calls the timer:
  counter = setInterval(timer, 1000);

  progressing(count*10);
  
  //stops the timer if stop button is pressed
  document.getElementsByClassName('stop')[0]
    .addEventListener('click', () => {
      return clearInterval(counter);
  })
  
  //resets timer
  document.getElementsByClassName('reset')[0]
    .addEventListener('click', () => {
      counter = setInterval(timer, 1000);
  })
}

//buttons for start
document.getElementsByClassName('start')[0]
  .addEventListener('click', () => {
    doing();
  })

//progress bar
function progressing(time) {
  const elem = document.getElementsByClassName('bar')[0];   
  let width = 0;
  const id = setInterval(frame, time);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}










