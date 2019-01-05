const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm[2],
toDoCancelBtn = toDoForm[3],
toDoList = document.querySelector(".js-toDoList"),
toDoAddBtn = document.querySelector(".addBtn"),
showNHideBtn = document.querySelector(".toDoListBtn"),
swiper_container = document.querySelector(".swiper-container"),
swiper_wrapper = document.querySelector(".swiper-wrapper");

const TODOS_LS = 'toDoList';
const IMG_NUMBER = 18;

let toDos = [];
let count = 0;
function toggleBtn(){
  if(showNHideBtn.value==="Show Todo"){
    swiper_container.classList.add(SHOWING_CN);
    showNHideBtn.value="Hide Todo"
  }else{
    swiper_container.classList.remove(SHOWING_CN);
    showNHideBtn.value="Show Todo"
  }
}
function showToDoForm(){
  console.log(toDoForm[2]);
  console.dir(toDoForm);
  const box=document.querySelector(".box");
  box.classList.add(SHOWING_CN);
}

function hideToDoForm(){
  console.log("ddd");
  const box=document.querySelector(".box");
  box.classList.remove(SHOWING_CN);
}

function deleteToDo(event){
    const btn = event.target;
    const card = btn.parentNode.parentNode;
    swiper_wrapper.removeChild(card);
    const cleanToDos = toDos.filter(function(toDo){
      console.log(toDo.id, card.id);
      return toDo.id !== parseInt(card.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
    count++;
}

function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
function paintToDo(title,ps){
  hideToDoForm();
  const swiper_slide = document.createElement("div");
  const imgBx = document.createElement("div");
  const details = document.createElement("div");
  const newId = toDos.length+count+1;
  const img = document.createElement("img");
  const h3 = document.createElement('h3');
  const span = document.createElement('span');
  const delBtn = document.createElement("button");
  delBtn.classList.add("delBtn")
  delBtn.innerText="삭제";
  delBtn.addEventListener("click",deleteToDo);
  img.src = `./images/${Math.floor(Math.random() * IMG_NUMBER)+1}.jpg`;
  h3.innerText=`${title}\n`;
  span.innerText=`${ps}\n`;
  h3.appendChild(span);
  imgBx.classList.add("imgBx");
  details.classList.add("details");
  swiper_slide.classList.add("swiper-slide");
  imgBx.appendChild(img);
  details.appendChild(h3);
  details.appendChild(delBtn);
  swiper_slide.appendChild(imgBx);
  swiper_slide.appendChild(details);
  swiper_slide.id = newId;
  swiper_wrapper.appendChild(swiper_slide);
  // const li = document.createElement("li");
  // const span = document.createElement("span");
  // const newId = toDos.length+count+1;
  // span.innerText = text;
  // li.appendChild(span);
  // li.id = newId;
  // toDoList.appendChild(li);
  const toDoObj = {
    title: title,
    ps:ps,
    id : newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const title = toDoForm[0].value;
  const ps = toDoForm[1].value;
  paintToDo(title,ps);
  toDoForm[0].value = "";
  toDoForm[1].value = "";

}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.title,toDo.ps)
    })
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  toDoAddBtn.addEventListener("click", showToDoForm);
  toDoCancelBtn.addEventListener("click", hideToDoForm);
  showNHideBtn.addEventListener("click",toggleBtn)
}
init();
