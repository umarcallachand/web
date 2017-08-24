/*$(document).ready(function(){
  
  var values= ['','','','',''];
  var i = 0;

  var write = function() {
    $('.result').html(values[i]);
  }

  var calculate = function() {
    var result = +values[0];
    if(+values[1] > 0){result += +values[1];values[1] = '';};
    if(+values[2] > 0){result -= +values[2];values[2] = '';};
    if(+values[3] > 1){result *= +values[3];values[3] = '';};
    if(+values[4] > 1){result /= +values[4];values[4] = '';};

    $('.result').html(result);
    values[0] = result;
  }

  $('.zero').on('click', function(){values[i] += '0';write();});
  $('.one').on('click', function(){values[i] += '1';write();});
  $('.two').on('click', function(){values[i] += '2';write();});
  $('.three').on('click', function(){values[i] += '3';write();});
  $('.four').on('click', function(){values[i] += '4';write();});
  $('.five').on('click', function(){values[i] += '5';write();});
  $('.six').on('click', function(){values[i] += '6';write();});
  $('.seven').on('click', function(){values[i] += '7';write();});
  $('.eight').on('click', function(){values[i] += '8';write();});
  $('.nine').on('click', function(){values[i] += '9';write();});
     
  $('.add').on('click', function(){ i = 1;calculate();});

  $('.minus').on('click', function(){ i = 2;calculate();});

  $('.times').on('click', function(){ i = 3;calculate();});
  
  $('.divide').on('click', function(){ i = 4;calculate();});

  $('.equal').on('click', function(){ i = 0;calculate();});

  $('.C').on('click', function(){values= [0,'','','',''];i = 0;write();values[0] = '';});

  $('.CE').on('click', function(){values[i] = 0;write();values[i] = '';});
  });
*/
//Vanilla Javascript

var values= ['','','','',''];
var i = 0;

var write = function() {
  document.getElementsByClassName('result')[0].innerHTML = values[i];
}

var calculate = function() {
  var result = +values[0];
  if(+values[1] > 0){result += +values[1];values[1] = '';};
  if(+values[2] > 0){result -= +values[2];values[2] = '';};
  if(+values[3] > 1){result *= +values[3];values[3] = '';};
  if(+values[4] > 1){result /= +values[4];values[4] = '';};

  document.getElementsByClassName('result')[0].innerHTML = result;
  values[0] = result;
}

document.getElementsByClassName("zero")[0].addEventListener("click", function(){values[i] += '0';write();});
document.getElementsByClassName("one")[0].addEventListener("click", function(){values[i] += '1';write();});
document.getElementsByClassName("two")[0].addEventListener("click", function(){values[i] += '2';write();});
document.getElementsByClassName("three")[0].addEventListener("click", function(){values[i] += '3';write();});
document.getElementsByClassName("four")[0].addEventListener("click", function(){values[i] += '4';write();});
document.getElementsByClassName("five")[0].addEventListener("click", function(){values[i] += '5';write();});
document.getElementsByClassName("six")[0].addEventListener("click", function(){values[i] += '6';write();});
document.getElementsByClassName("seven")[0].addEventListener("click", function(){values[i] += '7';write();});
document.getElementsByClassName("eight")[0].addEventListener("click", function(){values[i] += '8';write();});
document.getElementsByClassName("nine")[0].addEventListener("click", function(){values[i] += '9';write();});

document.getElementsByClassName("add")[0].addEventListener("click", function(){ i = 1;calculate();});

document.getElementsByClassName("minus")[0].addEventListener("click", function(){ i = 2;calculate();});

document.getElementsByClassName("times")[0].addEventListener("click", function(){ i = 3;calculate();});

document.getElementsByClassName("divide")[0].addEventListener("click", function(){ i = 4;calculate();});

document.getElementsByClassName("equal")[0].addEventListener("click", function(){ i = 0;calculate();});


document.getElementsByClassName("C")[0].addEventListener("click", function(){values= [0,'','','',''];i = 0;write();values[0] = '';});

document.getElementsByClassName("CE")[0].addEventListener("click", function(){values[i] = 0;write();values[i] = '';});




