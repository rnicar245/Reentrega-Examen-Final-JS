/**
 * @author Rafael Jesús Nieto Cardador
 */

    let Alumnos = function(nombre, apellido1, apellido2, fechaNac){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.fechaNac = fechaNac;
    }


    Alumnos.prototype.mostrar = function(){
        let ventana = window.open("", "", "top=0,left=0,width=300,height=200");
        ventana.document.write("<html><body><p>Nombre: "+this.nombre+"</p><p>Apellido 1: "+
        this.apellido1+"</p><p>Apellido 2: "+
        this.apellido2+"</p><p>Fecha de nacimiento:"+this.fechaNac+"</p></body></html>");
        ventana.document.close();
    }
