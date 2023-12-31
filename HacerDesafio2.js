/*
Micro desafío 2:

Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).

Promedio alumnos graduados por curso
2. El Tech Leader, nos ¡Felicita! por los avances realizados en el desafío anterior. Dado
que hemos mostrado bastante expertise, sube su exigencia y nos pide que ayudemos
a uno de los equipos de desarrollo. Necesitan un código que permita determinar el
promedio de alumnos egresados por curso. Para lograrlo debemos realizar lo
siguiente:
a. Crear cuatro variables y asignar a cada una las siguientes cadenas de texto:
i. Graduados de HTML5: “30 45 25 34 18 23 16 50 72 70”
ii. Graduados de CSS3: “50 45 71 34 23 45 65 75 63 43 74 70”
iii. Graduados de JAVASCRIPT: “70 65 58 45 23 57 34 17 72”
iv. Graduados de NODEJS: “45 56 73 34 65 72 70 32”
b. A cada una de las variables que contienen las cadenas de texto, habrá que
convertirlas a arrays, separando cada elemento por una coma
c. Crear una función que reciba como parámetros los cuatro arrays de los
alumnos graduados y un número comprendido entre el 1 y el 4, donde:
i. 1 = HTML5
ii. 2 = CSS3
iii. 3 = JAVASCRIPT
iv. 4 = NODEJS
La función tendrá la responsabilidad de calcular y devolver el promedio de
graduados del curso indicado. Si el parámetro del curso es un valor diferente
del 1 al 4, deberá retornar un mensaje al usuario indicando cuales son los
valores asignados a cada curso.
*/

let HTML5 = "30 45 25 34 18 23 16 50 72 70";
let CSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let JAVASCRIPT = "70 65 58 45 23 57 34 17 72";
let NODEJS = "45 56 73 34 65 72 70 32";

HTML5.split(" ");