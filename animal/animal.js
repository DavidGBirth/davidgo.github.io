function setText(type, local, text) {
    let x = document.createElement(type);
    x.innerHTML = text;
    document.querySelector(local).appendChild(x);
}

function createImage(local, locationFile) {
    let x = document.createElement("img");
    x.src = locationFile;
    document.querySelector(local).appendChild(x);
}

function createListItem(text) {
    let x = document.createElement("li");
    let y = document.createElement("a");
    y.textContent = text;
    y.href = text;
    x.appendChild(y);
    document.querySelector("ul").appendChild(x);
}

function fillHeader() {
    const local = "header";
    setText("h1", local, "Lobos");
}

function fillMain() {
    const local = "main";
    setText("h2", local, "Lobo-cinzento");
    createImage(local, "lobo-cinzento.jpeg");
    setText("h3", local, "Descrição");
    setText("p", local, "O lobo (também chamado de lobo-cinzento; nome científico: Canis lupus) é uma espécie de mamífero canídeo do gênero Canis. É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás. É o maior membro remanescente selvagem da família canidae. O sequenciamento de DNA e estudos genéticos reafirmam que o lobo-cinzento é ancestral do cão doméstico (Canis lupus familiaris), contudo alguns aspectos desta afirmação têm sido questionados recentemente. Uma série de outras subespécies do lobo-cinzento foram identificadas, embora o número real de subespécies ainda esteja em discussão. Os lobos-cinzentos são tipicamente predadores ápice nos ecossistemas que ocupam.");
    setText("h3", local, "Localização");
    setText("p", local, "Embora não sejam tão adaptáveis à presença humana como geralmente ocorre com as demais espécies de canídeos, os lobos se desenvolveram em diversos ambientes, como florestas temperadas, desertos, montanhas, tundras, taigas, campos e até mesmo em algumas áreas urbanas.");

    setText("h2", local, "Lobo-árabe");
    createImage(local, "lobo-arabe.jpeg");
    setText("h3", local, "Descrição");
    setText("p", local, "O lobo-árabe (Canis lupus arabs) é uma subespécie do lobo. É menor que o seu parente euroasiático e americano. Possui um pelo de dimensões mais reduzidas, com uma coloração bege-acinzentada. Como a maioria dos lobos, têm uma aparência magra. Não convivem em alcateias grandes, caçando normalmente aos pares ou em grupos de três ou quatro animais. Os seus olhos são amarelos, embora alguns possam ter olhos de cor castanha, uma indicação que os seus antepassados podem ter-se cruzado com cães selvagens. Este último detalhe poderá ser um factor de ameaça para a sobrevivência da subespécie.");
    setText("h3", local, "Localização");
    setText("p", local, "Anteriormente, a sua área de distribuição compreendia parte significativa da Península arábica. Atualmente encontra-se restrito a pequenas regiões em Israel, Oman, Iémen, Jordânia e Arábia Saudita");

    setText("h2", local, "Lobo-guará");
    createImage(local, "lobo-guara.jpeg");
    setText("h3", local, "Descrição");
    setText("p", local, "O lobo-guará (nome científico: Chrysocyon brachyurus), também chamado guará, aguará, aguaraçu, lobo-de-crina, lobo-de-juba e lobo-vermelho, é uma espécie de canídeo endêmico da América do Sul e único integrante do gênero Chrysocyon. Provavelmente, a espécie vivente mais próxima é o cachorro-vinagre (Speothos venaticus).");
    setText("h3", local, "Localização");
    setText("p", local, "Ocorre em savanas e áreas abertas no centro do Brasil, Paraguai, Argentina e Bolívia, sendo um animal típico do Cerrado. Foi extinto em parte de sua ocorrência ao sul, mas ainda deve ocorrer no Uruguai. No dia 29 de julho de 2020 o lobo-guará foi escolhido para simbolizar a cédula de duzentos reais.");
}

function fillSection() {
    const local = "section";
    setText("h2", local, "Referência Bibliográficas");
    const l = document.createElement("ul");
    document.querySelector(local).appendChild(l);
    createListItem("https://pt.wikipedia.org/wiki/Lobo");
    createListItem("https://pt.wikipedia.org/wiki/Lobo-%C3%A1rabe");
    createListItem("https://pt.wikipedia.org/wiki/Lobo-guar%C3%A1");
}

fillHeader();
fillMain();
fillSection();