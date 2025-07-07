document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("send-message"); // Select form by ID

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values relative to this form only
    const name = form.querySelector("#name")?.value.trim();
    const email = form.querySelector("#email")?.value.trim();
    const message = form.querySelector("#message")?.value.trim();

    console.log(name + " " + email + " " + message);

    // Simple validation
    if (!name || !email || !message) return;

    form.submit(); // Allow form submission
  });
});
