<template>
    <div class="intro-page">
        <div style="width:80%;margin:auto;">
            <span class="main-title">{{Title}}</span><br/>
            <!-- <span class="intro">{{Intro}}</span> -->
            <span class="intro">MS Student @ Carnegie Mellon University | Actively seeking SDE internship opportunities 2023 summer</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        Title:{
            style:String,
            default:'Homepage',
        },
        Intro:{
            style:String,
            default:'',
        },
    },
    computed:{
        Title:function(){
            return this.$store.state.Page
        },
        Intro:function(){
            return this.$store.state.Intro
        },
    }
}
</script>


<style scoped>
    .intro-page{
       
        position:relative;
        width:100%;
        min-width: 1400px;
        height:460px;
        background-color: #404040;
        text-align: center;
        color:white;
    }
    .main-title{
        font-weight: 600;
        font-size:80px;
        display: block;
        padding: 150px 0 20px;
    }
    .intro{
        font-size:18px;
        font-weight:300;
    }
</style>