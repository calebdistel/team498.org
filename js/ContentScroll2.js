// Add a scroll event listener
let lastScroll1 = 0;
let newScroll1 = 0;
  export function updateContent1(content1, bars1) {
    // Get the position and dimensions of the content in the viewport
    var rect1 = content1.getBoundingClientRect();

    // Get the current scroll position
    var scrollPosition1 = window.scrollY;
    // Calculate the distance of the content from the center of the viewport
    var location1 = rect1.top + scrollPosition1 - 100;
    var top1 = rect1.top - 100;
    var distance1 = scrollPosition1 - (top1) - window.innerHeight + 100;
    var isInactive1 = Math.abs(newScroll1 - lastScroll1) < 5;
    window.addEventListener("scroll", function() {
        
        newScroll1 = window.scrollY;
        // Get the position and dimensions of the content in the viewport
        rect1 = content1.getBoundingClientRect();
        // Get the current scroll position
        scrollPosition1 = window.scrollY;
        // Calculate the distance of the content from the center of the viewport
        location1 = rect1.top + scrollPosition1 - 66;
        top1 = rect1.top - 66;
        distance1 = scrollPosition1 - (top1) - window.innerHeight + 66;
        var scaleVal1 = (distance1 >= 0) ? 'scaleX(0.4)' : 'scaleX(0.2)';
        bars1.forEach(bar1 => {
            bar1.style.transform = scaleVal1;
        });
        console.log("distance1: " + distance1);
    });
    
    setInterval(function() {
        isInactive1 = Math.abs(newScroll1 - lastScroll1) < 0.1;
        if(Math.abs(distance1) <= 100 && isInactive1) { 
            setTimeout(autoScroll1, 100, location1);
        }
        lastScroll1 = newScroll1;
    }, 1000);
}
function autoScroll1(location1) {
    window.scrollTo({
        top: location1,
        behavior: 'smooth',
    });
}