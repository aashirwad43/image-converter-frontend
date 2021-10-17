<template>
  <div id="app">
    <!-- <HomePage /> -->
    <!-- <router-view /> -->
    <div v-if="nav == 'options'">
      <OptionsPage :changeNav="changeNav" :imageData="imageData" />
    </div>
    <div v-else>
      <Home :setImageData="setImageData" :changeNav="changeNav" />
    </div>
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'
import Home from "./components/Home.vue";
import OptionsPage from "./components/OptionsPage.vue";

export default {
  name: "App",
  components: {
    // HomePage,
    Home,
    OptionsPage,
  },
  data() {
    return {
      nav: "home",
      imageData: {},
    };
  },
  methods: {
    setImageData(data) {
      this.imageData = data;
    },
    changeNav(nav) {
      this.nav = nav;
    },
  },
};
</script>

<style></style>
