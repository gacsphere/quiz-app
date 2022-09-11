// form
const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const newCard = document.querySelector('[data-js="new-card"]');
const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const tagInput = document.querySelector('[data-js="tagInput"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');

// character counter questionInput
const maxLength = questionInput.getAttribute("maxlength");

const updateAnswerInput = (value) => {
  amountLeft.innerText = value;
};

updateAnswerInput(maxLength);

questionInput.addEventListener("input", () => {
  updateAnswerInput(maxLength - questionInput.value.length);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  createNewCard(data);
  console.log(data);

  event.target.elements.questionInput.focus();
  event.target.reset();
});

function createNewCard(data) {
  const newCardList = document.createElement("ul");
  newCardList.classList.add("card-list");
  main.append(newCardList);
  const NewCardListItem = document.createElement("li");
  NewCardListItem.classList.add("card-list__item");
  newCardList.append(NewCardListItem);
  const newCard = document.createElement("article");
  newCard.classList.add("card");
  NewCardListItem.append(newCard);
  // create elements
  // class zuweisen
  // append
  // inhalt zuweisen
  // Question:
  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("card__question");
  newCard.append(newQuestion);
  newQuestion.textContent = data.questionInput;
  // Button:
  const newButton = document.createElement("button");
  newButton.classList.add("card__button-answer");
  newCard.append(newButton);
  newButton.textContent = "Hide answer";
  // Answer:
  const newAnswer = document.createElement("p");
  newAnswer.classList.add("card__answer", "card__answer--active");
  newCard.append(newAnswer);
  newAnswer.textContent = data.answerInput;
  // TagList & Tag:
  const newTagList = document.createElement("ul");
  newTagList.classList.add("card__tag-list");
  newCard.append(newTagList);
  const newTag = document.createElement("li");
  newTagList.classList.add("card__tag-list-item");
  newTagList.append(newTag);
  newTag.textContent = data.tagInput;
  //
  newButton.addEventListener("click", () => {
    newAnswer.classList.toggle("card__answer--active");

    if (newButton.textContent == "Hide answer") {
      newButton.textContent = "Show answer";
    } else {
      newButton.textContent = "Hide answer";
    }
  });
}
