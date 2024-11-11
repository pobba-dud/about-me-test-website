function quiz(){
// an array full of every question
var questions = [
  "What is the name of Monkey D. Luffy's signature attack?",
  "Luffy uses the gomu-gomu no mi",
  "What is the name of the ruler who is known as The Tyrant?",
  "The crew found Brook where?",
  "What is the name of the 1st sword that Zoro uses?",
  "Sanji worked in water 7 before joining the Strawhats",
  "What is the name of the devil fruit that gives the user the power to become and control light?",
  "What is the name of the legendary pirate who left behind the One Piece treasure?",
  "What is the name of the island where the grand tournament where pirates, bounty hunters, and warriors competed?",
  "What is the name of the ship that the Straw Hat Pirates sail on after the timeskip?",
  "What is the name of the person who ate the Op Op devil fruit?",
  "What is the name of the former emperor of the sea who was killed during the raid on marineford?",
  "What is the name of the island that is home to the Fish-Man?",
  "What is the name of the pirate who is known as The Red-Haired?",
  "What is the name of the hidden powerful leaders that governs the world in the One Piece universe?"]
// an array full of every possible answer and ordered to allign with the questions
var options = [
  "A. Gum Gum Pistol  B. Diable jambe  C. Conquerors Haki  D. Slingshot explosion",
  //a
  "True/False",
  //False
  "A.Kuma  B. Brook  C. Kaido  D. Arlong",
  //a
  "A. The New World  B. Loguetown  C. The Floidian Triangle  D. Drum Island",
  //c
  "A. Ace Kotetsu  B. Wado Ichimonji C. Yakuza Kasen",
  //b
  "True/False",
  //false
  "A. Lightning-Lightning fruit  B. Light-Light fruit  C. electric-electric fruit  D. reflect-reflect fruit",
  //B
  "A. Edward Newgate  B. Marshal D Teach  C. Shanks  D. Gol d Rodger",
  //D
  "A. Fishman Island B. Dressrosa  C. Whole Cake Island  D. Wano",
  //B
  "A. Victoria Punk  B. Polar Tang  C. Thousand Sunny  D. Onigashima",
  //C
  "A. Law  B. Mihawk  C. Perona D. Pedro  E. Jinbe",
  //A
  "A. Robin  B. Dorry  C. Blackbeard  D. Buggy  E. Whitebeard",
  //E
  "A. Dawn Island  B. Orange Island C. Sabaody  D. Fishman Island",
  //D
  "A. Yamato  B. Shanks  C. Oden  D. Kaido",
  //B
  "A. The marines  B. The pirates  C. The gorosei  D. The sand people"
  //C
]
// an array full of the correct answers and ordered to allign with the questions and options
var answers = ["a", "false", "a", "c", "b", "false", "b", "d", "b", "c", "a", "e", "d", "b", "c"]
//declares an array to store scores
var scores = []
//declares a variable to store the current score
var score=0;
//lets the player know how to easily end the quiz
alert("you may end the quiz early by pushing the esc key")
var tri=1;
//loops the quiz till the player decides they are done
while(tri==1){
  //cycles through the questions
for (var i = 0; i < questions.length; i++) {
  //prints the question in the console log
  console.log(questions[i]);
  //promts user with the answer choices
  var userAnswer = prompt(questions[i] + ": \n" + options[i]);
//checks if the user hit esc to end the quiz early
  if (userAnswer == null) {
    //changes the index to be larger than the length of the questions array
    i = 10000;
    //lets the user know the quiz ended early
    alert("quiz ended early");
  }
    //activates if the user didnt hit esc
  else {
    //checks if the user answer is correct
    if (userAnswer.toLocaleLowerCase() == answers[i]) {
      //increments the score by 1
      score++
      //prints in the console
      console.log("Correct! Your score is now: " + score+" out of "+(i+1));
      console.log("You have answered: " + (i+1)+" out of "+(questions.length)+" question");
      //alerts the user that they got the question correct
      alert("Correct! Your score is now: " + score+" out of "+(i+1)+"\nYou have answered: " + (i+1)+" out of "+(questions.length)+" question");
    }
      //runs if the user answer is incorrect
    else {
      //prints in the console
      console.log("Incorrect!" + " The correct answer is " + (answers[i].toLocaleUpperCase())+" Your score is now: " + score+" out of "+(i+1));
      console.log("You have answered: " + (i+1)+" out of "+(questions.length)+" question");
      //alerts the user that they got the question incorrect
      alert("Incorrect!" + " The correct answer is " + (answers[i].toLocaleUpperCase())+" Your score is now: " + score+" out of "+(i+1)+"\nYou have answered: " + (i+1)+" out of "+(questions.length)+" question");
    }
  }
}
  //runs when the user is done with the quiz
  //prints the final score out of 15
alert("Your final score is: " + score + " out of 15");
console.log("Your final score is: " + score + " out of 15")
  //asks the user if they want to play again
  var userAnswer = prompt("Would you like to try again?:\n Y/N");
  //if the user hits esc it ends the loop
  if (userAnswer == null){
    //sets the loop to off
    tri=0;
    //adds the score to the scores array
    scores.push(score);
    //resets the score
    score=0;
  }else{
  if (userAnswer.toLocaleLowerCase() == "y"){
    //keeps the loop on
    tri=1;
    //adds the scores to the scores array
    scores.push(score);
    //resets the score
    score=0;
  }
  else{
    //sets the loop to off
    tri=0;
    //adds the score to the scores array
    scores.push(score);
    //resets the score
  }
}
}
//prints the scores array
console.log("In order your scores were: "+scores)
}