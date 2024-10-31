"use strict";
const fname = document.querySelector(".input-fname");
const lname = document.querySelector(".input-lname");
const email = document.querySelector(".input-email");
const password = document.querySelector(".input-password");
const button = document.querySelector(".claim-btn");

const errorMsg1 = document.querySelector(".error-msg-1");
const errorIcon1 = document.querySelector(".error-icon-1");

const errorMsg2 = document.querySelector(".error-msg-2");
const errorIcon2 = document.querySelector(".error-icon-2");

const errorMsg3 = document.querySelector(".error-msg-3");
const errorIcon3 = document.querySelector(".error-icon-3");

const errorMsg4 = document.querySelector(".error-msg-4");
const errorIcon4 = document.querySelector(".error-icon-4");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const fnameValue = fname.value;
  const lnameValue = lname.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log(fnameValue, lnameValue, emailValue, passwordValue);

  const checkFunction = function (fnameValue) {
    if (fnameValue === "") {
      fname.classList.add("active");
      errorMsg1.classList.remove("hidden");
      errorIcon1.classList.remove("hidden");
    } else {
      fname.classList.remove("active");
      errorMsg1.classList.add("hidden");
      errorIcon1.classList.add("hidden");
    }
  };
  const checkFunction1 = function (lnameValue) {
    if (lnameValue === "") {
      lname.classList.add("active");
      errorMsg2.classList.remove("hidden");
      errorIcon2.classList.remove("hidden");
    } else {
      lname.classList.remove("active");
      errorMsg2.classList.add("hidden");
      errorIcon2.classList.add("hidden");
    }
  };
  const checkFunction2 = function (emailValue) {
    console.log(emailValue);
    if (emailValue === "") {
      email.classList.add("active");
      errorMsg3.classList.remove("hidden");
      errorIcon3.classList.remove("hidden");
    } else {
      email.classList.remove("active");
      errorMsg3.classList.add("hidden");
      errorIcon3.classList.add("hidden");
    }
    //   window.location.reload();
  };
  const checkFunction3 = function (passwordValue) {
    if (passwordValue === "") {
      password.classList.add("active");
      errorMsg4.classList.remove("hidden");
      errorIcon4.classList.remove("hidden");
    } else {
      password.classList.remove("active");
      errorMsg4.classList.add("hidden");
      errorIcon4.classList.add("hidden");
      //   window.location.reload();
    }
  };
  checkFunction(fnameValue);
  checkFunction1(lnameValue);
  checkFunction2(emailValue);
  checkFunction3(passwordValue);

  if (
    fnameValue !== "" &&
    lname !== "" &&
    emailValue !== "" &&
    passwordValue !== ""
  ) {
    alert(`
      First Name :${fnameValue}
      Last Name:${lnameValue}
      Email:${emailValue}
      password:${passwordValue}`);
    window.location.reload();
  }

  //   if (
  //     fnameValue === "" ||
  //     lnameValue === "" ||
  //     emailPattern.test(emailValue) ||
  //     passwordValue === ""
  //   ) {
  //     fname.classList.add("active");
  //     errorMsg1.classList.remove("hidden");
  //     errorIcon1.classList.remove("hidden");

  //     lname.classList.add("active");
  //     errorMsg2.classList.remove("hidden");
  //     errorIcon2.classList.remove("hidden");

  //     email.classList.add("email-active");
  //     errorMsg3.classList.remove("hidden");
  //     errorIcon3.classList.remove("hidden");

  //     password.classList.add("email-active");
  //     errorMsg4.classList.remove("hidden");
  //     errorIcon4.classList.remove("hidden");
  //   } else {
  //     window.location.reload();
  //   }
});
