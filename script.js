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
    // fade out + slide down
    textElement.style.opacity = "0";
    textElement.style.transform = "translateY(10px)";

    setTimeout(() => {
      index = (index + 1) % roles.length;
      textElement.textContent = roles[index];

      // reset position above
      textElement.style.transform = "translateY(-10px)";

      setTimeout(() => {
        // fade in + slide to normal
        textElement.style.opacity = "1";
        textElement.style.transform = "translateY(0)";
      }, 50);

    }, 400);
  }

  setInterval(changeRole, 2500);
});



