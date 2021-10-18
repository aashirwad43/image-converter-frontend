<template>
  <div>
    <div class="optionspage">
      <div class="contents-div">
        <div class="heading-div">
          <span><strong>What would you like to do?</strong> </span>
        </div>
        <div class="cards-div">
          <b-row class="m-0">
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

                <div v-if="imageData.imageType == 'png'">
                  <b-button
                    class="pngtojpg"
                    @click="convertImage"
                    href="#"
                    variant="success"
                    >PNG to JPG</b-button
                  >
                </div>

                <div v-else>
                  <b-button
                    class="jpgtopng"
                    @click="convertImage"
                    href="#"
                    variant="success"
                    >JPG to PNG</b-button
                  >
                </div>

                <!-- <br /> -->
                <!-- <div
                  v-else-if="
                    imageData.imageType == 'jpg' ||
                      imageData.imageType == 'jpeg'
                  "
                >
                  <b-button class="jpgtopng" href="#" variant="success"
                    >JPG to PNG</b-button
                  >
                </div> -->
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
                <b-button
                  v-b-modal.modal-center
                  class="next"
                  href="#"
                  variant="success"
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
        <!-- <hr />
        <b-button @click="changeNav('home')">Back</b-button>
        <div class="text-center">
          <img :src="imageData.image" alt="display" style="width: 50%" />
        </div> -->
      </div>
    </div>
    <Footer />
    <div class="modal fade" id="loader" tabindex="-1">
      <div class="spinner modal-dialog modal-dialog-centered">
        <svg viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20"></circle>
        </svg>
      </div>
    </div>
    <div
      class="download-toast-wrapper"
      id="downloadMessage"
      style="display: none"
    >
      <div class="download-toast">
        Download Sucessful ✅
      </div>
    </div>
    <b-modal
      id="modal-center"
      centered
      title="Compress Image"
      hide-header-close
      ok-title="Compress"
      ok-variant="success"
      @ok="compressImage"
    >
      <p class="my-4">How blurry you want your image to get?</p>
      <div>
        <!-- <label for="range-1">Example range with min and max</label> -->
        <b-form-input
          id="range-1"
          v-model="value"
          type="range"
          min="0"
          max="100"
          class="w-100"
        ></b-form-input>
        <div class="mt-2">Value: {{ value }} %</div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import $ from "jquery";
import Modal from "bootstrap/js/dist/modal";

export default {
  name: "OptionsPage",
  props: ["imageData", "changeNav"],
  data() {
    return {
      card1: require("../assets/convertimage.png"),
      card2: require("../assets/compress.png"),
      card3: require("../assets/resize.png"),
      loader: null,
      value: 50,
    };
  },
  components: {
    Footer,
  },
  methods: {
    convertImage() {
      let data = new FormData();

      data.append("image", this._props.imageData.imageFile);

      this.loader ? this.loader.show() : null;

      $.ajax({
        method: "POST",
        url: "https://image-converter-compressor.herokuapp.com/api/converter/",
        xhr: function() {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 2) {
              if (xhr.status == 200) {
                xhr.responseType = "blob";
              } else {
                xhr.responseType = "text";
              }
            }
          };
          return xhr;
        },
        data,
        processData: false,
        contentType: false,
        success: (resp) => {
          let convertedImage = new Blob([resp]);
          let imageURL = window.URL.createObjectURL(convertedImage);
          let a = document.createElement("a");
          let imgName = `${this._props.imageData.imageName.split(".")[0]}.${
            this._props.imageData.imageType === "png" ? "jpg" : "png"
          }`;

          a.href = imageURL;
          a.style.display = "none";
          a.download = imgName;

          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(imageURL);
          document.body.removeChild(a);

          this.loader ? this.loader.hide() : null;

          console.log("downloadmessage");

          document.getElementById("downloadMessage").style.display = "block";
          setTimeout(
            () =>
              (document.getElementById("downloadMessage").style.display =
                "none"),
            5 * 1000
          );
        },
      });
    },

    compressImage() {
      let data = new FormData();

      data.append("image", this._props.imageData.imageFile);
      data.append("compress", this.value);

      this.loader ? this.loader.show() : null;

      $.ajax({
        method: "POST",
        url: "https://image-converter-compressor.herokuapp.com/api/compressor/",
        xhr: function() {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 2) {
              if (xhr.status == 200) {
                xhr.responseType = "blob";
              } else {
                xhr.responseType = "text";
              }
            }
          };
          return xhr;
        },
        data,
        processData: false,
        contentType: false,
        success: (resp) => {
          let convertedImage = new Blob([resp]);
          let imageURL = window.URL.createObjectURL(convertedImage);
          let a = document.createElement("a");
          let imgName = "compressed" + "-" + this._props.imageData.imageName;

          a.href = imageURL;
          a.style.display = "none";
          a.download = imgName;

          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(imageURL);
          document.body.removeChild(a);

          this.loader ? this.loader.hide() : null;

          document.getElementById("downloadMessage").style.display = "block";
          setTimeout(
            () =>
              (document.getElementById("downloadMessage").style.display =
                "none"),
            5 * 1000
          );
        },
      });
    },
  },
  mounted: function() {
    this.loader = new Modal(document.getElementById("loader"));
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

.spinner {
  display: flex;
  justify-content: center;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

svg {
  width: 25vh;
  height: 25vh;
  animation: rotate 2s linear infinite;
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

circle {
  fill: none;
  stroke: white;
  stroke-width: 5px;
  stroke-linecap: round;
  animation: dash 1.75s ease-in-out infinite;
}

.download-toast-wrapper {
  /* position: relative;
  height: 5rem; */
  /* width: 100%; */
  /* bottom: 0;
  left: 0; */
}

.download-toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  user-select: none;
  color: greenyellow;
  background: #000;
  padding: 1.2rem 2.4rem;
  border-radius: 0.2rem;
  box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.4);
  animation: bottom 0.4s ease-in-out;
}

/* #downloadMessage.show {
  bottom: 2rem;
} */

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
