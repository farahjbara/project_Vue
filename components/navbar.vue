<template >
<div dir="ltr" class="">
    <header class="header-dig">
        <div class="left">
            <button @click="isOn = !isOn" id="menul" title="Menu"><i :class="isOn ? 'close' : 'bars'" class="ui large black icon"></i></button>
        </div>

        <div class="utils right">
            <a @click="isFULL = !isFULL" onClick="twPleinEcran();" id="monBouton" href="#" class=' alerts'><i :class="isFULL ? 'expand' : 'compress'" class="ui large black  icon"></i></a>
            
        </div>
    </header>
    <!--//.header-dig-->
    <div :class="isOn ? 'active' : ''" id="sideBar">
      <div class="logo">
         <div class="image">
           <img class="ui mini circular image" src="/dit.png" alt="">
         </div>

      </div>
      <div class="ui divider hidden">

      </div>
        <div  class="ui secondary p2 big vertical fluid menu">
            <a class="item">
                <i class="ui icon home"></i>
                Home
            </a>
            <a class="item active">
                <i class="ui icon user"></i>
                Profile
            </a>
            <a class="item">
                <i class="ui icon history"></i>
                Historique
            </a>
            <a class="item">
                <i class="ui icon calendar"></i>
                Calendrier
            </a>
            <a class="item">
                <i class="ui icon briefcase"></i>
                Projets
            </a>
        </div>



    </div>
</div>
</template>

<script>
export default {
    methods: {

    },
    data() {
        return {
            isOn: false,
            isFULL: true,
            users:{}
        }
    },
    // methods: {
    //     getUser() {
    //         axios.get('/gr')
    //             .then((response) => {
    //                 this.users = response.data;
    //                 console.log(this.users)
    //             })
    //             .catch((e) => {
    //                 console.log(e)
    //             })
    //     }
    // },
    // created() {
    //     this.getUser()
    // }

}
</script>
<style lang="scss" scoped>
.ui.vertical.menu .item > i.icon {
    width: 1.18em;
    float: right !important;
    margin: 0 0 0 0.5em !important;
}
.ui.icon.header:first-child {
    margin-top: 1.2em !important;
}
.logo{
  .image{
    margin: auto;
    top: 11px;
    img{
      width: 50px !important;
    }
  }
}
#sideBar {
    width: 15rem;
    height: calc(100% - 67px);
    box-shadow: none;
    background: #051d38;
    background-image: linear-gradient(90deg,#051d38,#1e344c);
    position: fixed;
    top: 60px;
    bottom: auto;
    z-index: 20;
    left: -15rem;
    display: block;
    transition: 0.4s;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    overflow: auto;
    -webkit-overflow-scrolling: touche;
    -webkit-scroll-snap-type: x mandatory;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    &.active {
        left: 0 !important;
        transition: 0.4s;
        -webkit-transition: 0.4s;
        -moz-transition: 0.4s;
    }
    // .profile {
    //     content: ' ';
    //     height: 150px;
    //     background: grey;
    //     display: flex;
    //     flex-wrap: wrap;
    //     // .content {
    //     //     position: relative;
    //     //     margin: auto;
    //     //     justify-content: center;
    //     //     text-align: center;
    //     //     h3{
    //     //       margin-top: 5px;
    //     //     }
    //     // }

    }
    .p2 {
        margin-bottom: 100px !important;
        .active{
          background-color: #04172c !important;
           color: #fff !important;
           .icon{
             color: #fff !important;
           }
        }
        .item{
            color: hsla(0,0%,100%,.3);
            line-height: 1.25 !important;
          .icon {
            float: left !important ;
            color: hsla(0,0%,100%,.3);
            padding-right: 25px;


          }
        }
    }
}
</style>

<style lang="css">


h2 {
  margin-bottom: 15px;
}

.right {
  float: right;
}

.left {
  float: left;
}

.controls {
  position: relative;
  margin-bottom: 15px;
}

a {
  text-decoration: none;
}

.sep {
  content: '';
  border-right: 1px solid rgba(0, 0, 0, 0.13);
}

/*-------------------------
  2 - .header-dig
-------------------------*/
.header-dig {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: white;
  height: 60px;
  line-height: 60px;
  border-bottom: 0.5px grey;
  -webkit-box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);
    box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);

}
.header-dig h1, .header-dig button {
  display: inline-block;
}
.header-dig h1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header-dig .utils {
  margin-left: 15px;
}
.header-dig .utils a {
  display: inline-block;
  padding: 0 5px;
  margin-left: -3px;
}
.header-dig .utils a {
  color: rgba(0, 0, 0, 0.3);
  -moz-transition: color 0.3s linear;
  -o-transition: color 0.3s linear;
  -webkit-transition: color 0.3s linear;
  transition: color 0.3s linear;
}
.header-dig .utils a:hover {
  color: rgba(0, 0, 0, 0.6);
}
.header-dig button {
  cursor: pointer;
  color: #fff;
  -webkit-appearance: none;
  margin: 0;
  padding: 0;
  border: none;
  height: 60px;
  width: 60px;
  vertical-align: top;
  background: transparent;
  border-left: 1px solid rgba(255, 255, 255, 0.7);
  margin-left: 15px;
  -moz-transition: background-color 0.3s linear;
  -o-transition: background-color 0.3s linear;
  -webkit-transition: background-color 0.3s linear;
  transition: background-color 0.3s linear;
}
.header-dig button:hover, .header-dig button:focus, .header-dig button.active {
  outline: none;
}
.header-dig button:hover, .header-dig button.active {
  background-color: rgba(0, 0, 0, 0.1);
}



</style>
