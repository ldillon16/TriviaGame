$(document).ready(function() {

  //timer
  var time = 8;
  $("time-remaining").text(time);

  //setting variables
  var userAnswers = [];
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unansweredQuestions = 0;
  var intervalId;

  // Array of questions and answers
  var questionArray = [{
        question: "How high can a goat jump?", 
        answerChoices: ["18+ inches", "3+ feet", "5+ feet", "8+ feet"],
        correct: 1 
  },{
        question: "Goats are naturally missing which of the following body parts?", 
        answerChoices: ["Sternum", "Spleen", "Upper teeth", "Knees"], 
        correct: 2
  },{
        question: "A group of goats is commonly known as what?", 
        answerChoices: ["A tribe", "A herd", "A trip", "All of the above"], 
        correct: 0
  },{
        question: "By examining which physical feature can you determine a goat's age?", 
        answerChoices: ["Teeth", "Horns", "Hooves", "Pupils"], 
        correct: 0
  },{
        question: "According to legend, goats were the first animals to discover which crop?", 
        answerChoices: ["Portabello mushrooms", "Opium", "Coffee", "Peanuts"], 
        correct: 2
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

  function endGame() {
    clockRunning = false;
    clearInterval(intervalId);
    $(".game-container").hide();
    $(".end-container").show();
    console.log( "end game");
   
  }

  function stop() {
      clockRunning = false;
      clearInterval(intervalId);
  }

  function decrement() {
      time--;
      $("#time-remaining").html(time);
      if (time === 0) {
        stop();
        endGame();
        // alert("Time Up!");
  }}

  function startGame() {
  	stop();
  	intervalId = setInterval(decrement, 1000);
    for (i=0; i<questionArray.length; i++) {
      var questionDisplay = $("<div>")
        .addClass("radio")
        .text(questionArray[i].question)
        for (j=0; j<questionArray[i].answerChoices.length; j++) {
          var answerDisplay = $("<div>")
          .addClass("radio-inline")
          .append($("<label>")
            .append($("<input>")
              .attr("type", "radio")
              .val(questionArray[i].answerChoices[j])
              .addClass("radio")).text(questionArray[i].answerChoices[j]));
          answerDisplay.appendTo(questionDisplay);
        }
      $("#question-container").append(questionDisplay);
    }
    $()

  }

var question1 = $( "input[type=radio][name=q1]:checked" ).val();
console.log(question1);


    // compare answer to correct answer
        // if it's correct increment score, increment question index
        // if it's wrong, decrement score, increment question index
    // get a new question 

  

  //stop function to stop the timer and take user to final page




})


