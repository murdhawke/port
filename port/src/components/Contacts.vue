<template>
    <div id="contacts">
        <h3 class="section-title">Contact</h3>
        <div class="columns is-mobile contact-section">
            <form class="column is-5 contact-form">
                <h4 class="subtitle-sm">Feel free to reach out to me!</h4>
                    <b-field>
                        <b-input  placeholder="Name" type="text"  ></b-input>
                    </b-field>
                    <b-field>
                        <b-input  placeholder="Email" type="email" ></b-input>
                    </b-field>
                    <b-field class="long-txt">
                        <b-input  placeholder="Message" type="textarea"  ></b-input>
                    </b-field>
                    <b-button type="is-info submit"  outlined>Send</b-button>
            </form>
            <div class="column is-7">
                <figure class="contacts-img">
                   <img src="../assets/contact-us.svg" alt="Contact Us">
                </figure> 
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            
            }
        }
}
</script>

<style>
#contacts {
    min-height: 62vh;
    max-height: 60vh;
    margin-bottom: 70px;
}
.contacts-section {
    margin-right: 50px;
    margin-left: 50px;
}
.contacts-img {
    margin-right: 100px;
}
.contact-form {
   margin-left: 50px;
   margin-right: 30px;
}
h4.subtitle-sm {
    font-style:italic ;
    font-size: 24px;
    color: #535460;
    font-weight: 400;
    text-align: center;
    padding-bottom: 20px;
}
.field {
    padding-top: 10px;
    
}
.textarea:not([rows]) {
    max-height: 40em;
    min-height: 13em;
}
</style>