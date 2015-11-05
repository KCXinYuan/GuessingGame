var a = 0
var b = 0
var c = 0
var d = 0
var e = 0
var f = 0

var name = prompt("What is your name?");
alert("How's it going " + name + "? How about we play a guessing game?");

var questionOne = prompt("Do I play video games?");
if(questionOne === "yes"||questionOne === "Yes"||questionOne === "Y"||questionOne === "y") {
  console.log('User entered ' + questionOne + ' as their answer to question one; Right')
  alert("Your answer was " + questionOne);
  alert("That's right " + name + "!" + " " + "I love to play video games!")
  var a=1
}
else if(questionOne === "no"||questionOne === "No"||questionOne === "n"||questionOne === "N") {
  console.log('User entered ' + questionOne + ' as their answerto question one; Wrong')
  alert("Your answer was " + questionOne);
  alert("Sorry " + name + ", that's incorrect. I play games very often.");
}
else {
  alert("Sorry, that answer doesn't work");
}

var questionTwo = prompt("Do I work at night?");
if(questionTwo === "yes"||questionTwo === "Yes"||questionTwo === "Y"||questionTwo === "y"){
  console.log('User entered ' + questionTwo + ' as their answer to question two; Right')
  alert("Your answer was " + questionTwo);
  alert("That's right " + name + "!" + " " + "I am a vampire and work night shift!");
  var b=1

}
else if(questionTwo === "no"||questionTwo === "No"||questionTwo === "n"||questionTwo === "N") {
  console.log('User entered ' + questionTwo + ' as their answer to question two; Wrong')
  alert("Your answer was " + questionTwo);
  alert("Sorry " + name + ", I wish you were correct. Unfortunately I work night shift.");
}
else {
  alert("Sorry, that answer doesn't work");

}
var questionThree = prompt("Am I originally from Seattle?");
if(questionThree === "no"||questionThree === "No"||questionThree === "n"||questionThree === "N") {
  console.log('User entered ' + questionThree + ' as their answer to question three; Right')
  alert("Your answer was " + questionThree);
  alert("That's right " + name + "!" + " " + "I was from Burlington, North Carolina before I came to Seattle.");
  var c=1
}
else if(questionThree === "yes"||questionThree === "Yes"||questionThree === "Y"||questionThree === "y") {
  console.log('User entered ' + questionThree + ' as their answer to question three; Wrong')
  alert("Your answer was " + questionThree);
  alert("Sorry " + name + ". " +"I am not originally from Seattle, Washington.")
}
else {
  alert("Sorry, that answer doesn't work");

}
var questionFour = parseInt(prompt('What is my age?'));
if(questionFour === 25){
  console.log('User entered ' + questionFour + " as their answer to question four; Right");
  alert("Your answer was " + questionFour);
  alert("That's right " + name + "!" + " " + "I am 25 years old!");
  d = 1
}
else if(questionFour < 25){
  console.log('User entered ' + questionFour + " as their answer to question four; Wrong");
  alert("Your answer was " + questionFour);
  alert("Sorry " + name + ", you guessed too low!");
}
else if(questionFour > 25){
  console.log('User entered ' + questionFour + " as their answer to question four; Wrong");
  alert("Your answer was " + questionFour);
  alert("Sorry " + name + ", you guessed too high!");
}
else{
  alert("Sorry, that answer doesn't work");
}

var questionFive = prompt("Do I like licorice flavored licorice?");
if(questionFive === "no"||questionFive === "No"||questionFive === "n"||questionFive === "N") {
  console.log('User entered ' + questionFive + ' as their answer to question five; Right')
  alert("Your answer was " + questionFive);
  alert("That's right " + name + "!" + " " + "I like licorice type candy, but I'm not fond of the true licorice flavor.");
  var e=1
}
else if(questionFive === "yes"||questionFive === "Yes"||questionFive === "Y"||questionFive === "y") {
  console.log('User entered ' + questionFive + ' as their answer to question five; Wrong')
  alert("Your answer was " + questionFive);
  alert("Sorry " + name + ". " +"I don't prefer the licorice flavor.")
}
else {
  alert("Sorry, that answer doesn't work");
}

function total(a,b,c,d,e,f){
 return a+b+c+d+e+f;
}
alert("You got " + total(a,b,c,d,e,f) + " out of 6 correct!")
