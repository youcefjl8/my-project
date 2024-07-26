document.getElementById("mobile-menu").addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("active");
});

document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Check if the username and password are "admin"
    if (username === "admin" && password === "admin") {
      // Redirect to another page
      window.location.href = "index1.html"; // Replace with your target URL
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password.";
    }
  });
