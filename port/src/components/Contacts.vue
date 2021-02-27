<template>
    <div id="contacts">
        <h3 class="section-title">Contact</h3>
        <div class="columns is-mobile contact-section" >
            <form class="column is-5 contact-form" @submit.prevent="sendEmail">
                <h4 class="subtitle-sm">Feel free to reach out to me!</h4>
                    <b-field >
                        <b-input  placeholder="Name" type="text" name="name" required ></b-input>
                    </b-field>
                    <b-field >
                        <b-input  placeholder="Email" type="email" name="email"  required></b-input>
                    </b-field>
                    <b-field class="long-txt" >
                        <b-input maxlength="280" has-counter required  placeholder="Message" type="textarea" name="message" ></b-input>
                    </b-field>
                    <button class="button is-info">Send</button>
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
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_kwLzyUFghQ3pIDDYy8b1c");
export default {
    data() {
        return {

        }
    },
    methods: {
        success:() => {
            this.$toast.open({
                message: 'Message Sent!!',
                type:'is-success'
            })
        },
        sendEmail:(e) => {
            emailjs.sendForm('murdhawke_dev', 'murdhawke_receive', e.target, 'user_kwLzyUFghQ3pIDDYy8b1c')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text)

            }, 
            (error) => {
                console.log('FAILED...', error);
        })
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
    max-height: 13em;
    min-height: 13em;
    resize: none;
}
#sent-toast {
    margin-top:2px;
    margin-bottom: 2px;
}
</style>