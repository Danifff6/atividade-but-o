let contador = 0;

document.querySelector("#decrementar").addEventListener("click", () => {
    contador--;
    document.getElementById("contador").textContent = contador;
});

document.querySelector("#incrementar").addEventListener("click", () => {
    contador++;
    document.getElementById("contador").textContent = contador;
});

