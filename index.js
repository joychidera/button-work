const btnEI = document.querySelector(".btn");

btnEI.addEventListener("mouseover",(event)=>{
const x = (event.pagex - btnEI.offsetLeft);
const y = (event.pagey - btnEI.offsetTop);
btnEI.style.setProperty("--xpos",x + "px")
btnEI.style.setProperty("--ypos",y + "px")
});