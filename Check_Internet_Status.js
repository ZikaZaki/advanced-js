
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
/** *************************************************** */
// Correct way: Request a small image at an interval to determine status
const checkOnlineStatus = async () => {
  try {
    // const online = await fetch("/1pixel.png");
    const online = await fetch("http://placekitten.com/g/2/3");
    return online.status >= 200 && online.status < 300;
  } catch (err) {
    return false; // definitely offline
  }
}
