var ul = document.querySelector("ul");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");

function inputLength() {
  return input.value.length;
}

function addElementToList() {
  var li = document.createElement("li");
  var label = document.createElement("span");
  label.classList.add("label");
  label.appendChild(document.createTextNode(input.value));
  li.appendChild(label);
  var bt = document.createElement("button");
  var icon = document.createElement("i");
  icon.classList.add("fa");
  icon.classList.add("fa-times");
  
  bt.appendChild(icon);
  bt.classList.add("remove");
  bt.addEventListener("click", removeListItem);

  li.appendChild(bt);
  li.addEventListener("click", listItemClick);
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    addElementToList();
  }
}

function addListAfterKeypress(e) {
  if (e.keyCode === 13 && inputLength() > 0) {
    addElementToList();
  }
}

function listItemClick () {
  this.firstElementChild.classList.toggle("done");
}

function removeListItem() {
  var li = this.parentElement;
  li.parentElement.removeChild(li);
}

input.addEventListener("keypress", addListAfterKeypress);
button.addEventListener("click", addListAfterClick);
