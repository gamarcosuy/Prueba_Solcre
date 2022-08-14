let horas = 0;
let minutos = 0;
let segundos = 0;

//Segundos
verSegundos();

function verSegundos(){
    let segundosTexto;

    if(segundos < 0){
        segundos = 59;
    }

    if(segundos < 10){
        segundosTexto = `0${segundos}`
    }else{
        segundosTexto = segundos;
    }
    segundosTxt = document.querySelector('.segundos')
    segundosTxt.innerHTML = segundosTexto;
    segundos--;

    verMinutos(segundos)
}
setInterval(verSegundos, 1000)

//Minutos


function verMinutos(segundos){
    let minutosTexto;

    if(segundos == -1 && minutos !== 0){
        setTimeout(()=>{
            minutos--
        }, 500)
    }else if(segundos == -1 && minutos == 0 ){
        setTimeout(()=>{
            minutos = 59
        }, 500)
    }

    if(minutos < 10){
        minutosTexto = `0${minutos}`
    }else{
        minutosTexto = minutos;
    }
    minutosTxt = document.querySelector('.minutos')
    minutosTxt.innerHTML = minutosTexto;

    verHoras(segundos,minutos)
}

function verHoras(segundos,minutos){
    let horasTexto;

    if(segundos == -1 && minutos == 0 && horas !== 0){
        setTimeout(()=>{
            horas--
        }, 500)
    }else if(segundos == -1 && minutos == 0 && horas ==0){
        setTimeout(()=>{
            horas = 23
        }, 500)
    }

    if(horas < 10){
        horasTexto = `0${horas}`
    }else{
        horasTexto = horas;
    }
    horasTxt = document.querySelector('.horas')
    horasTxt.innerHTML = horasTexto;
}
