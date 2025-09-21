const body = document.querySelector('body');
const bt1 = document.querySelector('.primeira__opcao');
const bt2 = document.querySelector('.segunda__opcao');
const bt3 = document.querySelector('.terceira__opcao');

const texto = document.querySelector("#texto");
const subtitulo = document.querySelector("#subtitulo");
const imagem = document.querySelector('figure img');

bt1.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.href = 'index.html';
});

bt2.addEventListener('click', () => {
    body.style.backgroundImage = 'url(/img/modelo4.svg)';
    imagem.setAttribute('src', './gifs/gifMongo2.gif');
    subtitulo.textContent = "Vantagens do MongoDB";
    texto.textContent = "O MongoDB é o banco de dados que te dá flexibilidade, escalabilidade e performance para criar aplicações modernas sem dor de cabeça. Se você trabalha com grandes volumes de dados, ele é o seu melhor amigo.";
    window.scrollTo({ top: 0, behavior: "smooth" });
});

bt3.addEventListener('click', () => {
    body.style.backgroundImage = 'url(/img/modelo3.svg)';
    imagem.setAttribute('src', './gifs/bedroom-at-night.gif');
    subtitulo.textContent = "Casos de Uso";
    texto.innerHTML = "O MongoDB é ideal para aplicações em tempo real, como catálogos de produtos, redes sociais e sistemas de gerenciamento de conteúdo. Basicamente, ele é o banco de dados que faz com que os desenvolvedores tenham uma boa noite de sono, sabendo que tudo está funcionando perfeitamente. Quer saber mais e ter uma boa noite de sono? Clique aqui e conheça o mundo do MongoDB: <a href='https://www.canva.com/design/DAGzDrHrwk0/IRWB8oXxjjcuh7S2CaU_YA/edit'>clique aqui</a>";
    window.scrollTo({ top: 0, behavior: "smooth" });
});
