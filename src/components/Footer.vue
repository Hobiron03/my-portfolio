<template>
        <footer>
            <div class="wrapper">
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/About">About</router-link>
                    </li>
                    <li>
                        <router-link to="/Work">Work</router-link>
                    </li>
                    <li>
                        <router-link to="/Contact">Contact</router-link>
                    </li>
                </ul>
            </div>
            <p class="copyright">© 2019 Yudai Kawakami.</p>
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


        a{
            text-decoration: none;
            color: rgb(31, 31, 31);
            transition: all 0.2s;
        }

        a:hover{
            color: rgb(80, 80, 80);
        }
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

.copyright{
    text-align: center;
    margin-bottom: 10px;
    font-size: 12px;
    color: rgb(90, 90, 90);
}


</style>