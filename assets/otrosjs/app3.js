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

class WeatherApp {
	constructor(apiClima) {
		this.apiClient = apiClima;
		this.lugares = [];
	}

	async cargarLugares() {
        try {
            const resp = await fetch(url);
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

    localStore() {
        const lugarElegido = localStorage.getItem("lugarElegido");
        const lugarDatos = JSON.parse(lugarElegido);
        const detallesClimaCiudad = document.getElementById('clima-detalle');
        const detallesEstadisticaSemana = document.getElementById('estadistica-semana');
        const detallesCiudad = lugarElegido;
    }

    reuneInformacion() {
        const lugarElegido = localStorage.getItem("lugarElegido");
        if (!lugarElegido) {
            console.error("No hay ningún lugar seleccionado en localStorage");
            return null;
        }
        const lugarDatos = JSON.parse(lugarElegido);
        return lugarDatos;
    }    

	cargarDetalle(lugarDetalle) {
        const detallesClimaCiudad = document.getElementById("clima-detalle");
        if (!detallesClimaCiudad) {
            console.error("No se encontró un elemento con id='clima-detalle'");
            return;
        }

        if (!lugarDetalle) {
            console.error("cargarDetalle() no recibió datos");
            return;
        }

        const estadisticas = calcularEstadisticas(lugarDetalle.pronosticoSemanal);

        detallesClimaCiudad.innerHTML = `<h2>Pronóstico de la semana: ${lugarDetalle.nombre}</h2>
            <div class="col-sm-12 col-md-4 detail__info">
                <h2 class="detail__title">Clima</h2>
                <div class="detail__ico">${lugarDetalle.ico}</div>
                <h3 class="detail__grade">${lugarDetalle.climaActual}</h3>
                <h3 class="detail__estado">${lugarDetalle.estadoActual}</h3>
            </div>

            <div class="col-sm-12 col-md-4 detail__info">
                <h2 class="detail__title">Humedad</h2>
                <div class="detail__ico">💧</div>
                <h3 class="detail__grade">${lugarDetalle.humedad}</h3>
            </div>

            <div class="col-sm-12 col-md-4 detail__info">
                <h2 class="detail__title">Viento</h2>
                <div class="detail__ico">💨</div>
                <h3 class="detail__grade">${lugarDetalle.viento}</h3>
            </div>

            <h2 class="container__title">Pronóstico Semana</h2>

            <h3 class="container__promedio">Promedio de máxima de la semana: ${estadisticas.promedioMaxCiudad.toFixed(1)}°C</h3>

            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[0].dia}</h3>
                <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[0].estado}</h3>
                <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[0].min} / ${lugarDetalle.pronosticoSemanal[0].max}</h3>
            </article>

            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[1].dia}</h3>
                <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[1].estado}</h3>
                <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[1].min} / ${lugarDetalle.pronosticoSemanal[1].max}</h3>
            </article>

            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[2].dia}</h3>
                <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[2].estado}</h3>
                <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[2].min} / ${lugarDetalle.pronosticoSemanal[2].max}</h3>
            </article>

            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[3].dia}</h3>
                <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[3].estado}</h3>
                <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[3].min} / ${lugarDetalle.pronosticoSemanal[3].max}</h3>
            </article>

            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[4].dia}</h3>
                <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[4].estado}</h3>
                <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[4].min} / ${lugarDetalle.pronosticoSemanal[4].max}</h3>
            </article>

            <article class="card col-sm-12 col-md-4 card-body forecast__card">
                <h3 class="forecast__title">${lugarDetalle.pronosticoSemanal[5].dia}</h3>
                <h3 class="forecast__state">${lugarDetalle.pronosticoSemanal[5].estado}</h3>
                <h3 class="forecast__grade">${lugarDetalle.pronosticoSemanal[5].min} / ${lugarDetalle.pronosticoSemanal[5].max}</h3>
            </article>

            <section class="estadisticas-semana">
                <h2 class="container__title">Estadísticas de la semana</h2>

                <div class="col-sm-12 promedio__section">
                    <article class="promedio__min col-sm-12 col-md-4">
                        <h3 class="grado__title">Promedio de mínimas:</h3>
                        <h4 class="grado__text">${estadisticas.promedioMinCiudad.toFixed(1)}°C</h4>
                    </article>

                    <article class="promedio__max col-sm-12 col-md-4">
                        <h3 class="grado__title">Promedio de máximas:</h3>
                        <h4 class="grado__text">${estadisticas.promedioMaxCiudad.toFixed(1)}°C</h4>
                    </article>

                    <article class="promedio__todo col-sm-12 col-md-4">
                        <h3 class="grado__title">Promedio general:</h3>
                        <h4 class="grado__text">${estadisticas.promedioTodoCiudad.toFixed(1)}°C</h4>
                    </article>
                </div>

                <div class="col-sm-12 promedio__section">
                    <article class="promedio__min col-sm-12 col-md-6">
                        <h3 class="grado__title">Temperatura mínima de la semana:</h3>
                        <h4 class="grado__text">${estadisticas.minimaSemana}°C</h4>
                    </article>

                    <article class="promedio__max col-sm-12 col-md-6">
                        <h3 class="grado__title">Temperatura máxima de la semana:</h3>
                        <h4 class="grado__text">${estadisticas.maximaSemana}°C</h4>
                    </article>
                </div>

                <aside class="promedio__estado">
                    <h3 class="estado__title">Clima más repetido:</h3>
                    <h4 class="estado__text">${estadisticas.modaClimaCiudad}</h4>
                    <h3 class="estado__title">Consideración para este clima:</h3>
                    <h4 class="estado__text">${estadisticas.resumenClimaCiudad}</h4>
                </aside>
            </section>
        `;
    }

	/*calcularEstadisticas(pronosticoSemanal) { 
        
    }*/
}




/*export class Producto {

    constructor({id, nombre, ico, climaActual, estadoActual}) {
        this.id = id,
        this.nombre = nombre,
        this.ico = ico,
        this.climaActual = climaActual,
        this.estadoActual = estadoActual
    }

    get id() { return this.id; }

    reducirStock(cantidad = 1) {
        if (isNaN(cantidad)) throw new TypeError("Debe ser un numero");
        if (cantidad < 1) throw new RangeError("Debe ser un cantidad mayor a cero");
        if (cantidad > this.#stock)
            throw new Error(`Stock insuficiente: solo hay ${this.#stock} unidades`);
        this.#stock -= cantidad;
        return this;
    }
    toString(){
         return `[${this.categoria.toUpperCase()}] ${this.nombre} — $${this.precio?.toLocaleString('es-CL')} (stock: ${this.#stock})`; 
    }

}*/