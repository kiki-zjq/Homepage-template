<template>
    <div class='grade-table'>
         <el-table
                max-height="800"
                :data="tableData"
                stripe
                :default-sort = "{prop: 'grade', order: 'descending'}"
                style="width: 100%">
                <el-table-column
                prop="semester"
                label="Semester"
                :filters="[{text:'Semester1-1',value:'Semester1-1'},
                           {text:'Semester1-2',value:'Semester1-2'},
                           {text:'Semester2-1',value:'Semester2-1'},
                           {text:'Semester2-1',value:'Semester2-2'},
                           {text:'Semester3-1',value:'Semester3-1'},
                           {text:'Semester3-2',value:'Semester3-2'},                
                ]"
                :filter-method="filterHandler"
                width="200">
                </el-table-column>
                <el-table-column
                prop="name"
                label="Class"
                width="180">
                </el-table-column>
                <el-table-column
                prop="credit"
                label="Credit"
                width="180">
                </el-table-column>
                <el-table-column
                prop="grade"
                label="Grade"
                width="180">
                </el-table-column>
                <el-table-column
                prop="keywords"
                label="Keywords"
                :filters="[{text:'Technology',value:'Technology'},
                           {text:'Science',value:'Science'},
                           {text:'Liberal Arts',value:'Liberal Arts'},               
                ]"
                :filter-method="filterHandler"
                >
                    <template slot-scope="scope">
                        <el-tag
                        v-if="scope.row.keywords==='Technology'"
                        type="danger"
                        disable-transitions>{{scope.row.keywords}}</el-tag>

                        <el-tag
                        v-if="scope.row.keywords==='Science'"
                        type="warning"
                        disable-transitions>&nbsp;&nbsp;{{scope.row.keywords}}&nbsp;&nbsp;&nbsp;</el-tag>


                        <el-tag
                        v-if="scope.row.keywords==='Liberal Arts'"
                        type="success"
                        disable-transitions>{{scope.row.keywords}}</el-tag>
                    </template>

                </el-table-column>
            </el-table>
    </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [
            { semester: 'Semester1-1',  name: 'College Computer', grade: '95', credit:'2', keywords:'Technology', },
            { semester: 'Semester1-1',  name: 'Introduction to Big Data Analytics Technology', grade: '89', credit:'2', keywords:'Technology', },
            { semester: 'Semester1-1',  name: 'Advanced Mathematics A (I)', grade: '93', credit:'5', keywords:'Science', },
            { semester: 'Semester1-1',  name: 'Linear Algebera', grade: '99', credit:'3', keywords:'Science', },
            { semester: 'Semester1-1',  name: 'Integrated English (1-2）', grade: '88', credit:'6', keywords:'Liberal Arts', },
            { semester: 'Semester1-1',  name: 'Current Affairs Study', grade: '95', credit:'0.4', keywords:'Liberal Arts', },
            { semester: 'Semester1-1',  name: 'Military Training', grade: '94', credit:'1', keywords:'', },
            { semester: 'Semester1-1',  name: 'Undergraduate Psychological Health', grade: '94', credit:'0.5', keywords:'Liberal Arts', },
            { semester: 'Semester1-1',  name: 'Morality Education and Fundamentals of Law', grade: '93', credit:'3', keywords:'Liberal Arts', },
            { semester: 'Semester1-1',  name: 'Modern Chinese History', grade: '95', credit:'2', keywords:'Liberal Arts', },
            { semester: 'Semester1-1',  name: 'University Physics I', grade: '82', credit:'1', keywords:'', },
            { semester: 'Semester1-2',  name: 'Introduction to Electronic Systems', grade: '89', credit:'3', keywords:'Technology', },
            { semester: 'Semester1-2',  name: 'C Programming', grade: '95', credit:'3', keywords:'Technology', },
            { semester: 'Semester1-2',  name: 'Experiment of Electronic Circuit', grade: '92', credit:'1', keywords:'Technology', },
            { semester: 'Semester1-2',  name: 'Advanced Mathematics A (II)', grade: '100', credit:'5', keywords:'Science', },
            { semester: 'Semester1-2',  name: 'Situation and Policies II', grade: '98', credit:'0.4', keywords:'Liberal Arts', },
            { semester: 'Semester1-2',  name: 'Military Theory', grade: '100', credit:'1.5', keywords:'Liberal Arts', },
            { semester: 'Semester1-2',  name: 'Integrated English (3)', grade: '85', credit:'4', keywords:'Liberal Arts', },
            { semester: 'Semester1-2',  name: 'Middle-level English Reading and Writing', grade: '85', credit:'2', keywords:'Liberal Arts', },
            { semester: 'Semester1-2',  name: 'Basic Principles of Marxism', grade: '88', credit:'3', keywords:'Liberal Arts', },
            { semester: 'Semester1-2',  name: 'University Physics D I', grade: '90', credit:'3', keywords:'Science', },
            { semester: 'Semester1-2',  name: 'Physics Experiment C', grade: '84', credit:'1.5', keywords:'Science', },
            { semester: 'Semester1-2',  name: 'Personal Development Plan I', grade: '91', credit:'0.4', keywords:'Liberal Arts', },
            { semester: 'Semester2-1',  name: 'Data Structures', grade: '94', credit:'2', keywords:'Technology', },
            { semester: 'Semester2-1',  name: 'Practicum in Computer Skills', grade: '94', credit:'2', keywords:'Technology', },
            { semester: 'Semester2-1',  name: 'Engineering Mathematics', grade: '95', credit:'4', keywords:'Science', },
            { semester: 'Semester2-1',  name: 'University Physics D II', grade: '99', credit:'2', keywords:'Science', },
            { semester: 'Semester2-1',  name: 'Fundamentals of Electronic Circuit', grade: '87', credit:'3', keywords:'Technology', },
            { semester: 'Semester2-1',  name: 'Signals and Systems', grade: '95', credit:'3', keywords:'Technology', },
            { semester: 'Semester2-1',  name: 'Enterprise Management', grade: '86', credit:'2.5', keywords:'Liberal Arts', },
            { semester: 'Semester2-1',  name: 'Situation and Policies III', grade: '92', credit:'0.4', keywords:'Liberal Arts', },
            { semester: 'Semester2-1',  name: 'Physical Education II', grade: '80', credit:'1', keywords:'', },
            { semester: 'Semester2-2',  name: 'Java Programming', grade: '95', credit:'4', keywords:'Technology', },
            { semester: 'Semester2-2',  name: 'Probability Theory and Stochastic Process', grade: '99', credit:'3', keywords:'Science', },
            { semester: 'Semester2-2',  name: 'Digital Signal Processing', grade: '88', credit:'3', keywords:'Technology', },
            { semester: 'Semester2-2',  name: 'Labs in Digital Signal Processing', grade: '91', credit:'1', keywords:'Technology', },
            { semester: 'Semester2-2',  name: 'Professional Applications I', grade: '87', credit:'2', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: 'Professional Applications II', grade: '87', credit:'2', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: 'Mao Thoughts and Theories', grade: '94', credit:'4', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: 'Mao Thoughts and Theories (Practice)', grade: '93', credit:'2', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: 'Digital Circuits and Logic Design', grade: '84', credit:'3', keywords:'Technology', },
            { semester: 'Semester2-2',  name: 'Product Development and Marketing', grade: '88', credit:'2.5', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: 'Personal Development Plan III', grade: '100', credit:'0.3', keywords:'Liberal Arts', },
            { semester: 'Semester2-2',  name: 'Electromagnetic Fields and Waves', grade: '98', credit:'4', keywords:'Technology', },
            { semester: 'Semester3-1',  name: 'Design & Build Practice 1	', grade: '91', credit:'2', keywords:'Technology', },
            { semester: 'Semester3-1',  name: 'Telecoms System', grade: '95', credit:'2.5', keywords:'Technology', },
            { semester: 'Semester3-1',  name: 'Multimedia Fundamentals', grade: '94', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-1',  name: 'Internet Protocols', grade: '92', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-1',  name: 'Advanced Transforms Methods', grade: '91', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-1',  name: 'Specialized Physical Education I', grade: '77', credit:'1', keywords:'', },
            { semester: 'Semester3-1',  name: 'Situation and Policies V', grade: '90', credit:'0.4', keywords:'Liberal Arts', },
            { semester: 'Semester3-2',  name: 'Principles of Communications', grade: '96', credit:'4', keywords:'Technology', },
            { semester: 'Semester3-2',  name: 'Mobile Internet', grade: '97', credit:'2', keywords:'Technology', },
            { semester: 'Semester3-2',  name: 'Technologies of Web Searching Engine', grade: '96', credit:'2', keywords:'Technology', },
            { semester: 'Semester3-2',  name: 'Internet Applications', grade: '97', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-2',  name: 'Interactive Media Design and Production', grade: '96', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-2',  name: 'Image and Vedio Processing', grade: '96', credit:'3', keywords:'Technology', },
            { semester: 'Semester3-2',  name: 'Software Engineering', grade: '92', credit:'4', keywords:'Technology', },
            { semester: 'Semester3-2',  name: 'Personal Development Plan III', grade: '96', credit:'0.3', keywords:'Liberal Arts', },
            
        ]
      }
    },
    methods:{
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        }
    }

}
</script>

<style>
.grade-table .el-icon-arrow-down:before {
    content: "\E6DF";
    font-weight: bold;
    font-size: 16px!important;
}
</style>