<template>
    <div id="fullwidth">
        <div class="fullcontainer">
            <div class="columns ">
                <div class="column is-5">
                    <figure class="image is-256x256">
                        <img src="../assets/hello.svg">
                    </figure>
                </div>
                <div class="column is-7 main-txt">
                    <h2 class="title">Hello 👋</h2>
                    <h2 class="title">I`m Amos Cheruiyot</h2>
                    <h4 class="subtitle">𝙸 𝚕𝚘𝚟𝚎 𝚎𝚟𝚎𝚛𝚢𝚝𝚑𝚒𝚗𝚐 𝚝𝚎𝚌𝚑</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.fullcontainer {
    min-height: 90vh;
    max-height: 90vh;
    padding-left: 100px;
    padding-right: 100px;
    background-image: url('../assets/Hydrogen.jpg');
}
.main-txt {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12%;
    
}
.title {
     color: white;
     font-size: 50px;
     text-align: center;
}
.subtitle {
    padding-top: 30px;
    font-style:italic ;
    color: white;
    text-align: center;
    letter-spacing: 2px;
    font-weight: 600;
    word-spacing: 15px;
    
}
.title, .subtitle{
text-shadow: 7px 4px 5px rgba(0,0,0,0.44);
}

.socials { 
    display: block;
}
</style>