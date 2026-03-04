function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "Fullstack Web Developer",
    "Software Engineer",
    "Web Designer"
  ];

  let index = 0;
  const textElement = document.getElementById("changing-text");

  function changeRole() {
    textElement.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % roles.length;
      textElement.textContent = roles[index];

      textElement.classList.remove("fade-out");
    }, 500);
  }

  setInterval(changeRole, 3000);
});



