$(document).ready(function() {
    
var l = Math.floor(Math.random() * (6) ) + 1;//generate a random number between 1 and 6(included)
var img =  "<img class = 'img' src = '" + l + ".png' alt='Please reload' height = '320' width='320'>";
   
$('.picture').append(img);  //i used js for that so that a random image appears  
$('#winning').hide();
    
// adding the same image to toolbox as in "result should be like"    
$('.puzzle').css({
    'background-image': 'url('+l+'.png)',
    'width': '100px',
    'height': '100px',
});    
    
    
    //ran contains the classes used for css image sprite
var ran = [ 'piece1', 'piece2','piece3','piece4','piece5','piece6','piece7','piece8','piece9'];
ran.sort( function() { return Math.random() - .5 } );//to sort them randomly
console.log(ran);   
  
    
//each object in the ran array represents a css class
    //which will be then assigned to each cell
//adding each piece into a cell, the indexes will be randomized
$('#td1').addClass(ran[0]);
$('#td2').addClass(ran[1]);
$('#td3').addClass(ran[2]);
$('#td4').addClass(ran[3]);    
$('#td5').addClass(ran[4]);    
$('#td6').addClass(ran[5]); 
$('#td7').addClass(ran[6]);    
$('#td8').addClass(ran[7]);    
$('#td9').addClass(ran[8]);
   
    
var winn = [];                          //winn is an array which i will put the scores in it
load();

var correctPieces = []; 
 //building the draggable and droppable function   
$( function() {
    $('.puzzle').draggable({
        //snap: "td",
        revert: 'invalid',      //so that it returns if not dropped on its target
        cursor: 'move'});       //change the cursor to move
    
    $( "#td11" ).droppable({
        accept: ".piece1",      //assigns the target of the draggable piece
        //tolerance: 'fit',
        drop: function(){
            correctPieces[0]=1;     //I'm using this method so as when the same piece is dragged twice to its
                                    //target,it doesn't affect the win condition.
            win();
        },
        classes: {"ui-droppable-hover": "dropable"}});     //changes class when the correct draggable piece is hovered 
    $( "#td22" ).droppable({
        accept: ".piece2",
        drop: function(){
            correctPieces[1]=1;
            win();
        },
        classes: {"ui-droppable-hover": "dropable"}});
    $( "#td33" ).droppable({
        accept: ".piece3",
        drop: function(){
            correctPieces[2]=1;
            win();
        },
        classes: {"ui-droppable-hover": "dropable"}});
    $( "#td44" ).droppable({
        accept: ".piece4",
        drop: function(){
            correctPieces[3]=1;
            win();
        },
        classes: {"ui-droppable-hover": "dropable"}});
    $( "#td55" ).droppable({
        accept: ".piece5",
        drop: function(){
            correctPieces[4]=1;
            win();
        },
        classes: {"ui-droppable-hover": "dropable"}});
    $( "#td66" ).droppable({
        accept: ".piece6",
        drop: function(){
            correctPieces[5]=1;
            win();
        },
        classes: {"ui-droppable-hover": "dropable"}});
    $( "#td77" ).droppable({
        accept: ".piece7",
        drop: function(){
            correctPieces[6]=1;
            win();
        },
        classes: {"ui-droppable-hover": "dropable"}});
    $( "#td88" ).droppable({
        accept: ".piece8",
        drop: function(){
            correctPieces[7]=1;
            win();
        },
        classes: {"ui-droppable-hover": "dropable"}});
    $( "#td99" ).droppable({
        accept: ".piece9",
        drop: function(){
            correctPieces[8]=1;
            win();
        },
        classes: {"ui-droppable-hover": "dropable"}});  
  
   
});


    
//building the clock   
var totalSeconds = 0;
function clock(){
    $('#ttime').append('<div id="clock"><label id="minutes">00</label>:<label id="seconds">00</label></div>');
        
        setInterval(setTime, 1000);
        function setTime()
        {
            ++totalSeconds; //this var represents the numbers of seconds elapsed as soon as the page loads
            $('#clock > #seconds').html(pad(totalSeconds%60));
            $('#clock > #minutes').html(pad(parseInt(totalSeconds/60)));
        }
        function pad(val)
        {
            var valS = val + "";
            if(valS.length < 2)
            {
                return "0" + valS;
            }
            else
            {
                return valS;
            }
        }
    return totalSeconds;
};
clock();
    

//building up the function for the win condition
var correct = [1,1,1,1,1,1,1,1,1]
var x = correct.toString();         //easier to compare when turned to string
    
function win(){
    var y = correctPieces.toString();
    if(x == y){                             //comparing of the 2 strings
        $('#winning').show();
        setTimeout(function() {
            $('#winning').fadeOut('fast');
        }, 1000);                           //displays the message You Win for 1 second
        winn.push(totalSeconds);                
        winn.sort();                                //the array is sorted so that the best score is at index 0 etc
        localStorage.setItem('score1',winn[0]);     //sets the scores in localstorage--to not lost when reloaded
        localStorage.setItem('score2',winn[1]);
        localStorage.setItem('score3',winn[2]);
        setTimeout(function() {
            location.reload(false);         //reloads the page after 1.5 seconds so as to start a new game
        }, 1500);
    }
} ;

function load() {                           //used to load from localstorage
    winn[0] = localStorage.getItem('score1');
    winn[1] = localStorage.getItem('score2');
    winn[2] = localStorage.getItem('score3');
    winn.sort();
    $('#first').append('&nbsp;&nbsp;&nbsp;'+winn[0]+'&nbsp;sec'); //i used &nbsp; so as the contents are not too close
    $('#second').append('&nbsp;&nbsp;&nbsp;'+winn[1]+'&nbsp;sec');
    $('#third').append('&nbsp;&nbsp;&nbsp;'+winn[2]+'&nbsp;sec');
}   
    
    
});