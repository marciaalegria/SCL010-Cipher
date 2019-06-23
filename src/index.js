function boton1(){
    document.getElementById("pantallabienvenida").style.display="none";
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("pantalla2").style.display="block";
}
function boton5(){
    document.getElementById("pantallabienvenida").style.display="block";
    document.getElementById("pantalla1").style.display="block";
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="none"
}
function boton2(){
    document.getElementById("pantallabienvenida").style.display="none";
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("pantalla3").style.display="block";
}
function boton4(){
    window.close();
}

//boton4();
//boton2();
//boton5();
//boton1();