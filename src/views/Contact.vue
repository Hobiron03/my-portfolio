<template>
    <div class="wrapper">
        <div class="container">
            <h1>Contact</h1>
            <p>{{message}}</p>
            <div class="form">
                <p class="label"><label>お名前</label><br></p>
                <input class="line-form" type="text" name="name" placeholder="name" v-model="contactForm.name">
                <p class="label"><label>メールアドレス</label><br></p>
                <input class="line-form" type="text" name="email" placeholder="email" v-model="contactForm.email">
                <p class="label"><label>お問い合わせ内容</label><br></p>
                <textarea class="text-form" name="contain" id="" cols="30" rows="10" placeholder="好きなことを書いてください。" v-model="contactForm.contents"></textarea>
            </div>
            <p class="discriptionButton">
                <button @click="sendMail" class="send-button">送信</button>
                <!-- <router-link to="/Contact">送信</router-link> -->
            </p>
        </div>
    </div>
</template>

<script>
import { functions } from '@/plugins/firebase'
export default {
    data(){
        return{
            contactForm: {
                name: '',
                email: '',
                contents: '',
            },
            message: "",
        }
    },
    methods: {
        sendMail() {
            const mailer = functions.httpsCallable('sendMail');

            mailer(this.contactForm)
            .then(() => {
                this.formReset();
                this.message = "送信したよ";
            })
            .catch(err => {
                this.message = err
            })
        },
        formReset() {
            this.contactForm.name = "",
            this.contactForm.email = "",
            this.contactForm.contents = ""
        }
    }
}
</script>

<style lang="scss" scoped>

$home: #F47C00;

.wrapper{
    max-width: 670px;
    margin: 130px auto 0px auto;
    h1{
        font-weight: bold;
    }
    .container{
        text-align: center;
    }
}


.form{
    margin-top: 50px;

    p {
        font-weight: bold;
        text-align: left;
        margin-bottom: 1px;
    }

    .line-form{
        width: 100%;
        height: 30px;
        margin-bottom:10px;
        border-radius: 2px;
        border: 1px solid rgb(145, 145, 145);
        font-size: 18px;
    }

    .text-form{
        width: 100%;
        height: 200px;
        margin-bottom:10px;
        border-radius: 2px;
        border: 1px solid rgb(145, 145, 145);
        font-size: 18px;
    }
}

    .discriptionButton {

        button {
            margin: 0 auto;
            display: block;
            padding: 10px 15px;
            margin-top: 10px;
            width: 180px;
            font-weight: bold;
            font-size: 20px;
            border: solid 2px $home;
            text-align: center;
            transition: all 0.3s;
            color: $home;
            text-decoration: none;
            &:hover {
                background-color: $home;
                color: white;
            }
        }

        .send-button:hover{
            cursor: pointer;
        }
    }

</style>
