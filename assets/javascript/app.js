$(document).ready(function() {

  //timer
  var time = 12;
  $("time-remaining").text(time);

  //setting variables
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unansweredQuestions = 0;
  var intervalId;

  // Array of questions and answers
  var questionArray = [{
        question: "How high can a goat jump?", 
        answerChoices: ["18+ inches", "3+ feet", "5+ feet", "8+ feet"],
        correct: 2 
  },{
        question: "Goats are naturally missing which of the following body part?", 
        answerChoices: ["Sternum", "Spleen", "Upper teeth", "Knees"], 
        correct: 2
  },{
        question: "A group of goats is commonly known as what?", 
        answerChoices: ["A herd", "A tribe", "A trip", "All of the above"], 
        correct: 3
  },{
        question: "By examining which physical feature can you determine a goat's age?", 
        answerChoices: ["Teeth", "Horns", "Hooves", "Pupils"], 
        correct: 0
  },{
        question: "According to legend, goats were the first animals to discover which crop?", 
        answerChoices: ["Opium", "Coffee", "Portabello mushrooms", "Peanuts"], 
        correct: 3
  }];

  $(".title").show();
  $(".game-container").hide();
  $(".end-container").hide();

// Game functions 
  $("#start-button").on("click", function(){
    $(".start-game").hide();
    $(".game-container").show();
    startGame();
    console.log("start");
  });
    
  function startGame() {
  	stop();
  	intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
      time--;
      $("#time-remaining").html(time);
      if (time === 0) {
        stop();
        gameScore();
        endGame();
        // alert("Time Up!");
  }}

  //stop function to stop the timer and take user to final page
  function stop() {
  		clockRunning = false;
      clearInterval(intervalId);
      // console.log(intervalId);
  }

  function endGame() {
    clockRunning = false;
    clearInterval(intervalId);
    $(".game-container").hide();
    $(".end-container").show();
      $("#unanswered").text(unansweredQuestions);
      $("#correct-answers").text(correctAnswers);
      $("#incorrect-answers").text(incorrectAnswers);
    // gameScore();

  }

function gameScore(){


  // getting checked values from radio buttons --there has to be a better way to do this...
  var Answer1 = $("input:radio[name='q1']:checked").val();
  console.log(Answer1);
  
  var Answer2 = $("input:radio[name='q2']:checked").val();
  console.log(Answer2);
  
  var Answer3 = $("input:radio[name='q3']:checked").val();
  console.log(Answer3);
  var Answer4 = $("input:radio[name='q4']:checked").val();
  console.log(Answer4);
  var Answer5 = $("input:radio[name='q5']:checked").val();
  console.log(Answer5);

  // repeat for all five questions

// if/else statements for each of the three end variables

if (Answer1 === undefined) {
  unansweredQuestions++;

} else if 
  (Answer1 === "5+ feet") {
  correctAnswers++;

} else {
  incorrectAnswers++;
}

if (Answer2 === undefined) {
  unansweredQuestions++;

} else if 
  (Answer2 === "Upper teeth") {
  correctAnswers++;

} else {
  incorrectAnswers++;
}

if (Answer3 === undefined) {
  unansweredQuestions++;

} else if 
  (Answer3 === "All of the above") {
  correctAnswers++;

} else {
  incorrectAnswers++;
}

if (Answer4 === undefined) {
  unansweredQuestions++;

} else if 
  (Answer4 === "Teeth") {
  correctAnswers++;

} else {
  incorrectAnswers;
}

if (Answer5 === undefined) {
  unansweredQuestions++;

} else if 
  (Answer5 === "Coffee") {
  correctAnswers++;

} else {
  incorrectAnswers++;
}

};




})
