  # ¡Bienvenidos al sitio web de KlimatHaus!
  
  ## Índice
  - Con respecto al repositorio
  - Links de descarga y vista
  - Actualización 04-07-2026
  - Actualización 21-06-2026
  
  ## Con respecto al repositorio
  Este sitio fue hecho por **Fernanda Kauak Alaff** para el **Curso de Desarrollo Front End 2026**, iniciado en el módulo 2 (por eso tiene M2 en el nombre, pero tendrá actualizaciones cada módulo) y consiste en un sitio para predecir el clima.
  
  La idea que le dí a **KlimatHaus** (cuyo nombre viene de *"Klimatisch"* y *"Haus"*, *'Climático'* y *'Casa'* en alemán) es mostrar ciudades en las que he vivido (Osorno y Santiago), ciudades donde viven seres queridos que no sean las dos mencionadas (Panguipulli, Toronto, Londres y Melbourne) y ciudades relacionadas a un proyecto personal (Kioto, Málaga y Nueva York). Incluso mi sitio es tan avanzado que capta lugares en el espacio.
  
  Espero que les guste y cualquier duda que tengan, así como el resultado final de la revisión, me la pueden hacer llegar directamente.


  ## Descarga
  - Este se va a subir como ZIP al Aula Digital, pero también pueden acceder en el siguiente link:
  <https://github.com/fernandakauak/weather-frontend-m2.git>
  - También pueden verlo en acción aquí:
  <https://fernandakauak.github.io/weather-frontend-m2/>

  ### ¡Que tengan una buena semana!

  ---
  ---

  ## Actualización 04-07-2026: Versión Portafolio - Módulo 4
  Se añadieron las siguientes funciones:
  1. Primero se modificó el arreglo **lugares** (ubicado en app.js) para desplegar nuevos datos: **pronosticoSemanal** contiene un arreglo propio con el día de la semana, la temperatura mínima, la temperatura máxima y el estado (nublado, soleado, etc). Estos datos nuevos van a calcularse usando las funciones mencionadas en los siguientes puntos.
  2. **Promedio de temperaturas mínimas** de cada ciudad *(uso de parseInt para rescatar el número del string, for para la operación y Math.round para redondear el decimal)*
  3. **Promedio de temperaturas máximas** de cada ciudad *(se usó lo mismo para el caso anterior)*
  4. **Promedio de los resultados** de promedios anteriores *(suma simple de los dos resultados anteriores y un Math.round para redondear decimales)*
  5. Uso de función para *sacar la moda* de los estados de clima de cada ciudad según la semana y **definir cuál es el que se repite**. Esta recorre un arreglo creado con los estados de la semana y se puede aplicar en todas las ciudades por medio de los forEach ya creados.
  6. Por medio de una condicional *(if/if else/else)* para entregar un mensaje **según el clima que más se repita**. Hay 4 casos de clima: Soleado, nubosidad parcial, nublado y chubascos.
    - El else se usa para los climas de Alfa Centauro, en la aplicación sale como 0°C, pero se usa otros "climas" (básicamente para graficar que no se sabe qué hay... aún).
  7. Adaptación de la UI de la sección de **detalles.html** para añadir los elementos nuevos. Se ubican debajo de todos los climas desplegados con los datos nuevos del array mencionado al inicio.

  ### Como ven, las actualizaciones recientes irán primero ¡Nos vemos en el siguiente módulo! :smiley_cat:

  ---

  ## Actualización 21-06-2026: Versión Portafolio - Módulo 3
  - Se reordenó el CSS con la metodología **BEM** para mayor claridad de uso para ocasiones futuras.
  - Se añadió el preprocesador Sass para optimizar el uso de recursos. **Cuenta con variables de tamaños, colores y fuentes tipográficas, mixins para cards, títulos e íconos**.
  - Se llama a Bootstrap 5 **vía CDN** y utilizó el **sistema de grillas** para ordenar los elementos y mantener el sitio responsivo, la **barra de navegación (navbar)** que se adapta según tamaño de pantalla, la estructura de las **cards** (utilizadas en las predicciones de clima con mejoras aparte) y el **footer**.

  ### ¡Nos vemos a la próxima! :smiley_cat: