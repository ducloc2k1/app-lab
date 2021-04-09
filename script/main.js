/* Active menu mobile and tablet */
let headerBar = document.getElementById("header-bar");

let activeMenu = () => {
  let menu = document.getElementById("header-menu");

  menu.classList.toggle("header-active");
};

headerBar.addEventListener("click", activeMenu);

// x y blur scale color

let activeScroll = () => {
  let scrollY = window.pageYOffset;

  let headerTop = document.getElementById("header");

  if (scrollY > 50) headerTop.classList.add("scroll-active");
  else headerTop.classList.remove("scroll-active");
};

window.addEventListener("scroll", activeScroll);

/* show answer */
let questionPlus = document.getElementsByClassName("question-icon");

let showAnswer = (singleQuestion) => {
  singleQuestion.classList.toggle("show-answer");
};

Array.from(questionPlus).forEach((plus) => {
  plus.addEventListener("click", () => {
    showAnswer(plus.parentNode);
  });
});
