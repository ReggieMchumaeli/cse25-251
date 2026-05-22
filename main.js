document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll(".nav-bracket");
  navLinks.forEach(function (link) {
    if (href === currentPage) link.classList.add("active");
  });
  // mobile [ Menu ] toggle ...
});

function handleFormSubmit(formId, successId) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { /* show errors */ return; }
    success.classList.remove("d-none");
    form.reset();
  });
}