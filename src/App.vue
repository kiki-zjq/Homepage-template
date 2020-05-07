<template>
  <div id="app">
    <HeaderPart id="header-part"/>
    <IntroPart id="intro"/>
    <div id='main-part'>
        <router-view />
    </div>

    <FooterPart class='footer'/>
     
  </div>
</template>

<script>
import HeaderPart from '@/layout/header'
import FooterPart from '@/layout/footer'
import IntroPart from '@/components/intro.vue'
export default {
  name: 'App',
  data(){
    return{

    }
  },


  components:{
    FooterPart,
    HeaderPart,
    IntroPart
  },
};

let flag = 0;
let fadeFlag = 0;

$(window).scroll( function() {
        
        if(document.documentElement.scrollTop>=460){
            $("#header-part").addClass("fix");
            if(flag == 0){
              console.log("flag:",flag)
              $("#header-part").fadeOut()
              flag = 1
            }
            
          }
        else{
            $("#header-part").removeClass("fix");
            $("#header-part").removeClass("opacity-nav");
            flag = 0
            fadeFlag = 1;
        }


    } );
  
  window.addEventListener('mousewheel',function(e){
      if(e.wheelDelta>0 && document.documentElement.scrollTop>=460 && fadeFlag == 0){ // wheelDelta>0说明鼠标向上滚动
        $("#header-part").addClass("opacity-nav");
        console.log(e.wheelDelta)
        $("#header-part").fadeIn(1000,function(){
            fadeFlag = 1
        })
      }
      if(e.wheelDelta<0 && document.documentElement.scrollTop>=460 && fadeFlag == 1){ // wheelDelta>0说明鼠标向下滚动
        $("#header-part").fadeOut(1000,function(){
          $("#header-part").removeClass("opacity-nav");
          fadeFlag = 0;
        })
      }
  })

</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  text-align: center;
}


#header-part{
  z-index:9;
  /* position: fixed;
  top:0; */
}
.fix{
  position:fixed!important;
  top:0;
}
.opacity-nav{
  color:black!important;
  background-color:white!important;
  opacity: 0.6;
  border-bottom: 1px gray solid;
}


#main-part{
  width:70%;
  min-height:1200px;
  min-width:600px;
  margin: auto;
  border:1px white solid;
}



</style>
