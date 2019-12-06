<template>
    <div class="wrapper">
        <h1>Work</h1>
        <div class="container">
            <myWork :product-name="works[0].name" :description="works[0].description" :techs="works[0].techs" :image-locate="works[0].imageLocate"></myWork>
        </div>
        <p class="discriptionButton">
            <router-link to="/Work">他の作品も見る</router-link>
        </p>
    </div>
</template>

<script>
import myWork from "./myWork.vue";
import works from "../assets/workdata.json";

export default {
    data(){
        return {
            works,
        }
    },
    components: {
        myWork,
    }
}
</script>


<style lang="scss" scoped>
$home: #F47C00;


.wrapper{
    margin-top: 80px;
    text-align: center;
    background-color: #ffffff;

    h1{
        font-weight: bold;
    }
}

.container{
    margin: 0 auto;
}

    .discriptionButton {

        a {
            margin: 0 auto;
            display: block;
            padding: 14px 20px;
            margin-top: 10px;
            width: 200px;
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
    }

</style>