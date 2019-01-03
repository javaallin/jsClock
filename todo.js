const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDoList';
let toDos = [];
let count = 0;
function handleOnchange(event){
  showToDoForm();
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    console.log(li);
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
      console.log(toDo.id, li.id);
      return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
    count++;
}

function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length+count+1;
  delBtn.innerText="X";
  delBtn.addEventListener("click",deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id : newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";

}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text)
    })
  }
}
function showToDoForm(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser!==null){
    toDoForm.classList.add(SHOWING_CN);
    return true;
  }else{
    toDOForm.classList.remove(SHOWING_CN);
    return false;
  }
}
function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  greeting.addEventListener("onchange",handleOnchange)
}

init();
