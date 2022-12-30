// class con constructor (permite crear un objeto "Usuario")
class Usuario {
    constructor(nombre, edad, profecion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profecion = profecion;
    }
};

// variables
let displayMenu = document.getElementById("display-menu"),
    closeMenu = document.getElementById("close-menu"),
    confirmar = document.getElementById("confirmar"),
    form = document.getElementById("formulario"),
    tabla = document.getElementById("componentes"),
    list = document.getElementById("lista"),
    miFormulario = document.getElementById("myForm");

// arrays
let listaUsuarios = [],
    todosLosUsuarios = [];

//funciones
const crearUsuario = () => {
    let nombre = document.getElementById("nombre").value,
        edad = parseInt(document.getElementById("edad").value),
        profecion = document.getElementById("equipo").value;

    if (edad < 18) {
        console.log('el usuario debe ser mayor de edad');

    } else if (edad >= 18) {

        let usuarioNuevo = new Usuario(nombre, edad, profecion);
        listaUsuarios.push(usuarioNuevo);
    }

    return listaUsuarios;
}

const crearlista = () => {
    const listItem = document.createElement('li');
    let nombre = document.getElementById("nombre").value,
        edad = parseInt(document.getElementById("edad").value);

    if (edad < 18 || nombre == '') {
        listItem.textContent = `ERROR al cargar el usuario`;
    } else if (edad >= 18) {
        listItem.textContent = `añadiste a usuario ${nombre} a la lista`;
    }

    list.appendChild(listItem);
}

const crearTabla = () => {
    listaUsuarios.forEach((Usuario) => {
        todosLosUsuarios.push(Usuario);

        let row = document.createElement('tr'),
            nomreCell = document.createElement('td'),
            edadCell = document.createElement('td'),
            profecionCell = document.createElement('td');

        nomreCell.textContent = Usuario.nombre;
        edadCell.textContent = Usuario.edad;
        profecionCell.textContent = Usuario.profecion;

        tabla.appendChild(row);
        row.appendChild(nomreCell);
        row.appendChild(edadCell);
        row.appendChild(profecionCell);
    });

}

const imprimirStorage = () => {
    todosLosUsuarios = JSON.parse(localStorage.getItem('todosLosUsuarios'));
    todosLosUsuarios.forEach((Usuario) => {
        let row = document.createElement('tr'),
            nomreCell = document.createElement('td'),
            edadCell = document.createElement('td'),
            profecionCell = document.createElement('td');

        nomreCell.textContent = Usuario.nombre;
        edadCell.textContent = Usuario.edad;
        profecionCell.textContent = Usuario.profecion;

        tabla.appendChild(row);
        row.appendChild(nomreCell);
        row.appendChild(edadCell);
        row.appendChild(profecionCell);
    });
}

const guardarUsuario = (e) => {
    e.preventDefault();
    crearUsuario();
    crearlista();
    miFormulario.reset();
}

const guardarStorage = () => {
    localStorage.setItem("UsuariosRecientes", JSON.stringify(listaUsuarios));
    localStorage.setItem("todosLosUsuarios", JSON.stringify(todosLosUsuarios));
    listaUsuarios = [];
}

//eventos
miFormulario.addEventListener("submit", guardarUsuario);

//manejo de DOM
if (JSON.parse(localStorage.getItem('todosLosUsuarios') != null)) {
    imprimirStorage();
}

displayMenu.onclick = () => {
    form.style.display = "block";
}

closeMenu.onclick = () => {
    form.style.display = "none";
}

confirmar.onclick = () => {
    form.style.display = "none";
    crearTabla();
    guardarStorage();
}