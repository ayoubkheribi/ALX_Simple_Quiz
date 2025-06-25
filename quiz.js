function checkAnswer() {
  const correctAnswer = "4";
  const userAnswer = document.querySelector("quiz").value;

  if(userAnswer == correctAnswer){
    feedback.textContent = "Correct! Well done.";
    return;
  }else{
    feedback.textContent = "That's incorrect. Try again!";
    return;
  }

}




