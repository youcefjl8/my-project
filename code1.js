var plusBtns = document.querySelectorAll(".plus");
var minBtns = document.querySelectorAll(".minus");
var resetBtn = document.querySelectorAll(".fa-trash-alt");
var likeBtns = document.querySelectorAll(".like");
var totalPrice = document.getElementById("total");
var validBtns = document.querySelectorAll(".check");

// total amount
var totalAmount = 0;

// Plus buttons functionality
for (let i = 0; i < plusBtns.length; i++) {
  plusBtns[i].addEventListener("click", inc);
}

function inc(e) {
  var btnPls = e.target;
  var divParent = btnPls.parentElement;
  var quantity = divParent.querySelector("p");
  var quantityValue = Number(quantity.innerHTML);
  quantityValue++;
  quantity.innerHTML = quantityValue;
  updatePrice(e);
}

// Minus buttons
for (let i = 0; i < minBtns.length; i++) {
  minBtns[i].addEventListener("click", dec);
}

function dec(e) {
  var btnMin = e.target;
  var divParent = btnMin.parentElement;
  var quantity = divParent.querySelector("p");
  var quantityValue = Number(quantity.innerHTML);
  if (quantityValue > 0) {
    quantityValue--;
    quantity.innerHTML = quantityValue;
    updatePrice(e);
  }
}

// Reset buttons
for (let i = 0; i < resetBtn.length; i++) {
  resetBtn[i].addEventListener("click", reset);
}

function reset(e) {
  var resetBtn = e.target;
  var WholeCaitainer =
    resetBtn.parentElement.parentElement.parentElement.parentElement;
  WholeCaitainer.remove();
  updateTotal();
}

// Like buttons
for (let i = 0; i < likeBtns.length; i++) {
  likeBtns[i].addEventListener("click", like);
}

function like(e) {
  var likeBtn = e.target;
  if (likeBtn.style.color === "red") {
    likeBtn.style.color = "#424242";
  } else {
    likeBtn.style.color = "red";
  }
}

// Checkbox
for (let i = 0; i < validBtns.length; i++) {
  validBtns[i].addEventListener("click", validFun);
}

function validFun(e) {
  var validBtn = e.target;
  updateTotal();
}

function updatePrice(e) {
  var btn = e.target;
  var divParent = btn.parentElement;
  var quantity = divParent.querySelector("p");
  var quantityValue = Number(quantity.innerHTML);
  var trParent = divParent.parentElement.parentElement;
  var unitPrice = trParent.querySelector(".unitPrice");
  var unitPriceValue = Number(unitPrice.textContent);
  var price = trParent.querySelector(".price");
  price.innerHTML = quantityValue * unitPriceValue;
  updateTotal();
}

// Function to update total amount
function updateTotal() {
  totalAmount = 0;
  var checkboxes = document.querySelectorAll(".check");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      var tr = checkbox.parentElement.parentElement;
      var price = tr.querySelector(".price");
      totalAmount += Number(price.textContent);
    }
  });
  totalPrice.textContent = totalAmount;
}
