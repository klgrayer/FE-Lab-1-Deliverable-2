/*var question="What is your number?";

var start=prompt(question);

var total=0;

for (var num = 1; num <= start; num++) {
  total = total + num;
}

alert(total);



var questionTwo="Do you want to play?";
var startTwo=prompt(questionTwo);

do{
  var words=prompt("Enter a word."); 
  console.log (words);
  var repeat=prompt("Do you want to play again?");
}while (repeat==="yes");


var startThree=0;
var questionThree= ["Would you like to print your name?","Would you like to print this again?"];
var name="Hello. My name is Rudy";
x=0;
z="";

while (startThree!=="no" && startAgain!=="no"){
  var startThree=prompt(questionThree[x]);
  if (startThree==="no"){
  {break;} 
  }
  else if (startThree==="yes" && startAgain!=="no"){
    console.log (name+=z);
  }
  var startAgain=prompt(questionThree[1]);
  if (startThree!=="no" && startAgain==="yes"){
    console.log (name+="!");
    x=1;
    z="!";
  }
}
*/

var questionFour="What time of day is it?";
var startFour=prompt(questionFour);
var meals=["Since it is morning, you should be eating breakfast. We suggest eggs and toast.","Since it is noon, you should be eating lunch. We suggest a salad.","Since it is evening, you should be eating dinner. We suggest chicken and rice."];

if(startFour==="morning"){
  console.log (meals[0]);
}
else if (startFour==="noon"){
  console.log (meals[1]);
}
else if (startFour==="evening"){
  console.log (meals[2]);
}


