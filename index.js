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
      login_time: new Date("2024-10-18T09:30:51.01"),
    },
    {
      id: "3",
      login_time: new Date("2024-04-20T09:40:51.01"),
    },
];

function loginLastThirty(user){
    
}

loginLastThirty(users[0])