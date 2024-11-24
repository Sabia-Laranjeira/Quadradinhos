
export function criarElemPixel(id = 0) {
  const pixel = document.createElement('div');
  pixel.setAttribute('id',`pixel-${id}`);
  pixel.setAttribute('class','pixel');
  return {element:pixel,id:`pixel-${id}`};
}

export function alterarEstadoPixel(pixelHTML,estado = false) {
  const ligado = {true:'on',false:'off'};
  pixelHTML.setAttribute('class', `pixel pixel-${ligado[estado]}`)
}

export function ligarPixelsAleatorio(pixels = []) {
  let estado = null;
  pixels.forEach((pixel) => {
    estado = Boolean(Math.round(Math.random()));
    alterarEstadoPixel(pixel,estado);
  });
}