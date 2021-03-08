<template>
    <div id="projects">
        <h3 class="section-title">My work</h3>
        <div class="project-class">
            <nx-card v-for="proj in projList1" :key="proj">
                <template slot="title">{{proj.name}}</template>
                <template slot="description">{{proj.descr}}</template>
            </nx-card>
        </div>
        
        <div class="project-class2">
            <nx-card v-for="proj in projList2" :key="proj">
                <template slot="title">{{proj.name}}</template>
                <template slot="description">{{proj.descr}}</template>
            </nx-card>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            projList1: [
                {id:1, "name":"Covidata", descr: 'Covidata is a small dashboard created in Vue.js + Vuesax  to show daily Covid-19 statistics.', imgurl:'../assets/covidata-img.png'},
                {id:2, "name":"Patafundi", descr: 'Patafundi is a work-in-progress project.', imgurl:'../assets/patafundi-img.png'},
                {id:3, "name":"Farmika ", descr: 'Farmika is a work-in-progress project.', imgurl:'../assets/covidata-img.png'}
            ],
            projList2: [
                {id:1, "name":"Project 4", descr: 'This is project 4', imgurl:'../assets/covidata-img.png'},
                {id:2, "name":"Project 5", descr: 'This is project 5', imgurl:'../assets/patafundi-img.png'},
                {id:3, "name":"Project 6", descr: 'This is project 6', imgurl:'../assets/covidata-img.png'}
        ]

        }
    }
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
    margin-left: 10%;
    display: inline-flex;
    position: relative;
    z-index: 0;
    margin-right: 10%;
}
.project-class2 {
    min-width: 80%;
    max-width: 80%;
    margin-left: 10%;
    display: inline-flex;
    position: relative;
    z-index: 0;
    margin-right: 10%;

}
.card {
    width: 300px;
    height: 300px;
    display: block;
}
</style>