
  document.addEventListener("DOMContentLoaded", () => {
    // 1. Recuperar el texto de localStorage
    const jsonTexto = localStorage.getItem("detalleProducto");

    // 2. Verificar si existen datos
    if (jsonTexto) {
      // 3. Reconvertir el texto a un objeto JavaScript
      const datos = JSON.parse(jsonTexto);

      // 4. Usar los datos en tu nueva página
      document.getElementById("titulo").textContent = datos.nombre;
      document.getElementById("precio").textContent = `Precio: $${datos.precio}`;

      // Opcional: Limpiar los datos para no dejar basura en el navegador
      localStorage.removeItem("detalleProducto");
    } else {
      console.error("No se encontraron datos para el detalle.");
    }
  });
