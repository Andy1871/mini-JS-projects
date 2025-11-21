const collapseBtn = document.querySelector(".collapse-btn");
const sidebarContainer = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");


collapseBtn.addEventListener("click", () => {
  sidebarContainer.classList.toggle("collapsed");
  updateCollapsedLabels();
});

function updateCollapsedLabels() {
  const isCollapsed = sidebarContainer.classList.contains("collapsed");

  document.querySelectorAll(".sidebar-links li a").forEach((a) => {
    const section = a.closest(".sidebar-section");
    const heading = section.querySelector(".section-head").textContent;
    const label = a.querySelector(".label").textContent;

    if (isCollapsed) {
      a.setAttribute("title", `${heading} - ${label}`);
    } else {
      a.removeAttribute("title");
    }
  });
}

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    sidebarLinks.forEach((l) => l.classList.remove("active"));

    link.classList.add("active");

    const badge = link.querySelector('.badge')
    if(badge) {
        badge.remove()
        alert('Notifications removed')
    }
  });
});

