<script setup>
  import IndexVista from './components/IndexVista.vue';
</script>

<template>
  <header>
    <h1 class="header__title">KlimatHaus</h1>
    <h3 class="header__subtitle">El clima en tu casa</h3>
    <nav>
      <router-link :to="{ name:'inicio' }" active-class="active">Inicio</router-link>
      <router-link :to="{ name:'detalle' }" active-class="active">Detalles</router-link>
      <router-link :to="{ name:'acerca' }" active-class="active">Sobre Nosotros</router-link>
    </nav>
  </header>
  <router-view />
  <footer class="footer p-3 text-center bg-primary bg-gradient">
    <p class="footer__content">Sitio creado por Fernanda Kauak Alaff, en el Curso de Desarrollo Front End 2026</p>
  </footer>
</template>

<style scoped>
  header {
    width: 96%;
    background-color: white;
    padding: 2%;
  }

  .header__title, .header__subtitle {
    color: midnightblue;
  }

  nav a {
    background-color: blueviolet;
    border: 1px solid blueviolet;
    color: white;
    padding: 1% 2%;
    margin: 1%;
    text-decoration: none;
  }

  nav a:hover, nav a.active {
    color: blueviolet;
    background-color: white;
    border: 1px solid blueviolet;
  }

  footer {
    width: 96%;
    padding: 2%;
    background-color: #2f3133;
    color: white;
  }
</style>