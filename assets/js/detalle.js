$(document).ready(function () {

    $(".btn-detalle").click(function(){
        const lugarElegido = lugar;
        localStorage.setItem("lugarElegido", JSON.stringify(lugarElegido));
        window.location.href = 'detalle.html';
        
        const lugarDatos = JSON.parse(lugarElegido);
        const detallesClimaCiudad = document.getElementById('clima-detalle');
        const detallesCiudad = lugarElegido;

        lugarDatos.forEach(lugar => {
            detallesClimaCiudad.innerHTML += `
                <article class="card col-sm-12 col-md-4 mb-3 detalle">
                    <h1>Pronóstico de la semana: ${lugar.nombreDetalle}</h1>
                </article>
            `;
        }); 
    }); 

    
});
    