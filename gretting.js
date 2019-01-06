  const user_info_box = document.querySelector(".user_info_box"),
  form = user_info_box.querySelector(".js-form"),
  greeting = document.querySelector(".js-greetings"),
  swiper_c = document.querySelector(".swiper-container");
const USER_LS = "currentUser",
  SHOWING_CN="showing";

function saveName(text){
  localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
  const currentValue = form[0].value;
  paintGreeting(currentValue);
  saveName(currentValue);
  showAddBtn();
  swiper_c.classList.Add(SHOWING_CN);
}
function showAddBtn(){
  const addBtn = document.querySelector(".addBtn");
  // addBtn.classList.add(SHOWING_CN);
}

function askForName(){
  user_info_box.classList.add(SHOWING_CN);
  form[1].addEventListener("click", handleSubmit);
}

function paintGreeting(text){
  user_info_box.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText =`User : ${text}`;
}
function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    swiper_c.classList.remove(SHOWING_CN);
    askForName();
  }else{
    paintGreeting(currentUser);
    showAddBtn();
    swiper_container.classList.Add(SHOWING_CN);
  }
}
function init(){
  loadName();
}

init();
