const completeInputIcon = document.querySelectorAll(".complete");
const cancelInputIcon = document.querySelectorAll(".cancel");
const todoStatus = document.querySelectorAll(".todostatus");
const label = document.querySelectorAll("label");
const icons = document.querySelectorAll(".ccicons");
const radioButtons = document.querySelectorAll(".radiobtn");

const radioFunction = () => {
  for (let i = 0; i < icons.length; i++) {
    radioButtons[i].addEventListener("click", () => {
      if (radioButtons[i].value === "completed") {
        icons[i].setAttribute("data-iscompleted", "true");
        icons[i + 1].setAttribute("data-iscanceled", "false");
      } else if (radioButtons[i].value === "canceled") {
        icons[i].setAttribute("data-iscanceled", "true");
        icons[i - 1].setAttribute("data-iscompleted", "false");
      }
    });
  }
};

radioFunction();

const fillBrackets = () => {
  for (let i = 0; i < todoStatus.length; i++) {
    if (completeInputIcon[i].getAttribute("data-iscompleted") === "true")
      todoStatus[i].innerHTML = "[&#x2714;]";
    else if (cancelInputIcon[i].getAttribute("data-iscanceled") === "true")
      todoStatus[i].innerHTML = "[&#x292B;]";
    else todoStatus.innerHTML = "[]";
  }
};

fillBrackets();

const loader = document.querySelector(".loader");
const submitBtn = document.querySelector(".submit__btn");

const activateLoader = () => {
  submitBtn.addEventListener("submit", () => {
    setTimeout(() => {
      loader.style.visibility = "visible";
    }, 3000);
  });
};

activateLoader();
