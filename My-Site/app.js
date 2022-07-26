import { changeText, changeColors } from "./modules.js";

const header = document.getElementById("myHeader");
const callToAction = document.getElementsByClassName("cta");

changeText(callToAction[0], "Call Me!");
changeColors(header);
