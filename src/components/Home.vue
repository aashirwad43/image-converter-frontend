<template>
  <div>
    <div class="home">
      <b-row>
        <b-col md="6" class="cards-column">
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
        <b-col md="6" class="cards-column">
          <div class="contents-div">
            <div class="droparea">
              <input
                type="file"
                style="display:none"
                id="file-input"
                @change="readFile"
              />
              <label for="file-input">
                <div
                  class="dropzone"
                  style="z-index: 1"
                  @dragover.prevent
                  @drop="readFile"
                >
                  <div
                    class="h-100 w-100 d-flex align-items-center justify-content-center"
                  >
                    <div class="text-center">
                      <div v-if="imageURL">
                        <img :src="imageURL" />
                      </div>
                      <div v-else>
                        <img :src="drophere" />
                      </div>
                      <br />
                      <small class="text-muted">Drag or Drop image here.</small>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div class="button-div">
              <div v-if="fileName">
                <b-button class="next-button" variant="success">Next</b-button>
              </div>
              <div v-else>
                <b-button class="browse-button" variant="secondary"
                  >Browse</b-button
                >
              </div>
              <div class="filename">{{ fileName }}</div>
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
  data() {
    return {
      homepage: require("../assets/homepage.svg"),
      drophere: require("../assets/inbox.png"),
      file: null,
      imageURL: "",
      fileName: "",
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
      });
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
  height: 96.2169vh;
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
  width: 25rem;
  height: 25rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropzone {
  background-color: lightgrey;
  width: 23rem;
  height: 23rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed;
}

.input-style {
  display: none;
}

.button-div {
  background-color: white;
  width: 25rem;
  height: 3rem;
  margin-top: 1rem;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
}

.browse-button {
  height: 2rem;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 5px;
}

.next-button {
  height: 2rem;
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
  height: 2rem;
  width: 18rem;
  border-radius: 5px;
  padding: 5px;
  padding-left: 10px;
}

@media (max-width: 991px) {
  .home {
    padding-top: 20px;
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
    width: 15rem;
    height: 15rem;
  }

  .dropzone {
    width: 13rem;
    height: 13rem;
  }

  .dropzone img {
    width: 4rem;
  }

  .button-div {
    background-color: white;
    width: 15rem;
    height: 2rem;
    margin-top: 1rem;
    border-radius: 15px;
  }

  .browse-button {
    height: 1.5rem;
  }

  .filename {
    height: 1.5rem;
  }

  .cards-column {
    margin-bottom: 3rem;
  }
}

@media (max-width: 576px) {
  .home {
    /* height: 100%; */
    padding-top: 20px;
  }
}
</style>
