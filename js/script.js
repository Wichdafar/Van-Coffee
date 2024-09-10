// Toggle class active untuk humbergermenu
const navbarNav = document.querySelector(".navbar-nav");
// ketika humberger menu di click
document.querySelector("#hamberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Togel class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// togel class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-bag-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// click diluar side barr
const hm = document.querySelector("#hamberger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-bag-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal1 = document.querySelector("#item-detail-modal1");
const itemDetailButton1 = document.querySelector(".item-detail-button1");
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButton2 = document.querySelector(".item-detail-button2");
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButton3 = document.querySelector(".item-detail-button3");

itemDetailButton1.onclick = (e) => {
  itemDetailModal1.style.display = "flex";
  e.preventDefault();
};
itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
};
itemDetailButton3.onclick = (e) => {
  itemDetailModal3.style.display = "flex";
  e.preventDefault();
};

// Click Tombol Close
document.querySelector("#close-modal-button1").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};
document.querySelector("#close-modal-button2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};
document.querySelector("#close-modal-button3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

// Click Di Luar Modal
window.onclick = (e) => {
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = "none";
  }
  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  }
  if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = "none";
  }
};
