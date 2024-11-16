import { Pixel } from "./Pixel.js";

const malha = document.getElementById('malha');
const botao = document.getElementById('botao-on-off');
const pixelsIds = [];
const pixelElements = [];
let startStop = false;

botao.addEventListener('click',() => {
  startStop = !startStop;
  const intervalID = setInterval(() => {
    if(startStop){
      gerarPixels();
      return;
    }
    clearInterval(intervalID);
    return;
  },1000);
  changeButton();
})

for(let i = 0;i < 9 ;i++) {
  const pixel = Pixel(false,i);
  pixelsIds.push(pixel.id)
  malha.appendChild(pixel.pixel);
}

for(let id of pixelsIds) {
  const element = document.getElementById(id);
  pixelElements.push(element);
}

function gerarPixels() {
  for(let e of pixelElements) {
    const states = {true:'on',false:'off'}
    const onOff = Boolean(Math.round(Math.random()));
    e.setAttribute('class',`pixel pixel-${states[onOff]}`);
  }
}

function changeButton() {
  if(!startStop) {
    botao.setAttribute('class','botao botao-on');
    botao.innerText = 'Iniciar';
  } else {
    botao.setAttribute('class','botao botao-off');
    botao.innerText = 'Pausar';
  }
}
