<template>
    <div class="home">
        <div class="container">
            <homeTitle></homeTitle>
            <homeAbout></homeAbout>
            <homeWork></homeWork>
            <homeContact></homeContact>

        </div>
    </div>
</template>

<script>
import homeTitle from "@/components/homeTitle.vue";
import homeAbout from "@/components/homeAbout.vue";
import homeWork from "@/components/homeWork.vue";
import homeContact from "@/components/homeContact.vue";

export default {
    components: {
        homeTitle,
        homeAbout,
        homeWork,
        homeContact,
    },
}
</script>

<style lang="scss" scoped>
.home {

}

</style>