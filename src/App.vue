<template>
  <v-app>
    <v-app-bar
      app
      dark
      shrink-on-scroll
      prominent
      color="deep-purple darken-4">
      <v-app-bar-title class="text-no-wrap">Maria Papadopoulou</v-app-bar-title>


      <div class="avatar-container">
        <v-avatar class="avatar-border" color="deep-purple accent-2" size="130">
          <img src="https://github.com/Maria-Papa.png" alt="Maria-Papa" />
        </v-avatar>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<style scoped>
  .avatar-border {
    border: solid;
    width: 100%;
    margin-left: -50%;

    box-shadow: 0 0 0.5rem rgb(0 0 0 / 80%);
    -webkit-box-shadow: 0 0 0.3125rem rgb(0 0 0 / 80%);
  }

  .avatar-border img {
    width: 100%;
  }

  .v-app-bar .avatar-container {
    position: absolute;
    bottom: -3.5rem;
    left: 50%;

    transition: opacity 0.3s ease-in-out;
    -webkit-transition: opacity 0.3s ease-in-out;
    -moz-transition: opacity 0.3s ease-in-out;
  }

  .v-app-bar--is-scrolled .avatar-container {
    opacity: 0;
    visibility: hidden;

    transition: visibility linear 0.3s, opacity 0.3s ease-in-out;
    -webkit-transition: visibility linear 0.3s, opacity 0.3s ease-in-out;
    -moz-transition: visibility linear 0.3s, opacity 0.3s ease-in-out;
  }
</style>

<script>
  export default {
    data() {
      return {
       
      }
    },
  }
</script>
