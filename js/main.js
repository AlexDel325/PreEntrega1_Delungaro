// class con constructor (permite crear un objeto "Usuario")
class Usuario {
    constructor(nombre, apellido, edad, profecion, correo, mascota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.profecion = profecion;
        this.correo = correo;
        this.mascota = mascota
    }
};

// variables
let displayMenu = document.getElementById("display-menu"),
    closeMenu = document.getElementById("close-menu"),
    confirmar = document.getElementById("confirmar"),
    borrarTodo = document.getElementById("delete-all"),
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
        apellido = document.getElementById("apellido").value,
        edad = parseInt(document.getElementById("edad").value),
        profecion = document.getElementById("equipo").value,
        correo = document.getElementById("correo").value,
        mascota = (Math.floor(Math.random() * (1008 - 1) + 1));

    if (edad < 18) {
        swal({
            title: "Oh no!",
            text: "El usuario debe ser mayor de edad!",
            icon: "error",
        });
    } else if (edad >= 18) {
        let usuarioNuevo = new Usuario(nombre, apellido, edad, profecion, correo, mascota);
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
    });

}

const imprimirStorage = () => {
    todosLosUsuarios = JSON.parse(localStorage.getItem('todosLosUsuarios'));

    todosLosUsuarios.forEach((Usuario) => {
        let row = document.createElement('tr'),
            nomreCell = document.createElement('td'),
            apellidoCell = document.createElement('td'),
            edadCell = document.createElement('td'),
            profecionCell = document.createElement('td'),
            correoCell = document.createElement('td'),
            pokeCell = document.createElement('td');

        nomreCell.textContent = Usuario.nombre;
        apellidoCell.textContent = Usuario.apellido;
        edadCell.textContent = Usuario.edad;
        profecionCell.textContent = Usuario.profecion;
        correoCell.textContent = Usuario.correo;

        tabla.appendChild(row);
        row.appendChild(nomreCell);
        row.appendChild(apellidoCell);
        row.appendChild(edadCell);
        row.appendChild(profecionCell);
        row.appendChild(correoCell);

        let url = `https://pokeapi.co/api/v2/pokemon/${Usuario.mascota}/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                pokeCell.textContent = data.name;
                row.appendChild(pokeCell);
                pokeCell.className = "pokemon";

                pokeCell.onclick = () => {
                    swal({
                        title: data.name,
                        icon: data.sprites.front_default,
                    });
                }
            })
            .catch(err => console.log * (err))
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

//ordenamiento de la tabla en orden alfabetico
todosLosUsuarios.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1;
    }
    return 0;
});

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
    window.location.reload();
}

borrarTodo.onclick = () => {
    swal({
            title: "Estas Seguro?",
            text: "No podras recuperar tus datos una vez sean borrardos",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! ahora tu tabla esta vacia!", {
                    icon: "success",
                    buttons: false,
                });
                localStorage.clear();
                setTimeout((function () {
                    window.location.reload();
                }), 3000);
            } else {
                swal("La tabla permanecera completa hasta que decidas borrarla");
            }
        });

}