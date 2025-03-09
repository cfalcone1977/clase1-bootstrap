const botonEnviar=document.getElementById('boton-mail');
const direccionMail=document.getElementById('exampleFormControlInput1');
const mensaje=document.getElementById('exampleFormControlTextarea1');
/*  API PARA PRECIO BTC  */
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    const bitcoinPrice = data.bitcoin.usd;
    document.getElementById('bitcoin-price').textContent = `US$ ${bitcoinPrice}.-`;
  });
/*  FIN API PRECIO BTC  */

function crearMail(){
    console.log(direccionMail.value);
    const asunto='Nueva consulta cripto...';
    const nombre='Anonimo';
    const cuerpo= `Nombre: ${nombre}\nCorreo: ${direccionMail.value}\nMensaje: ${mensaje.value}`;
    const parametro= `mailto:cristianfalcone@hotmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href=parametro;
}


botonEnviar.addEventListener('click',crearMail);  
