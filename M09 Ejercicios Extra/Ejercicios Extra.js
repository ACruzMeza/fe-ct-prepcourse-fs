/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   var array= []; 
   var claves= Object.keys(objeto);                        //obtener los valores
   
   for(var i=0; i<claves.length; i++){ 
        var letra=claves[i];                               //obtener la primer letra
        array.push([letra,objeto[letra]]);                 //buscar un arreglo formado por la letra y el valor
   }
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var ordenada = string.split("").sort(function(a,b){      //separa el string en un arreglo y aplica el metodo sort, recibe una funcion 
      return a.charCodeAt(0) - b.charCodeAt(0);            //ordena y devuelve un valor numerico
       }).join("");                                           //junta el string sin separacion
   var obj={};                                           //Devuelve un objeto

   for(var i=0; i<ordenada.length; i++){                 //Recorre el string de 1 en 1
      if(Object.keys(obj).includes(ordenada[i])){        //hace una comparación  y vlaida i incluye el string en oredenada
         obj[ordenada[i]]++;                             //Crea el objeto y le suma 1
      }
      else{
         obj[ordenada[i]]=1;
      }
   }
   return obj;                                           //retorna el nuevo objeto
}

function capToFront(string) {
   // Recibes un string con algunas letra en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
     
   var resultado="";
   var mayuscula="";
   var minuscula="";

   for(var i=0; i<string.length; i++){
   if(string[i]===string[i].toUpperCase()){ // 
      mayuscula=mayuscula+string[i];
   }
     else{
      minuscula+=string[i];
     } 
   }   
     resultado=mayuscula+minuscula;
     return resultado;
}
     
function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

      let arrayFrase = frase.split(" ")                             
      let fraseEspejo=[]


      for(let i=0; i<arrayFrase.length; i++){
          let espejo = arrayFrase[i].split("").reverse().join("") 
          fraseEspejo.push(espejo)
      }

         return fraseEspejo.join(" ");     //une el array y agrega un espacio
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let num = numero.toString().split("").reverse().join("")   //convierte el numero en string, separa e invierte y 
                                                               //despues lo une.

   if (num == numero) return "Es capicua";
  
      return "No es capicua";
   }


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   
   let nuevoString = string.split("")
   let sinABC = []
   
   for(let i = 0; i < nuevoString.length; i++){
      if(nuevoString[i] !== "a" && nuevoString[i] !== "b" && nuevoString[i] !== "c" ){
      sinABC.push(nuevoString[i])
   }
   }
   return sinABC.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
     
     let  array1 = arrayOfStrings.length;
     let arreglo = arrayOfStrings;

     
     for(let i= 0; i< array1; i++){
      for(let j = 0; j < array1 -1 -i; j++){
     if(arreglo[j].length > arreglo[j + 1].length){
         let ordenado=arreglo[j];
          arreglo[j]=arreglo[j+1];
          arreglo[j+1]=ordenado;
     }}}
              return arreglo;
}
function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un 0nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var Iguales= [];
      var Iguales1=[];
   
      for(let i= 0; i<array1.length; i++){  
         for(let j=0; j<array2.length; j++){
                
        if(array1[i] == array2[j]){ 
            Iguales.push(array1[i]);
             Iguales1.push(array2[j]);

               }}}
         return Iguales1;
      }
      
      /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
