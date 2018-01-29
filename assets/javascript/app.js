//Variables
	//var of questions
		//object with questions
			//answer options as objects within the questions.
	//var counters for correct, incorrect, out of time

//On page load

	//Functions
		//var renderQuestions function. puts the vars on the DOM (*don't call yet)
			//time remaining
			//questions
			//answer options (append each one)
		//start game
			//show on page (.html) start page and start button ( id= startButton)
			//On-click event for start
			//show on page questions section (ids= timeRemaining, questionOnPage, options)
			//for loop for each q (for var __ in __questions_)
				//var timeRemaining: 30 sec each q
				//each q time is decremented by 1000 (1s)
				//if/else
					//if time ends or answer selected show image
					//if correct show correct message, correct++
					//if incorrect show incorrect message, incorrect++
					//if out of time show out of time message, outOfTime++
					//then on to next question after 5 seconds

		// call the start game function

		//game over
			//show on page (id= show stats, endButton)
			//if length of questions reached show
			//show correct answers, incorrect answers, unaswered q's in id="showStats".
			//show start over? BUTTON (on-click event)
				//no reload of page, resets game (call reset functions).
		//reset



