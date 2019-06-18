window.cipher = {
  encode: (mensaje,offset) => {
   //creando función codificar
      let nuevaletra="";
  //creando let para pasar palabras a mayusculas
      let mensajeEnMayuscula = mensaje.toUpperCase();
  //crea variable llamada mensaje cifrado
      let mensajecifrado = "";
  //creando un for para recorrer mensaje
      for (let i = 0; i < mensajeEnMayuscula.length; i++){
        //pidiendo valor ascii
        let ascii = mensajeEnMayuscula.charCodeAt(i);
        //crea formula 
        let formula = ((ascii-65 + offset ) % 26 + 65);
        nuevaletra = String.fromCharCode(formula);
  
        mensajecifrado += nuevaletra;
  
      }
  //nos retorna el mensaje cifrado
      return mensajecifrado;
  
  //console.log(codificar("abcdefghijklmnopqrstuvwxyz",8));

    
  },
   //creando función decodificar
  decode: (mensaje,offset) => {
   //creando el codigo
      let mensajeEnMayuscula = mensaje.toUpperCase();
  //crea variable llamada mensaje cifrado
      let mensajecifrado = "";
  //creando un for para recorrer mensaje (offset)
      for (let i = 0; i<mensajeEnMayuscula.length;i++){
        let ascii = mensajeEnMayuscula.charCodeAt(i);
        let formula = ((ascii+65 + offset ) % 26 - 65);
  //
        let nuevaletra = String.fromCharCode(formula);
  //
        mensajecifrado += nuevaletra;
  
      }
  //nos retorna el mensaje cifrado
      return mensajecifrado;
  }
  //console.log(codificar("abcdefghijklmnopqrstuvwxyz",8));
};
