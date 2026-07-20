//Selección zona donde se despliega información
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
        //console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

/*class ClimaApp {
	constructor(apiClima) {
		this.apiClima = apiClima;
		this.lugares = [];
        this.ico = [];
        this.humedad = [];
        this.viento = [];
        this.ClimaApp = [];
        this.estadoActual = [];
	}

	async CargaLugares() {
    }
	async cargarDetalleLugar(id) {
	}
	calcularEstadisticas(pronosticoSemanal) {
    }
}*/

const cargaLugares = async() => {
    try {
        const resp = await fetch(apiClima);

        if(resp.status === 200) {
            const datos = await resp.json();

            let lugares = "";
            datos.forEach(lugar => {
                lugares += `
                <article class="card col-sm-12 col-md-4 mb-3 bg-secondary bg-gradient clima">
                    <div class="card-body text-center climacard__body">
                        <h2 class="card-title climacard__title">${lugar.nombre}</h2>
                        <div class="climacard__ico">${lugar.ico}</div>
                        <h3 class="climacard__grado">${lugar.climaActual}</h3>
                        <h4 class="climacard__estado">${lugar.estadoActual}</h3>
                        <a type="button" class="btn btn-outline-light col-12 climacard__button" id="btn-detalle-${lugar.id}" href="#">Detalles</a>
                    </div>
                </article>
                `
                const container = document.querySelector("#lugares-clima").innerHTML = lugares;
            });
        } else if(resp.status === 401){
            console.log("Pusiste la llave mal");
        } else if(resp.status === 401){
            console.log("Esta ciudad no está disponible");
        } else {
            console.log("Error no identificado");
        }
    } catch (error) {
        console.log(error);
    }
    
}

const cargarDetalle = async(id) => { 
     /* TOMAR INFORMACIÓN Y APRETAR BOTÓN PARA IR A DETALLE.HTML */
    lugares.forEach(lugar => {
         $(`#btn-detalle-${lugar.id}`).click(function(){
            const lugarElegido = lugar;
            localStorage.setItem("lugarElegido", JSON.stringify(lugarElegido));
            window.location.href = 'detalle.html';
        }); 
    });

    /* CAPTAR INFORMACIÓN PARA USAR EN DETALLE.HTML */
    const lugarElegido = localStorage.getItem("lugarElegido");
    const lugarDatos = JSON.parse(lugarElegido);
    const detallesClimaCiudad = document.getElementById('clima-detalle');
    const detallesEstadisticaSemana = document.getElementById('estadistica-semana');
    const detallesCiudad = lugarElegido;
}

cargaLugares();