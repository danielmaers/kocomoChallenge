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

function wordsAndLetters(words, letters){
   let longestWord = 0;
   for(let i=0; i<words.length; i++){
       let word = words[i];     
       
    let newLetters =[...letters];
       for(let j=0; j<newLetters.length; j++){
           
           if(word.includes(newLetters[j])){

               word = word.replace(newLetters[j],'');
               newLetters.splice(j,1);
               j=j-1;
           }
          
       }

       if(words[i].length > longestWord && word.length === 0){
           longestWord = words[i].length;
       }
    }
    console.log(longestWord);
    return longestWord;
}

let palabras=['kellogger', 'go', 'hola', 'lego', 'hug', 'kocomo', 'hello', "kellogg"];
let letras=['a','l','l', 'e', 'g', 'k', 'o', "g", "e", "r"];

wordsAndLetters(palabras, letras);

//1.  Time complexity O(n*m^2) being n=words length in for loop, m=word length in for loop and another one at includes method
//2.  Space complexity O(n+m) being n the space occupied by word and m the space occupied by letters
