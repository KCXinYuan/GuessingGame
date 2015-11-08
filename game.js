var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var w = null;

function question(x,y,z){
	//x=user input y=yes/no/num z=counter
	if(y==="yes"){
		if(x === "yes"||x === "Yes"||x === "Y"||x === "y") {
		  console.log('User entered ' + x + ' as their answer to question one; Right');
		  alert("Your answer was " + x);
		  z=1;
		  return true;
		}
		else if(x === "no"||x === "No"||x === "n"||x === "N") {
		  console.log('User entered ' + x + ' as their answerto question one; Wrong');
		  alert("Your answer was " + x);
		  return false;
		}
		else {
		  alert("Sorry, that answer doesn't work");
		  console.log('No/wrong answer entered');
		}
	}
	else if(y==="no"){
		if(x === "no"||x === "No"||x === "n"||x === "N") {
		  console.log('User entered ' + x + ' as their answer to question one; Right');
		  alert("Your answer was " + x);
		  z=1;
		  return true;
		}
		else if(x === "yes"||x === "Yes"||x === "Y"||x === "y") {
		  console.log('User entered ' + x + ' as their answerto question one; Wrong');
		  alert("Your answer was " + x);
		  return false;
		}
		else {
		  alert("Sorry, that answer doesn't work");
		  console.log('No/wrong answer entered');
		}
	}
	else if(y==="num"){
	}
}

var name = prompt("What is your name?");
alert("How's it going " + name + "? How about we play a guessing game?");

//QUESTION 1
var questionOne = prompt("Do I play video games?");
w=question(questionOne,"yes",a);
if(w===true){
  alert("That's right " + name + "!" + " " + "I love to play video games!");
}
else if(w===false){
  alert("Sorry " + name + ", that's incorrect. I play games very often.");
}

//QUESTION 2
var questionTwo = prompt("Do I work at night?");
w=question(questionTwo,"yes",b);
if(w===true){
	alert("That's right " + name + "!" + " " + "I am a vampire and work night shift!");
}
else if(w===false){
	alert("Sorry " + name + ", I wish you were correct. Unfortunately I work night shift.");
}

//QUESTION 3
var questionThree = prompt("Am I originally from Seattle?");
w=question(questionThree,"no",c);
if(w===true){
  alert("That's right " + name + "!" + " " + "I was from Burlington, North Carolina before I came to Seattle.");
}
else if(w===false){
  alert("Sorry " + name + ". " +"I am not originally from Seattle, Washington.")
}

//QUESTION 4
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
  console.log('No/wrong answer entered');
}

//QUESTION 5
var questionFive = prompt("Do I like licorice flavored licorice?");
w=question(questionFive,"no",e);
if(w===true){
  alert("That's right " + name + "!" + " " + "I like licorice type candy, but I'm not fond of the true licorice flavor.");
}
else if(w===false){
  alert("Sorry " + name + ". " +"I don't prefer the licorice flavor.")
}
//QUESTION 6
var questionSix = parseInt(prompt('What day in March is my birthday?'));
if(questionSix === 15){
  console.log('User entered ' + questionSix + " as their answer to question six; Right");
  alert("Your answer was " + questionSix);
  alert("That's right " + name + "!" + " " + "I was born on the Ides of March!");
  f = 1
}
else if(questionSix < 15){
  console.log('User entered ' + questionSix + " as their answer to question six; Wrong");
  alert("Your answer was " + questionSix);
  alert("Sorry " + name + ", you guessed too low!");
}
else if(questionSix > 15){
  console.log('User entered ' + questionSix + " as their answer to question six; Wrong");
  alert("Your answer was " + questionSix);
  alert("Sorry " + name + ", you guessed too high!");
}
else{
  alert("Sorry, that answer doesn't work");
  console.log('No/wrong answer entered');
}

function total(a,b,c,d,e,f){
 return a+b+c+d+e+f;
}
alert("You got " + total(a,b,c,d,e,f) + " out of 6 correct!")
