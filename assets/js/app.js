// Selección zona donde se despliega información
const container = document.querySelector("#container");

// Define the API URL
const apiClima = './apiprueba.json';

// GET
fetch(apiClima)
    .then(response => {
        if (!response.ok) {
            throw new Error("¡Error de respuesta!");
        }
        return response.json();
    })
    .then(data => {
        // console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Carga de Lugares
const cargaLugares = async () => {
    try {
        const resp = await fetch(apiClima);
        if (resp.status === 200) {
            const datos = await resp.json();
            let lugares = "";
            datos.forEach(lugar => {
                lugares += `
                    <article class="card col-sm-12 col-md-4 mb-3 bg-secondary bg-gradient clima">
                        <div class="card-body text-center climacard__body">
                            <h2 class="card-title climacard__title">${lugar.nombre}</h2>
                            <div class="climacard__ico">${lugar.ico}</div>
                            <h3 class="climacard__grado">${lugar.climaActual}</h3>
                            <h4 class="climacard__estado">${lugar.estadoActual}</h4>
                            <a type="button" class="btn btn-outline-light col-12 climacard__button" id="btn-detalle-${lugar.id}" href="detalle.html">Detalles</a>
                        </div>
                    </article>
                `;
            });

            document.querySelector("#lugares-clima").innerHTML = lugares;

            datos.forEach(lugar => {
                const botonDetalle = document.querySelector(`#btn-detalle-${lugar.id}`);
                botonDetalle.addEventListener("click", () => {
                    localStorage.setItem("lugarElegido", JSON.stringify(lugar));
                });
            });
        } else if (resp.status === 401) {
            console.log("Pusiste la llave mal");
        } else if (resp.status === 404) {
            console.log("Esta ciudad no está disponible");
        } else {
            console.log("Error no identificado");
        }
    } catch (error) {
        console.log(error);
    }
};

function muestraDatos(id, data) {
    console.log(id, data);
}

function localStore() {
    const lugarElegido = localStorage.getItem("lugarElegido");
    const lugarDatos = JSON.parse(lugarElegido);
    const detallesClimaCiudad = document.getElementById('clima-detalle');
    const detallesEstadisticaSemana = document.getElementById('estadistica-semana');
    const detallesCiudad = lugarElegido;
}

cargaLugares();