const moradores = [{
        nome: "João",
        torre: 1,
        apartamento: 01,
        andar: 0
    },
    {
        nome: "Lucas",
        torre: 1,
        apartamento: 02,
        andar: 0
    },
    {
        nome: "Victória",
        torre: 1,
        apartamento: 11,
        andar: 1
    },{
        nome: "Miguel",
        torre: 1,
        apartamento: 12,
        andar: 1
    },{
        nome: "Alípio",
        torre: 2,
        apartamento: 01,
        andar: 0
    },{
        nome: "Lorena",
        torre: 2,
        apartamento: 02,
        andar: 0
    },{
        nome: "Jairo",
        torre: 2,
        apartamento: 11,
        andar: 1
    },{
        nome: "Jerusa",
        torre: 2,
        apartamento: 12,
        andar: 1
  }];

function listar() {
    const tableBody = document.querySelector("tbody");
    let tabela = moradores.map((morador) => {
        let present = document.createElement("button");
        present.innerHTML = "Presente";
        return `<tr><td>${morador.nome}</td><td><button class="presence-button" value="${morador.nome}">Presente</button></td></tr>`;
    });
    tableBody.innerHTML = tabela.join("");
    const body = document.querySelector("body");
    let button = document.createElement("button");
    button.innerHTML = "Fechar lista";
    body.append(button);
}

function presence() {
    console.log("Foi");
}

listar();



const newList = [];
let buttons = document.querySelectorAll(".presence-button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let name = button.value;
        moradores.forEach((morador) => {
            if (name === morador.nome) {
                newList.push(morador);
            }
        });
    });
})