const formReference = document.getElementById("registrationForm");
const nameReference = document.getElementById("nameField");
const saveReference = document.getElementById("saveBtn");
const delReference = document.getElementById("delBtn");
const par = document.getElementById("paragraph");
const display = document.getElementById("session");

const reset = function () {
  localStorage.clear();
  par.innerText = "";
};

const save = function () {
  const currentName = nameReference.value;
  localStorage.setItem("nome", currentName);
  par.innerText = nameReference.value;
  nameReference.value = "";
};

saveReference.addEventListener("click", save);
delReference.addEventListener("click", reset);

let i = sessionStorage.getItem("display") || 0;
let saveInterval = setInterval(() => {
  i++;
  sessionStorage.setItem("display", i);
  display.innerHTML = i;
}, 1000);
