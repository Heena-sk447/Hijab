let aw1 = document.querySelector(".aw1");
let s1 = document.querySelector("section");
let c = document.querySelector(".contain2");
aw1.addEventListener("click", (e) => {
  s1.style.display = "block";
  c.style.display = "none";
});
// console.log("hii");

let logButton = document.querySelector(".cbtn");
let c2 = document.querySelector(".contain3");
logButton.addEventListener("click", (e) => {
  c2.style.display = "block";
  c.style.display = "none";
  user.style.display = "block";
  logIn.style.display = "none";
});
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  c2.style.display = "block";
  s1.style.display = "none";
});
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn2");
let card2 = document.querySelector(".card2");
btn.addEventListener("click", (e) => {
  card2.style.display = "flex";
  btn1.style.display = "block";
  btn.style.display = "none";
});
btn1.addEventListener("click", (e) => {
  card2.style.display = "none";
  btn.style.display = "block";
  btn1.style.display = "none";
});

let logIn = document.querySelector(".login1");
let user = document.querySelector(".fa-user");
logIn.addEventListener("click", (e) => {
  logIn.style.display = "none";
  c.style.display = "flex";
  c2.style.display = "none";
  user.style.display = "block";
});

let secon = document.querySelector(".secon");
let secon1 = document.querySelector(".secon2");
secon.addEventListener("mouseover", (e) => {
  secon.style.display = "none";
  secon1.style.display = "block";
  secon1.style.width = "100%";
});
secon1.addEventListener("mouseout", (e) => {
  secon1.style.display = "none";
  secon.style.display = "block";
});
