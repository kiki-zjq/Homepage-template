<template>
    <div>
        <div class="lab-tag" :class='type'></div>
        <div class="tag-name" >{{type}}</div>
    </div>
</template>

<script>
export default {
    props:{
        type:'',
    }
}
</script>


<style scoped>
.lab-tag{
    width:0;
    height:0;
    color:white;
    font-weight:bold;
    font-size:36px;

    box-sizing: border-box;
    position:absolute;
    right:0;
    top:25px;
    border-bottom: white solid 50px;
    border-left: white solid 50px;

}
.tag-name{
    padding-left:1em;
    font-size:38px;
    color:white;
    font-weight:bold;
    position:absolute;
    right:0;
    top:25px;
    transform: rotate(45deg);
    text-transform:Uppercase ;
    /* text-transform:Capitalize  */
    font-family: "PingFang SC";
}
.lab{
    background-color: #409EFF;
    border-top:#409EFF solid 50px;
    border-right:#409EFF solid 50px;
}
.pro{
    background-color: #E6A23C;
    border-top:#E6A23C solid 50px;
    border-right:#E6A23C solid 50px;
}
.int{
    background-color: #F56C6C;
    border-top:#F56C6C solid 50px;
    border-right:#F56C6C solid 50px;
}
.oth{
    background-color: #67C23A;
    border-top:#67C23A solid 50px;
    border-right:#67C23A solid 50px;
}

</style>
