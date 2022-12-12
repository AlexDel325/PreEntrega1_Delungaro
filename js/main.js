// class con constructor (permite crear un objeto "Usuario")
class Usuario {
    constructor(nombre, edad, profecion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profecion = profecion;
    }
};

// variables y arrays
let cantidad = parseInt(prompt('A cuantas personas quiere ingresar? "puede hasta un maximo de 5 personas"')),
    vueltas = 0,
    promedio = 0,
    total = 0,
    listaUsuarios = [];

//funciones
const crearUsuario = () => {
    let nombre = prompt("¿Como se llama?");
    let edad = parseInt(prompt("¿Cuantos años tiene?"));
    let profecion = "";

    if (edad < 18) {
        profecion = "Estudiante";
    } else {
        profecion = prompt("¿A que se dedica?");
    }

    let usuarioNuevo = new Usuario(nombre, edad, profecion);
    listaUsuarios.push(usuarioNuevo);

    return listaUsuarios;
}

//bucles
while (cantidad >= 6 || cantidad <= 0 || isNaN(cantidad)) {
    alert('Por favor introduzca un numero igual o menor a 5');
    cantidad = parseInt(prompt('A cuantas personas quiere ingresar? "puede hasta un maximo de 5 personas"'));
}

for (vueltas; vueltas != cantidad; vueltas++) {
    crearUsuario();
}

// calcula el promedio de edad de todos los "Usuario"
listaUsuarios.forEach((Usuario) => {
    total = Usuario.edad + promedio;
    promedio = total;
})

//ordenamiento de array en orden alfabetico
listaUsuarios.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1;
    }
    return 0;
})

//filtrado 
const filtroMayores = listaUsuarios.filter(Usuario => (Usuario.edad >= 18));
const filtroMenores = listaUsuarios.filter(Usuario => (Usuario.edad < 18));

// salidas por consola
console.log(`Nombre Edad Profeción`);
listaUsuarios.forEach((Usuario) => {
    console.log(`${Usuario.nombre} ${Usuario.edad} ${Usuario.profecion}`);
})

console.log(`el promedio de edad es de ${promedio / listaUsuarios.length}`);
console.log(`Cantidad de niños: ${filtroMenores.length}`);
console.log(`Cantidad de adultos: ${filtroMayores.length}`);