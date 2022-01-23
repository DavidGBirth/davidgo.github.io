let z = document.querySelector("section");
z.style.background = "lightblue";

let x = document.querySelector("img[src='queen.jpg']");
x.width = "184";
x.height = "274";

const l = document.querySelectorAll("ol li");
const colors = ["#E50000", "#FF8D00", "#FFEE00", "#028121", "#004CFF", "#770088"];
for (let i = 0; i < l.length; i++) {
    l[i].style.color = colors[i];
}