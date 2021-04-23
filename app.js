const close = document.getElementById("close");
const popep = document.querySelector(".popup")

close.addEventListener("click",function(){
    popep.setAttribute("style", "display: none;")
})