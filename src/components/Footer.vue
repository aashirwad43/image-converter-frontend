<template>
    <div>
        <div class="footer">
            Made by <a href="https://aashirstha.com.np">Aashirwad</a> and <a href="https://satshree.com.np">Satshree </a> 
        </div>
    </div>
</template> 

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

*{
    font-family: 'Raleway';
}

a {
    text-decoration: none;
    color: black;
    margin-left: 4px;
    margin-right: 4px;
}

.footer {
    width: 100%;
    height: 30px;
    /* background-color: lightgray; */
    background-color: #C9F0D4; 
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>