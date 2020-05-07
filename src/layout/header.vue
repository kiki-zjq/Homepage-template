<template>
    <div class="header" >
        <!-- <el-row>
            <el-col :span="12"><div style="background-color:#404040;height:100%;width:100%">'</div></el-col>
            <el-col :span="12">
                <el-menu
                    :default-active="active"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#404040"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>


            </el-col>   
        </el-row> -->
        <ul class="nav">
            <li><a href='javascript:void(0)' @click="handleClick(1)">Home</a></li>
            <li><a href='javascript:void(0)' @click="handleClick(2)">Download</a></li>
            <li><a href='javascript:void(0)' @click="handleClick(3)">Document</a></li>
            <li><a href='javascript:void(0)' @click="handleClick(4)">Example</a></li>
            <!-- <li @click="handleClick(1)">Home</li>
            <li @click="handleClick(2)">Download</li>
            <li @click="handleClick(3)">Document</li>
            <li @click="handleClick(4)">Example</li> -->
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:'1'
        }
    },
    // watch:{
    //     $route(to,from){
    //         console.log("!:",to.path)
    //         switch(to.path){
    //             case '/':
    //                 this.$store.commit('changePage','Homepage','It is an introduction/sub-title');
    //                 break;
    //             case '/Download':
    //                 this.$store.commit('changePage','Download','It is an introduction/sub-title');
    //                 break;
    //             case '/Document':
    //                 this.$store.commit('changePage','Document','It is an introduction/sub-title');
    //                 break;
    //             case '/Example':
    //                 this.$store.commit('changePage','Example','It is an introduction/sub-title');
    //                 break;
    //         }
    //     }
    // },
    mounted(){
        console.log("!route:",this.$route)
        switch(this.$route.path){
                case '/':
                    this.$store.commit('changePage','Homepage');
                    this.$store.commit('changeIntro','It is an introduction/sub-title for homepage');
                    break;
                case '/Download':
                    this.$store.commit('changePage','Download');
                    this.$store.commit('changeIntro','It is an introduction/sub-title for download');
                    break;
                case '/Document':
                    this.$store.commit('changePage','Document');
                    this.$store.commit('changeIntro','It is an introduction/sub-title for document');
                    break;
                case '/Example':
                    this.$store.commit('changePage','Example');
                    this.$store.commit('changeIntro','It is an introduction/sub-title for example');
                    break;
            }
    },
    methods: {
      handleClick(value){
          console.log(value)
          switch(value){
              case 1:
                  this.$router.push('./#app');
                  this.$store.commit('changePage','Homepage');
                  this.$store.commit('changeIntro','It is an introduction/sub-title for homepage');
                  break;
              case 2:
                  this.$router.push('./Download#app');
                  this.$store.commit('changePage','Download');
                  this.$store.commit('changeIntro','It is an introduction/sub-title for download');
                  break;
              case 3:
                  this.$router.push('./Document#app');
                  this.$store.commit('changePage','Document');
                  this.$store.commit('changeIntro','It is an introduction/sub-title for document');
                  break;
              case 4:
                  this.$router.push('./Example#app');
                  this.$store.commit('changePage','Example');
                  this.$store.commit('changeIntro','It is an introduction/sub-title for example');
                  break;
          }
      }
    }
}
</script>

<style scoped>
.header{
    color:white;
    width:100%;
    height:60px;
    z-index:9;
    position: relative;
    background-color:#404040;
}
.nav{
    position:absolute;
    right:100px;
    list-style:none;
}
.nav li{
    float:left;
}
.nav li:first-child{
    border-left:2px white solid;
}
.nav li a{
    display: block;
    border-right:2px white solid;
    /* border-left:1px white solid; */
    
    text-decoration: none;
    width:100px;
    padding:8px;
    background-color:inherit;
    text-transform: uppercase;
    color:inherit;
    font-size: 12px;
    line-height: 20px;
    font-weight: 800;
    letter-spacing: 1px;
}
.nav li a:hover{
    opacity: 0.8;
}

</style>