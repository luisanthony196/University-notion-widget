class Persona {
  nombre;
  email;
  contrasenia;

  constructor(nombre, email, contrasenia) {
    this.nombre = nombre;
    this.email = email;
    this.contrasenia = contrasenia;
  }

  to_string = () => "Nombre: " + this.nombre;
}

const p = new Persona("Luis", "luis@gmail.com", "nadamasss");

console.log("before");
setTimeout(() => {
  // runs after 2 seconds
  console.log("inside the function");
}, 2000);
console.log("after");
