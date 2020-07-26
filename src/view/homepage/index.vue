<template>
    <div class='document-block'>
        
        <div class='sub-title'>
            作者介绍
        </div>
        <div style="margin-left:2em;">
            <p>作者朱江奇，北京邮电大学2017级在读，电信工程及管理专业。目前专业排名第一 （1/326）</p>
                <p>对计算机科学以及软件工程方向有着浓厚的兴趣，通过自学了解并掌握了部分编程语言。</p>
                <p>日常喜欢应用新学到的知识做一些小的项目的编写，希望能籍由此巩固知识并提升自己的代码能力。</p>
                <p>最后，本项目是一个从零开始搭建的个人主页，页面布局仿照了react-spring官网（<a href='https://www.react-spring.io/'>https://www.react-spring.io/</a>）.</p>
                <p>项目搭建在github page上，其中使用到了诸如vue,vue-router,element-ui,e-charts等技术。同时为了解析json文件也进行了axios封装。<b>（由于github-page网站自身的原因，加载图片的时候可能速度较慢）</b></p>
                <p>本网站可能还有诸多不足，但希望伴随着自己的技能成长可以进一步的完善填充它。</p>
                <p>最后！24小时在线求职求实验室求求了QnQ（<a style='color:black;font-weight:bold' href='#/#contact'>联系方式</a>）</p>
        </div>
        <el-divider></el-divider>
        <!-------------------------------------------------------------------------------------->
        <div class='sub-title'>
            技术栈
        </div>

            <RectTreeChart class='rect-tree-chart'/>

        <el-divider></el-divider>
        <!-------------------------------------------------------------------------------------->
        <div class='sub-title'>
            Function Details
        </div>

        <div class='code-block'>
            <span class="function-name">_runif_to_one_by(param)</span>
            <span class="function-description">-- This is a function used to calculate the key value for each item in the population.</span>
            <br />
            <p><span>@param param: </span>Float number to indicate the weight of the item</p>
            <p><span>@return Float Number indicate the key value of the item</span></p>
        </div>

        <div class='code-block'>
            <span class="function-name">_runif_to_one_by(param)</span>
            <span class="function-description">-- This is a function used to calculate the key value for each item in the population.</span>
            <br />
            <p><span>@param param: </span>Float number to indicate the weight of the item</p>
            <p><span>@return Float Number indicate the key value of the item</span></p>
        </div>

        <div class='code-block'>
            <span class="function-name">_runif_to_one_by(param)</span>
            <span class="function-description">-- This is a function used to calculate the key value for each item in the population.</span>
            <br />
            <p><span>@param param: </span>Float number to indicate the weight of the item</p>
            <p><span>@return Float Number indicate the key value of the item</span></p>
        </div>

        <div class='code-block'>
            <span class="function-name">_runif_to_one_by(param)</span>
            <span class="function-description">-- This is a function used to calculate the key value for each item in the population.</span>
            <br />
            <p><span>@param param: </span>Float number to indicate the weight of the item</p>
            <p><span>@return Float Number indicate the key value of the item</span></p>
        </div>

        <div class='code-block'>
            <span class="function-name">_runif_to_one_by(param)</span>
            <span class="function-description">-- This is a function used to calculate the key value for each item in the population.</span>
            <br />
            <p><span>@param param: </span>Float number to indicate the weight of the item</p>
            <p><span>@return Float Number indicate the key value of the item</span></p>
        </div>

        <el-divider></el-divider>
        <!-------------------------------------------------------------------------------------->
        <div class='sub-title'>
            Experimental Results
        </div>
        <div class="table" style="margin:10px auto;width:90%;">
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="core"
                label="Number of cores"
                width="230">
                </el-table-column>
                <el-table-column
                prop="total"
                label="Total number"
                width="230">
                </el-table-column>
                <el-table-column
                prop="sample"
                label="Sampling size"
                width="280">
                </el-table-column>
                <el-table-column
                prop="time"
                label="time(s)">
                </el-table-column>
            </el-table>
        </div>

    </div>    
</template>

<script>
import RectTreeChart from './components/RectTreeChart';
export default {
    components:{
      RectTreeChart,
    },
    data() {
      return {
        tableData: [
            {
                core: '1',
                total: '10k',
                sample: '2k',
                time:'36132',
            },
            {
                core: '4',
                total: '10k',
                sample: '2k',
                time:'9065',
            },
            {
                core: '8',
                total: '10k',
                sample: '2k',
                time:'4728',
            }
        ]
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