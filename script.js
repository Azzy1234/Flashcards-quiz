// Array of questions and answers
const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "What is 5 * 3?", answer: "15" },
    { question: "What is the largest ocean on Earth?", answer: "Pacific" },
  ];
  
  let currentCardIndex = 0;
  let correctAnswersCount = 0;
  
  // Function to display the current flashcard
  function displayFlashcard() {
    const currentCard = flashcards[currentCardIndex];
    document.getElementById("question").textContent = currentCard.question;
    document.getElementById("userAnswer").value = ""; // Clear the input field
    document.getElementById("result").textContent = ""; // Clear previous result
    document.getElementById("nextQuestion").style.display = "none"; // Hide next question button
  }
  
  // Function to handle answer submission
  document.getElementById("submitAnswer").addEventListener("click", function () {
    const userAnswer = document.getElementById("userAnswer").value.trim();
    const correctAnswer = flashcards[currentCardIndex].answer;
  
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      document.getElementById("result").textContent = "Correct!";
      correctAnswersCount++;
    } else {
      document.getElementById("result").textContent = `Wrong! The correct answer is: ${correctAnswer}`;
    }
  
    document.getElementById("nextQuestion").style.display = "inline"; // Show next question button
  });
  
  // Function to move to the next question
  document.getElementById("nextQuestion").addEventListener("click", function () {
    currentCardIndex++;
    
    if (currentCardIndex < flashcards.length) {
      displayFlashcard();
    } else {
      document.getElementById("flashcard").innerHTML = `<h2>Quiz Complete!</h2><p>You got ${correctAnswersCount} out of ${flashcards.length} correct!</p>`;
    }
  });
  
  // Display the first flashcard
  displayFlashcard();
  