// app.js (na pasta raiz)

const listaDeLinksElemento = document.querySelector('#lista-de-links');

// --- MUDANÇA AQUI ---
// Apague as variáveis do GitHub e adicione esta:
const urlApiLocal = 'http://localhost:3000/api/links';

async function buscarLinks() {
    try {
        // 1. MUDANÇA AQUI: Busca na nossa API local
        const resposta = await fetch(urlApiLocal);

        // 2. MUDANÇA AQUI: Renomeia a variável
        const links = await resposta.json();

        // 3. O loop (ajustado para os nossos dados)
        links.forEach( (link) => {
            const itemDaLista = document.createElement('li');
            const linkElemento = document.createElement('a');

            // 4. MUDANÇA AQUI: Usa 'link.url' e 'link.titulo'
            linkElemento.href = link.url;
            linkElemento.textContent = link.titulo;
            linkElemento.target = "_blank";

            itemDaLista.appendChild(linkElemento);
            listaDeLinksElemento.appendChild(itemDaLista);
        });

    } catch (erro) {
        console.error("Erro ao buscar links:", erro);
        listaDeLinksElemento.textContent = "Não foi possível carregar os links.";
    }
}

// 5. MUDANÇA AQUI: Renomeia a chamada da função
buscarLinks();