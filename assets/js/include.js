// Laddar in header och footer
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header-placeholder", "header.html");
  includeHTML("footer-placeholder", "footer.html");
});

function includeHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("File not found");
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error("Include error:", error));
}
