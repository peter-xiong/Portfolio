function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}

function changeColors(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

export { changeText, changeColors };
