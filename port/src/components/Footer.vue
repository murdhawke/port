<template>
    <div id="footer">
        <div class="footer-section">
            <div class="columns footer-columns">
                <div class="column ">
                    <ul>
                       <li>Github</li>
                       <li>Codepen</li>
                       <li>Stack Overflow</li>
                   </ul>
                </div>
                <div class="column">
                    <ul>
                       <li>Resume</li>
                       <li>Posts</li>
                   </ul>
                </div>
            </div>
            <div class="columns copyright">
                <p><i>&copy; 𝟚𝟘𝟚𝟙 𝔸𝕞𝕠𝕤 ℂ𝕙𝕖𝕣𝕦𝕚𝕪𝕠𝕥</i></p> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.footer-section {
    background-color: #535460;
    min-width: 100vw;
    max-width: 100vw;
    min-width: 100%;
    min-height: 25vh;
    max-height: 40vh;
    color: white;
}
.footer-columns {
    padding-top:30px;
    line-height:40px;
    text-align: center;

}
.columns.footer-columns {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
}
.columns.footer-columns ul {
    text-align: center;
}
.copyright {
    display: block;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
}
</style>