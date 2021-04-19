# Bienvenido!

Repositorio del grupo 6 para la tarea 2 del ramo Diseño avanzado de aplicaciones web.

## Integrantes:
- Diego Echeverría
- Ignacio Peñafiel
- Felipe Valenzuela

# ---------

Aproximación al problema:

Para el uso de programación reactiva, se decidió trabajar para construir un juego de 2 o más jugadores que corra en el browser. El juego que como grupo hemos decidido realizar es el clásico dinosaurio de google, pero para 2 jugadores. Las reglas del juego serán las mismas que el juego clásico, solo que en este caso el jugador que ganará el juego será quien aguante más sin chocar su dinosaurio, en otras palabras, quien pierda será el primero en chocar


### Solución

Nuestra solución ocupa dos observables fromEvent, uno ocupa el evento click, que se dedicará a ver los saltos del primer jugador, mientras que el segundo ocupa el evento keyup, que se encargará de notar cualquier del teclado. Dentro de dichos observables se tendrán pipes que ocupa un takeWhile mientras se alguno de los jugadores no termina. La posición de los jugadores se maneja con el operador switchmap que cambia los margenes de los contenedores, que se activa luego de un operador delay.

Luego de ello, se tiene un intervalo numbers que se ocupa como iterador para realizar la lógica de colisión y fin de juego, la cual se dará cuando un jugador este en el suelo cuando el objeto este a un margen.




