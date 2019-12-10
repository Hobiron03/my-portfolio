<template>
    <div class="wrapper">
        <div class="container">
            <h1>About</h1>
            <div class="profile">
                <div class="profile-left">
                    <div class="circle-photo">
                    </div>
                    <h4>プロフィール</h4>
                    <p>名前: <span>川上 雄大（かみかみ）</span></p>
                    <p>レベル: <span>22</span></p>
                    <p>職業: 大学生（4年生）</p>
                    <p>出身: 香川県</p>
                </div>
                <div class="profile-center">
                    <div class="ability">
                        <h4>能力値</h4>
                        <div class="ability-left">
                            <p>力： 40</p>
                            <p>守備: 70</p>
                            <p>素早さ： 32</p>
                        </div>
                        <div class="ability-right">
                            <p>賢さ： 2</p>
                            <p>体力： 50</p>
                            <p>幸運： 255</p>
                        </div>
                    </div>
                    <div class="hobby">
                        <h4>趣味</h4>
                        <div class="hobby-image">
                            <img src="../assets/guitar.png" alt="" class="f-item" width="27%" height="27%">
                            <img src="../assets/piano.png" alt="" class="f-item" width="27%" height="27%">
                            <img src="../assets/tvgame.png" alt="" class="f-item" width="27%" height="27%">
                            <img src="../assets/book.png" alt="" class="f-item" width="27%" height="27%"> 
                        </div>
                    </div>
                </div>
                <div class="profile-right">
                    <h4>Skill</h4>
                    <div class="skill-list">
                        <div class="list">
                            <img :src="unityLogo" alt="" width="15%" class="skill-img"> 
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['far', 'star']"/>
                        </div>

                        <div class="list">
                            <img :src="vueLogo" alt="" width="15%" class="skill-img"> 
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['far', 'star']"/>
                            <v-fa class="icon facebook" :icon="['far', 'star']"/>
                        </div>

                        <div class="list">
                            <img :src="djangoLogo" alt="" width="14%" class="skill-img"> 
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['far', 'star']"/>
                            <v-fa class="icon facebook" :icon="['far', 'star']"/>
                            <v-fa class="icon facebook" :icon="['far', 'star']"/>
                        </div>

                        <div class="list">
                            <img :src="cshrpLogo" alt="" width="14%" class="skill-img"> 
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['far', 'star']"/>
                        </div>

                        <div class="list">
                            <img :src="jsLogo" alt="" width="14%" class="skill-img"> 
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['far', 'star']"/>
                            <v-fa class="icon facebook" :icon="['far', 'star']"/>
                        </div>

                        <div class="list">
                            <img :src="pythonLogo" alt="" width="14%" class="skill-img"> 
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['fas', 'star']" style="color: #F47C00"/>
                            <v-fa class="icon facebook" :icon="['far', 'star']"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            unityLogo: "https://cdn.svgporn.com/logos/unity.svg",
            vueLogo: "https://cdn.svgporn.com/logos/vue.svg",
            djangoLogo: "https://cdn.svgporn.com/logos/django.svg",
            cshrpLogo: "https://cdn.svgporn.com/logos/c-sharp.svg",
            pythonLogo: "https://cdn.svgporn.com/logos/python.svg",
            jsLogo: "https://cdn.svgporn.com/logos/javascript.svg",
        }
    }
}
</script>

<style lang="scss" scoped>

.wrapper{
    max-width: 850px;
    margin: 130px auto 0px auto;
    h1{
        font-weight: bold;
    }
    .container{
        text-align: center;

        .profile{
            background-color: rgb(255, 254, 253);
            border-radius: 2px;
            border: 1px solid rgb(145, 145, 145);
            height: 450px;
            box-shadow: 2px 2px 4px 2px gray;


            .profile-left{
                height: 100%;
                width: 35%;
                float: left;
                border-right: solid 1px rgb(145, 145, 145);
                p {
                    text-align: left;
                    margin: 20px auto 15px auto;
                    width: 80%;
                    border-bottom: solid 1px rgb(145, 145, 145);

                }

            .circle-photo {
                margin: 0 auto;
                margin-top: 30px;
                background-image: url("../assets/MyImage.png");
               
                background-size: contain;
                border-radius: 50%;
                width: 150px;
                height: 150px;

                p {
                    line-height: 200px;
                }
              }

            }




            .profile-center{
                height: 100%;
                text-align: center;
                width: 30%;
                float: left;
                border-right: solid 1px rgb(145, 145, 145);

                .ability{
                    margin-bottom: 180px;
                }

                h4{
                    margin-bottom: 0px;
                }

                p{
                    text-align: left;
                    margin-left: 25px;
                }

                

                .ability-left{
                    float: left;
                    width: 50%;
                }
                .ability-right{
                    float: left;
                    width: 50%;
                }


                .hobby{
                    width: 100%;

                    .hobby-image{
                        text-align: center;
                        flex-direction: wrap;

                        .f-item{
                            margin: 10px 20px;
                            margin-left: 20px;
                            margin-right: 20px;
                        }

                        ul{
                            list-style: none;
                        }
                    }
                }
            }




            .profile-right{
                height: 100%;
                width: 34%;
                // background-color: rgb(218, 218, 218);
                float: left;

                .skill-list{

                    text-align: right;
                    margin-right: 30px;

                    .list{
                        margin-top: 18px;
                        position: relative;

                        .skill-img{
                            margin-right: 20px;
                        }
                        p{
                            font-size: 15px;
                            top: 23px;
                            left: 25px;
                            position: absolute;
                        }
                    }
                }

                .icon{
                    font-size: 27px;
                    margin-bottom: 14px;
                    margin-left: 5px;
                }
            }

        }
    }
}


</style>