// this is javascript file

var input = document.getElementById("input");
var submit = document.getElementById("submit");
var list = document.getElementById("list");
var id = 0

function reassignIds() {
  var removeButtons = document.getElementsByClassName("remove");
  var listItems = document.getElementsByClassName("list-item");
  for(let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', () => {
      event.preventDefault();
      listItems[i].remove();
    });
  }
}

submit.addEventListener('click', () => {
  event.preventDefault();
  addTodo(input.value, id);
  input.value = "";
  id += 1;
  reassignIds();
});

function addTodo(text, id) {
  list.innerHTML +=
  `<li class="list-item" data-id="${id}"> 
    <div class="parent-container"> 
      <div class="text">
        <div class="item">
          ${text}
        </div>
      </div>
      <div class="buttons">
        <button class="remove" data-id="${id}">Remove</button>
      </div>
    </div>
  </li>`
}
