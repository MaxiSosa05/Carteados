
const juegos = [
{ nombre: "Truco", dire: "Truco.html" },
{ nombre: "Poker", dire: "Poker.html" },
{ nombre: "Solitario", dire: "Solitario.html" },
{ nombre: "Chinchon", dire: "Chinchon.html" },
{ nombre: "Escoba de 15", dire: "Escoba_de_15.html" },
{ nombre: "chin", dire: "chin.html" },
{ nombre: "el 9", dire: "el_9.html" },
{ nombre: "blackjack", dire: "blackjack.html" },
];



const contenedorJuegos = document.querySelector(".juegos-section");


function mostrarJuegos(lista) {
  contenedorJuegos.innerHTML = "";

  lista.forEach(juego => {
    contenedorJuegos.innerHTML += `
        <a href="${juego.dire}" class="juego-card">
            <h2 class="juego-card-h2">${juego.nombre}</h2>
        </a>
    `;
  });
}

mostrarJuegos(juegos);