
window.cipher = {
    encode: () => {
    
        let offset = document.getElementById("txtCodigoSecreto").value;
        //console.log(offset);
    
        let mensaje = document.getElementById("txtTextoCodificar").value;
        let nuevaletra="";
      //creando let para pasar palabras a mayusculas
          let mensajeEnMayuscula = mensaje.toUpperCase();
      //crea variable llamada mensaje cifrado
        //console.log(mensajeEnMayuscula);
          let mensajecifrado = "";
      //creando un for para recorrer mensaje
          for (let i = 0; i <mensajeEnMayuscula.length;i++){
            //pidiendo valor ascii
            let ascii = mensajeEnMayuscula.charCodeAt(i);
            //console.log(ascii);
            //crea formula 
            let formula = (ascii-65+offset%26+65);
            //console.log(formula);
            nuevaletra = String.fromCharCode(formula);
      
            mensajecifrado += nuevaletra;
      
          }
          document.getElementById("espacio4").value=mensajecifrado;
    
      //nos retorna el mensaje cifrado
          //alert(mensajecifrado)
          //return mensajecifrado;
          //console.log(mensajecifrado);
    
        },
        decode: () => {
            let offset = document.getElementById("txtCodigoSecreto").value;
            let mensaje = document.getElementById("espacio1").value;
        
            let mensajeEnMayuscula = mensaje.toUpperCase();
          //crea variable llamada mensaje cifrado
              let mensajedescifrado = "";
          //creando un for para recorrer mensaje (offset)
              for (let i = 0; i<mensajeEnMayuscula.length;i++){
                let ascii = mensajeEnMayuscula.charCodeAt(i);
            
                let formula = ((ascii-90 - offset ) % 26 + 90);
          
                let nuevaletra = String.fromCharCode(formula);
          
                mensajedescifrado += nuevaletra;
          
              }
          //nos retorna el mensaje cifrado
            document.getElementById("espacio2").value=mensajedescifrado;
        
             //alert(mensajedescifrado)
          }
   
    };
