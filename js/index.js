/**
 * @author Rafael Jesús Nieto Cardador
 */
{
    let elementos = [];
    let inicio = function(){
        elementos = document.getElementsByTagName("input");
        elementos[4].addEventListener("click", crearAlumno);
    
        for(span of document.getElementsByTagName("span")){
            span.style.color = "red";
        }
    }
    
    let crearAlumno = function(){
        if(validar()){
            let alumno = new Alumnos(elementos[0].value, elementos[1].value, elementos[2].value, elementos[3].value);
            alumno.mostrar();
        }
    }
    
    let validar = function(){
        let devuelve = true;
        for(elemento of elementos){
            if(elemento.id != "crear" && elemento.id != "limpiar"){
                if(comprobarVacio(elemento)){
                    if(elemento.id == "fecha"){
                        if(!comprobarFecha(elemento))
                            devuelve = false;
                    }
                }else
                    devuelve = false;
            } 
        }
        return devuelve;
    }
    let comprobarFecha = function(elemento){
        let expresion = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
        let datosFecha = expresion.exec(elemento.value);
        let fecha;
        if(datosFecha != null){
            fecha = new Date(datosFecha[2]+"-"+datosFecha[1]+"-"+datosFecha[3]); 
            if(datosFecha[1] != fecha.getDate() || datosFecha[2] != fecha.getMonth() +1 || datosFecha[3] != fecha.getFullYear()){
                elemento.nextElementSibling.innerHTML = "La fecha es incorrecta. Ej 2124-03-2020.";
                return false;
            }
    
            if(fecha > new Date()){
                elemento.nextElementSibling.innerHTML = "La fecha de nacimiento es mayor que la actual. ¿Vienes del futuro?";
                return false;
            }
    
            elemento.nextElementSibling.innerHTML = "";
            return true;
    
        }else{
            elemento.nextElementSibling.innerHTML = "El formato de la fecha es incorrecto. Ej 09-03-2020.";
            return false; 
        }
    }
    let comprobarVacio = function(elemento){
        if(elemento.value == ""){
            elemento.nextElementSibling.innerHTML = "No se puede dejar este campo vacío.";
            return false;
        }
        elemento.nextElementSibling.innerHTML = "";
        return true;
    }
    
    document.addEventListener("DOMContentLoaded", inicio);
    
}
