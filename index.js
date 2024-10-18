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
    return typeof parameter === "number";
  };

  if (parameter1 === undefined) {
    return function (parameter2) {
      if (parameter2 === undefined) {
        return "Both parameters are undefined";
      }
      if (!isNumber(parameter2)) {
        return "Second parameter is not a number";
      }
      return `First parameter is undefined, second parameter is ${parameter2}`;
    };
  }

  if (!isNumber(parameter1)) {
    if (parameter2 === undefined) {
      return function (parameter2) {
        if (!isNumber(parameter2)) {
          return "Neither of the two parameters is a number";
        }
        return "First parameter is not a number, but the second parameter is valid";
      };
    }
    return "First parameter is not a number";
  }

  if (parameter2 !== undefined && !isNumber(parameter2)) {
    return "Second parameter is not a number";
  }

  if (parameter2 === undefined) {
    return function (parameter2) {
      if (parameter2 === undefined) {
        return "Second parameter is undefined";
      }
      if (!isNumber(parameter2)) {
        return "Second parameter is not a number";
      }
      return parameter1 + parameter2;
    };
  }

  return parameter1 + parameter2;
}

const a = "Lucas";
const b = undefined;

console.log(sum(1, 2));
console.log(sum(1)(2));
console.log(sum(1, a));
console.log(sum(a, 1));
console.log(sum(a)(1));
console.log(sum(1)(a));
console.log(sum(a)(a));
console.log(sum(b, b));
console.log(sum(b)(b));
console.log(sum(b)(1));
console.log(sum(1)(b));
console.log(sum(a)(b));
console.log(sum(b)(a));

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
    login_time: new Date("2024-10-18T18:50:51.01"),
  },
];

function loginLastThirty(arrayOfUsers) {
  const num = 30 * 60 * 1000;
  if (!Array.isArray(arrayOfUsers)) {
    return "You have to pass a string";
  } else {
    const now = new Date();
    const comparationNum = num;

    return arrayOfUsers.some((user) => now - user.login_time <= comparationNum);
  }
}
console.log(loginLastThirty(users));

// I used new Date() to get the curent time and calculated the difference in milliseconds. I did not understand how to use Date() but i found hlpful information on this page "https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript". The function uses the array method some() to check if any user in the list has a login_time within the last 30 minutes.

// 3) Escribir una funcion que determine si 2 strings son un anagrama
// Ignorar espacios en los strings
// No diferenciar entre mayusculas y minusculas
// Retornar true si es anagrama y false de lo contrario

function isAnagram(str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string") {
    const formatText = (str) => str.split(" ").join("").toLowerCase();

    const string1 = formatText(str1);
    const string2 = formatText(str2);

    if (string1.length !== string2.length) {
      console.log("They are not anagrams");
      return false;
    }

    const count = {};

    for (const character of string1) {
      count[character] = (count[character] || 0) + 1;
    }

    for (const character of string2) {
      if (!count[character]) {
        console.log("They are not anagrams");
        return false;
      }
      count[character]--;
    }

    console.log(`${str1} and ${str2} are anagrams`);
    return true;
  } else {
    return "You have to pass two strings";
  }
}

console.log(isAnagram("  DOrMitoRy", "dirty room  "));
console.log(isAnagram("DOrMYtoRy", "dirteeoom"));
console.log(isAnagram(3, "dirty room  "));
console.log(isAnagram("hola", 2));
console.log(isAnagram(3, 2));

//  I think isAnagram using a helper function called withoutSpaces, which removes spaces and converts strings to lowercase with split and join. I checked if the lengths of the two strings were equal, since different lengths mean they can't be anagrams. I counted the characters in the second string using an object called count, where each character is a key, and its value is how many times it appears. For each character in the second string, I checked against this count. If a character wasn't found or didn't match the count, I returned false. If all characters matched, I returned true

// 4) Escribir una funcion generadora de una contraseña segura. Debe recibir un numero y generar una contraseña de esa longitud que cumpla con las siguientes consignas:
// Al menos una mayuscula
// Al menos una minuscula
// Al menos un numero
// Al menos un caracter especial
// Debe retornar la contraseña generada

// i found this form but i don't understand it so i didnt use it
// https://gist.github.com/bendc/1e6af8f2d8027f2965da

function* generateSecurePassword(length) {
  if (typeof length !== "number" || isNaN(length)) {
    yield "You have to pass a number";
    return;
  }

  if (length < 4 || length > 15) {
    yield "It must have a minimum of 4 characters and a maximum of 15 characters";
    return;
  }

  const allChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  const password = Array.from(
    [
      allChars.slice(0, 26),
      allChars.slice(26, 52),
      allChars.slice(52, 62),
      allChars.slice(62),
    ].map((group) => group[Math.floor(Math.random() * group.length)])
  );

  while (password.length < length) {
    password.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  for (let char of password) {
    yield char;
  }
}

const passwordLength = 5;
const securePasswordGen = generateSecurePassword(passwordLength);

let generatedPassword = "";
for (let char of securePasswordGen) {
  generatedPassword += char;
}

console.log(generatedPassword);

// I created a function called generateSecurePassword to generate a secure password of a specified length. It uses four character sets: lowercase letters, uppercase letters, numbers, and special characters. The function checks if the length is less than 4 and yields an error if it is.

// It starts the password with one character from each set, fills the rest with random characters, and shuffles them. By using yield, it returns each character one at a time.

// The main problem I faced was not realizing I had created a generator function, which confused me about how to get the final password. Once I understood generators, I was able to build the password by iterating over the yielded characters.
