//*--------------------------Star Wars Trivia----------------------------*\\

var questionsAnswers = [
	["What is Luke Skywalker's father's name?", "anakin"],
	["Who shot first?", "han solo"],
	["True or False, Leia is Rey's mother.", "false"],
	["On what planet did Rey and Finn first board the millenium falcon?", "jakku"],
	["Who is leader of the knights of ren?","kylo ren"],
	["who is considered to be the most annoying Star Wars character of all time?", "jar jar binks"],
	["True or false, Darth Vader has a higher medoclorian count than master yoda", "true"]
]; 

var answerRight = 0; 
var answer;
var response;
var question;    
var html;  
var wrong = []; 
var correct = [];  

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
} 
 
function buildList(quiz){
	var listHTML = "<ol>";
	for ( var j = 0; j < quiz.length; j += 1 ){
		listHTML += "<li>" + quiz[j] + "</li>"; 
	} 	listHTML += "</ol>"; 
	  	return listHTML;
} 

for ( var i = 0; i < questionsAnswers.length; i += 1 ){
	question = questionsAnswers[i][0];
	answer = questionsAnswers[i][1];
	response = prompt(question);
	response = response.toLowerCase();
	if ( response === answer){
		answerRight += 1;  
		correct.push(question); 
	} else{   
		wrong.push(question);
	}  
}  

html = "You got " + answerRight + " question(s) right.";  
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong); 
print(html)  











 








