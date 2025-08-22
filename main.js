// Get the menu button, nav links container, and the icon inside the button
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

//  Toggle navigation menu open/close when menu button is clicked
menuBtn.addEventListener("click", (e) => {
  // Add/remove the "open" class on nav links (controls visibility in CSS)
  navLinks.classList.toggle("open");

  // Check if the nav is currently open
  const isOpen = navLinks.classList.contains("open");

  // Change the button icon depending on state
  // If open → show close icon, else → show menu (hamburger) icon
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

//  When any nav link is clicked → close the menu automatically
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  // Reset the icon back to menu (hamburger)
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

// Initialize ScrollReveal
const sr = ScrollReveal();

// Use it on elements
sr.reveal(".header_img img", {
  ...scrollRevealOption,
  origin: "right",
});
sr.reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 500,
});
sr.reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
sr.reveal(".header_btns", {
  ...scrollRevealOption,
  delay: 1500,
});

sr.reveal(".destination_card", {
  ...scrollRevealOption,
  interval: 500,
});
