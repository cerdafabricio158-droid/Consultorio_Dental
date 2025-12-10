document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('citaForm');
  const mensaje = document.getElementById('mensaje');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const telefono = form.telefono.value.trim();
    const especialidad = form.especialidad.value;
    const fecha = form.fecha.value;

    if (!nombre || !telefono || !especialidad || !fecha) {
      mensaje.textContent = 'Error: Por favor complete todos los campos.';
      mensaje.style.color = 'red';
      return;
    }

    if (telefono.length < 8 || isNaN(telefono)) {
      mensaje.textContent = 'Error: Teléfono no válido.';
      mensaje.style.color = 'red';
      return;
    }

    mensaje.textContent = ¡Solicitud enviada! ${nombre}, pronto confirmaremos tu cita.;
    mensaje.style.color = 'green';
    form.reset();
  });
});
