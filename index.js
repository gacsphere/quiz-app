const buttonAnswer = document.querySelector('[data-js="button-answer"]');

buttonAnswer.addEventListener("click", () => {
  const answer = document.querySelector('[data-js="answer"]');

  answer.classList.toggle("card__answer--off");

  buttonAnswer.textContent == "Hide Answer"
    ? (buttonAnswer.textContent = "Show Answer")
    : (buttonAnswer.textContent = "Hide Answer");
});
