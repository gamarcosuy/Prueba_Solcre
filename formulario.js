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



