var readLineSync = require("readline-sync");
var chalk = require("chalk");
var playerName = readLineSync.question("Greetings! What is your name?  ");

var score=0;

console.log("Hi "+playerName+"! Welcome to a quiz of "+chalk.blue.bgWhite("The Office!"));
console.log("-------------------LEVEL 1-------------------");

var highScores=[{
  name: "Aryan",
  score: 12
}]

var questions = [
  {
  question: "Complete the sentence: Beers, Beets, _________\na) Battleroyal Galaxy\nb) Bottlebay Gorilla\nc) Battlestar Galactica\nd) Battleroyal Galactica\n",
  answer: "c"
},
{
  question: "What is Michael's favorite joke of all time? \na) Your mama's so fat!\nb) That's what she said.\nc) You sound like my grandma!\nd) Can I have some fries with that shake?\n",
  answer: "b"
},
{
  question: "What does Michael's mug say? \na) #1 Boss of all Time\nb) World's Best Boss\nc) My employees love me\nd) Best Boss Ever\n",
  answer: "b"
},
{
  question: "What is the happiest day of Michael's life? \na) His wedding day.\nb) His first day at Dunder Mifflin\nc) Toby's goodbye party\nd) The day he was made Branch Manager at Dunder Mifflin.\n",
  answer: "c"
},
{
  question: "What type of farm does Dwight own? \na) Bear Farm\nb) Beetle Farm\nc) Carrot Farm\nd) Beet Farm\n",
  answer: "d"
},
{
  question: "Where does Jim tell Pam about his feelings? \na) The office parking lot\nb) The warehouse\nc) The office\nd) Jim's Car\n",
  answer: "a"
},
{
  question: "Which of Angela's cats does Dwight freeze? \na) Bandit\nb) Sparkles\nc) Sprinkles\nd) Fluffy\n",
  answer: "c"
},
{
  question: "What tattoo is Andy forced to get? \na) A wolf\nb) A nard dog\nc) A naked man\nd) The Cornell logo\n",
  answer: "b"
},
{
  question: "Which cast member was having an affair with Angela's fiancé, the senator?\na) Andy\nb) Erin\nc) Oscar\nd) Kelly\n",
  answer: "c"
},
{
  question: "Which office employee did Michael hit with his car? \na) Angela\nb) Meredith\nc) Kelly\nd) Stanley\n",
  answer: "b"
},
]

var questions2 = [
  {
    question: "Who ruined Pam's pregnancy secret during her wedding weekend? \na) Jim\nb) Andy\nc) Michael\nd) Kevin\n",
    answer: "a"
  },
  {
    question: "Why did Brian, boom microphone crew member get fired during season 9? \na) Having an affair with Pam\nb) Fighting one of the warehouse workers\nc) Talking to the office members too much\nd) Getting in a fight with Jim\n",
    answer: "b"
  },
  {
    question: "What is Michael's username for the online dating website? \na) Ready for marriage\nb) Kid crazy\nc) The Windy City\nd) The Electric City\n",
    answer: "d"
  },
  {
    question: "What does Kevin get fired for? \na) For being overweight\nb) Created a fake number to balance out the books\nc) Making a move on Angela\nd) Eating everyone's food\n",
    answer: "b"
  },
  {
    question: "Which Dunder Mifflin employee is Michael's oldest friend? \na) Dwight Schrute\nb) Todd Packer\nc) David Wallace\nd) Jim\n",
    answer: "b"
  }
  
]

function play(question){
  var ans = readLineSync.question(question.question);
  if(ans.toLowerCase()===question.answer.toLowerCase()){
    score=score+1;
    console.log("Correct answer!");
  }
  else{
    console.log("Wrong answer!");
  }
}

for(var i=0;i<questions.length;i++){
  play(questions[i]);
  console.log('\n');
}

if(score>7){
  console.log("Congratulations! You scored "+chalk.greenBright(score)+" points!");
  var ans = readLineSync.keyInYN("Would you like to take level 2?");
  if(ans==true){    
    console.log("-------------------LEVEL 2-------------------");
    for(var i=0;i<questions2.length;i++){
    play(questions2[i]);
    console.log('\n');
    }
    var highscorebeat;
    for(var i=0;i<highScores.length;i++){
      if(highScores[i].score<score){
        highscorebeat++;
      }
    }
    if(highscorebeat>=1){
      console.log("Congratulations! You scored "+chalk.greenBright(score)+" points and beat "+chalk.yellowBright(highscorebeat)+" high score(s)!");
      console.log("Send a screenshot to Aryan for him to update the leaderboards! Thank you for playing.");
    
    }
    else{
      console.log("You scored "+chalk.greenBright(score)+" points. Thank you for playing!");
    }

  }
  else{
    console.log("You scored "+chalk.greenBright(score)+" points. Thank you for playing!");
  }

}
else{
  console.log("You scored "+chalk.greenBright(score)+" points! Score 8+ points to be eligible for level 2!");
}