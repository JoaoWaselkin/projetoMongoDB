/* Seleciona os 3 itens da lista */
const primeira = document.querySelector(".primeira__opcao");
const segunda = document.querySelector(".segunda__opcao");
const terceira = document.querySelector(".terceira__opcao");

/* Função para mudar posição aleatória do blob */
function mudarBlobPosicao() {
    const x = Math.floor(Math.random() * 101); // entre 0 e 100%
    const y = Math.floor(Math.random() * 101);
    document.body.style.backgroundPosition = `${x}% ${y}%`;
}

/* Executa quando a página carrega */
window.addEventListener("DOMContentLoaded", () => {
    mudarBlobPosicao();
});

/* Adiciona eventos de clique para cada um */
primeira.addEventListener("click", () => {
    window.location.href = "paginaDois.html"; 
});

segunda.addEventListener("click", () => {
    window.location.href = "paginaTres.html";
});

terceira.addEventListener("click", () => {
    window.location.href = "paginaQuatro.html";
});
