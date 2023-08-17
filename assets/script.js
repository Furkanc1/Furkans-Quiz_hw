var startBtn = document.querySelector("#start-btn");
var timerEl = document.querySelector("#timer");

var timeLeft = 75;
var currentQuestionIndexNumber = 0;
var score = 0;
var questionsArr = [
  {
    questionText:
      "_______ is the process of finding errors and fixing them within a program.",
    questionAnswers: ["Compiling ", "Debugging ", "Executing ", "Scanning"],
    rightAnswer: "Debugging ",
  },
  {
    questionText:
      "Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?",
    questionAnswers: [
      "If (x > 0) x++; else x--; ",
      "If (x > 0) x++; else if (x < 0) x--; ",
      "X++; x--; ",
      "If (x == 0) x = 0; else x++; x--; ",
    ],
    rightAnswer: "If (x == 0) x = 0; else x++; x--; ",
  },
  {
    questionText: "Which command will stop an infinite loop?",
    questionAnswers: ["Alt + C ", "Shift + Esc ", "Esc ", "Ctrl + C "],
    rightAnswer: "Ctrl + C ",
  },
  {
    questionText:
      "Jay is considering adding a repetition statement within his Java programming final project. Jay is unsure of the number of times each loop needs to execute.  Analyze the conditional statements below and select which statement best fits the need identified by Jay within his programming.",
    questionAnswers: ["While loop", "If-Else", "For loop", "Switch statement"],
    rightAnswer: "While loop",
  },
  {
    questionText:
      "Score =Keyboard.readInt(); while (score !=  -1)         { System.out.println (“The score is” + score); score =Keyboard.readInt();         } USER INPUT = -1, predict what will happen after the user input is accepted into the java program.",
    questionAnswers: [
      "The while statement will continue to ask the user to enter a score and then print out the score that has been received.",
      "The while loop will execute an infinite number of times because the program statement can never be false",
      "The while statement will never print the statement “The score is” because the condition present within the while will be false on the first time through.",
      "The while statement will function until a value other than -1 is entered.",
    ],
    rightAnswer:
      "The while statement will never print the statement “The score is” because the condition present within the while will be false on the first time through.",
  },
];

function startQuiz() {
  startBtn.hidden = true;
  quizBox.textContent = "";

  countdown = setInterval(function () {
    console.log("tick");
    if (timeLeft > 0) {
      timeLeft--;
      timerEl.textContent = "Time Left: " + timeLeft;
    } else {
      endQuiz();
    }
  }, 1000);

  displayQuestion();
}

var currentQuestion = questionsArr[currentQuestionIndexNumber];

function displayQuestion() {
  // if the currentindexnumber is less than 5, then -->
  if (currentQuestionIndexNumber < questionsArr.length) {
    //definining the variables inside the function so they are only used INSIDE the function
    var quizBox = document.getElementById("quizBox");

    var questionText = "<h4>" + currentQuestion.questionText + "</h4>";

    //wraps the question in h4 tags

    var answerButtons = currentQuestion.questionAnswers.map(function (
      answer,
      index
    ) {
      var button =
        '<button class="answer-btn" data-answer="' +
        answer +
        '">' +
        answer +
        "</button>";
      var listItem = '<li id="hello">' + button + "</li>";

      return listItem;
    });
    //Creates buttons which are substituded with the question answers LIST,
    //which is put into a <li> in order to mark them down as bullet points (id = "helo" in css file)

    var answersHTML = "<ul>" + answerButtons.join("") + "</ul>";
    //crates unordered list using the variable we defined earlier as "answerButtons" and
    //.join then uses "Concat" method to create new array essentially (accoriding to google lol)
    quizBox.innerHTML = questionText + answersHTML;
    //This final code brings everything together and says that: inside the quizBox inside the innerHTML
    // we display the question and the answers below it in bullet points and as buttons after we press "begin"
  }
}

function checkAnswer(userAnswer) {
  var currentQuestion = questionsArr[currentQuestionIndexNumber];
  //labels the current index that we are on in the questionsARRAY//
  if (userAnswer === currentQuestion.rightAnswer) {
    score + 10; //adds 10 points to our score variable//
  } else {
    timeLeft - 10; //subtracts 10 seconds from the timeLeft variable//
  }
  currentQuestionIndexNumber++;
  //adds 1 to our index number, meaning we move onto the next questions in the ARRAY //
  displayQuestion();
  //once we move onto the next index number in the array, we use the function "displayQuestion()
  //to display whatever the current index number is + 1 (aka next questions)
}

function endQuiz() {
  clearInterval(countdown);
  console.log("Quiz Over");

  // Hide Questions and show LEADERBOARD (No Clue) //
}

startBtn.addEventListener("click", function () {
  console.log("Quiz Start");
  startQuiz();
});
