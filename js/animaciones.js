const formulario = document.querySelector('#registro-form');

if (formulario) {
  const nombre = formulario.elements.nombre;
  const telefono = formulario.elements.telefono;
  const mensaje = formulario.elements.mensaje;
  const contador = document.querySelector('#mensaje-contador');
  const estado = document.querySelector('#registro-estado');

  function validarDatos() {
    nombre.setCustomValidity(nombre.value.trim() ? '' : 'Escribe tu nombre completo.');
    const digitos = telefono.value.replace(/\s/g, '');
    telefono.setCustomValidity(/^\d{10}$/.test(digitos) ? '' : 'Escribe un teléfono de 10 dígitos.');
  }

  formulario.addEventListener('input', () => {
    validarDatos();
    contador.textContent = `${mensaje.value.length} / 500 caracteres`;
    estado.hidden = true;
    estado.textContent = '';
  });

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    validarDatos();
    if (!formulario.reportValidity()) return;
    estado.hidden = false;
    estado.textContent = '¡Tu perfil está listo! Los campos son válidos. Esta es una demostración: no se ha enviado ni guardado tu registro.';
  });

  formulario.querySelector('button[type="submit"]').disabled = false;
}
