<template>
  <div>
    <div class="optionspage">
      <div class="contents-div">
        <div class="heading-div">
          <span><strong>What would you like to do?</strong> </span>
        </div>
        <div class="cards-div">
          <b-row>
            <b-col lg="4" class="cards-column">
              <b-card
                title="Convert Image Format"
                :img-src="card1"
                img-alt="Image"
                img-top
                style="max-width: 20rem;"
                class="options-card shadow-lg rounded-lg mb-2"
              >
                <b-card-text>
                  Change your PNG image to JPG or JPG image to PNG
                </b-card-text>

                <b-button class="pngtojpg" href="#" variant="success"
                  >PNG to JPG</b-button
                >
                <br />
                <b-button class="jpgtopng" href="#" variant="success"
                  >JPG to PNG</b-button
                >
              </b-card>
            </b-col>
            <b-col lg="4" class="cards-column">
              <b-card
                title="Compress Image"
                :img-src="card2"
                img-alt="Image"
                img-top
                img-height="240"
                style="max-width: 20rem;"
                class="options-card shadow-lg rounded-lg mb-2"
              >
                <b-card-text>
                  Reduce the size of your image according to your need
                  <br />
                  <span class="note"
                    >[Note: The more you compress the blurry it gets.]</span
                  >
                </b-card-text>
                <b-button class="next" href="#" variant="success"
                  >NEXT</b-button
                >
              </b-card>
            </b-col>
            <b-col lg="4" class="cards-column">
              <b-card
                title="Resize Image"
                :img-src="card3"
                img-alt="Image"
                img-top
                img-height="240"
                style="max-width: 20rem;"
                class="options-card shadow-lg rounded-lg mb-2"
              >
                <b-card-text>
                  Crop out the things you hate to make your image social media
                  worthy.
                  <br />
                  <span class="note"
                    >[Note: Work under progress. Be back in a while.]</span
                  >
                </b-card-text>
                <b-button
                  class="comingsoon "
                  href="#"
                  variant="success"
                  disabled
                  >Coming Soon...</b-button
                >
              </b-card>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "OptionsPage",
  data() {
    return {
      card1: require("../assets/convertimage.png"),
      card2: require("../assets/compress.png"),
      card3: require("../assets/resize.png"),
    };
  },
  components: {
    Footer,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

* {
  font-family: "Raleway";
}

.optionspage {
  background-color: #c9f0d4;
  width: 100%;
  height: 96.2169vh;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.contents-div {
  margin-top: 3rem;
}

.heading-div {
  font-family: "Raleway";
  font-size: 28px;
  font: bolder;
}

.cards-div {
  margin-top: 5rem;
}

.card {
  border-radius: 15px;
}

.buttons-div {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 150px;
}

.pngtojpg {
  margin-bottom: 5px;
}

.cards-column {
  display: flex;
  justify-content: center;
}

.note {
  font-size: 12px;
}

@media (max-width: 991px) {
  .optionspage {
    height: 100%;
  }

  .cards-div {
    margin-top: 2rem;
  }

  .cards-column {
    margin-bottom: 10px;
  }
}

@media (max-width: 576px) {
}
</style>
