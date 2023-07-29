// .container > .button

const container = document.querySelector(".container");
const button = container.querySelector(".button");

button.addEventListener("click", () => {
  Promise.resolve().then(() => {
    console.log(1);
  });

  console.log(2);
});

container.addEventListener("click", () => {
  console.log(3);
});

// Что будет если пользователь кликнет по кнопке

button.click();
