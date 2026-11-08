const form = document.getElementById("analysisForm");
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3600);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.getElementById("location").value.trim();
  const topic = document.getElementById("topic").value;
  if (!location || !topic) {
    showToast("Please enter a location and choose a research topic.");
    return;
  }
  showToast(`Research plan prepared for ${location} · ${topic}. Backend integration is the next step.`);
});

menuToggle.addEventListener("click", () => sidebar.classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    sidebar.classList.remove("open");
  });
});

document.getElementById("layersButton").addEventListener("click", () => {
  showToast("Map layers will be available after connecting a live map and geospatial datasets.");
});
