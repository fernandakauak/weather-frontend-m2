$(document).ready(function () {

    const lugarElegido = localStorage.getItem("lugarElegido");

    const lugarDatos = JSON.parse(lugarElegido);
    const detallesClimaCiudad = document.getElementById('clima-detalle');
    const detallesCiudad = lugarElegido;

    detallesClimaCiudad.innerHTML += `
        <h1>Pronóstico de la semana: ${lugarDatos.nombre}</h1>
    `; 

    
});
    