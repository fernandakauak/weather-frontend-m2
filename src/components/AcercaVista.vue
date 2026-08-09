<script setup>
    import { ref } from 'vue';
</script>

<template>
    <section>
        <article class="welcome">
            <h3 class="welcome__subtitle">Averigüe el clima con comodidad con</h3>
            <h1 class="welcome__title">KlimatHaus</h1>
        </article>
        
        <article class="about">
            <div class="about__info">
                <p>Si hay lugares que frecuenta o tiene seres queridos en otras ciudades y quiere saber cómo está el clima allí, puede grabarlas en su cuenta de KlimatHaus y estar al tanto del clima actual, humedad, velocidad del viento y el pronóstico semanal. Así tendrá claridad para futuros planes y tranquilidad para usted y los suyos.</p>
                <p>Nos mueve el clima, la información y el satisfacer sus necesidades climáticas mientras disfruta de la comodidad de su casa. ¡Despejaremos sus dudas como un cielo sin nubes!</p>
            </div>
            <div class="col-sm-12 col-md-4 about__img"> 
                <img src="/src/assets/representante-klimathaus.jpg" alt="Representante de KlimatHaus" />
            </div>
        </article>
        
        </section>
</template>

<style scoped>
    .welcome {
        margin: 3% auto;
    }

    .welcome__title {
        font-family: "Titan One", sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 3px auto;
    }

    .welcome__subtitle {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(255, 255, 255);
        text-align: center;
        margin: 3px auto;
    }

    .about {
        width: 90%;
        margin: 1% auto;
        display: flex;
    }
    
    .about__info {
        background-color: rgb(255, 255, 255);
        padding: 2%;
        font-size: 18px;
        width: 56%;
    }

    .about__img {
        width: 30%;
    }

    @media (max-width: 768px) {
        .about__img {
            width: 100%;
            padding: 1%;
        }
    }
</style>