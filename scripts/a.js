class Main{
    MostrarD(n){
        if (D[n]){D[n]()}
    }
}
function wait(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
} //Hay que ponerlo en una funcion "async" y ponerlo despues de un "await" para que funcione.

window.setInterval(function(){
    Segundos++;
},1000)

Boton.addEventListener("click", async function() {
    console.log("Boton presionado.");
    Clicks += 1;
    Contador.innerText = "Clicks: ".concat(Clicks);
    Main.prototype.MostrarD("click".concat(Clicks));
    Boton.disabled = true
    await wait(0.1)
    Boton.disabled = false
});
