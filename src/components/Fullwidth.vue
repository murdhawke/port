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
                    <h3 class="subtitle">I love everything tech</h3>
                    <ul class="socials">
                        <li class="socials-item"><a href="https://github.com/murdhawke" target="_blank"><i class="fab fa-github fa-2x"></i></a></li>
                        <li class="socials-item"><a href="https://stackoverflow.com/users/5805468/amos-cheruiyot" target="_blank"><i class="fab fa-stack-overflow fa-2x"></i></a></li>
                        <li class="socials-item"><a href="https://codepen.io/murdhawke" target="_blank"><i class="fab fa-codepen fa-2x"></i></a></li>
                        <li class="socials-item"><a href="https://www.linkedin.com/in/murdhawke/" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a></li>
                    </ul>
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
    color: white;
    text-align: center;
    letter-spacing: 2px;
    font-weight: 600;
    word-spacing: 15px;
    
}
.title, .subtitle {
text-shadow: 7px 4px 5px rgba(0,0,0,0.44);
font-family: 'Indie Flower', cursive;
letter-spacing: 5px;
}

.socials { 
    display: inline-flex;
    margin-top: 30px;
    margin-left: 30%;
    margin-right: 30%;
}
.socials-item{
    padding-left: 50px;
}
a {
    color: inherit;
}
</style>