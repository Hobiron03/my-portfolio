<template>
        <footer>
            <div class="wrapper">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
        </footer>
</template>


<style lang="scss" scoped>

ul li {
    margin: 0;
}

footer {
    max-width: 350px;
    margin: 0 auto;

    .wrapper{
        margin: 60px 0 30px 0px;
    }
        ul {
            display: flex;
            justify-content: center;
            li {
                text-align: center;
                width: 25%;
                list-style: none;
            }
        }
}


</style>