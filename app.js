let inputElement = document.getElementById("input");
let listItems = document.getElementById("list-items");
function creatLiElement(e) {
  let liElement = document.createElement("li");
  liElement.textContent = inputElement.value;
  liElement.appendChild(createDeleteBtn());
  liElement.addEventListener("click", () => {
    liElement.classList.toggle("green");
  });
  if (e.key === "Enter" && e.target.value !== "") {
    listItems.appendChild(liElement);
    e.target.value = "";
  }
}
function createDeleteBtn() {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "btn";
  deleteBtn.addEventListener("click", (e) => {
    e.target.parentNode.className = "done";
  });
  return deleteBtn;
}
inputElement.addEventListener("keydown", (e) => {
  creatLiElement(e);
});
