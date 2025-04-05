import "./css/style.css";

var coll = document.querySelector(".collapsible");

coll.addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
        content.style.display = "none";
    } else {
        content.style.display = "flex";
    }
});
