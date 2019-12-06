<template>
    <div class="container">
        <h3>{{ productName }}</h3>
        <div class="background-image" :style="{'background-image': 'url(' + backgroundImage + ')'}">
        </div>
        <div class="description">
            <p>{{ description }}</p>
        </div>
        <p>使用技術: <span v-for="tech in techs" :key="tech"> {{tech}}</span></p>
    </div>
</template>

<script>
export default {
    props: ['productName', 'description', 'techs', 'imageLocate'],
    data(){
        return{
            backgroundImage: require("@/assets/" + this.imageLocate)
        }
    }
}
</script>


<style lang="scss" scoped>

.container {
    border: solid 1px #7E7E7E;
    border-radius: 1.5%;
    max-width: 370px;
    box-shadow: 1px 1px 2px gray;

    .background-image{
        // background-image: url("../assets/shiro.png");
        background-size: cover;
        margin: 0 auto;
        max-width: 92%;
        height: 350px;
    }

    .description {
        margin: 0 auto;
        width: 92%;

        p {
            text-align: left;
        }
    }
}

</style>