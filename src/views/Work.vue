<template>
    <div class="wrapper">
        <h1>Work</h1>
        <div class="container">
            <div class="f-item">

            </div>
            <myWork :product-name="works[0].name" :description="works[0].description" :techs="works[0].techs" :image-locate="works[0].imageLocate"></myWork>
            <myWork :product-name="works[0].name" :description="works[0].description" :techs="works[0].techs" :image-locate="works[0].imageLocate"></myWork>
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
    margin: 150px auto 0px auto;
    h1{
        font-weight: bold;
        text-align: center;
    }
    .container{
        text-align: center;
        // display: flex;
        // flex-direction: row;
        float: left;
        clear: both;

        .f-item{

        }
    }
}

</style>