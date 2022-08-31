
const datos={
    nombre:"",
    apellido:"",
    email:"",
    mensaje:"",
}
const nombre=document.querySelector("#nombre");
const apellido=document.querySelector("#apellido");
const email=document.querySelector("#email");
const mensaje=document.querySelector("#mensaje");

function leerContenido(evento) {
    datos[evento.target.id]=evento.target.value;
    console.log(datos);
};

nombre.addEventListener("input", leerContenido);
apellido.addEventListener("input", leerContenido);
email.addEventListener("input", leerContenido);
mensaje.addEventListener("input", leerContenido);

//validacion

const formulario=document.querySelector(".formulario");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const {nombre,apellido,email,mensaje}=datos;
      if(nombre === "" || apellido === "" || email ==="" || mensaje===""){
          mostrarError("Todos los campos deben ser completados");
             return;
      }
          mostrarMensaje("Mensaje enviado correctamente");
});

function mostrarError(mensaje){
    const error= document.createElement("P");
          error.textContent = mensaje;
          error.classList.add("error");

          formulario.appendChild(error);

          setTimeout(() => {
            error.remove();
          }, 3000);
};

function mostrarMensaje(mensaje){
    const alerta= document.createElement("P");
          alerta.textContent=mensaje;
          alerta.classList.add("alerta");

          formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
          }, 3000);
};
