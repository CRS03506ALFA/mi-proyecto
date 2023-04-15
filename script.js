// obtener el formulario de registro
const registroForm = document.getElementById("registro-form");

// agregar un listener para enviar el formulario cuando se envía
registroForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevenir la acción por defecto del evento submit
  
  // obtener los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  
  // enviar la información del usuario a un servidor de backend usando una petición HTTP
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/registrar_usuario");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ nombre: nombre, email: email }));
  
  // mostrar un mensaje de éxito después de enviar el formulario
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "¡Gracias por registrarte!";
});

// agregar interactividad al botón de búsqueda
const botonBusqueda = document.getElementById("boton-busqueda");
const inputBusqueda = document.getElementById("input-busqueda");

botonBusqueda.addEventListener("click", function() {
  const busqueda = inputBusqueda.value;
  // hacer algo con la cadena de búsqueda, como enviarla a un servidor de backend
});
