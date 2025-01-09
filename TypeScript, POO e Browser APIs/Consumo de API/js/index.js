// Fetch API

// then / catch
fetch("https://viacep.com.br/ws/13481254/json/")
  .then((response) => {
    response.json().then((dados) => console.log(dados));
  })
  .catch((error) => {
    console.log(error);
  });

// async / await

async function obterDadosDoCep() {
  try {
    const response = await fetch("https://viacep.com.br/ws/13481254/json/");
    const dados = await response.json();
    console.log(dados);
  } catch (error) {
    console.log(error);
  }
}

obterDadosDoCep();
