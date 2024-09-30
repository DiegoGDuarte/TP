document.querySelector('.errorInput').classList.add('ocultar')
document.querySelector('#submit_button').addEventListener('click', registrar);
mostrarDatos();

function registrar(){

    var bExisteError = validar(),
        aNuevaPersona = [],
        sEmail = '',
        sApellidoynombre = '',
        sEdad = '',
        sIdiomas = '',
        sConocimientos = '',
        sDuracion = '';

    if (bExisteError === false){


        sEmail = document.querySelector('#email').value;
        sApellidoynombre = document.querySelector('#apellidoynombre').value;
        sEdad = document.querySelector('#edad').value;
        sIdiomas = document.querySelector('#idiomas').value;
        sConocimientos = document.querySelector('#conocimientos').value;
        sDuracion = document.querySelector('#duracion').value;
        // console.log('Email: ' + sEmail);
        // console.log('Apellido y nombre: ' + sApellidoynombre);
        // console.log('Edad: ' + sEdad);
        // console.log('Idioma: ' + sIdiomas);
        // console.log('Conocimientos: ' + sConocimientos);
        // console.log('Duración: ' + sDuracion);

        aNuevaPersona.push(sEmail,sApellidoynombre,sEdad,sIdiomas,sConocimientos,sDuracion);
        registrarPersonaEnSistema(aNuevaPersona);
        mostrarDatos();
        document.querySelector('.errorInput').classList.add('ocultar');
    }
    else{
        document.querySelector('.errorInput').classList.remove('ocultar');
    }
}

function mostrarDatos(){
    var personas = getListaPersonas(),
        tbody = document.querySelector('#tblPersonas tbody');
    
    
    tbody.innerHTML = ''; /* para vaciar el body antes de crear*/
    
    for(var i = 0; i < personas.length;i++){
        var fila = document.createElement('tr'),
        celdaMail = document.createElement('td'),
        celdaNombre = document.createElement('td'),
        celdaEdad = document.createElement('td'),
        celdaIdioma = document.createElement('td'),
        celdaConocimientos = document.createElement('td'),
        celdaDuracion = document.createElement('td');


        celdaMail.innerHTML = personas[i][0];
        celdaNombre.innerHTML = personas[i][1];
        celdaEdad.innerHTML = personas[i][2];
        celdaIdioma.innerHTML = personas[i][3];
        celdaConocimientos.innerHTML = personas[i][4];
        celdaDuracion.innerHTML = personas[i][5];

        fila.appendChild(celdaMail);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEdad);
        fila.appendChild(celdaIdioma);
        fila.appendChild(celdaConocimientos);
        fila.appendChild(celdaDuracion);

        tbody.appendChild(fila);
    }
}
function validar(){
    var bError = false,
    inputsTexto = document.querySelectorAll('input[type=text]');
    
    for(var i = 0; i < inputsTexto.length; i++){
        if (inputsTexto[i].required == true && inputsTexto[i].value.length === 0){
            console.log('Error');
            inputsTexto[i].classList.add('error');
            bError = true;
        }else{
            inputsTexto[i].classList.remove('error');
        }

    }
    inputsNumero = document.querySelectorAll('input[type=number]');
    
    for(var i = 0; i < inputsNumero.length; i++){
        if (inputsNumero[i].required == true && inputsNumero[i].value.length === 0){
            console.log('Error');
            inputsNumero[i].classList.add('error');
            bError = true;
        }else{
            inputsNumero[i].classList.remove('error');
        }
    }
    return bError;

}