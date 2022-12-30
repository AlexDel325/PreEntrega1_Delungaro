// class con constructor (permite crear un objeto "Usuario")
class Usuario {
    constructor(nombre, edad, profecion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profecion = profecion;
    }
};

// variables y arrays
let listaUsuarios = [],
    todosLosUsuarios = [];

// elementos llamados
let displayMenu = document.getElementById("display-menu"),
    closeMenu = document.getElementById("close-menu"),
    confirmar = document.getElementById("confirmar"),
    Form = document.getElementById("formulario"),
    tabla = document.getElementById("componentes"),
    list = document.getElementById("lista");

let = miFormulario = document.getElementById("myForm");

//funciones
const crearUsuario = () => {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let profecion = document.getElementById("equipo").value;

    if (edad < 18) {
        console.log('el usuario debe ser mayor de edad')

    } else if (edad >= 18) {

        let usuarioNuevo = new Usuario(nombre, edad, profecion);
        listaUsuarios.push(usuarioNuevo);
    }

    return listaUsuarios;
}

const crearlista = () => {
    const listItem = document.createElement('li');
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);

    if (edad < 18 || nombre == '') {
        listItem.textContent = `ERROR al cargar el usuario`;
    } else if (edad >= 18) {
        listItem.textContent = `añadiste a usuario ${nombre} a la lista`;
    }

    list.appendChild(listItem);
}

const ImprimirTabla = () => {

    listaUsuarios.forEach((Usuario) => {
        let row = document.createElement('tr');
        nomreCell = document.createElement('td');
        edadCell = document.createElement('td');
        profecionCell = document.createElement('td');

        nomreCell.textContent = Usuario.nombre;
        edadCell.textContent = Usuario.edad;
        profecionCell.textContent = Usuario.profecion;

        tabla.appendChild(row);
        row.appendChild(nomreCell);
        row.appendChild(edadCell);
        row.appendChild(profecionCell);

        todosLosUsuarios.push(Usuario);
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

miFormulario.addEventListener("submit", guardarUsuario);

//manejo de DOM
displayMenu.onclick = () => {
    Form.style.display = "block";
}

closeMenu.onclick = () => {
    Form.style.display = "none";
}

confirmar.onclick = () => {
    Form.style.display = "none";
    ImprimirTabla();
    guardarStorage();
}