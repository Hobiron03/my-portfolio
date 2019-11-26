<template>
    <header :class="borderState">
        <div class="container">
            <div class="header-left">
                 <router-link to="/" @click.native="changeToHomeState"><h3>KamikamiLab</h3></router-link>
            </div>

            <div class="header-right">
                <nav>
                    <ul>
                        <li class="home-li change">
                            <router-link to="/" :class="isHome ? 'pushed-color-home' : 'normal-color'" @click.native="changeToHomeState">
                            <v-fa class="icon" :class="isHome ? 'pushed-color-home' : 'normal-color'" icon="home"/>Home
                            </router-link>
                        </li>
                        <li class="about-li">
                            <router-link to="/About" :class="isAbout ? 'pushed-color-about' : 'normal-color'" @click.native="changeToAboutState">
                            <v-fa class="icon" :class="isAbout ? 'pushed-color-about' : 'normal-color'" icon="address-card" />About
                            </router-link>
                        </li >
                        <li class="work-li">
                            <router-link to="/Work" :class="isWork ? 'pushed-color-work' : 'normal-color'" @click.native="changeToWorkState">
                            <v-fa class="icon" icon="gamepad" :class="isWork ? 'pushed-color-work' : 'normal-color'"/>Work
                            </router-link>
                        </li>
                        <li class="contact-li">
                            <router-link to="/Contact" :class="isContact ? 'pushed-color-contact' : 'normal-color'" @click.native="changeToContactState">
                            <v-fa class="icon" icon="envelope" :class="isContact ? 'pushed-color-contact' : 'normal-color'"/>Contact
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>


<script>
export default {
    data(){
        return {
            isHome: true,
            isAbout: false,
            isWork: false,
            isContact: false,
        };
    },
    computed: {
        borderState(){

            if(this.isAbout){
                return "header-border-color-about";
            }

            if(this.isWork)
            {
                return "header-border-color-work";
            }

            if(this.isContact)
            {
                return "header-border-color-contact";
            }

            return "header-border-color-home";
        }
    },
    methods: {
        changeToHomeState() {
            this.isHome = true;
            this.isAbout = false;
            this.isWork = false;
            this.isContact = false;
        },
        changeToAboutState(){
            this.isHome = false;
            this.isAbout = true;
            this.isWork = false;
            this.isContact = false;
        },
        changeToWorkState(){
            this.isHome = false;
            this.isAbout = false;
            this.isWork = true;
            this.isContact = false;
        },
        changeToContactState(){
            this.isHome = false;
            this.isAbout = false;
            this.isWork = false;
            this.isContact = true;
        },
    }
}
</script>


<style lang="scss" scoped>
$home: #F47C00;
$about: #0082c8;
$work: #50D331;
$contact: #E71A00;
$white: #FFFFFF;
$transition-time: 0.3s;
$font: #3C3C3C;

header {
    background-color: rgba(255, 255, 255, 0.85);
    position:fixed;
    top:0px;
    width: 100%;
    z-index: 10;
    font-size: 18px;
    height: 65px;
    font-weight: bold;
    border-bottom: solid 2.5px $home;
    transition: all $transition-time;
}

.container {
  max-width: 1370px;
  margin: 0 auto;
}

.header-left {
    float: left;
    margin-left: 100px;

    a{
        color: $font;
        text-decoration: none;
    }
}

.header-right {
    float: right;
    margin-right: 100px;
    ul {
        li {
            font-weight: 500;
            list-style: none;
            float: left;
            margin-right: 40px;
            transition: all $transition-time;
        }
    }

    a {
        text-decoration: none;
        padding: 5px 25px 6px 25px;
        display: block;
        transition: all $transition-time;
    }

    v-fa {
        transition: all 3.0s;
    }
}

.home-li {
    &:hover {
        border-bottom: solid 1.5px $home;
    }

}

.about-li{
    &:hover{
        border-bottom: solid 1.5px $about;
    }
}

.work-li {
    &:hover{
        border-bottom: solid 1.5px $work;
    }
}

.contact-li {
    &:hover{
        border-bottom: solid 1.5px $contact;
    }
}

.icon {
    transition: all $transition-time;
    margin-right: 10px;
}

.normal-color{
    // color: $font;
    color: $font;
}

.pushed-color-home{
    color: $home;
}

.pushed-color-about{
    color: $about;
}

.pushed-color-work{
    color: $work;
}

.pushed-color-contact{
    color: $contact;
}

.header-border-color-home{
    // border-bottom: solid 2.7px $home;
    border-bottom: solid 2px $home;
}

.header-border-color-about{
    border-bottom: solid 2px $about;
}

.header-border-color-work{
    border-bottom: solid 2px $work;
}

.header-border-color-contact{
    border-bottom: solid 2px $contact;
}

</style>