class Main{
    MostrarD(n){
        if (D[n]){D[n]()}
    }
}

Boton.style.backgroundColor = "White"; Boton.style.color = "Black";
window.setInterval(function(){
    Segundos++;
},1000)
Boton.addEventListener("click", function() {
    console.log("Boton presionado.");
    Clicks += 1;
    Contador.innerText = "Clicks: ".concat(Clicks);
    Main.prototype.MostrarD("click".concat(Clicks));
});
