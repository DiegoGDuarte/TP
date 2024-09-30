var listaPersonas = 
[
    ['juanito@gmail.com','Juan','12','Inglés','nulo','trimestral'],
    ['roberto2@gmail.com','Roberto','15','Francés','nulo','trimestral']
];
function registrarPersonaEnSistema(pNuevaPersona){
    
    listaPersonas = getListaPersonas(); /*punto push antes de guardar uno nuevo */
    listaPersonas.push(pNuevaPersona);
    localStorage.setItem('listaPersonasLS',JSON.stringify(listaPersonas)); /* guardar en local storage, convertir en texto */ 

}

function getListaPersonas(){
    var listaPersonasLocal = JSON.parse(localStorage.getItem('listaPersonasLS'));/* volvemos a convertir los datos en objeto que hicimos texto */
    if(listaPersonasLocal == null){
        listaPersonasLocal = listaPersonas; /* revisamos que hayan datops en el local storage para mostrar*/
    }
    return listaPersonasLocal;
}