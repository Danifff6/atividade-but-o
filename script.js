let contador = 0;

document.querySelector("#decrementar").addEventListener("click", () => {
    contador--;
    document.getElementById("contador").textContent = contador;

    if (contador === 50) {
        alert("Inhaí manah, vc tá apertando isso pra que?");
    }
});

document.querySelector("#incrementar").addEventListener("click", () => {
    contador++;
    document.getElementById("contador").textContent = contador;

    if (contador === 50) {
        alert("Inhaí manah, vc tá apertando isso pra que?");
    }
});
