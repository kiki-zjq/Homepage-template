<template>
    <div class='document-block'>
        
        <div class='sub-title'>
            Introduction
        </div>
        <p style="margin-left:2em;">
            This file provide a sample way for multiple cores CPU. It could automatically load the file and calculate the sample and
store them in h5 format file.
        </p>
        <el-divider></el-divider>
        <!-------------------------------------------------------------------------------------->
        <div class='sub-title'>
            Module List
        </div>
        <p><span class="module-name">heapq</span> -- Elementary package provided by python3.x to implement the data structure of heap and relevant methods.</p>
        <p><span class="module-name">multiprocessing</span> -- Elementary package provided by python 3.x to support the multi-core feature.</p>
        <p><span class="module-name">math</span> -- Elementary math package supporting some calculation including pow, log, exp and so on.</p>
        <p><span class="module-name">random </span> -- Used to generate random number, including seed(used to set random seed), uniform and randint.</p>
        <p><span class="module-name">numpy </span> -- Used in sample_int_expj to store and process probability data.</p>
        <p><span class="module-name">time </span> -- Used to record time.</p>
        <p><span class="module-name">sys </span> -- Used exit function to exit while error happens.</p>
        <p><span class="module-name">pandas </span> -- Used to read tsv data and generate data list.</p>
        <p><span class="module-name">h5py  </span> -- Used to store the data in h5 format.</p>
        <p><span class="module-name">os </span> -- Elementary process of operating system.</p>

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
  export default {
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