const body = document.querySelector("body");

const BG_IMG_NUMBER = 3;

function paintImage(imgNumber){
  const image = new Image();
  image.src = `./images/bg_${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.append(image);

}
function genRandom(){
  const number = Math.floor(Math.random() * BG_IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
