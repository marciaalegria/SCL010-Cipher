# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Resumen del proyecto
Proyecto pensado para enviar mensajes cifrados dentro de un grupo familiar claves de correo electronico o claves de paginas web para que no puedan ser vistas por terceros, ya que si enviamos una clave sin cifrar puede ser vista por cualquier persona que no es de nuestra confianza, con esta app podemos enviar mensajes y podemos hacer que lo vean solo la persona a quien le enviamos nuestro código secreto (_offset_).

inicialmente se pensó en una aplicación un poco confusa, por lo tanto, el modelo original se modificó tratando de hacerlo lo más práctica posible, tomando en cuenta que usarás la app al ecibir un mensaje cifrado, el primer boton a ejecutar serpa descifrar mensaje y como segunda opción el boton cifrar mensaje. una vez ingresados los caracteres tienes la opción de salir o volver, la opción volver te enviará a la pantalla inicial pudiendo elegir nueamente entre las opciones cifrar y descifrar; la opción salir cierra la app.

Creo que este producto resuelve el problema de tener que cambiar de caves secretas cada vez que la escribiste en un lugar público, pudiendo así conservarla por más tiempo.

#### Interfaz de usuario (UI)

-permite al usuario desplazarse los espacios que quiera para cifrar su mensaje mediante un codigo(offset), la persona que reciba este mensaje podrá descifrar su contenido seleccionando el mismo offset llamado en la aplicación "ingresa tu código". Asimismo para descifrar un mensaje cifrado debe ingresar en la misma ventana de "ingresa tu código" el offset para descifrar el mensaje. Para cifrar y descifrar hay dos botones "cifrar y descifrar", también la aplicación ceuenta con dos botones "salir" y "volver" para cerrar la app y para volevr al inicio e ingresar un nuevo mensaje a descifrar o cifrar.