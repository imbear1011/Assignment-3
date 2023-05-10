"use strict";
function checkEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".btn-primary").addEventListener("click", function () {
  const email = document.querySelector(".email").value;
  checkEmail(email);
  if (!email) {
    displayMessage("Bạn chưa nhập email");
  } else if (checkEmail(email) === true) {
    document.querySelector(".xac-nhan").classList.add("hidden");
    document.querySelector(".thong-tin-ca-nhan").classList.remove("hidden");
  } else if (checkEmail(email) === false) {
    displayMessage("Bạn đã nhập sai cú pháp. Hãy nhập lại!");
  }
});

const cheDoXem = function (num) {
  if (document.querySelector(`.content-${num}`).classList.contains("hidden")) {
    document.querySelector(`.view-${num}`).textContent = "VIEW LESS";
  } else {
    document.querySelector(`.view-${num}`).textContent = "VIEW MORE";
  }
  document.querySelector(`.content-${num}`).classList.toggle("hidden");
};

const btnsOpenModal = document.querySelectorAll(".view");

btnsOpenModal[0].addEventListener("click", function () {
  let num = 0;
  cheDoXem(num);
});
btnsOpenModal[1].addEventListener("click", function () {
  let num = 1;
  cheDoXem(num);
});
btnsOpenModal[2].addEventListener("click", function () {
  let num = 2;
  cheDoXem(num);
});
btnsOpenModal[3].addEventListener("click", function () {
  let num = 3;
  cheDoXem(num);
});
btnsOpenModal[4].addEventListener("click", function () {
  let num = 4;
  cheDoXem(num);
});
btnsOpenModal[5].addEventListener("click", function () {
  let num = 5;
  cheDoXem(num);
});
