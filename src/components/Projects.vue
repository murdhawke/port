<template>
    <div id="projects">
        <h3 class="section-title">My work</h3>
        <div class="project-class">
            <nx-card
                v-for="proj in projList1" :key="proj"
                :title="proj.name"
                :description="proj.descr">
            </nx-card>
        </div>
        
        <div class="project-class2">
            <nx-card
                v-for="proj2 in projList2" :key="proj2"
                :title="proj2.name"
                :description="proj2.descr">
            </nx-card>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            projList1: [
                {id:1, "name":"Covidata", descr: 'This is project 1', imgurl:'src/assets/covidata-img.png'},
                {id:2, "name":"Patafundi", descr: 'This is project 2', imgurl:'src/assets/patafundi-img.png'},
                {id:3, "name":"Covidata", descr: 'This is project 3', imgurl:'src/assets/covidata-img.png'}
            ],
            projList2: [
                {id:1, "name":"Covidata", descr: 'This is project 1', imgurl:'src/assets/covidata-img.png'},
                {id:2, "name":"Patafundi", descr: 'This is project 2', imgurl:'src/assets/patafundi-img.png'},
                {id:3, "name":"Covidata", descr: 'This is project 3', imgurl:'src/assets/covidata-img.png'}
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