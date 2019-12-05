<template>
    <div class="wrapper">
        <div class="container">
            <h1>About</h1>
            <div class="profile">
                <div class="profile-left">
                    <div class="circle-photo">
                    </div>
                </div>
                <div class="profile-right">
                    <div class="top">
                        <div class="name">
                            <p class="kanji">川上 雄大</p>
                            <p class="ro-maji">Kawakami Yudai</p>
                            <a href="https://github.com/Hobiron03">
                                <v-fa class="icon github" :icon="['fab', 'github-square']"/>
                            </a>
                            
                            <a href="https://www.facebook.com/kawakami5150">
                                <v-fa class="icon facebook" :icon="['fab', 'facebook-square']"/>
                            </a>
                            
                            <a href="google.com">
                                <v-fa class="icon twitter" :icon="['fab', 'twitter-square']"/>
                            </a>
                        </div>
                    </div>

                    <div class="under">
                        <p>1997年4月3日生まれ。滋賀県の理系の大学に通う４回生です。将来は空間を楽しくできるようなクリエイターになりたい。</p>
                    </div>

                </div>
            </div>
        </div>
        <p class="discriptionButton"><router-link to="/About">詳しく見る</router-link></p>
    </div>
</template>

<script>
export default {
}
</script>



<style lang="scss" scoped>

$home: #F47C00;


.wrapper {
    padding-top: 30px;
    padding-bottom: 10px;
    background-color: rgb(252, 252, 252);
}

.container{
    width: 100%;

    h1{
        margin-top: 30px;
        text-align: center;
        font-weight: normal;
    }

    .profile {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
        background-color: white;
        border: solid 0.2px #7E7E7E;
        height: 250px;

        .profile-left{
            // 写真ぶぶん
            float: left;
            width: 33%;
            height: 100%;
            
            .circle-photo {
                margin: 0 auto;
                margin-top: 30px;
                background-image: url("../assets/MyImage.png");
               
                background-size: contain;
                border-radius: 50%;
                width: 200px;
                height: 200px;

                p {
                    line-height: 200px;
                }
            }
        }

        .profile-right {
            // 説明
            float: right;
            width: 66%;

            .top {
                text-align: left;
                .name {
                    margin-left: 20px;
                    position: relative;

                    .kanji {
                        font-size: 30px;
                    }

                    .ro-maji {
                        position: absolute;
                        left: 2px;
                        top: 23px;
                        font-size: 16px;
                    }

                    .github{
                        position: absolute;
                        top: 1px;
                        left: 160px;

                        transition: all 0.3s;

                        &:hover {
                            color: $home;
                        }
                    }

                    .facebook {
                        position: absolute;
                        top: 1px;
                        left: 230px;

                        transition: all 0.3s;
                        &:hover {
                            color: $home;
                        }
                    }

                    .twitter {
                        position: absolute;
                        top: 1px;
                        left: 300px;

                        transition: all 0.3s;
                        &:hover {
                            color: $home;
                        }
                    }

                }

                .icon {
                    color: black;
                    font-size: 60px;
                    margin-right: 30px;
                }
            }

            .under {
                text-align: left;
                margin-top: 50px;
            }

        }
    }

    .discriptionButton {

        a {
            margin: 0 auto;
            display: block;
            padding: 14px 20px;
            margin-top: 10px;
            width: 180px;
            font-weight: bold;
            font-size: 20px;
            border: solid 2px $home;
            text-align: center;
            transition: all 0.3s;
            color: $home;
            text-decoration: none;
            &:hover {
                background-color: $home;
                color: white;
            }
        }
    }
}

</style>