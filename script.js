document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);

  const values = {
    gimnasio: data.get("gimnasio"),
    despertar: data.get("despertar"),
    motivacion: data.get("motivacion"),
    consumo: data.get("consumo"),
    comentario: data.get("comentario"),
    fecha: new Date().toLocaleDateString("es-CL")
  };

  fetch("https://script.google.com/macros/s/AKfycbywOoTe0UYu-aABv_h458S6hhym-KivBXW6P-4kQaNfiud09zF71XxOYIbIyp--fV0G/exec", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(txt => {
    document.getElementById("mensaje").textContent = "¡Gracias! Tus respuestas fueron guardadas.";
    document.getElementById("form").reset();
  })
  .catch(err => {
    document.getElementById("mensaje").textContent = "Error al enviar la encuesta.";
  });
});
