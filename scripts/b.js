var Clicks = 0;
var Segundos = 0;
var t1 = document.getElementById("t1");
var Boton = document.getElementById("Boton");
var Contador = document.getElementById("Contador");
var D = {
    click10(){t1.innerText = "¿Crees que pasara algo si presionas mucho el boton?";},
    click15(){t1.innerText = "Tomare eso como un si.";},
    click20(){Contador.hidden = false; t1.innerText = "Bueno, ten este contador para no tener que ver tus clics en la consola del panel de desarrollador.";},
    click100(){t1.innerText = "Llegaste a 100 clics. ¿Enserio esperas algo?";},
    click120(){t1.innerText = "Te aviso que lo unico interactuable que veras aqui solo sera ese boton.";},
    async click200(){
        Boton.hidden = true; t1.innerText = "¿Quieres ver el tiempo que llevas aqui?"
        await wait(5)
        t1.innerText = "Oh, claro. No puedes responder.";
        await wait(3)
        t1.innerText = "Bueno, de igual manera te lo digo. Dejame revisar...";
        await wait(3)
        if (Segundos <= 30){
            t1.innerText = "Llevas muy poco tiempo,".concat(Segundos).concat(" segundos. ¿Usaste autoclick o la consola de desarollador? No importa.");
        } else {
            t1.innerText = "Llevas mas de".concat(Segundos).concat(" segundos aqui.");
            Boton.hidden = false
        };
        Boton.hidden = false;
    },
    click500(){
        t1.innerText = "Felicidades, no tienes nada que hacer. ¿Verdad?"
        setTimeout(() => {
            t1.innerText = "Bueno, te cambiare el boton para que presumas el tiempo que gastaste en esto."
            Boton.style.backgroundColor = "Brown"; Boton.style.color = "White";
        }, 5000);
    }
}
