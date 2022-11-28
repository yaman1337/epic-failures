//  selectors
const CARDS_DIV = document.querySelector(".cards");
const CARD = document.querySelectorAll(".card");
const FORWARD_BTN = document.querySelector(".forward");
const BACKWARD_BTN = document.querySelector(".backward");
const INCREMENT_VALUE = 300;
const FORWARD_INCREMENT = "F";
const BACKWARD_INCREMENT = "B";

// variables
let forward;
let backward;

forward = 0;
backward = 0;

FORWARD_BTN.addEventListener("click", (e) => {
  if (forward == -600) return
  forward -= INCREMENT_VALUE;
  backward -= INCREMENT_VALUE;
  console.log({ forward, backward });

  // transform card on x-axis by 100px forward
  moveCards(forward, FORWARD_INCREMENT);
});

BACKWARD_BTN.addEventListener("click", (e) => {
  if(backward == 0) {
    return
  }
  forward += INCREMENT_VALUE;
  backward += INCREMENT_VALUE;
  console.log({ forward, backward });

  // transform card on y-axis by 100px backward
  moveCards(backward, BACKWARD_INCREMENT);
});

// functions

const moveCards = (position, incrementType) => {
  if (position == null || position == undefined) return;

  console.log(CARD[CARD.length - 1].getBoundingClientRect());

  if (
    incrementType == FORWARD_INCREMENT &&
    CARD[0].getBoundingClientRect().left < 0
  ) {
    return;
  }

  if (
    incrementType == BACKWARD_INCREMENT &&
    CARD[CARD.length - 1].getBoundingClientRect().left > 1320
  ) {
    return;
  }

  console.log({ position });
  CARD.forEach((item, key) => {
    item.setAttribute("style", `transform: translateX(${position}px)`);
  });
};