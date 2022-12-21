// Cache the elements in variables
const button = document.getElementById("collapse-button");
const collapse = document.getElementById("collapse");

// Initialize the element as collapsed
let isCollapsed = true;
collapse.classList.add("collapsed");
// Use event delegation to handle the click and scroll events
document.addEventListener("click", function(event) {
  // Check if the target element is the button or a descendant of the collapse element
  if (event.target === button || collapse.contains(event.target)) {
    // Toggle the visibility of the element
    toggleCollapse();
  } else {
    // Hide the element if it is not collapsed
    if (!isCollapsed) {
      toggleCollapse();
    }
  }
});

window.addEventListener("scroll", function() {
  // Hide the element if it is not collapsed
  if (!isCollapsed) {
    toggleCollapse();
  }
});

// Define a function to toggle the collapse element
function toggleCollapse() {
  // Use a CSS transition to animate the height of the element
  collapse.classList.toggle("collapsed");
  isCollapsed = !isCollapsed;
}

