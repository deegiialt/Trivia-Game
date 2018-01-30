
//Variables
	//var of questions
		//object with questions
			//answer options as objects within the questions.
	var questions = {
		q1: "Which teams were playing in the Quidditch World Cup that Harry attended?",
		optionSetOne: [{
			o1: "Bulgaria and Ireland",//true
			o2: "France and England",
			o3:" Norway and England",
			o4: "England and Ireland",
		}], 
		q2: "What kind of creatures feed on positive human emotions?",
		optionSetTwo: [{
			o1: "Boggarts",
			o2: "Mermaids",
			o3: "Grindylows",
			o4: "Dementors",//true
		}],
		q3: "How many Weasley children are there?",
		optionSetThree: [{
			o1: "5",
			o2: "6",
			o3: "7",//true
			o4: "8",
		}],
		q4: "What is the symbol of the Gryffindor house?",
		optionSetFour: [{
			o1: "Eagle",
			o2: "Badger",
			o3: "Snake",
			o4: "Lion",//true
		}],
		q5: "What did Dumbledore leave Hermione in his will?",
		optionSetFive: [{
			o1: "His Deluminator",
			o2: "The sword of Gryffindor",
			o3: "A Golden Snitch",
			o4: "The Tales of Beedle the Bard",//true
		}]
	};



	////test////
	var questionArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5]
	var optionSetOneArray = [questions.optionSetOne[0].o1, questions.optionSetOne[0].o2, questions.optionSetOne[0].o3, questions.optionSetOne[0].o4]
	var optionSetTwoArray = [questions.optionSetTwo[0].o1, questions.optionSetTwo[0].o2, questions.optionSetTwo[0].o3, questions.optionSetTwo[0].o4]
	var optionSetThreeArray = [questions.optionSetThree[0].o1, questions.optionSetThree[0].o2, questions.optionSetThree[0].o3, questions.optionSetThree[0].o4]
	var optionSetFourArray = [questions.optionSetFour[0].o1, questions.optionSetFour[0].o2, questions.optionSetFour[0].o3, questions.optionSetFour[0].o4]
	var optionSetFiveArray = [questions.optionSetFive[0].o1, questions.optionSetFive[0].o2, questions.optionSetFive[0].o3, questions.optionSetFive[0].o4]
	var correctOptions = [questions.optionSetOne[0].o1, questions.optionSetTwo[0].o4, questions.optionSetThree[0].o3, questions.optionSetFour[0].o4, questions.optionSetFive[0].o4]



	//counter to keep track of which set of questions user is currently on
	var counter = 0;

	//variable to hold what option user picked
	var userPicked = null;

	//var counters for correct, incorrect, out of time
	var correctCount = 0;
	var incorrectCount = 0;
	var outOfTime = 0;

	//variables for time
	var givenTime = 30;
	var intervalId;
		

//On page load
$(document).ready(function() {
	//Functions
	//////////////////////////////////////////////////////////////////////////////////////////////
	
	// //renderQuestions function. puts the vars on the DOM (*don't call yet)
	// function render() {
	// 	//clear time for restart
	// 	clearInterval(intervalId);
	//  	//time remaining	
	// 	$("#timeRemaining").html(number);
	// 	//questions
	// 	$("#questionOnPage").append(;
	// 	//answer options (append each one)
	// 	$("#options").append(//loop//);
	// };

	//time function
	function time() {
		givenTime--;
		if (givenTime <= 0) {
			setTimeout(function() {
				nextQuestion();
			});
		} else {
			$("#timeRemaining").html(givenTime);
		}
	};

	//next question function
	function nextQuestion() {
		counter++;
		clearInterval(intervalId);
		var givenTime = 30;
		$("#timeRemaining").html("");
		setTimeout(function () {
			render();
			reset();
		}, 5000);

		if(counter == questionArray.length) {
			count = 0;
		}
	};

	//start game
	function startGame() {
		//call reset
		reset();
		//show on page (.show()) start page and start button ( id= startButton)
		$("#timeRemaining").hide();
		$(".endMessage").hide();
		$("#endButton").hide();
		$("#options").hide();

		//On-click event for start
		$("#startButton").on("click", function() {
			//show on page questions section (ids= timeRemaining, questionOnPage, options)
			$("#timeRemaining").show();
			$("#questionOnPage").show();
			$("#options").show();

			//for loop for each q (for var __ in __questions_)
			for(i = 0; questionArray.length; i++) {

				//var timeRemaining: 30 sec each q
				//each q time is decremented by 1000 (1s)
				intervalId = setInterval(decrement, 1000);
				//if/else
				//if time ends or answer selected show image
				if(intervalId == 0 || ) {

				};
					//new if correct show correct message, correct++
					if(userPicked == correctOptions) {

					};
						//else if incorrect show incorrect message, incorrect++
						//else if out of time show out of time message, outOfTime++
						//then on to next question after 5 seconds
					//if last q time is done, call gameOver.
			}
		});
	};

		// call the start game function
		startGame();
	//game over
	function gameOver() {
		//show on page (id= show stats, endButton)
		$(".endMessage").show();
		$("#endButton").show();
		$("#showStats").show();
		//hide everything else
		$("#timeRemaining").hide();
		$("#questionOnPage").hide();
		$("#options").hide();
		$("#timeRemaining").hide();
		$("#questionOnPage").hide();
		$("#options").hide();

		//show correct answers, incorrect answers, unaswered q's in id="showStats".
		$("#showStats").append(correctCount, incorrectCount, outOfTime);
		//show start over? BUTTON (on-click event)
		$("#endButton").on("click", function () {
		//no reload of page, resets game (call reset functions).
		reset();
		});
			
	};

	//reset
	function reset() {
		var correctCount = 0;
		var incorrectCount = 0;
		var outOfTime = 0;

		//variables for time
		var givenTime = 30;

		//sets page index to 0
		var counter = 0;
	};
});



