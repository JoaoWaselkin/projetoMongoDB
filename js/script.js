const body = document.querySelector('body');
const bt1 = document.querySelector('.primeira__opcao');
const bt2 = document.querySelector('.segunda__opcao');
const bt3 = document.querySelector('.terceira__opcao');

const texto = document.querySelector("#texto");
const subtitulo = document.querySelector("#subtitulo");
const imagem = document.querySelector('figure img');

bt1.addEventListener('click', () => {
    window.location.href = 'index.html';
});

bt2.addEventListener('click', () => {
    body.style.backgroundImage = 'url(/img/modelo4.svg)';
    imagem.setAttribute('src', './gifs/gifMongo2.gif');
    subtitulo.textContent = "Vantagens do MongoDB";
    texto.textContent = "O MongoDB oferece flexibilidade, escalabilidade e desempenho para aplicações modernas com grandes volumes de dados.";
});

bt3.addEventListener('click', () => {
    body.style.backgroundImage = 'url(/img/modelo5.svg)';
    imagem.setAttribute('src', './gifs/bedroom-at-night.gif');
    subtitulo.textContent = "Casos de Uso";
    texto.textContent = "É ideal para aplicações em tempo real, como catálogos de produtos, redes sociais e sistemas de gerenciamento de conteúdo.";
});