const element = document.querySelector("nav");
const titles = document.querySelectorAll(".title");
const current = document.querySelectorAll(".current");
const img = document.querySelector(".logo");
update();
window.addEventListener("scroll", function() {
    update();
});
function update() {
    var isTop = (window.scrollY < 10);
    var border = (isTop) ? "#979CA5f7 solid 4px" : "#979CA5b3 solid 1px";
    var font = (isTop) ? "40px" : "40px";//46
    var imgSize = (isTop) ? "45px" : "45px";//50
    var navHeight = (isTop) ? "65px" : "65px";//70
    element.style.height = navHeight;
    element.style.borderBottom = border;
    titles.forEach(function(title) {
        title.style.fontSize = font;
    });
    current.forEach(function(cur) {
        cur.style.fontSize = font;
    });
    img.style.height = imgSize;
}