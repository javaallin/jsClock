const initBtn=document.querySelector(".initBtn");
function handleInitBtn(){
  let yn = confirm("모든 정보를 초기화 할까요?");
  if(yn===true){
  removeAll();
  reload();
  }
}
function removeAll(){
  localStorage.removeItem("coords");
  localStorage.removeItem("toDoList");
  localStorage.removeItem("currentUser");
  swiper_container.classList.remove(SHOWING_CN);
}
function reload(){
  location.reload();
}
function init(){
  initBtn.addEventListener("click",handleInitBtn)
}
init();
