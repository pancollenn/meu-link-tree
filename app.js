// app.js

// 1. DADOS (O "Back-end Falso")
// Uma lista (array) de objetos. Cada objeto é um link.
const meusLinks = [
    {
        titulo: "Meu Portfólio",
        url: "httpss://seu-portfolio.com"
    },
    {
        titulo: "Meu GitHub",
        url: "httpss://github.com/seu-usuario"
    },
    {
        titulo: "Meu LinkedIn",
        url: "httpss://linkedin.com/in/seu-usuario"
    }
];

// 2. ACHAR O ELEMENTO HTML (O "Alvo")
// Usamos o 'document.querySelector' para selecionar o elemento pelo seu ID
const listaDeLinksElemento = document.querySelector('#lista-de-links');

// 3. A LÓGICA (O "Manipulador do DOM")
// Vamos usar um loop (forEach) para passar por cada item da nossa lista 'meusLinks'
meusLinks.forEach( (link) => {
    
    // Para cada item, vamos criar os elementos HTML
    
    // a. Cria um item de lista <li>
    const itemDaLista = document.createElement('li');
    
    // b. Cria um link <a>
    const linkElemento = document.createElement('a');
    
    // c. Define os atributos do link
    linkElemento.href = link.url;         // O destino (ex: https://github.com...)
    linkElemento.textContent = link.titulo; // O texto (ex: "Meu GitHub")
    linkElemento.target = "_blank";       // Opcional: abre em nova aba
    
    // d. Monta a estrutura: Coloca o <a> DENTRO do <li>
    itemDaLista.appendChild(linkElemento);
    
    // e. Adiciona o <li> (já com o link dentro) na <ul> do HTML
    listaDeLinksElemento.appendChild(itemDaLista);
});