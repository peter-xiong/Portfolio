import { changeText, changeColors } from "./modules.js";

const header = document.getElementById("myHeader");
const callToAction = document.getElementById("cta");

header.addEventListener("click", () => {
  changeColors(header);
});

callToAction.addEventListener("mouseover", () => {
  changeText(callToAction, "Call Me!");
});
