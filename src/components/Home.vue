<template>
  <div>
    <div class="home">
      <b-row class="m-0">
        <b-col sm="6" class="cards-column">
          <div class="contents-div">
            <div class="heading">
              <span>
                Welcome to
                <br />
                Image Compressor Converter
              </span>
            </div>
            <div class="image-div">
              <img :src="homepage" />
            </div>
          </div>
        </b-col>
        <b-col sm="6" class="cards-column">
          <div class="contents-div">
            <div class="droparea">
              <input
                type="file"
                style="display:none"
                id="file-input"
                @change="readFile"
                accept="image/jpg, image/png"
              />
              <label for="file-input">
                <div
                  class="dropzone"
                  style="z-index: 1"
                  @dragover.prevent
                  @drop="readFile"
                >
                  <div v-if="imageURL" class="uploaded-image">
                    <img :src="imageURL" />
                  </div>
                  <div
                    v-else
                    class="h-100 w-100 d-flex align-items-center justify-content-center"
                  >
                    <div>
                      <div class="text-center">
                        <img :src="drophere" />
                        <br />
                        <small class="text-muted"
                          >Drag or Drop image here.</small
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div class="button-div">
              <div v-if="fileName">
                <b-button
                  class="next-button"
                  href="./optionspage"
                  variant="success"
                  @click="sendData"
                  >Next</b-button
                >
              </div>
              <div v-else>
                <b-button class="browse-button" variant="secondary"
                  >Browse</b-button
                >
              </div>
              <div class="filename">
                <small
                  class="d-flex align-items-center justify-content-center w-100 h-100"
                  >{{ fileName }}</small
                >
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "Home",
  props: ["setImageData", "changeNav"],
  data() {
    return {
      homepage: require("../assets/homepage.svg"),
      drophere: require("../assets/inbox.png"),
      file: null,
      imageURL: "",
      fileName: "",
      fileType: "",
    };
  },
  components: {
    Footer,
  },
  methods: {
    readFile(e) {
      e.preventDefault();
      let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        this.imageURL = reader.result;
        this.file = file;
        this.fileName = file.name;
        this.fileType = file.type.split("/")[1];
      });
    },

    sendData(e) {
      e.preventDefault();
      let dataToSend = {
        image: this.imageURL,
        imageType: this.fileType,
        imageName: this.fileName,
        imageFile: this.file,
      };
      this._props.setImageData(dataToSend);
      this._props.changeNav("options");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

* {
  font-family: "Raleway";
}

.home {
  background-color: #c9f0d4;
  width: 100%;
  min-height: 96.2169vh;
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  justify-content: center;
}

.cards-column {
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
}

.heading {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
}

.image-div {
  margin-top: 2rem;
}

.image-div img {
  width: 30rem;
}

.dropzone img {
  width: 8rem;
}

.droparea {
  background-color: white;
  /* width: 25rem;
  height: 25rem; */
  width: 100%;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropzone {
  background-color: lightgrey;
  /* width: 23rem;
  height: 23rem; */
  min-width: 23rem;
  min-height: 23rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed;
  cursor: pointer;
}

.input-style {
  display: none;
}

.button-div {
  background-color: white;
  width: 25rem;
  min-height: 3rem;
  margin-top: 1rem;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
}

.browse-button {
  max-height: 2rem;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 5px;
}

.next-button {
  max-height: 2rem;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 5px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.filename {
  background-color: lightgray;
  min-height: 2rem;
  width: 18rem;
  border-radius: 5px;
  padding: 5px;
  padding-left: 10px;
  /* overflow-x: scroll; */
}

.uploaded-image img {
  width: 22rem;
  padding: 0.5rem;
}

/* .uploadedImage {
  width: 100%;
  height: 23rem;
  background-image: url(${imageURL});
  background-size: cover;
} */

@media (max-width: 991px) {
  .home {
    padding-top: 20px;
    max-height: 100%;
  }

  .cards-column {
    margin-bottom: 10px;
  }

  .heading {
    font-size: 18px;
  }

  .image-div img {
    width: 15rem;
  }

  .droparea {
    min-width: 15rem;
    min-height: 15rem;
  }

  .dropzone {
    min-width: 13rem;
    min-height: 13rem;
  }

  .dropzone img {
    width: 4rem;
  }

  .button-div {
    background-color: white;
    width: 15rem;
    min-height: 2rem;
    margin-top: 1rem;
    border-radius: 15px;
  }

  .browse-button {
    min-height: 1.5rem;
  }

  .next-button {
    min-height: 1.5rem;
  }

  /* .filename {
    min-height: 1.5rem;
  } */

  .cards-column {
    margin-bottom: 3rem;
  }

  .uploaded-image img {
    width: 12rem;
  }
}

@media (max-width: 576px) {
  .home {
    padding-top: 40px;
    min-height: 96.2169vh;
    max-height: 100%;
  }
}
</style>
