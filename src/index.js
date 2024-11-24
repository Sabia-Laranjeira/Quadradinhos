import { renderizarMalha, definirDimensoesMalha, malha } from "./Malha.js";
import { criarElemPixel, ligarPixelsAleatorio  } from "./Pixel.js";

const botaoLigar = document.getElementById('botao-ligar');
const pausa = document.getElementById('pausa');
let intervalID = null;
botaoLigar.addEventListener('click',() => {
  malha.innerHTML = '';
  clearInterval(intervalID);
  const largura = Number(document.getElementById('malha-largura').value);
  const altura = Number(document.getElementById('malha-altura').value);
  const dimensaoPixel = Number(document.getElementById('dimensao-pixel').value);
  
  definirDimensoesMalha(largura,altura,dimensaoPixel)
  let pixelsElementos = renderizarMalha(largura*altura);

  intervalID = setInterval(() => {
    ligarPixelsAleatorio(pixelsElementos);
  },1000)
})

pausa.addEventListener('click',()=> {
  clearInterval(intervalID);
})

