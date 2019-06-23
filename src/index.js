document.getElementById("boton1").addEventListener("click",function(){

    document.getElementById("pantallabienvenida").style.display="none";
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("pantalla2").style.display="block";
});

document.getElementById("botonn5").addEventListener("click",function(){

    document.getElementById("pantallabienvenida").style.display="block";
    document.getElementById("pantalla1").style.display="block";
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="none"
});
document.getElementById("boton2").addEventListener("click",function(){

    document.getElementById("pantallabienvenida").style.display="none";
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("pantalla3").style.display="block";
});
document.getElementById("boton5").addEventListener("click",function(){

    document.getElementById("pantallabienvenida").style.display="block";
    document.getElementById("pantalla1").style.display="block";
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="none"
});
document.getElementById("boton4").addEventListener("click",function(){

    document.getElementById("pantallabienvenida").style.display="block";
    document.getElementById("pantalla1").style.display="block";
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="none"
});

/*
document.getElementById("boton3").addEventListener("click",function(){

    document.getElementById("pantallabienvenida").style.display="block";
    document.getElementById("pantalla1").style.display="block";
    document.getElementById("pantalla3").style.display="none";

});
*/
document.getElementById("botonn4").addEventListener("click",function(){

    window.close();
});

//boton4();
//boton2();
//boton5();
//boton1();