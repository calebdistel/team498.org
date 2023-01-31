// Get the scroll position element
var element = document.querySelectorAll(".banner");
var start = 0;
var end = 500;
// Update the scroll position when the window is scrolled
window.addEventListener("scroll", function() {
    var range = end - start;
    var o = 1 - ((window.scrollY) / range);
    var margin = 100 * ((window.scrollY + start) / range);
    element.style.opacity = o;
    element.style.marginLeft = margin;
});