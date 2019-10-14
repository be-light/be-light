/* Get Element */
const modal: HTMLElement = document.getElementById("loginModal");
const modalBtn: HTMLElement = document.getElementById("modalBtn");

/* Open Modal Event */
modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

/* Click Outside and Close */
window.addEventListener("click", evt => {
  if (evt.target === modal) modal.style.display = "none";
});

/* Close Modal Event */
