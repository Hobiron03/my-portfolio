<template>
    <div class="wrapper">
        <h1>Work</h1>
        <div class="container">
            <myWork :product-name="works[0].name" :description="works[0].description" :techs="works[0].techs"></myWork>
        </div>
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

.wrapper{
    text-align: center;
    background-color: #ffffff;
}

.container{
    margin: 0 auto;
}

</style>