// Variables //
let cantidad = parseInt(prompt('A cuantas personas quiere ingresar? "puede hasta un maximo de 5 personas"')),
    vueltas = 0,
    promedio = 0,
    total = 0,
    Edad = 0;


// verificacion con bucle while //
while (cantidad >= 6 || cantidad <= 0 || isNaN(cantidad)) {
    alert('Por favor introduzca un numero igual o menor a 5');
    cantidad = parseInt(prompt('A cuantas personas quiere ingresar? "puede hasta un maximo de 5 personas"'));
}

// funciones //
function CargarDatos() {
    let Nombre = prompt('Introduzca el nombre de la persona que quiere ingresar');
    Edad = parseInt(prompt('Introduzca la edad de la persona que quiere ingresar'));

    // verificacion con bucle while //
    while (isNaN(Edad)) {
        alert('Por favor introduzca un numero');
        Edad = parseInt(prompt('Introduzca la edad de la persona que quiere ingresar'));
    }

    // mostrar resultado por consola //
    let Usuario = `${Nombre} ${Edad}`;
    console.log(Usuario)
}

console.log('Nombre Edad');

// bucle for //
for (vueltas; vueltas != cantidad; vueltas++) {
    CargarDatos();
    promedio = Edad + total;
    total = promedio;
}

// mostrar resultado final por consola //
console.log('la Edad promedio de las personas ingresadas tiene un total de ' + promedio / cantidad);