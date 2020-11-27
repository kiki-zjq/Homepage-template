<template>
    <div class='document-block'>
        
        <div class='sub-title'>
            {{language=='Chinese'?'关于作者':'About'}}
        </div>
        <div style="margin-left:2em;" v-if='language=="Chinese"'>
                <p><span><b>姓名:</b> 朱江奇</span><span style="margin-left:3em"><b>在读院校:</b> 北京邮电大学</span><span style="margin-left:3em"><b>专业:</b> 电信工程及管理</span></p>
                <p><span><b>成绩:</b> <i>92.13</i> / 100&nbsp;&nbsp;<i>3.83</i> / 4.0&nbsp;&nbsp;(<i>1</i> / 323 ranking)</span></p>
                <p><b>英语:</b> TOEFL 110 <span style="color:#999;font-weight:bold">( R 30 / L 28 / S 26 / W 26)</span>&nbsp;&nbsp;&nbsp;GRE 328 <span style="color:#999;font-weight:bold">(V 159 / Q 169 / AW 3.0)</span></p>
                <p>
                    <b>课程:</b> 线性代数(99)&nbsp;&nbsp;&nbsp;概率论(99)&nbsp;&nbsp;&nbsp;数据结构(94)&nbsp;&nbsp;&nbsp;互联网应用(97)&nbsp;&nbsp;&nbsp;Java高级语言程序设计(95)&nbsp;&nbsp;&nbsp;
                    <el-tooltip class="item" effect="dark" content="更多" placement="top-start">
                      <a style="color:black" href="/#/#academic"><i class="el-icon-more"></i></a>
                    </el-tooltip>
                </p>

                <p>
                    <b>荣誉:</b> 2017-2018年国家级奖学金<span style="color:#999;font-weight:bold">&nbsp;( 专业前四 )</span>
                </p>
                <p style="padding-left:2em"> &nbsp;&nbsp;2018-2019年国家级奖学金<span style="color:#999;font-weight:bold">&nbsp;( 专业前四 )</span></p>
                <p style="padding-left:2em"> &nbsp;&nbsp;2020年小米特等奖学金<span style="color:#999;font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ( 全校前五 )&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-tooltip class="item" effect="dark" content="更多" placement="top-start">
                      <a style="color:black" href="/#/Certification#anchor"><i class="el-icon-more"></i></a>
                    </el-tooltip>
                </p>
   
        </div>
        <div style="margin-left:2em;" v-if='language=="English"'>
                <p><span><b>Name:</b> Jiangqi Zhu</span><span style="margin-left:3em"><b>School:</b> Beijing University of Posts and Telecommunications </span><span style="margin-left:3em"></span></p>
                <p><b>Major:</b> B.E. in Telecommunications Engineering with Management.</p>
                <p><span><b>Overall GPA:</b> <i>92.13</i> / 100&nbsp;&nbsp;<i>3.83</i> / 4.0&nbsp;&nbsp;(<i>1</i> / 323 ranking)</span></p>
                <p><b>Language:</b> TOEFL 110 <span style="color:#999;font-weight:bold">( R 30 / L 28 / S 26 / W 26)</span>&nbsp;&nbsp;&nbsp;GRE 328 <span style="color:#999;font-weight:bold">(V 159 / Q 169 / AW 3.0)</span></p>
                <p>
                    <b>Related Courses:</b>  Linear Algebra(99)&nbsp;&nbsp;&nbsp;Probability Theory and Stochastic Process(99)&nbsp;&nbsp;&nbsp;Data Structure(94)&nbsp;&nbsp;&nbsp;
                    
                </p>
                <p style="padding-left:8em;">
                    &nbsp;&nbsp;Internet Applications(97)&nbsp;&nbsp;&nbsp;Java Programming(95)&nbsp;&nbsp;&nbsp;
                    <el-tooltip class="item" effect="dark" content="More Details" placement="top-start">
                      <a style="color:black" href="/#/#academic"><i class="el-icon-more"></i></a>
                    </el-tooltip>
                </p>

                <p>
                    <b>Selected Awards:</b> National Scholarships,2017-2018<span style="color:#999;font-weight:bold;padding-left:5em">&nbsp;&nbsp;( Top 4 in the major )</span>
                </p>
                <p style="padding-left:8em"> &nbsp;&nbsp;National Scholarships,2018-2019<span style="color:#999;font-weight:bold;padding-left:5em">&nbsp;&nbsp;( Top 4 in the major )</span></p>
                <p style="padding-left:8em"> &nbsp;&nbsp;Xiaomi Special Level Scholarship in 2020<span style="color:#999;font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ( Top 5 in the university )&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-tooltip class="item" effect="dark" content="More Details" placement="top-start">
                      <a style="color:black" href="/#/Certification#anchor"><i class="el-icon-more"></i></a>
                    </el-tooltip>
                </p>



            </div>
        <el-divider></el-divider>
        <!-------------------------------------------------------------------------------------->
        <div class='sub-title' id='skill'>
            {{language=='Chinese'?'相关技术栈':'Skill'}}
        </div>

            <RectTreeChart v-if='language=="Chinese"' class='rect-tree-chart'/>
            <RectTreeChartEN  v-if='language=="English"' class='rect-tree-chart'/>
        <el-divider></el-divider>

        <!-------------------------------------------------------------------------------------->
        <div class='sub-title' id='academic'>
            {{language=='Chinese'?'本科成绩单':'Academic'}}
        </div>
        <p style="margin-left:2em;color:gray" v-if='language=="Chinese"'><i>(点击 <b>Semester</b> 或者 <b>Keywords</b> 进行筛选)</i></p>
        <p style="margin-left:2em;color:gray" v-if='language=="English"'><i>(Click <b>Semester</b> or <b>Keywords</b> to filter this table)</i></p>
        <div class="table" style="margin:5px auto;width:95%;">
           <List v-if='language=="Chinese"'/>
           <ListEN v-if='language=="English"'/>
        </div>

    </div>    
</template>

<script>
import RectTreeChart from './components/RectTreeChart';
import RectTreeChartEN from './components/RectTreeChartEN';
import List from './components/List';
import ListEN from './components/ListEnglish';
export default {
    components:{
      RectTreeChart,
      RectTreeChartEN,
      List,
      ListEN
    },
    data() {
      return {

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
.document-block{
    box-sizing: border-box;
    text-align:left;
    padding:20px;
}
.code-block{
    width:90%;
    padding:10px 20px;
    margin:10px auto 1.5em;
    background-color: #F6F8FA;
    /* min-height:300px; */
    border-radius: 20px;
}
.code-block .function-name{
    font-weight: bold;
    font-size: 18px;
}
.code-block .function-description{
    font-style: italic;
    font-size: 18px;
}

.document-block .sub-title{
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
.module-name{
    font-weight: bold;
    margin-left:2em;
}
</style>