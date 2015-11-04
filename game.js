var a = 0
var b = 0
var c = 0

var name = prompt("What is your name?");
alert("How's it going " + name + "? How about we play a guessing game?");

var questionOne = prompt("Do I play video games?");
if(questionOne === "yes"||questionOne === "Yes"||questionOne === "Y"||questionOne === "y") {
  console.log('User entered ' + questionOne + ' as their answer to question one')
  alert("Your answer was " + questionOne);
  alert("That's right " + name + "!" + " " + "I love to play video games!")
  var a=1
}
else if(questionOne === "no"||questionOne === "No"||questionOne === "n"||questionOne === "N") {
  console.log('User entered ' + questionOne + ' as their answerto question one')
  alert("Your answer was " + questionOne);
  alert("Sorry " + name + ", that's incorrect. I play games very often.");
}
else {
  alert("Sorry, that answer doesn't work");
}

var questionTwo = prompt("Do I work at night?");
if(questionTwo === "yes"||questionTwo === "Yes"||questionTwo === "Y"||questionTwo === "y"){
  console.log('User entered ' + questionTwo + ' as their answer to question two')
  alert("Your answer was " + questionTwo);
  alert("That's right " + name + "!" + " " + "I am a vampire and work night shift!");
  var b=1

}
else if(questionTwo === "no"||questionTwo === "No"||questionTwo === "n"||questionTwo === "N") {
  console.log('User entered ' + questionTwo + ' as their answer to question two')
  alert("Your answer was " + questionTwo);
  alert("Sorry " + name + ", I wish you were correct. Unfortunately I work night shift.");
}
else {
  alert("Sorry, that answer doesn't work");

}
var questionThree = prompt("Am I originally from Seattle?");
if(questionThree === "no"||questionThree === "No"||questionThree === "n"||questionThree === "N") {
  console.log('User entered ' + questionThree + ' as their answer to question three')
  alert("Your answer was " + questionThree);
  alert("That's right " + name + "!" + " " + "I was from Burlington, North Carolina before I came to Seattle.");
  var c=1
}
else if(questionThree === "yes"||questionThree === "Yes"||questionThree === "Y"||questionThree === "y") {
  console.log('User entered ' + questionThree + ' as their answer to question three')
  alert("Your answer was " + questionThree);
  alert("Sorry " + name + ". " +"I am not originally from Seattle, Washington.")
}
else {
  alert("Sorry, that answer doesn't work");

}
var questionFour = Number(prompt('What is my age?'));
if(questionFour === 25){
  console.log('User entered ' + questionFour + " as their answer to question four");
}
else if()

function total(a,b,c){
 return a+b+c;
}
alert("You got " + total(a,b,c) + " out of 3 correct!")
