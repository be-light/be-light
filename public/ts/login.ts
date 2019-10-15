import Axios from "axios";
import * as Cookies from "js-cookie";

/* Get Element */
const body: HTMLElement = document.querySelector("body");

const modal: HTMLElement = document.getElementById("loginModal");
const modalBtn: HTMLElement = document.querySelector(".header__menu--login");
const closeBtn: HTMLElement = document.querySelector(".closeBtn");
const contents: HTMLElement = document.querySelector("#contents");

const loginForm: HTMLFormElement = document.querySelector(".loginForm");
const loginFooter: HTMLElement = document.querySelector(".login__footer");
const loginLink: HTMLElement = document.querySelector(".login--link");
const loginButton: HTMLButtonElement = document.querySelector(".loginButton");

const registerFooter: HTMLElement = document.querySelector(".register__footer");
const registerForm: HTMLFormElement = document.querySelector(".registerForm");
const registerLink: HTMLElement = document.querySelector(".register--link");
const registerButton: HTMLButtonElement = document.querySelector(
  ".registerButton"
);

const navTitle: HTMLElement = document.querySelector(
  ".modal__nav__header--title"
);

/* Hide Register Form */
registerForm.style.display = "none";
registerFooter.style.display = "none";

/* Open Register Form Event */
registerLink.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  registerLink.innerText = "Login";
  navTitle.innerText = "Register";
  loginFooter.style.display = "none";
  registerFooter.style.display = "block";
});

/* Open Login Event */
loginLink.addEventListener("click", () => {
  initializeModal();
});

/* Open Modal Event */
modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  contents.style.opacity = "0.5";
});

/* Click Outside and Close */
window.addEventListener("click", evt => {
  if (evt.target === body) {
    closeModalEvent();
    initializeModal();
  }
});

/* Close Modal Event */
closeBtn.addEventListener("click", () => {
  closeModalEvent();
  initializeModal();
});

/* Close Modal Event Function */
const closeModalEvent = () => {
  modal.style.display = "none";
};

/* Initialize Modal Function */
const initializeModal = () => {
  contents.style.opacity = "1.0";
  registerForm.style.display = "none";
  registerLink.innerText = "Register now";
  navTitle.innerText = "Login";
  loginForm.style.display = "block";
  registerFooter.style.display = "none";
  loginFooter.style.display = "block";
};

/* Login Submit Function */
loginButton.addEventListener("click", () => {
  const form = new FormData(loginForm);
  Axios({
    method: "POST",
    url: "/api/auth/login",
    data: form,
    headers: { "Content-Type": "multipart/form-data" }
  })
    .then(response => {
      return response.data;
    })
    .then(result => {
      if (result.status === 200) {
        location.href = "/";
      } else {
        alert("ID or Password is not valid.");
      }
    });
});

export declare const PUBLIC_USER = "whatever";
