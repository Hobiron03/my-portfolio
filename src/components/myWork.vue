<template>
    <div class="container">
        <p>{{ productName }}</p>
        <p>{{ description }}</p>
        <p>{{ techs }}</p>
    </div>
</template>

<script>
export default {
    props: ['productName', 'description', 'techs'],
    data() {

    }
}
</script>


<style lang="sass" scoped>

</style>