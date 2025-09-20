const q1Next = document.getElementById("q1Next");
const q2Next = document.getElementById("q2Next");
const q3Next = document.getElementById("q3Next");
const q4Next = document.getElementById("q4Next");
const q5Next = document.getElementById("q5Next");

const tryAgainQs1 = document.getElementById("tryAgainQs1");
const tryAgainQs2 = document.getElementById("tryAgainQs2");
const tryAgainQs3 = document.getElementById("tryAgainQs3");
const tryAgainQs4 = document.getElementById("tryAgainQs4");
const tryAgainQs5 = document.getElementById("tryAgainQs5");

tryAgainQs2.addEventListener("click", () => {
  location.reload();
});
tryAgainQs3.addEventListener("click", () => {
  location.reload();
});
tryAgainQs4.addEventListener("click", () => {
  location.reload();
});
tryAgainQs5.addEventListener("click", () => {
  location.reload();
});

// Question 1

const q1Answer1 = document.getElementById("q1Answer1");
const q1Answer2 = document.getElementById("q1Answer2");
const q1Answer3 = document.getElementById("q1Answer3");
const q1Answer4 = document.getElementById("q1Answer4");

const q1Answers = [q1Answer1, q1Answer2, q1Answer3, q1Answer4];
const q1CorrectAnswer = q1Answer2;

q1Answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    q1Answers.forEach((btn) => {
      btn.classList.add(
        btn === q1CorrectAnswer ? "button-correct" : "button-wrong"
      );
      tryAgainQs1.classList.add("try-again-unhide");
    });

    if (answer === q1CorrectAnswer) {
      q1Next.classList.add("next-link-display");
      tryAgainQs1.classList.remove("try-again-unhide");
    }
  });
});

tryAgainQs1.addEventListener("click", () => {
  q1Answers.forEach((btn) => {
    btn.classList.remove("button-correct", "button-wrong");
  });
  tryAgainQs1.classList.remove("try-again-unhide");
});

// Question 2

const q2Answer1 = document.getElementById("q2Answer1");
const q2Answer2 = document.getElementById("q2Answer2");
const q2Answer3 = document.getElementById("q2Answer3");
const q2Answer4 = document.getElementById("q2Answer4");

const q2Answers = [q2Answer1, q2Answer2, q2Answer3, q2Answer4];
const q2CorrectAnswer = q2Answer2;

q2Answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    q2Answers.forEach((btn) => {
      btn.classList.add(
        btn === q2CorrectAnswer ? "button-correct" : "button-wrong"
      );
      tryAgainQs2.classList.add("try-again-unhide");
    });

    if (answer === q2CorrectAnswer) {
      q2Next.classList.add("next-link-display");
      tryAgainQs2.classList.remove("try-again-unhide");
    }
  });
});

tryAgainQs2.addEventListener("click", () => {
  q1Answers.forEach((btn) => {
    btn.classList.remove("button-correct", "button-wrong");
  });
  tryAgainQs2.classList.remove("try-again-unhide");
});

// Question 3

const q3Answer1 = document.getElementById("q3Answer1");
const q3Answer2 = document.getElementById("q3Answer2");
const q3Answer3 = document.getElementById("q3Answer3");
const q3Answer4 = document.getElementById("q3Answer4");

const q3Answers = [q3Answer1, q3Answer2, q3Answer3, q3Answer4];
const q3CorrectAnswer = q3Answer1;

q3Answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    q3Answers.forEach((btn) => {
      btn.classList.add(
        btn === q3CorrectAnswer ? "button-correct" : "button-wrong"
      );
      tryAgainQs3.classList.add("try-again-unhide");
    });

    if (answer === q3CorrectAnswer) {
      q3Next.classList.add("next-link-display");
      tryAgainQs3.classList.remove("try-again-unhide");
    }
  });
});

// Question 4

const q4Answer1 = document.getElementById("q4Answer1");
const q4Answer2 = document.getElementById("q4Answer2");
const q4Answer3 = document.getElementById("q4Answer3");
const q4Answer4 = document.getElementById("q4Answer4");

const q4Answers = [q4Answer1, q4Answer2, q4Answer3, q4Answer4];
const q4CorrectAnswer = q4Answer4;

q4Answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    q4Answers.forEach((btn) => {
      btn.classList.add(
        btn === q4CorrectAnswer ? "button-correct" : "button-wrong"
      );
      tryAgainQs4.classList.add("try-again-unhide");
    });

    if (answer === q4CorrectAnswer) {
      q4Next.classList.add("next-link-display");
      tryAgainQs4.classList.remove("try-again-unhide");
    }
  });
});

// QUestion 5

const q5Answer1 = document.getElementById("q5Answer1");
const q5Answer2 = document.getElementById("q5Answer2");
const q5Answer3 = document.getElementById("q5Answer3");
const q5Answer4 = document.getElementById("q5Answer4");

const q5Answers = [q5Answer1, q5Answer2, q5Answer3, q5Answer4];
const q5CorrectAnswer = q5Answer4;

q5Answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    q5Answers.forEach((btn) => {
      btn.classList.add(
        btn === q5CorrectAnswer ? "button-correct" : "button-wrong"
      );
      tryAgainQs5.classList.add("try-again-unhide");
    });

    if (answer === q5CorrectAnswer) {
      q5Next.classList.add("next-link-display");
      tryAgainQs5.classList.remove("try-again-unhide");
    }
  });
});
