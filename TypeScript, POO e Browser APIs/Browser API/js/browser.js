const botaoAumentar = document.querySelector("section button#aumentar-botao");
const botaoDiminuir = document.querySelector("section button#diminuir-botao");

const contador = document.querySelector("#contador");

const input = document.querySelector("#input");

botaoAumentar.addEventListener("click", (event) => {
    const valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual + 1;
    botaoAumentar.classList.add("btn");
    botaoDiminuir.classList.remove("btn");
});

botaoDiminuir.addEventListener("click", (event) => {
    const valorAtual = Number(contador.textContent);
    if (valorAtual > 0) {
        contador.textContent = valorAtual - 1;
        botaoDiminuir.classList.add("btn");
        botaoAumentar.classList.remove("btn");
    }
})

input.addEventListener('input', () => {
    console.clear();
    console.log(input.value);
})


const themeButton = document.querySelector('#theme');

let darkTheme;

// Definindo uma função que será executada ao carregar o conteúdo da página/janela
window.onload = () => {
    const isDarkThemeStorage = localStorage.getItem('isDarkTheme');
    darkTheme = isDarkThemeStorage === 'true' ? true : false;


    const body = document.querySelector('body');
    
    if (darkTheme == true) {
        body.style.backgroundColor = "#212121";
        body.style.color = "#FEFEFE";
    }

    if (darkTheme == false) {
        body.style.backgroundColor = "#FEFEFE";
        body.style.color = "#212121";
    }

}


themeButton.addEventListener('click', () => {

    darkTheme = !darkTheme;

    localStorage.setItem('isDarkTheme', darkTheme);

    if (darkTheme == true) {
        const body = document.querySelector('body');
        body.style.backgroundColor = "#212121";
        body.style.color = "#FEFEFE";
    }

    if (darkTheme == false) {
        const body = document.querySelector('body');
        body.style.backgroundColor = "#FEFEFE";
        body.style.color = "#212121";
    }

    
})