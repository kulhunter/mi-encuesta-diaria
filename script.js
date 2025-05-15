document.getElementById('encuestaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const datos = {
    q1: form.q1.value,
    q2: form.q2.value,
    q3: form.q3.value,
    q4: form.q4.value,
    q5: form.q5.value
  };

  const url = "TU_URL_DE_SCRIPT"; // <- REEMPLAZA ESTO

  document.getElementById("estado").innerText = "Enviando...";

  fetch(url, {
    method: 'POST',
    mode: 'no-cors', // porque Google Apps Script no responde CORS
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(() => {
    form.reset();
    document.getElementById("estado").innerText = "¡Gracias! Tu respuesta fue registrada.";
  })
  .catch(() => {
    document.getElementById("estado").innerText = "Error al enviar. Intenta más tarde.";
  });
});
