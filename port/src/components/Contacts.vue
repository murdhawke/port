<template>
    <div id="contacts">
        <h3 class="section-title">Contact</h3>
        <div class="columns is-mobile contact-section">
            <div class="column is-7 ">
                <h4 class="subtitle">Feel free to reach out to me!</h4>
                <b-field>
                    <b-field>
                        <b-input placeholder="Name" type="text" ></b-input>
                    </b-field>
                </b-field>
            </div>
            <div class="column is-5 contacts-form">
                <figure class="contacts-img">
                   <img src="../assets/contact-us.svg" alt="Contact Us">
                </figure> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#contacts {
    min-height: 60vh;
    max-height: 60vh;
}
.contacts-section {
    margin-right: 50px;
    margin-left: 50px;
}
.contacts-img {
    margin-right: 100px;
}
</style>