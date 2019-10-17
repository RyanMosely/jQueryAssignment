//tests

//Grabs grabs particular class when there are multiple classes
//----------------------------------------------------------------
//console.log(nineAmButton.attr('class', [3]));

/*
var testOb = {
    testOne: $(".input9a"),
    testTwo: $(".input10a")
}

console.log(testOb[0]);
*/















//Input fields




var nineAmInput = $(".input9a");
var tenAmInput = $(".input10a");
var elevenAmInput = $(".input11a");
var twelvePmInput = $(".input12p");
var onePmInput = $(".input1p");
var twoPmInput = $(".input2p");
var threePmInput = $(".input3p");
var fourPmInput = $(".input4p");
var fivePmInput = $(".input5p");

//buttons



var nineAmButton = $(".button9a");
var tenAmButton = $(".button10a");
var elevenAmButton = $(".button11a");
var twelvePmButton = $(".button12p");
var onePmButton = $(".button1p");
var twoPmButton = $(".button2p");
var threePmButton = $(".button3p");
var fourPmButton = $(".button4p");
var fivePmButton = $(".button5p");



//moment.js

//  HH:mm

//var momentTwo = moment().format("HH:mm");
//var momentTwoString = momentTwo.toString();


var momentTime = moment().format("HH:mm");

//9am background-color

if(momentTime>moment().format("09:59")){
    nineAmInput.css("background-color", "#cccccc");
}else if(momentTime<=moment().format("09:59")&&momentTime>=moment().format("09:00"))
{
    nineAmInput.css("background-color", "#f24d56");
}else if(momentTime<moment().format("09:59")){
    nineAmInput.css("background-color", "#74e96e")
}

//10am background-color

if(momentTime>moment().format("10:59")){
    tenAmInput.css("background-color", "#cccccc");
}else if(momentTime<=moment().format("10:59")&&momentTime>=moment().format("10:00"))
{
    tenAmInput.css("background-color", "#f24d56");
}else if(momentTime<moment().format("10:59")){
    tenAmInput.css("background-color", "#74e96e")
}

//11am background-color

if(momentTime>moment().format("11:59")){
    elevenAmInput.css("background-color", "#cccccc");
}else if(momentTime<=moment().format("11:59")&&momentTime>=moment().format("11:00"))
{
    elevenAmInput.css("background-color", "#f24d56");
}else if(momentTime<moment().format("11:59")){
    elevenAmInput.css("background-color", "#74e96e")
}

//12pm background-color

if(momentTime>moment().format("12:59")){
    twelvePmInput.css("background-color", "#cccccc");
}else if(momentTime<=moment().format("12:59")&&momentTime>=moment().format("12:00"))
{
    twelvePmInput.css("background-color", "#f24d56");
}else if(momentTime<moment().format("12:59")){
    twelvePmInput.css("background-color", "#74e96e")
}

//1pm background-color


if(momentTime>moment().format("13:59")){
    onePmInput.css("background-color", "#cccccc");
}else if(momentTime<=moment().format("13:59")&&momentTime>=moment().format("13:00"))
{
    onePmInput.css("background-color", "#f24d56");
}else if(momentTime<moment().format("13:59")){
    onePmInput.css("background-color", "#74e96e")
}

//2pm background-color


if(momentTime>moment().format("14:59")){
    twoPmInput.css("background-color", "#cccccc");
}else if(momentTime<=moment().format("14:59")&&momentTime>=moment().format("14:00"))
{
    twoPmInput.css("background-color", "#f24d56");
}else if(momentTime<moment().format("14:59")){
    twoPmInput.css("background-color", "#74e96e")
}

//3pm background-color


if(momentTime>moment().format("15:59")){
    threePmInput.css("background-color", "#cccccc");
}else if(momentTime<=moment().format("15:59")&&momentTime>=moment().format("15:00"))
{
    threePmInput.css("background-color", "#f24d56");
}else if(momentTime<moment().format("15:59")){
    threePmInput.css("background-color", "#74e96e")
}

//4pm background-color


if(momentTime>moment().format("16:59")){
    fourPmInput.css("background-color", "#cccccc");
}else if(momentTime<=moment().format("16:59")&&momentTime>=moment().format("16:00"))
{
    fourPmInput.css("background-color", "#f24d56");
}else if(momentTime<moment().format("16:59")){
    fourPmInput.css("background-color", "#74e96e")
}

//5pm background-color


if(momentTime>moment().format("17:59")){
    fivePmInput.css("background-color", "#cccccc");
}else if(momentTime<=moment().format("17:59")&&momentTime>=moment().format("17:00"))
{
    fivePmInput.css("background-color", "#f24d56");
}else if(momentTime<moment().format("17:59")){
    fivePmInput.css("background-color", "#74e96e")
}



var moment = moment().format("dddd, MMMM Mo");
var momentString = moment.toString();
var momentEl = $(".moment");
var momentHead = momentEl.html(momentString);



//9am--------------------------------------------------------------------

nineAmButton.click(function(e){

    localStorage.setItem("inNine", nineAmInput.val());
})

nineAmInput.val(localStorage.getItem("inNine"));

//10am----------------------------------------------------------------------


tenAmButton.click(function(e){

    localStorage.setItem("inTen", tenAmInput.val());
})

tenAmInput.val(localStorage.getItem("inTen"));

//11am----------------------------------------------------------------------

elevenAmButton.click(function(e){

    localStorage.setItem("inEleven", elevenAmInput.val());
})

elevenAmInput.val(localStorage.getItem("inEleven"));

//12pm----------------------------------------------------------------------

twelvePmButton.click(function(e){

    localStorage.setItem("inTwelve", twelvePmInput.val());
})

twelvePmInput.val(localStorage.getItem("inTwelve"));

//1pm----------------------------------------------------------------------

onePmButton.click(function(e){

    localStorage.setItem("inOne", onePmInput.val());
})

onePmInput.val(localStorage.getItem("inOne"));

//2pm----------------------------------------------------------------------

twoPmButton.click(function(e){

    localStorage.setItem("inTwo", twoPmInput.val());
})

twoPmInput.val(localStorage.getItem("inTwo"));

//3pm----------------------------------------------------------------------

threePmButton.click(function(e){

    localStorage.setItem("inThree", threePmInput.val());
})

threePmInput.val(localStorage.getItem("inThree"));

//4pm----------------------------------------------------------------------

fourPmButton.click(function(e){

    localStorage.setItem("inFour", fourPmInput.val());
})

fourPmInput.val(localStorage.getItem("inFour"));

//5pm----------------------------------------------------------------------

fivePmButton.click(function(e){

    localStorage.setItem("inFive", fivePmInput.val());
})

fivePmInput.val(localStorage.getItem("inFive"));


