/*

Hello! Thanks for taking the time to complete this exercise.

To start, clone this project (you need to create an account),
and add your answer in your copy. If you don't feel comfortable
with NodeJS, feel free to create a project with the language
of your choice (please copy over these comments).

Once you finish, share the project to matias@kocomo.com

Go coding!!

-------------------------------------------------------

Hola! Gracias por tu tiempo para completar este ejercicio.

Para empezar, clona este proyecto (necesitas crear una cuenta),
y agrega tu respuesta en tu copia. Si no te sientes cómodo
con NodeJS, puedes crear un proyecto con el lenguage que
prefieras (por favor copia estos comentarios).

Cuando termines, comparte este proyecto con matias@kocomo.com

Go coding!!

=======================================================

Words and letters

Given a 'bag' of words and a 'bag' of letters, write a
function that returns the length of the longest word that
can be written using each of the given letters at most
once.

e.g. 
Words:
------------------------------
| 'kellogg' 'go'       |
|'hola' 'lego' 'hug'|
| 'kocomo' 'hello' |
------------------------------

Letters:
-----------------------
| 'a' 'h' 'l' 'e' |
|'l' 'o' 'g' 'k'  |
-----------------------

Answer: 5

Explanation:
* 5 is the length of 'hello', logest one that can be written
* 'kellogg' (7) needs two 'g', and there's only one in the letters bag
* 'kocomo' (6) needs a 'c' that is not present in the letters bag
* All other words are shorter than 'hello'

Bonus:
1. What's the Time complexity?
2. What's the Space complexity?

*/

//recorrer el arreglo de palabras
//por cada palabra, recorrer el arreglo de letras
//si la palabra contiene una letra que no esta en el arreglo de letras,
//se elimina de la palabra
//si la palabra contiene todas las letras del arreglo de letras,
//se determina su length y se guarda en una variable
//se compara el length de la palabra con el length de la palabra mas larga
//si la palabra es mas larga, se guarda en la variable
//se retorna el length de la palabra mas larga posible

// let palabras=['kellogg', 'go', 'hola', 'lego', 'hug', 'kocomo', 'hello'];
 //                   i
// let letras=['a','l','l', 'e', 'g', 'k', 'o', "g"];
//                                               j
//word=''
//      

function wordsAndLetters(words, letters){
   let longestWord = 0;
   for(let i=0; i<words.length; i++){
       let word = words[i];       
       for(let j=0; j<word.length; j++){
           if(word.includes(letters[j])){
               word = word.replace(letters[j],'');
           }
          
       }
       if(words[i].length > longestWord ){
           longestWord = words[i].length;
       }
    }
    console.log(longestWord);
    return longestWord;
}

let palabras=['kellogg', 'go', 'hola', 'lego', 'hug', 'kocomo', 'hello'];
let letras=['a','l','l', 'e', 'g', 'k', 'o', "g"];

wordsAndLetters(palabras, letras);
