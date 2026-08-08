
button.addEventListener("click", () => {
    ciudad(botonbuscar.value);
    card.setAttribute(`style`, `display:none`);
});

function ciudad(ciudadbuscada) {
    const fetchPromise = fetch(`${URL}data/2.5/weather?q=${ciudadbuscada}&units=metric&lang=es&appid=${API_KEY}`);
    fetchPromise.then(response => {
        return response.json();
    }).then(result => {
        localStore(result);
    }).catch(err => {
        console.log('fallo!: ', err);
        informacion.innerHTML = `<div class="row justify-content-center text-center">
<p class="mb-3 col-12  align-self-center" style="color: red; font-weight: bold">Ciudad no encontrada, intente nuevamente por favor. </p>
<button type="button" class="btn btn-primary mt-3  col-2 align-self-center" onclick="location.reload()">Volver a intentarlo</button>
</div>`;
    });
}
function localStore(result) {
    let arrayDatos = localStorage.getItem("climaConsultado") ? JSON.parse(localStorage.climaConsultado) : [];

    const data = {
        temperatura: result.main.temp,
        temperaturaMax: result.main.temp_max,
        temperaturaMin: result.main.temp_min,
        humedad: result.main.humidity,
        sensasionTermica: result.main.feels_like,
        presionAtmosferica: result.main.pressure,
        velocidadViento: result.wind.speed,
        estadoClima: result.weather[0].description,
        iconoClima: result.weather[0].icon,
        latitud: result.coord.lat,
        longitud: result.coord.lon,
    };

    arrayDatos.push(data);
    localStorage.setItem("climaConsultado", JSON.stringify(arrayDatos));
    mostrardatos(data);
}