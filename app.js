// app.js

// 1. ACHAR O ELEMENTO HTML (O "Alvo")
const listaDeLinksElemento = document.querySelector('#lista-de-links');

// 2. OS DADOS (A "API")
const usuarioGitHub = 'pancollenn'; 
const urlApiGitHub = `https://api.github.com/users/${usuarioGitHub}/repos?sort=created&direction=desc`;

// 3. A LÓGICA (A "Função Assíncrona")

// Marcamos a função com 'async' para poder usar 'await' dentro dela
async function buscarRepositorios() {
    
    // O 'try...catch' é para capturar erros (ex: API offline, usuário não existe)
    try {
        // a. AWAIT: "Espere" o fetch (busca) terminar e nos dar uma resposta
        const resposta = await fetch(urlApiGitHub);
        
        // b. AWAIT: "Espere" a resposta ser transformada em JSON (um formato que o JS entende)
        const repositorios = await resposta.json();
        
        // c. Pega apenas os 5 repositórios mais recentes
        const repositoriosRecentes = repositorios.slice(0, 3);

        // d. O loop para renderizar (igual ao que fizemos antes)
        repositoriosRecentes.forEach( (repo) => {
            const itemDaLista = document.createElement('li');
            const linkElemento = document.createElement('a');
            
            linkElemento.href = repo.html_url;    // Link para o repositório
            linkElemento.textContent = repo.name; // Nome do repositório
            linkElemento.target = "_blank";
            
            itemDaLista.appendChild(linkElemento);
            listaDeLinksElemento.appendChild(itemDaLista);
        });

    } catch (erro) {
        // Se algo der errado (ex: internet caiu, API falhou)
        console.error("Erro ao buscar repositórios:", erro);
        listaDeLinksElemento.textContent = "Não foi possível carregar os projetos.";
    }
}

// 4. CHAMAR A FUNÇÃO
// Inicia todo o processo
buscarRepositorios();