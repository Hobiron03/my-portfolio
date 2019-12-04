<template>
    <div class="top-wrapper top-cover">
        <div class="container">
            <h4>Welcome to KamikamiLab</h4>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.top-wrapper {
    height: 220px;
    padding: 180px 0 100px 0;
    // background-image: url(https://prog-8.com/images/html/advanced/top.png);
    background: #FDC830;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
}

.container{
    margin: 0 auto;

    h4 {
        font-weight: normal;
        padding-bottom: 20px;
        font-size: 60px;
        text-align: center;
        color: white;
    }
}
</style>