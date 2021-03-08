<template>
    <div id="projects">
        <h3 class="section-title">My work</h3>
        <div class="project-class">
            <div class="card" v-for="proj in projList" :key="proj.id">
                <div class="card-content">
                    <div class="content">
                        <div class="project-img">
                            <img :src="proj.imgURL" :alt="proj.name">
                        </div>
                       
                    </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            projList: [
                {"id":1, "name":"Covidata", "imgURL":"../assets/covidata-img.jpg"},
                {"id":1, "name":"Patafundi", "imgURL":"../assets/patafundi-img.jpg"},
                {"id":1, "name":"Covidata", "imgURL":"../assets/project-1.jpg"},
                {"id":1, "name":"Covidata", "imgURL":"../assets/project-2.jpg"},
                {"id":1, "name":"Covidata", "imgURL":"../assets/project-3.jpg"},
                {"id":1, "name":"Covidata", "imgURL":"../assets/project-4.jpg"}
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
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
}
.card {
    width:20%;
    display: inline;
}
.project-img {
    height: 500px;
    width: 500px;
}
</style>