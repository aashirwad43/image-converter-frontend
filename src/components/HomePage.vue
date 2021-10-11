<template>
  <div class="homepage">
    <div class="content-div">
        <b-row>
            <b-col md="6" class="left-column">
                <div class="greeting-div">
                    <div class="text-div">
                        <span>Welcome to</span>
                        <br />
                        <span>Image Converter Compressor</span>
                    </div>
                    <div class="image-div">
                        <img :src="homepage" class="homepage-image"/>
                    </div>
                </div>
            </b-col>
            <b-col md="6" class="right-column">
                <div class="uploadimage-div">
                    <div class="droparea">
                        <div class="dropzone">
                            <img :src="drophere" class="drophere-image" />
                        </div>
                        <div class="dropheremessage">
                            <span>Drag and drop your image here</span>
                        </div>
                    </div>
                    <div class="browsearea">
                        <button class="browse-button">Browse</button>
                        <div class="file-name">

                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
        <br />
    </div>
  </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            homepage: require('../assets/homepage.svg'),
            drophere: require('../assets/inbox.png')
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.homepage {
    background-color: #C9F0D4;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.content-div {
    width: 80%;
    align-self: center;
    padding: 0.5rem;
}

.greeting-div{
    font-family: 'Raleway';
    font-size: 24px;
}

.text-div {
    margin-bottom: 4rem;
}

.homepage-image {
    width: 80%;
}
/* 
.left-column {
    display: flex;
    justify-content: center;
} */

.right-column {
    display: flex;
    justify-content: center;
}

.uploadimage-div {
    width: 100%;
}

.droparea {
    width: 80%;
    height: 85%;
    border-radius: 15px;
    background-color: white;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
}

.browsearea {
    width: 80%;
    border-radius: 15px;
    height: 10%;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
}

.file-name {
    width: 80%;
    border-radius: 10px;
    height: 95%;
    background-color: lightgray;
    margin-left: 0.5rem;
}

.dropzone {
    width: 95%;
    height: 90%;
    background-color: lightgray;
    border-radius: 15px;
    border: 2px dashed;
    margin: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.browse-button {
    border-radius: 5px;
    background-color: green;
    color: white;
    font-size: 14px;
    font-family: 'Raleway';
}

.dropheremessage {
    font-family: 'Raleway';
    font-size: 18px;
}

.drophere-image {
    width: 5rem;
}

@media (max-width: 1156px) {
    .browse-button {
        font-size: 8px;
    }
}

@media (max-width: 576px) {
    .droparea {
        width: 275px;
        height: 200px;
    }

    .browsearea {
        width: 275px;
        height: 40px;
    }

    .dropzone {
        border: 1px dashed;
        margin: 0.5rem;

    }

    .dropheremessage {
        font-family: 'Raleway';
        font-size: 12px;
        padding: 0.5rem;
    }

    .drophere-image {
        width: 3rem;
    }
}

</style>