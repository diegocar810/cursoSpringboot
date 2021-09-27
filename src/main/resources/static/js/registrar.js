// Call the dataTables jQuery plugin
$(document).ready(function() {

  // on ready
});

async function registrarUsuarios(){

let datos = {
nombre: $('#exampleFirstName').val(),
apellido:$('#exampleLastName').val() ,
email:$('#exampleInputEmail').val() ,
telefono: $('#exampleFirstName').val() ? $('#exampleFirstName').val() : '-',
password: $('#exampleInputPassword').val()
}
if($('#exampleInputPassword').val() != $('#exampleRepeatPassword').val() ){
alert('Las contraseñas no son iguales');
return
}
  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("La cuenta fue creada con exito");
  window.location.href = 'login.html'
}

