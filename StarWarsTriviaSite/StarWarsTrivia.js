//*--------------------------Star Wars Trivia----------------------------*\\

var questionsAnswers = [
	{ question: "What is Luke Skywalker's father's name?", answer: "anakin"},
	{ question: "Who shot first?", answer: "han solo"},
	{ question: "True or False, Leia is Rey's mother.", answer: "false"},
	{ question: "On what planet did Rey and Finn first board the millenium falcon?", answer: "jakku"},
	{ question: "Who is leader of the knights of ren?", answer: "kylo ren"},
	{ question: "who is considered to be the most annoying Star Wars character of all time?", answer: "jar jar binks"},
	{ question: "True or false, Darth Vader has a higher medoclorian count than master yoda", answer: "true"}
];   

var answerRight = 0; 
var answer;   
var response;
var question;    
var html;  
var wrong = [];    
var correct = [];        
 
function print(html) {
  document.write(html); 
} 

for ( var i = 0; i < questionsAnswers.length; i ++ ){
	question = questionsAnswers[i].question;  
	answer = questionsAnswers[i].answer; 
	response = prompt(question);
	response = response.toLowerCase();
	if ( response === answer){
		answerRight ++;  
		correct.push(question);  
	} else{    
		wrong.push(question); 
	} 
}   


html += '<p> You got ' + answerRight + ' question(s) right.</p>'; 
html += '<p> correct question(s): ' + correct + '</p>'; 
html += '<p> Incorrect question(s): ' + wrong + '</p>';  
print(html);     











 








