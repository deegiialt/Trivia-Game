//Variables
	//var of questions
		//object with questions
			//answer options as objects within the questions.
	var questions = {
		Which teams were playing in the Quidditch World Cup that Harry attended?: {
			o1: "Bulgaria and Ireland",//true
			o2: "France and England",
			o3:" Norway and England",
			o4: "England and Ireland",
		}, 
		What kind of creatures feed on positive human emotions?: {
			o1: "Boggarts",
			o2: "Mermaids",
			o3: "Grindylows",
			o4: "Dementors",//true

		},
		How many Weasley children are there?: {
			o1: "5",
			o2: "6",
			o3: "7",//true
			o4: "8",
		},
		What is the symbol of the Gryffindor house?: {
			o1: "Eagle",
			o2: "Badger",
			o3: "Snake",
			o4: "Lion",//true
		},
		What did Dumbledore leave Hermione in his will?: {
			o1: "His Deluminator",
			o2: "The sword of Gryffindor",
			o3: "A Golden Snitch",
			o4: "The Tales of Beedle the Bard",//true
		},

	};
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
					//new if correct show correct message, correct++
						//else if incorrect show incorrect message, incorrect++
						//else if out of time show out of time message, outOfTime++
						//then on to next question after 5 seconds

		// call the start game function

		//game over
			//show on page (id= show stats, endButton)
			//if length of questions reached show
			//show correct answers, incorrect answers, unaswered q's in id="showStats".
			//show start over? BUTTON (on-click event)
				//no reload of page, resets game (call reset functions).
		//reset



