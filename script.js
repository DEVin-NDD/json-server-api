const BASE_URL = 'http://localhost:8080';

const fetchApi = async (url, metodo,body) => {
    const response = await fetch(`${BASE_URL}/${url}`, {
        method: metodo,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: json.stringify(body);
    });

    if (response.ok) {
        return await response.json();
    }

    console.log('Deu erro');
};

const carregaProdutos = async () => {
    const data = await fetchApi('produtos', 'GET');
    if (data) {
        const lista = document.getElementById('lista');

        data.forEach((produto) => {
            const el = document.createElement('li');
            el.innerText = produto.nome;
            el.onclick = () => carregaProduto(produto.id);
            lista.appendChild(el);
        });
    }
};
const carregaProduto = async (id) => {
    const data = await fetchApi(`produtos/${id}`, 'GET');
    if (data) {
        const detalhes = document.getElementById('detalhes');
        detalhes.innerHTML = '';

        const divider = document.createElement('hr');
        const title = document.createElement('h1');
        const subtitle = document.createElement('p');

        title.innerText = data.nome;
        subtitle.innerText = data.descricao;

        detalhes.appendChild(divider);
        detalhes.appendChild(title);
        detalhes.appendChild(subtitle);
    }
};

const adicionarProduto = async () => {
    const nome = document.getElementById('nome');

    const produto = {
        nome: nome,
        descricao:
        preco:
    }
}