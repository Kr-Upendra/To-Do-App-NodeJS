const completeInputIcon = document.querySelectorAll(".complete");
const cancelInputIcon = document.querySelectorAll(".cancel");
const todoStatus = document.querySelectorAll(".todostatus");
const label = document.querySelectorAll("label");
const icons = document.querySelectorAll(".ccicons");
const radioButtons = document.querySelectorAll(".radiobtn");
const deleteBtn = document.querySelectorAll(".todo__delete--icon");
const loader = document.querySelector(".loader");
const submitBtn = document.querySelector(".submit__btn");
const alertBox = document.querySelector(".alertbox");
const alertBtn = document.querySelector(".alert__confirm");
const alertMessage = document.querySelector(".alert__message");
const todo = document.querySelectorAll(".todo");

const radioFunction = () => {
  for (let i = 0; i < icons.length; i++) {
    radioButtons[i].addEventListener("click", () => {
      if (radioButtons[i].value === "completed") {
        icons[i].setAttribute("data-iscompleted", "true");
        icons[i + 1].setAttribute("data-iscanceled", "false");
        fillBrackets();
      } else if (radioButtons[i].value === "canceled") {
        icons[i].setAttribute("data-iscanceled", "true");
        icons[i - 1].setAttribute("data-iscompleted", "false");
        fillBrackets();
      }
    });
  }
};

radioFunction();

const fillBrackets = () => {
  for (let i = 0; i < todoStatus.length; i++) {
    if (completeInputIcon[i].getAttribute("data-iscompleted") === "true") {
      todoStatus[i].innerHTML = "[&#x2714;]";
    } else if (cancelInputIcon[i].getAttribute("data-iscanceled") === "true") {
      todoStatus[i].innerHTML = "[&#x292B;]";
    } else todoStatus.innerHTML = "[]";
  }
};

// const showAlert = () => {
//   alertBox.style.visibility = "visible";
//   alertMessage.innerHTML = "To do added successfully!";
// };

// const hideAlert = () => {
//   alertBox.style.visibility = "hidden";
// };

// const sets = setTimeout(hideAlert, 3000);
