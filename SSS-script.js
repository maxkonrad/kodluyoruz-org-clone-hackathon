function dorpdownMenuFunction() {
var x = document.getElementById("myNav");
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}
}

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.style.borderLeft = "none";
      this.style.color = "#444";
    } else {
      panel.style.display = "block";
      this.style.borderLeft = "3px solid #faa25c";
      this.style.color = "#faa25c";
    }
  });
}