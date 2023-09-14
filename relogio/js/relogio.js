//DOM
const hora = document.querySelector('#hora');
const minuto = document.querySelector('#minuto');
const segundo = document.querySelector('#segundo');

//evento
const relogio = setInterval(tempo, 1000);
function tempo() {

    let dia = new Date()
    let hr = dia.getHours();
    let min = dia.getMinutes();
    let seg = dia.getSeconds();
    
    if (hr < 10){
        hr = '0'+ hr
    }; 
    if (min < 10){
       min = "0" + min
    } ; 
    if (seg <10){
       seg = "0"+ seg
    }; 
    
    hora.textContent= hr;
    minuto.textContent= min;
    segundo.textContent= seg;
   

}



