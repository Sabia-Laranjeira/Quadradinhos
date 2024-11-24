import { criarElemPixel } from "./Pixel.js";
export const malha = document.getElementById('malha');  

export function renderizarMalha(quantidadePixels = 9) {
  const pixelsIDs = [];
  let pixel = null;

  for(let p = 0;p < quantidadePixels; p++) {
    pixel = criarElemPixel(p);
    pixelsIDs.push(pixel.element);
    malha.appendChild(pixel.element);
  }

  return pixelsIDs
}

export function definirDimensoesMalha(largura = 0,altura = 0,tamanhoPixel = 0) {
  malha.style.display = 'grid';
  malha.style.gridTemplateColumns = `repeat(${largura},${tamanhoPixel}px)`;
  malha.style.gridTemplateRows = `repeat(${altura}, ${tamanhoPixel}px)`;
}