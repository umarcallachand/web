var activeplayer = 0;

var winn =  '<p id="won1"><strong>Player 1 <a>WON</a>!</strong></p>';
var winnn = '<p id="won2"><strong>Player 2 <a>WON</a>!</strong></p>';
var draw = '<p id="draw"><strong>Its a <a>DRAW</a>!</strong></p>';

var a = document.getElementById('td' + 1);
var b = document.getElementById('td' + 2);
var c = document.getElementById('td' + 3);
var d = document.getElementById('td' + 4);
var e = document.getElementById('td' + 5);
var f = document.getElementById('td' + 6);
var g = document.getElementById('td' + 7);
var h = document.getElementById('td' + 8);
var i = document.getElementById('td' + 9);

var j = function() {
    if (activeplayer == 0){
        activeplayer = 1;
    }
    
    else {
        activeplayer = 0;
    }
    document.querySelector('#turn').textContent = activeplayer + 1;
};

var l = function() {
    $('#td1, #td2,#td3,#td4,#td5,#td6,#td7,#td8,#td9').text('.');
};

var k = function() {
    var aa = a.textContent;
    var bb = b.textContent;
    var cc = c.textContent;
    var dd = d.textContent;
    var ee = e.textContent;
    var ff = f.textContent;
    var gg = g.textContent;
    var hh = h.textContent;
    var ii = i.textContent;
    
    if (aa == bb && bb == cc && aa == 'X'){
        $('.history').append(winn);
        l();
    }
    if (dd == ee && ee == ff && ff == 'X'){
        $('.history').append(winn);
        l();
    }
    if (gg == hh && hh == ii && gg == 'X'){
        $('.history').append(winn);
        l();
    }
    if (aa == dd && dd == gg && gg == 'X'){
        $('.history').append(winn);
        l();
    }
    if (bb == ee && ee == hh && hh == 'X'){
        $('.history').append(winn);
        l();
    }
    if (cc == ff && ff == ii && ff == 'X'){
        $('.history').append(winn);
        l();
    }
    if (aa == ee && ee == ii && aa == 'X'){
        $('.history').append(winn);
        l();
    }
    if (cc == ee && ee == gg && gg == 'X'){
        $('.history').append(winn);
        l();
    }
    
    
    
    if (aa == bb && bb == cc && aa == 'O'){
        $('.history').append(winnn);
        l();
    }
    if (dd == ee && ee == ff && ff == 'O'){
        $('.history').append(winnn);
        l();
    }
    if (gg == hh && hh == ii && gg == 'O'){
        $('.history').append(winnn);
        l();
    }
    if (aa == dd && dd == gg && gg == 'O'){
        $('.history').append(winnn);
        l();
    }
    if (bb == ee && ee == hh && hh == 'O'){
        $('.history').append(winnn);
        l();
    }
    if (cc == ff && ff == ii && ff == 'O'){
        $('.history').append(winnn);
        l();
    }
    if (aa == ee && ee == ii && aa == 'O'){
        $('.history').append(winnn);
        l();
    }
    if (cc == ee && ee == gg && gg == 'O'){
        $('.history').append(winnn);
        l();
    }
    
    else if((aa == 'O' || aa == 'X') && (bb == 'O' || bb == 'X') && (cc == 'O' || cc == 'X') && (dd == 'O' || dd == 'X') && (ee == 'O' || ee == 'X') && (ff == 'O' || ff == 'X') && (gg == 'O' || gg == 'X') && (hh == 'O' || hh == 'X') && (ii == 'O' || ii == 'X')){
        $('.history').append(draw);
        l();
    }
};

a.addEventListener('click', function () {
    if (activeplayer == 0){
        a.textContent = 'X';
        a.style.color = 'rgb(230,20,20)';
    }
    
    else {
        a.textContent = 'O';
        a.style.color = 'rgb(70,70,70)';
    }
    j();
    k();
});

b.addEventListener('click', function () {
    if (activeplayer == 0){
        b.textContent = 'X';
        b.style.color = 'rgb(230,20,20)';
    }
    
    else {
        b.textContent = 'O';
        b.style.color = 'rgb(70,70,70)';
    }
    j();
    k();
});

c.addEventListener('click', function () {
    if (activeplayer == 0){
        c.textContent = 'X';
        c.style.color = 'rgb(230,20,20)';
    }
    
    else {
        c.textContent = 'O';
        c.style.color = 'rgb(70,70,70)';
    }
    j();
    k();
});

d.addEventListener('click', function () {
    if (activeplayer == 0){
        d.textContent = 'X';
        d.style.color = 'rgb(230,20,20)';
    }
    
    else {
        d.textContent = 'O';
        d.style.color = 'rgb(70,70,70)';
    }
    j();
    k();
});

e.addEventListener('click', function () {
    if (activeplayer == 0){
        e.textContent = 'X';
        e.style.color = 'rgb(230,20,20)';
    }
    
    else {
        e.textContent = 'O';
        e.style.color = 'rgb(70,70,70)';
    }
    j();
    k();
});

f.addEventListener('click', function () {
    if (activeplayer == 0){
        f.textContent = 'X';
        f.style.color = 'rgb(230,20,20)';
    }
    
    else {
        f.textContent = 'O';
        f.style.color = 'rgb(70,70,70)';
    }
    j();
    k();
});

h.addEventListener('click', function () {
    if (activeplayer == 0){
        h.textContent = 'X';
        h.style.color = 'rgb(230,20,20)';
    }
    
    else {
        h.textContent = 'O';
        h.style.color = 'rgb(70,70,70)';
    }
    j();
    k();
});

g.addEventListener('click', function () {
    if (activeplayer == 0){
        g.textContent = 'X';
        g.style.color = 'rgb(230,20,20)';
    }
    
    else {
        g.textContent = 'O';
        g.style.color = 'rgb(70,70,70)';
    }
    j();
    k();
});

i.addEventListener('click', function () {
    if (activeplayer == 0){
        i.textContent = 'X';
        i.style.color = 'rgb(230,20,20)';
    }
    
    else {
        i.textContent = 'O';
        i.style.color = 'rgb(70,70,70)';
    }
    j();
    k();
});

