<template>
    <div id="projects">
        <h3 class="section-title">My work</h3>
        <div class="project-class">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Project 1</p>
                    <p class="subtitle">What is up?</p>
                </article>
            </div>
               <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Project 2</p>
                    <p class="subtitle">What is up?</p>
                </article>
            </div>
               <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Project 3</p>
                    <p class="subtitle">What is up?</p>
                </article>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Project 4</p>
                    <p class="subtitle">What is up?</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Project 5</p>
                    <p class="subtitle">What is up?</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">Project 6</p>
                    <p class="subtitle">What is up?</p>
                </article>
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
#projects {
    background-color: #f5f5f5;
    min-height: 90vh;
    max-height: 90vh;
}
.project-class {
    min-width: 80%;
    max-width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
}
</style>