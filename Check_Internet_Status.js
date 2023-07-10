
// The solution with navigator.online
// Simple but has a problem...
window.addEventListener("load", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = navigator.online ? "Online" : "Offline";
});

window.addEventListener("offline", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = "Offline";
});

window.addEventListener("online", (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = "Online";
});
