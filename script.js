function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const roles = [
  "Fullstack Web Developer",
  "Software Engineer",
  "Web Designer"
];

let index = 0;
const textElement = document.getElementById("changing-text");

function changeRole() {
  index = (index + 1) % roles.length;
  textElement.textContent = roles[index];
}

setInterval(changeRole, 2000);


