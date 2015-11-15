var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var w = null;

function question(x,y,z){
	//x=user input y=yes/no/num z=innerHTML reference
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
		  document.getElementById(z).innerHTML="Sorry, that answer doesn't work";
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
		  document.getElementById(z).innerHTML="Sorry, that answer doesn't work";
		  console.log('No/wrong answer entered');
		}
	}
	else if(y!=NaN){
    if(x == y){
      console.log('User entered ' + x + " as their answer to question four; Right");
      alert("Your answer was " + x);
      return true;
      z = 1;

    }
    else if(x < y){
      console.log('User entered ' + x + " as their answer to question four; Wrong");
      alert("Your answer was " + x);
      document.getElementById(z).innerHTML="Sorry " + name + ", you guessed too low!";
      return false;
    }
    else if(x > y){
      console.log('User entered ' + x + " as their answer to question four; Wrong");
      alert("Your answer was " + 'x');
      document.getElementById(z).innerHTML="Sorry " + name + ", you guessed too high!";
      return false;
    }
    else {
      document.getElementById(z).innerHTML="Sorry, that answer doesn't work";
      console.log('No/wrong answer entered');
    }
	}
}

var name = prompt("What is your name?");
alert("How's it going " + name + "? How about we play a guessing game?");

//QUESTION 1
var questionOne = prompt("Do I play video games?");
w=question(questionOne,"yes",'qOne');
if(w===true){
  document.getElementById('qOne').innerHTML= "That's right " + name + "!" + " " + "I love to play video games!";
  a=1;
}
else if(w===false){
  document.getElementById('qOne').innerHTML="Sorry " + name + ", that's incorrect. I play games very often.";
}

//QUESTION 2
var questionTwo = prompt("Do I work at night?");
w=question(questionTwo,"yes",'qTwo');
if(w===true){
	document.getElementById('qTwo').innerHTML="That's right " + name + "!" + " " + "I am a vampire and work night shift!";
  b=1;
}
else if(w===false){
	document.getElementById('qTwo').innerHTML="Sorry " + name + ", I wish you were correct. Unfortunately I work night shift.";
}

//QUESTION 3
var questionThree = prompt("Am I originally from Seattle?");
w=question(questionThree,"no",'qThree');
if(w===true){
  document.getElementById('qThree').innerHTML="That's right " + name + "!" + " " + "I was from Burlington, North Carolina before I came to Seattle.";
  c=1;
}
else if(w===false){
  document.getElementById('qThree').innerHTML="Sorry " + name + ". " +"I am not originally from Seattle, Washington."
}

//QUESTION 4
var questionFour = parseInt(prompt('What is my age?'));

w=question(questionFour,25,'qFour');
if(w === true){
  document.getElementById('qFour').innerHTML="That's right " + name + "!" + " " + "I am 25 years old!";
  d = 1;
}

//QUESTION 5
var questionFive = prompt("Do I like licorice flavored licorice?");
w=question(questionFive,"no",'qFive');
if(w===true){
  document.getElementById('qFive').innerHTML="That's right " + name + "!" + " " + "I like licorice type candy, but I'm not fond of the true licorice flavor.";
  e=1;
}
else if(w===false){
  document.getElementById('qFive').innerHTML="Sorry " + name + ". " +"I don't prefer the licorice flavor."
}

//QUESTION 6
var questionSix = parseInt(prompt('What day in March is my birthday?'));
w=question(questionSix,15,'qSix');
if(w === true){
  document.getElementById('qSix').innerHTML="That's right " + name + "!" + " " + "I was born on the Ides of March!";
  f = 1;
}

function total(a,b,c,d,e,f){
 return a+b+c+d+e+f;
}
document.getElementById('score').innerHTML="You got " + total(a,b,c,d,e,f) + " out of 6 correct!";
