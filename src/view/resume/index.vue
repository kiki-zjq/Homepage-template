<template>
    <div class='resume-block'>
        <div class='sub-title'>
            {{language=='Chinese'?'个人简历':'RESUME'}}
        </div>
        <!-- <div class='divider'></div> -->
            <a v-if='language=="Chinese"' class='downloader' href='./static/data/Resume_ZhuJiangqi.pdf' download='Resume_ZhuJiangqi.pdf'>
                <el-button type="warning" icon="el-icon-download" circle></el-button>
            </a>
            <a v-if='language=="English"' class='downloader' href='./static/data/Resume_ZhuJiangqi_english.pdf' download='Resume_ZhuJiangqi.pdf'>
                <el-button type="success" icon="el-icon-download" circle></el-button>
            </a>
        <div class='resume-content'>
            <img v-if='language=="Chinese"' src="./Resume.jpg" width='800px'/>
            <img v-if='language=="English"' src="./English_1.jpg" width='800px' />
            <img v-if='language=="English"' src="./English_2.jpg" width='800px' style='margin-top:-100px;'/>
        </div>
    </div>
</template>

<script>
export default {
     data(){
      return{
          
        }
    },
    computed:{
        language:function(){
            return this.$store.state.language
        }
    }
}

$(window).scroll( function() {
        if(document.documentElement.scrollTop<=130){
            $(".downloader").fadeOut(500);
           //console.log(document.documentElement.scrollTop);
        }
        else{
            $(".downloader").fadeIn(500);
        }
    } );

</script>
<style scoped>
.resume-block {
    box-sizing: border-box;
    text-align:left;
    padding:20px;
}

.divider{
        background-color: #FF4F4F;
        height: 4px;
        width: 160px;
        margin-top: -18px;
        margin-bottom: 5%;
    }

.downloader{
    position:fixed;
    right:8%;
    bottom:10%;
}
.sub-title{
        margin-top:2%;
        margin-bottom: 2%;
        padding-left:2em;
        padding-right:2em;
        font-weight: bold;
        font-size:20px;
        width:fit-content;
        background-color:#FAFAFA;
        height:2em;
        line-height:2em;
        border-radius:20px;
    }
</style>