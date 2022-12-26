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
    nombre = 1,
    edad = parseInt(1),
    profecion = 1;

// elementos llamados
let botonMenu = document.getElementById("crearUs"),
    Form = document.getElementById("formulario"),
    cerrar = document.getElementById("cerrar"),
    confirmar = document.getElementById("confirmar"),
    tabla = document.getElementById("elementos"),
    list = document.getElementById("lista");

// eventos
let miFormulario = document.getElementById("myForm");
miFormulario.addEventListener("submit", crearUsuario);

//funciones
function crearUsuario(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let profecion = document.getElementById("equipo").value;

    const listItem = document.createElement('li');
    listItem.textContent = `añadiste a usuario ${document.getElementById("nombre").value} a la lista`;


    if (edad < 18) {
        alert("el usuario debe ser mayor de edad");

    } else if (edad >= 18) {
        list.appendChild(listItem);

        let usuarioNuevo = new Usuario(nombre, edad, profecion);
        listaUsuarios.push(usuarioNuevo);

        localStorage.setItem("Usuarios", JSON.stringify(listaUsuarios));

        let usuarioT = document.createElement("tr");
        let elementoN = document.createElement("td");
        let elementoE = document.createElement("td");
        let elementoP = document.createElement("td");

        elementoN.textContent = document.getElementById("nombre").value;
        elementoE.textContent = document.getElementById("edad").value;
        elementoP.textContent = document.getElementById("equipo").value;

        tabla.appendChild(usuarioT);
        usuarioT.appendChild(elementoN);
        usuarioT.appendChild(elementoE);
        usuarioT.appendChild(elementoP);

        miFormulario.reset();
    }

    return listaUsuarios;

};


//manejo de DOM

confirmar.onclick = () => {
    Form.style.display = "none";
}

botonMenu.onclick = () => {
    Form.style.display = "block";
};

cerrar.onclick = () => {
    Form.style.display = "none";
};