// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form feedback
const form = document.querySelector("form");
const button = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  button.textContent = "Sent!";
  button.style.background = "#34d399";
  form.reset();

  setTimeout(() => {
    button.textContent = "Send";
    button.style.background = "#6ee7b7";
  }, 3000);
});
