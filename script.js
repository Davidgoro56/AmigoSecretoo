const nombres = [];

document.getElementById("adicionar").addEventListener("click", () => {
    const input = document.getElementById("nombre");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = "";
});

document.getElementById("sortear").addEventListener("click", () => {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[indiceAleatorio];
    
    document.getElementById("resultado").innerText = `🎉 El amigo secreto es: ${amigoSecreto}!`;
});

function actualizarLista() {
    const lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}