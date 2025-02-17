// Selecionar elementos HTML da nossa página utilizando o document

const todosP = document.getElementsByTagName("p");
console.log(todosP);

// 2. Pelo nome da Classe
const todosClassesParagrafo = document.getElementsByClassName("paragrafo");
console.log(todosClassesParagrafo);

// 3. Pelo nome da tag
const emailInput = document.getElementsByName("email");
console.log(emailInput);

// 4. Pelo id da tag

const imgLogo = document.getElementById("imgLogo");
console.log(imgLogo);

// 5. Query Selector
const imagem = document.querySelector("body > img#imgLogo");
console.log(imagem);

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

console.clear()

// Acessando/alterando o conteúdo das Tags

const primeiroParagrafo = document.querySelector("p.paragrafo");

console.log(primeiroParagrafo);

console.log("textContent:", primeiroParagrafo.textContent);
console.log("innerHTML:", primeiroParagrafo.innerHTML);

primeiroParagrafo.innerHTML = `<strong>Outra coisa</strong>`;

console.clear()

emailInput[0].value = "gustavo@gmail.com";

// Criando elementos na página HTML

const listaUl = document.querySelector("ul#lista");
const listaLis = document.querySelectorAll("ul > li");

const novaTagLi = document.createElement("li");
novaTagLi.textContent = "Segundo Item";

console.log(novaTagLi);

// ListaUl.appendChild(novaTagLi);

listaUl.insertBefore(novaTagLi, listaLis[1]);

// Deletando elementos na página HTML
listaUl.removeChild(novaTagLi);