$(document).ready(function () {

    /* ARRAY CON INFORMACIÓN DE LAS CIUDADES */
    const contenedor = document.getElementById('lugares-clima');
    const lugares = [
        { id: "1", nombre: "Santiago, Chile", ico: "☁️", humedad: "66%", viento:"20kms/h", climaActual: "18°C", estadoActual: "Nublado",
            pronosticoSemanal: [
                { dia: "martes", min: "6°C", max: "20°C", estado: "Nubosidad Parcial" },
                { dia: "miércoles", min: "3°C", max: "16°C", estado: "Nublado" },
                { dia: "jueves", min: "3°C", max: "18°C", estado: "Nublado" },
                { dia: "viernes", min: "6°C", max: "20°C", estado: "Nubosidad parcial" },
                { dia: "sábado", min: "8°C", max: "16°C", estado: "Chubascos" },
                { dia: "domingo", min: "7°C", max: "16°C", estado: "Nublado" }
            ]},
        { id: "2", nombre: "Osorno, Chile", ico: "🌧️", humedad: "85%", viento:"50kms/h", climaActual: "7°C", estadoActual: "Chubascos",
            pronosticoSemanal: [
                { dia: "martes", min: "-1°C", max: "5°C", estado: "Chubascos" },
                { dia: "miércoles", min: "0°C", max: "8°C", estado: "Nublado" },
                { dia: "jueves", min: "0°C", max: "8°C", estado: "Chubascos" },
                { dia: "viernes", min: "1°C", max: "9°C", estado: "Chubascos" },
                { dia: "sábado", min: "-2°C", max: "5°C", estado: "Nublado" },
                { dia: "domingo", min: "1°C", max: "7°C", estado: "Nublado" }
            ]},
        { id: "3", nombre: "Reñaca, Chile", ico: "⛅", humedad: "70%", viento:"30kms/h", climaActual: "15°C", estadoActual: "Nubosidad Parcial",
            pronosticoSemanal: [
                { dia: "martes", min: "5°C", max: "18°C", estado: "Soleado" },
                { dia: "miércoles", min: "6°C", max: "16°C", estado: "Soleado" },
                { dia: "jueves", min: "6°C", max: "13°C", estado: "Nubosidad Parcial" },
                { dia: "viernes", min: "5°C", max: "10°C", estado: "Nublado" },
                { dia: "sábado", min: "6°C", max: "15°C", estado: "Nublado" },
                { dia: "domingo", min: "6°C", max: "16°C", estado: "Nublado" }
            ]},
        { id: "4", nombre: "Panguipulli, Chile", ico: "🌧️", humedad: "87%", viento:"50kms/h", climaActual: "10°C", estadoActual: "Chubascos",
            pronosticoSemanal: [
                { dia: "martes", min: "-1°C", max: "8°C", estado: "Chubascos" },
                { dia: "miércoles", min: "-2°C", max: "10°C", estado: "Chubascos" },
                { dia: "jueves", min: "0°C", max: "9°C", estado: "Chubascos" },
                { dia: "viernes", min: "3°C", max: "7°C", estado: "Nublado" },
                { dia: "sábado", min: "1°C", max: "6°C", estado: "Nublado" },
                { dia: "domingo", min: "1°C", max: "7°C", estado: "Chubascos" }
            ]},
        { id: "5", nombre: "Toronto, Canadá", ico: "⛅", humedad: "60%", viento:"40kms/h", climaActual: "10°C", estadoActual: "Nubosidad Parcial",
            pronosticoSemanal: [
                { dia: "martes", min: "7°C", max: "13°C", estado: "Nubosidad Parcial" },
                { dia: "miércoles", min: "8°C", max: "16°C", estado: "Nublado" },
                { dia: "jueves", min: "6°C", max: "12°C", estado: "Nubosidad Parcial" },
                { dia: "viernes", min: "8°C", max: "15°C", estado: "Soleado" },
                { dia: "sábado", min: "7°C", max: "16°C", estado: "Soleado" },
                { dia: "domingo", min: "8°C", max: "15°C", estado: "Nubosidad Parcial" }
            ]},
        { id: "6", nombre: "Londres, Inglaterra", ico: "🌧️", humedad: "78%", viento:"40kms/h", climaActual: "20°C", estadoActual: "Chubascos",
            pronosticoSemanal: [
                { dia: "martes", min: "5°C", max: "21°C", estado: "Chubascos" },
                { dia: "miércoles", min: "0°C", max: "18°C", estado: "Nublado" },
                { dia: "jueves", min: "6°C", max: "17°C", estado: "Chubascos" },
                { dia: "viernes", min: "4°C", max: "19°C", estado: "Chubascos" },
                { dia: "sábado", min: "8°C", max: "16°C", estado: "Chubascos" },
                { dia: "domingo", min: "7°C", max: "19°C", estado: "Nublado" }
            ]},
        { id: "7", nombre: "Melbourne, Australia", ico: "☀️", humedad: "35%", viento:"20kms/h", climaActual: "25°C", estadoActual: "Soleado",
            pronosticoSemanal: [
                { dia: "martes", min: "-1°C", max: "27°C", estado: "Soleado" },
                { dia: "miércoles", min: "0°C", max: "26°C", estado: "Soleado" },
                { dia: "jueves", min: "0°C", max: "28°C", estado: "Nubosidad Parcial" },
                { dia: "viernes", min: "1°C", max: "23°C", estado: "Soleado" },
                { dia: "sábado", min: "-2°C", max: "26°C", estado: "Nubosidad Parcial" },
                { dia: "domingo", min: "1°C", max: "25°C", estado: "Soleado" }
            ]},
        { id: "8", nombre: "Kioto, Japón", ico: "☀️", humedad: "56%", viento:"26kms/h", climaActual: "20°C", estadoActual: "Soleado",
            pronosticoSemanal: [
                { dia: "martes", min: "7°C", max: "21°C", estado: "Soleado" },
                { dia: "miércoles", min: "6°C", max: "20°C", estado: "Soleado" },
                { dia: "jueves", min: "8°C", max: "23°C", estado: "Nubosidad Parcial" },
                { dia: "viernes", min: "6°C", max: "22°C", estado: "Soleado" },
                { dia: "sábado", min: "7°C", max: "20°C", estado: "Nubosidad Parcial" },
                { dia: "domingo", min: "6°C", max: "21°C", estado: "Nubosidad Parcial" }
            ]},
        { id: "9", nombre: "Málaga, España", ico: "🌥️", humedad: "56%", viento:"20kms/h", climaActual: "21°C", estadoActual: "Nubosidad Parcial",
            pronosticoSemanal: [
                { dia: "martes", min: "10°C", max: "23°C", estado: "Nubosidad Parcial" },
                { dia: "miércoles", min: "8°C", max: "22°C", estado: "Soleado" },
                { dia: "jueves", min: "8°C", max: "23°C", estado: "Soleado" },
                { dia: "viernes", min: "7°C", max: "25°C", estado: "Nubosidad Parcial" },
                { dia: "sábado", min: "10°C", max: "20°C", estado: "Nubosidad Parcial" },
                { dia: "domingo", min: "9°C", max: "21°C", estado: "Nubosidad Parcial" }
            ]}, 
        { id: "10", nombre: "Nueva York, EEUU", ico: "☁️", humedad: "76%", viento:"30kms/h", climaActual: "10°C", estadoActual: "Nublado",
            pronosticoSemanal: [
                { dia: "martes", min: "1°C", max: "11°C", estado: "Nublado" },
                { dia: "miércoles", min: "0°C", max: "10°C", estado: "Nublado" },
                { dia: "jueves", min: "2°C", max: "13°C", estado: "Chubascos" },
                { dia: "viernes", min: "0°C", max: "10°C", estado: "Nublado" },
                { dia: "sábado", min: "2°C", max: "9°C", estado: "Nublado" },
                { dia: "domingo", min: "1°C", max: "11°C", estado: "Chubascos" }
            ]},
        { id: "11", nombre: "Alguna Parte, Alfa Centauro", humedad: "0%", viento:"1500kms/h", ico: "🪐", climaActual: "0°C", estadoActual: "Nebulosidad Parcial",
            pronosticoSemanal: [
                { dia: "martes", min: "0°C", max: "0°C", estado: "Lluvia de Meteoritos" },
                { dia: "miércoles", min: "0°C", max: "0°C", estado: "Visita Interplanetaria" },
                { dia: "jueves", min: "0°C", max: "0°C", estado: "Nebulosidad Parcial" },
                { dia: "viernes", min: "0°C", max: "0°C", estado: "Nebulosidad Parcial" },
                { dia: "sábado", min: "0°C", max: "0°C", estado: "Clases de Tap" },
                { dia: "domingo", min: "0°C", max: "0°C", estado: "Clases de Flamenco" }
            ]},
    ];


    /* MULTIPLICAR CARD SIN REPETIR HTML */
    lugares.forEach(lugar => {
        contenedor.innerHTML += `
            <article class="card col-sm-12 col-md-4 mb-3 bg-secondary bg-gradient clima">
                <div class="card-body text-center climacard__body">
                    <h2 class="card-title climacard__title">${lugar.nombre}</h2>
                    <div class="climacard__ico">${lugar.ico}</div>
                    <h3 class="climacard__grado">${lugar.climaActual}</h3>
                    <h4 class="climacard__estado">${lugar.estadoActual}</h3>
                    <a type="button" class="btn btn-outline-light col-12 climacard__button" id="btn-detalle-${lugar.id}" href="#">Detalles</a>
                </div>
            </article>
        `;
    });

    /* TOMAR INFORMACIÓN Y APRETAR BOTÓN PARA IR A DETALLE.HTML */
    lugares.forEach(lugar => {
        $(`#btn-detalle-${lugar.id}`).click(function(){
            const lugarElegido = lugar;
            localStorage.setItem("lugarElegido", JSON.stringify(lugarElegido));
            window.location.href = 'detalle.html';
        }); 
    });

});