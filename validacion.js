export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
  }
  if (input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").inmerHTML = "";
  }else{
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").inmerHTML = "";
        mostrarMensajeDeError(tipoDeInput, input);
  }
console.log(input);
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

  const mensajeDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar Vacio",
    },
    email: {
        valueMissing: "Este campo no puede estar Vacio",
        typeMismatch: "El correo no es válido",
    },
    password: {
        valueMissing: "Este campo no puede estar Vacio",
        patterMismatch:" Al menos 6 caracteres, maxiomo 12, letras Mayuculas y minusculas, y un signos",
    },
    direccion: {
      valueMissing: "Este campo no puede estar Vacio",
      patterMismatch: "La direccion debe contenre entre 10 a 40 caracteres",
    },
    ciudad: {
      valueMissing: "Este campo no puede estar Vacio",
      patterMismatch: "La direccion debe contenre entre 10 a 40 caracteres",
    },
    estado: {
      valueMissing: "Este campo no puede estar Vacio",
      patterMismatch: "La direccion debe contenre entre 10 a 40 caracteres",
    },
    valueMissing: "Este campo no puede estar Vacio",
    customError: "Debes tener al menos 18 años de edad",


  }
  const validadores = {
    nacimiento: (input) => validarNacimiento(input),
  };
  function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";

    return mensaje;
  }
  
  function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
      mensaje = "Debes tener al menos 18 años de edad";
    }
  
    input.setCustomValidity(mensaje);
  }
function mayorEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date (
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate(),
    )
    return diferenciaFechas <= fechaActual
}