// Call the dataTables jQuery plugin
$(document).ready(function () {
    cargarUsuarios();
    $('#usuarios').DataTable();

    $('#email-user').text(localStorage.email);
});

function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    }
}

async function cargarUsuarios() {

    const request = await fetch('api/usuarios', {
        method: 'GET',
        headers: getHeaders()
    });
    const usuarios = await request.json();

    console.log(usuarios);
    let listadoUsuarios = '';
    let botonEliminar = '';
    for (let usuario of usuarios) {
        botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
        listadoUsuarios += ' <tr> <td>' + usuario.id + '</td> <td> '
            + usuario.nombre + ' ' + usuario.apellido + '</td><td>'
            + usuario.email + '</td><td>'
            + usuario.telefono + '</td><td>' + botonEliminar + '</td></tr>"';
    }


    $('#usuarios tbody').html(listadoUsuarios);
}

async function eliminarUsuario(id) {
    if (confirm('¿Desea eliminar este usuario')) {
        const request = await fetch('api/usuarios/' + id, {
            method: 'DELETE',
            headers: getHeaders()
        });
        location.reload();
    }
}
