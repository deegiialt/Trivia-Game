
//Variables
	//var of questions
		//object with questions
	var questions = [{
		question: "Which teams were playing in the Quidditch World Cup that Harry attended?",
		choices: ["Bulgaria and Ireland", "France and England"," Norway and England","England and Ireland"],
		correct: 0
	}, {
		question: "What kind of creatures feed on positive human emotions?",
		choices: ["Boggarts", "Mermaids", "Grindylows","Dementors"],
		correct: 3
	}, {
		question: "How many Weasley children are there?",
		choices: ["5","6","7","8"],
		correct: 2
	}, {
		question: "What is the symbol of the Gryffindor house?",
		choices: ["Eagle","Badger","Snake","Lion"],
		correct: 3
	}, {	
		question: "What did Dumbledore leave Hermione in his will?",
		choices: ["His Deluminator","The sword of Gryffindor","A Golden Snitch","The Tales of Beedle the Bard"],
		correct: 3 
	}];

	//variable to store which answer user picked
	var userPicked = null;
	var answers = {
		correct: 0,
		incorrect: 0,
		outOfTime: 0
	};
	var images = null;
	var givenTime = 30;
	var counter = 0;


	function ask() {
		if(questions[current]) {
			$("#timeRemaining").html(givenTime);
			$("#questionOnPage").html(questions[current])
		}
	}


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
	}

	//next question function
	function nextQuestion() {
		counter++;
		clearInterval(intervalId);
		var givenTime = 30;
		$("#timeRemaining").html("");
		setTimeout(function () {
			render();
			reset();
		}, 5000)
	}