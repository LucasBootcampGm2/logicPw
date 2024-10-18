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

function sum(parameter1, parameter2) {
  const isNumber = (parameter) => {
    typeof parameter === "number";
  };

  if (isNumber(parameter1) && parameter2 === undefined) {
    return function (parameter) {
      if (!isNumber(parameter)) {
        return "Second parameter is not a number";
      }
      return parameter1 + parameter;
    };
  }

  if (!isNumber(parameter1)) {
    return "First parameter is not a number";
  }

  if (!isNumber(parameter2)) {
    return "Second parameter is not a number";
  }

  return parameter1 + parameter2;
}

const a = "Lucas";

console.log(sum(1, 2));
console.log(sum(1)(2));
console.log(sum(1, a));
console.log(sum(1)(a));

// I create a sum function that can recieve two numbers. It checks if the inputs are numbers and gives error messages if they are not. If only the first number is given, it returns another function to get the second number later. This makes it easy to use in different ways. The final version is simple and works well, even with mistakes in input.

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

// I used new Date() to get the curent time and calculated the difference in milliseconds. I did not understand how to use Date() but i found hlpful information on this page "https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript". The function uses the array method some() to check if any user in the list has a login_time within the last 30 minutes. 

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
  // https://gist.github.com/bendc/1e6af8f2d8027f2965da
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  if (length < 4) {
    return "It must have a minimum of 4 characters";
  }

  const password = [
    lowerChars[Math.floor(Math.random() * lowerChars.length)],
    upperChars[Math.floor(Math.random() * upperChars.length)],
    numbers[Math.floor(Math.random() * numbers.length)],
    specialChars[Math.floor(Math.random() * specialChars.length)],
  ];

  const allChars = lowerChars + upperChars + numbers + specialChars;

  while (password.length < length) {
    const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    if (!password.includes(randomChar)) {
      password.push(randomChar);
    }
  }

  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join("");
}

const passwordLength = 12;
const securePassword = generateSecurePassword(passwordLength);
console.log(securePassword);
