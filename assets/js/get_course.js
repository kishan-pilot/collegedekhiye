document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("get-course"); // Select form by ID

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values relative to this form only
    const name = form.querySelector("#name")?.value.trim();
    const email = form.querySelector("#email")?.value.trim();
    const phone = form.querySelector("#phone-number")?.value.trim();

    console.log(name + " " + email + " " + phone);

    // Simple validation
    if (!name || !email || !phone) return;

    form.submit(); // Allow form submission
  });
});
