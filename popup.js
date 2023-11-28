
// Function to show the popup
function showPopup() {
  // Get the popup element
  var popup = document.getElementById("popup");

  // Show the popup by adding a CSS class
  popup.classList.add("show");
}

// Function to hide the popup
function hidePopup() {
  // Get the popup element
  var popup = document.getElementById("popup");

  // Hide the popup by removing the CSS class
  popup.classList.remove("show");
}
