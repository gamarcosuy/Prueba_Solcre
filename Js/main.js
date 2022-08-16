//Opciones nav
const menu = document.querySelector('.menu');
const optionMenu = document.querySelector('.option-menu');

menu.addEventListener('click', ()=>{
    optionMenu.classList.toggle('none')
})

//Contador

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
//Horas
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
//Formulario
const buttonSubmit = document.querySelector('.form_submit');
const containerForm = document.querySelector('.form_container')
const respuestaDiv = document.querySelector('.respuestaDiv');
const sectionRespuesta = document.querySelector('.form_section')
const form = document.forms['form'];


buttonSubmit.addEventListener('click', mostrarRespuesta);

function mostrarRespuesta(e){
    e.preventDefault();
   
    const documento = document.form.documento.value;
    const nombreCompleto = document.form.nombre.value;
    const email = document.form.email.value;

    if( documento.length > 1 && nombreCompleto.length > 1 && email.length > 1){
        const  divRespuesta = document.createElement('div');
        divRespuesta.classList.add('respuestaDiv');
        sectionRespuesta.append(divRespuesta);
        const  respuestaTxt = document.createElement('p');
    respuestaTxt.innerText = 'Se envio correctamente tu voto'
    respuestaTxt.classList.add('respuesta');

    divRespuesta.append(respuestaTxt);

    setTimeout(()=>{
        divRespuesta.remove();
        containerForm.reset();
    },4000)
    }else{
        const  divRespuesta = document.createElement('div');
        divRespuesta.classList.add('respuestaDiv');
        sectionRespuesta.append(divRespuesta);
        const  respuestaTxt = document.createElement('p');
        respuestaTxt.innerText = 'No se a podido enviar tu voto'
        respuestaTxt.classList.add('respuestaIncorrecta');
    
        divRespuesta.append(respuestaTxt);
        
        setTimeout(()=>{
            divRespuesta.remove();
            containerForm.reset();
        },4000)
    } 
   
}

//Scroll

const right = document.getElementById('right');
const left = document.getElementById('left');
const slider = document.querySelector('.slider');

right.addEventListener('click', ()=>{
 slider.scrollLeft += 310; 
})

left.addEventListener('click', ()=>{
    slider.scrollLeft -= 310; 
   })



