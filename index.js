// TP LOGICA:

// Requerimientos:
// No usar librerias ni frameworks
// Considerar edge cases
// Considerar performance
// Explicar brevemente la solucion

// 1) Escribir una funcion que cumpla con los siguientes casos de prueba:
// sum(1,2) => 3
// sum(1)(2) => 3
// sum(1,a) => “second parameter is not a number”
// sum(1)(a) => “second parameter is not a number”

function sum(par1, par2) {
  if (par2 !== undefined) {
    if (typeof par2 !== "number") {
      return "Second parameter is not a number";
    }
    return par1 + par2;
  }

  return function (par2) {
    if (typeof par2 !== "number") {
      return "Second parameter is not a number";
    }
    return par1 + par2;
  };
}

const a = "Lucas";

console.log(sum(1, 2));
console.log(sum(1)(2));
console.log(sum(1, a));
console.log(sum(1)(a));

// 2) Dada una lista de usuarios con su historial de logueo. Escribir una funcion que determine si algun usuario fue logueado dentro de los ultimos 30 minutos
//  La funcion debe recibir un parametro:
//    - `users`: un array de objetos, donde cada objeto tiene las siguientes propiedades:
//      - `id` (integer)
//      - `login_time` (datetime): tiempo en el cual el usuario se logueo por ultima vez en formato fecha
// La funcion debe retornar true si un usuario se logueo en los ultimos 30 minutos

const users = [
  {
    id: "1",
    login_time: new Date("2024-10-18T08:55:51.01"),
  },
  {
    id: "2",
    login_time: new Date("2024-10-18T08:30:51.01"),
  },
  {
    id: "3",
    login_time: new Date("2024-10-18T09:40:51.01"),
  },
];

function loginLastThirty(arrayOfUsers, num) {
  const now = new Date();
  const comparationNum = num;

  return arrayOfUsers.some((user) => now - user.login_time <= comparationNum);
}
console.log(loginLastThirty(users, 30 * 60 * 1000));

// https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript
// Busque en esta pagina para ver bien lo del Date porque no entendia su funcionamiento

// 3) Escribir una funcion que determine si 2 strings son un anagrama
// Ignorar espacios en los strings
// No diferenciar entre mayusculas y minusculas
// Retornar true si es anagrama y false de lo contrario

function isAnagram(str1, str2) {
  const withoutSpaces = (str) => str.split(" ").join("").toLowerCase();

  const string1 = withoutSpaces(str1);
  const string2 = withoutSpaces(str2);

  if (string1.length !== string2.length) {
    console.log("There are not anagrams");
    return false;
  }

  const count = {};

  for (const character of string2) {
    count[character] = (count[character] || 0) + 1;
  }

  for (const character of string2) {
    if (!count[character]) {
      return false;
    }
    count[character]--;
  }

  return true;
}

console.log(isAnagram("  DOrMYtoRy", "dirty room  "));

// 4) Escribir una funcion generadora de una contraseña segura. Debe recibir un numero y generar una contraseña de esa longitud que cumpla con las siguientes consignas:
// Al menos una mayuscula
// Al menos una minuscula
// Al menos un numero
// Al menos un caracter especial
// Debe retornar la contraseña generada

function* generateSecurePassword(length) {
  //I found a more optimized way to do it but I have no idea how it works.
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

}

const passwordLength = 12;
const securePassword = generateSecurePassword(passwordLength);
console.log(securePassword);
