// server.js (dentro da pasta backend/)

const express = require('express');
const cors = require('cors'); // Importa o 'cors'

const app = express();
const port = 3000;

// *** ATIVA O CORS ***
// Isso permite que nosso front-end (index.html)
// faça requisições para este servidor.
app.use(cors());

// --- DADOS FALSOS (Nosso "banco de dados" temporário) ---
// Exatamente os dados que usamos no front-end na Semana 3
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
    },
    {
        titulo: "Projeto Secreto (Shh!)",
        url: "#"
    }
];
// --------------------------------------------------------

// Rota raiz (/) - Opcional, para testes
app.get('/', (req, res) => {
    res.send('Servidor da API de Links está no ar!');
});

// *** NOSSA NOVA ROTA DE API ***
// Esta é a URL que nosso front-end vai chamar
app.get('/api/links', (req, res) => {
    // Em vez de 'res.send' (texto), usamos 'res.json'
    // para enviar os dados em formato JSON.
    res.json(meusLinks);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});