<template>
    <div class="wrapper">
        <h1>Work</h1>
        <div class="container">
            <myWork :product-name="works[0].name" :description="works[0].description" :techs="works[0].techs" :image-locate="works[0].image"></myWork>
            <myWork :product-name="works[1].name" :description="works[1].description" :techs="works[1].techs" :image-locate="works[1].image"></myWork>
            <!-- <myWork :product-name="works[1].name" :description="works[1].description" :techs="works[1].techs" :image-locate="works[1].image"></myWork> -->
        </div>
    </div>
</template>

<script>
import works from "../assets/workdata.json";
import myWork from "../components/myWork.vue";
export default {
    data(){
        return{
            works,
        }
    },
    components:{
        myWork,
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    max-width: 900px;
    margin: 110px auto 0px auto;
    overflow: hidden;
    h1{
        font-weight: bold;
        text-align: center;
    }
    .container{
        text-align: center;
        margin-top: 30px;
        margin-left: 38px;
        // display: flex;
        // flex-direction: row;
        float: left;
    }
}

</style>