function changeColors(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function changeText(domElement, text) {
  domElement.innerHTML = text;
}

export { changeText, changeColors };
