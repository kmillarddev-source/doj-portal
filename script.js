function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
}

window.onload = function() {
  showPage("dashboard");

  const search = document.getElementById("caseSearch");

  if (search) {
    search.addEventListener("keyup", function() {
      const filter = this.value.toLowerCase();
      const rows = document.querySelectorAll("#caseTable tr");

      rows.forEach(function(row, index) {
        if (index === 0) return;

        const text = row.textContent.toLowerCase();

        row.style.display = text.includes(filter) ? "" : "none";
      });
    });
  }
};