function createDiv() {
    const x = document.createElement("div");
    return x;
}

function createInfo() {
    const y = createDiv();
    y.setAttribute("class", "info");
    let z = document.createElement("img");
    z.src = "user.svg";
    y.appendChild(z);
    z = document.createElement("span");
    z.innerHTML = document.getElementById("nome").value;
    y.appendChild(z);
    return y;
}

function post() {
    let x = createDiv();
    x.setAttribute("class", "text-comment");
    let y = createInfo();
    x.appendChild(y)
    let z = document.createElement("p");
    z.innerHTML = document.getElementById("comments").value;
    x.appendChild(z);
    document.querySelector(".postation").appendChild(x);
}