const ul = document.querySelector("ul");
const button = document.getElementById("enter");
const input = document.getElementById("userinput");

const inputLength = () => input.value.length;

const addElementToList = () => {
  let li = document.createElement("li");
  let label = document.createElement("span");
  label.classList.add("label");
  label.appendChild(document.createTextNode(input.value));
  li.appendChild(label);
  
  let bt = document.createElement("button");
  let icon = document.createElement("i");
  icon.classList.add("fa", "fa-times");
  bt.appendChild(icon);
  bt.classList.add("remove");
  bt.addEventListener("click", removeListItem);
  li.appendChild(bt);

  li.addEventListener("click", listItemClick);
  ul.appendChild(li);
  input.value = "";
};

button.onclick = () => {
  if (inputLength() > 0) {
    addElementToList();
  }
};

input.onkeypress = (e) => {
  if (e.keyCode === 13 && inputLength() > 0) {
    addElementToList();
  }
};

function listItemClick() {
  this.firstElementChild.classList.toggle("done");
  const out = () => console.log(this);
  out();
}

function removeListItem() {
  var li = this.parentElement;
  li.parentElement.removeChild(li);
}
