<template>
    <div class="block">
        <div class='sub-title'>
            {{language=='Chinese'?'个人经历':'EXPERIENCE'}}
        </div>

        <!-- <div class="divider"></div> -->
        <div class="radio" v-if='language=="Chinese"'>
            排序：
            <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
            </el-radio-group>
        </div>

        <div class="radio" v-if='language=="English"'>
            Sort:<span style='margin-left:5px'></span>
            <el-radio-group v-model="reverse">
            <el-radio :label="true">Reverse</el-radio>
            <el-radio :label="false">Positive</el-radio>
            </el-radio-group>
        </div>

        <!---------------------------------------------------------------->

         <el-timeline :reverse="reverse" v-if='language=="Chinese"'>
            <el-timeline-item
            v-for="(activity, index) in this.activities"
            :key="index"
            :timestamp="activity.timestamp"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            placement="top">
            <el-card>
                <h3 class='activity-title'>{{activity.title}}</h3>
                <div v-for='(content,index) in activity.content' :key='index'>
                    <p class='activity-content'>
                        {{content}}
                    </p><br />
                </div>
            </el-card>
            </el-timeline-item>
        </el-timeline>











        <el-timeline :reverse="reverse" v-if='language=="English"'>

            
            <el-timeline-item timestamp="2020-03 to 2020-11" type="warning" placement="top">
                <el-card>
                    <Tag type='lab'/>
                    <h3 class='activity-title'>Department of Statistics and Data Science, Yale University </h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b> Biology, Python, Front-end, R Language</p>
                        
                        <p class='activity-content'></p>
                        <el-divider></el-divider>
                        <p><b>Part of Project Experience:</b></p>
                        <ul class='activity-content'>
                            <li>Extracted news headlines, news content, dates and other information from news websites with Python and stored them in a txt file in the form of json</li>
                            <li>Use Python to implement the EM algorithm in the paper, and use this algorithm to count the correct rate of part-time staff ’s annotation data.</li>
                            <li>Completed Mturk's front-end web page design.</li>
                        </ul>
                    </div>
                </el-card>
            </el-timeline-item>


            <el-timeline-item timestamp="2020-03 to 2020-11" type="warning" placement="top">
                <el-card>
                    <Tag type='lab'/>
                    <h3 class='activity-title'>KEG Lab Intern, Computer Science Department, Tsinghua University</h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b> Active Study, EM, Python Crawler</p>
                        
                        <p class='activity-content'></p>
                        <el-divider></el-divider>
                        <p><b>Part of Project Experience:</b></p>
                        <ul class='activity-content'>
                            <li>Extracted news headlines, news content, dates and other information from news websites with Python and stored them in a txt file in the form of json</li>
                            <li>Use Python to implement the EM algorithm in the paper, and use this algorithm to count the correct rate of part-time staff ’s annotation data.</li>
                            <li>Completed Mturk's front-end web page design.</li>
                        </ul>
                    </div>
                </el-card>
            </el-timeline-item>


            <el-timeline-item timestamp="2019-07 to 2019-10" type="warning" placement="top">
                <el-card>
                    <Tag type='int'/>
                    <h3 class='activity-title'>Intern, Front-end Department, ByteDance </h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b> Front-end, Vue.js, Element UI, git</p>
                        <p class='activity-content'>
                            I joined bytedance in the summer vacation of 2019 for the front-end development internship. During the internship, I was responsible for the page production of the background administrator management system. Completed the migration of the old system from the old framework to the new framework. Complete the requirements of product colleagues (including crawler to capture pictures, details optimization, etc.). Through the internship, I have mastered the relevant knowledge of front-end development, familiar with the information interaction of front and rear terminals, and optimized the code habits. Improved engineering experience.
                        </p>
                        <el-divider></el-divider>
                        <p><b>Part of Project Experience:</b></p>
                        <p><b><i>I Vehicle Model Library Management System MIS Background Programming</i></b></p>
                        <ul class='activity-content'>
                            <li>Developed the MIS system based on Vue.js and Element UI.</li>
                            <li>Took charge of the related requirements of product side; jointly debugged the interfaces with back-end colleagues for data transmission and communication.</li>
                            <li>Cooperated with the colleagues to debug the data structure of a interface about color, removed redundant data, and adjusted the codes for all pages that need to call this interface</li>
                            <li>Completed a larger version update, and reduced page opening speed from minutes to seconds</li>
                        </ul>
                        <p><b><i>II MIS Background Framework Migration</i></b></p>
                        <ul class='activity-content'>
                            <li>Some of the project's web pages are based on a framework created by former employees.</li>
                            <li>Researched this framework and migrated this part of the web page to the currently used Vue framework. In this way, subsequent modifications related to these pages will be more convenient.</li>
                        </ul>
                        <p><b><i>III Supplier Mobile Terminal Demand Booking Pages Writing</i></b></p>
                    </div>
                </el-card>
            </el-timeline-item>
        
        

            <el-timeline-item timestamp="2019-06 to 2020-06" type="warning" placement="top">
                <el-card>
                    <Tag type='pro'/>
                    <h3 class='activity-title'>College Students Innovation and Entrepreneurship Competition</h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b> Vue.js, E-Charts, Elasticsearch, Postman, Python Crawler</p>
                        <p class='activity-content'>Nowadays, with the hot trend of artificial intelligence, more and more researchers focus on the research of algorithm.</p>
                        <p class='activity-content'>
                            This is a project that use python crawler to obtains information about the algorithm-related papers in the top-level conferences from the thesis website. Through the project's website, we can directly query the topics, dates, application scenarios and other information of these papers.    
                        </p>
                        <el-divider></el-divider>
                        <p><b>Part of Project Experience:</b></p>
                        <ul class='activity-content'>
                            <li>Obatined related information with web crawler designed by Python. Use the appropriate python crawler framework and tools for different pages.</li>
                            <li>Stored data in the MongoDB database and implemented data visualization with E-Charts</li>
                            <li>Completed front-end engineering with Vue.js and Axios. Completed back-end engineering with Java and Elasticsearch.</li>
                        </ul>
                    </div>
                </el-card>
            </el-timeline-item>


            <el-timeline-item timestamp="2019-06 to 2019-09" type="warning" placement="top">
                <el-card>
                    <Tag type='pro'/>
                    <h3 class='activity-title'>Arduino development with Mega Board</h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b> Arduino, C, Mega Board</p>
                        <p class='activity-content'>This is a programming projects using the Arduino language based on C. I built a guide car which assembled with several different sensors like bluetooth sensor, ultrasonic sensor, etc.</p>
  
                        <el-divider></el-divider>
                        <p><b>Part of Project Experience:</b></p>
                        <ul class='activity-content'>
                            <li>Complete the car running logic and other code production by arduino language</li>
                            <li>Designed an android app used to remotely control the car via bluetooth.</li>
                        </ul>
                    </div>
                </el-card>
            </el-timeline-item>
        

            <el-timeline-item timestamp="2019-01 to 2019-02" type="warning" placement="top">
                <el-card>
                    <Tag type='oth'/>
                    <h3 class='activity-title'>Exchange program to Queen Mary University of London </h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b> Exchange program, Queen Mary</p>
                        <p class='activity-content'>Communicated and studied with students majoring in computer science.</p>
                        <p class='activity-content'>Get used to the communication and study in English environment.</p>
                    </div>
                </el-card>
            </el-timeline-item>



        </el-timeline>

</div>
</template>

<script>
import Tag from './components/tag.vue';

export default {
    components:{
      Tag
    },
    data() {
      return {
        reverse: false,
        activities:this.activities,
        activities_e:this.activities_e,
      };
    },
    mounted(){
        this.$http.get('../../static/data/experience.json')
        .then((res)=>{
            //console.log(res);
            this.reverse = false;
            this.activities=res.data.contents;
        });
        this.$http.get('../../static/data/experience_english.json')
        .then((res)=>{
            //console.log(res);
            this.reverse = false;
            this.activities_e=res.data.contents;
        });
    },
    computed:{
        language:function(){
            return this.$store.state.language
        }
    }
  };
</script>

<style scoped>
.block{
    box-sizing: border-box;
    text-align:left;
    padding:20px;
}

.radio{
    margin-top:5%;
    margin-bottom: 5%;
    font-family: Microsoft JhengHei;
}
.divider{
        background-color: #FF4F4F;
        height: 4px;
        width: 230px;
        margin-top: -18px;
    }
.block .activity-content{
    font-size:14px;
    line-height:24px;

}
.activity-content li{
    list-style-type: disc;
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

.sub-activity-title{
    color:#999;
    font-style: italic;
}

</style>