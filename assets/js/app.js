$(document).ready(function () {

    /* ARRAY CON INFORMACIÓN DE LAS CIUDADES */
    const contenedor = document.getElementById('lugares-clima');
    const lugares = [
        { num: "1", nombre: "Santiago, Chile", ico: "☁️", humedad: "66%", viento:"20kms/h", clima: "18°C", martes: "20°C", miercoles: "16°C", jueves: "18°C", viernes: "20°C", sabado: "16°C", domingo: "16°C" },
        { num: "2", nombre: "Osorno, Chile", ico: "🌧️", humedad: "85%", viento:"50kms/h", clima: "7°C", martes: "5°C", miercoles: "8°C", jueves: "8°C", viernes: "9°C", sabado: "5°C", domingo: "7°C" },
        { num: "3", nombre: "Reñaca, Chile", ico: "⛅", humedad: "70%", viento:"30kms/h", clima: "15°C", martes: "18°C", miercoles: "16°C", jueves: "13°C", viernes: "10°C", sabado: "15°C", domingo: "16°C" },
        { num: "4", nombre: "Panguipulli, Chile", ico: "🌧️", humedad: "87%", viento:"50kms/h", clima: "10°C", martes: "8°C", miercoles: "10°C", jueves: "9°C", viernes: "7°C", sabado: "6°C", domingo: "7°C" },
        { num: "5", nombre: "Toronto, Canadá", ico: "⛅", humedad: "60%", viento:"40kms/h", clima: "10°C", martes: "13°C", miercoles: "16°C", jueves: "12°C", viernes: "15°C", sabado: "16°C", domingo: "15°C" },
        { num: "6", nombre: "Londres, Inglaterra", ico: "🌧️", humedad: "78%", viento:"40kms/h", clima: "20°C", martes: "21°C", miercoles: "18°C", jueves: "17°C", viernes: "19°C", sabado: "16°C", domingo: "19°C" },
        { num: "7", nombre: "Melbourne, Australia", ico: "☀️", humedad: "35%", viento:"20kms/h", clima: "25°C", martes: "27°C", miercoles: "26°C", jueves: "28°C", viernes: "23°C", sabado: "26°C", domingo: "25°C" },
        { num: "8", nombre: "Kioto, Japón", ico: "☀️", humedad: "56%", viento:"26kms/h", clima: "20°C", martes: "21°C", miercoles: "20°C", jueves: "23°C", viernes: "22°C", sabado: "20°C", domingo: "21°C" },
        { num: "9", nombre: "Málaga, España", ico: "🌥️", humedad: "56%", viento:"20kms/h", clima: "21°C", martes: "23°C", miercoles: "22°C", jueves: "23°C", viernes: "25°C", sabado: "20°C", domingo: "21°C" },
        { num: "10", nombre: "Nueva York, EEUU", ico: "☁️", humedad: "76%", viento:"30kms/h", clima: "10°C", martes: "11°C", miercoles: "10°C", jueves: "13°C", viernes: "10°C", sabado: "9°C", domingo: "11°C" },
        { num: "11", nombre: "Alguna Parte, Alfa Centauro", humedad: "0%", viento:"1500kms/h", ico: "🌥️", clima: "0°C", martes: "0°C", miercoles: "0°C", jueves: "0°C", viernes: "0°C", sabado: "0°C", domingo: "0°C" }
    ];

    /* MULTIPLICAR CARD SIN REPETIR HTML */
    lugares.forEach(lugar => {
        contenedor.innerHTML += `
            <article class="card col-sm-12 col-md-4 mb-3 bg-secondary bg-gradient">
                <div class="card-body text-center">
                    <h2 class="card-title">${lugar.nombre}</h2>
                    <div class="clima-ico">${lugar.ico}</div>
                    <h3 class="card-text">${lugar.clima}</h3>
                    <a type="button" class="btn btn-outline-light col-12" id="btn-detalle-${lugar.num}" href="#">Detalles</a>
                </div>
            </article>
        `;
    });

    /* TOMAR INFORMACIÓN Y APRETAR BOTÓN PARA IR A DETALLE.HTML */
    lugares.forEach(lugar => {
         $(`#btn-detalle-${lugar.num}`).click(function(){
            const lugarElegido = lugar;
            localStorage.setItem("lugarElegido", JSON.stringify(lugarElegido));
            window.location.href = 'detalle.html';
        }); 
    });
    
});