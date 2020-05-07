<template>
    <div class="homepage-block">
        homepage
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

</script>

<style scoped>
    .homepage-block{
        font-family:'Verdana','Microsoft YaHei';
        text-align: left;
    }
    .homepage-block h2{
        width:fit-content;
        display: inline-block;
        padding:2px 12px 4px;
        border-bottom: 4px #FF4F4F solid;
    }
    .sub-title{
        margin-top:5%;
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
    .homepage-content{
        margin-top:5%;
        width:100%;
        font-size:14px;
        min-height:400px;
    }
    .homepage-content p{
        margin-top:-5px;
        line-height:1.5em;
    }
    .rect-tree-chart{
        margin-top:-75px;
    }

</style>