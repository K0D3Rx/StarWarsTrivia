//*--------------------------Star Wars Trivia----------------------------*\\
var question = 1;
var questionLeft = " [ Question " + question + " ]";
var answerRight = 0;
var answerWrong = 0;


alert("I am going to test your Star Wars knowldge");
alert("Now let's begin!!");

var userAnswer = prompt( questionLeft + " What is Luke Skywalker's father's first name?? ");
if(userAnswer.toUpperCase() === "ANAKIN") {
    alert("That answer is correct!");
    answerRight +=1;
}   else{
    alert("Sorry that's incorrect");
    answerWrong += 1;
}   
question += 1;
questionLeft = " [ Question " + question + " ]";
 
var userAnswer2 = prompt( questionLeft + " Who shot first?");
if(userAnswer2.toUpperCase() === "HAN SOLO") {
    alert("That answer is correct!");
    answerRight +=1;
}   else{
    alert("Sorry that's incorrect");
    answerWrong +=1;
} 
question += 1;
questionLeft = " [ Question " + question + " ]";

var userAnswer3 = prompt( questionLeft + " True or False, Leia is Rey's mother  ");
if(userAnswer3.toUpperCase() === "FALSE") {
    alert("That answer is correct!");
    answerRight +=1;
}   else{
    alert("Sorry that's incorrect");
    answerWrong +=1;
} 
question += 1;
questionLeft = " [ Question " + question + " ]";

var userAnswer4 = prompt( questionLeft + " On what planet did Rey and Finn first board the millenium falcon? ");
if(userAnswer4.toUpperCase() === "JAKKU") {
    alert("That answer is correct!");
    answerRight +=1;
}   else{
    alert("Sorry that's incorrect");
    answerWrong +=1;
} 
question += 1;
questionLeft = " [ Question " + question + " ]";

var userAnswer5 = prompt( questionLeft + " Who is the leader of the Knights of Ren?");
if(userAnswer5.toUpperCase() === "KYLO REN") {
    alert("That answer is correct!");
    answerRight +=1;
}   else{
    alert("Sorry that's incorrect");
    answerWrong +=1;
} 
question += 1;
questionLeft = " [ Question " + question + " ]";

var userAnswer6 = prompt( questionLeft + " Who is considered the most annoying Star Wars character of all time?");
if(userAnswer6.toUpperCase() === "JAR JAR BINKS") {
    alert("That answer is correct!");
    answerRight +=1;
}   else{
    alert("Sorry that's incorrect");
    answerWrong +=1;
} 
question += 1;
questionLeft = " [ Question " + question + " ]";

var userAnswer7 = prompt( questionLeft + " True or False, Darth Vader has a higher medoclorian count than master Yoda");
if(userAnswer7.toUpperCase() === "TRUE") {
    alert("That answer is correct!");
    answerRight +=1;
}   else{
    alert("Sorry that's incorrect");
    answerWrong +=1;
} 


document.write("<p> Looks like you got " + answerRight + " right and " + answerWrong + " wrong out of " + question + " questions </p>");




















