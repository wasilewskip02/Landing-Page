const btn = document.querySelector(".btn");
const trailer = document.querySelector(".trailer");
trailer.style.display = "none";
function show(){
    trailer.style.display = "block";
}
btn.addEventListener("click", show);