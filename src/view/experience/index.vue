<template>
    <div class="block">
        <div class='sub-title'>
            {{language=='Chinese'?'个人经历':'EXPERIENCE'}}
        </div>

        <!-- <div class="divider"></div> -->
        <div class="radio" v-if='language=="Chinese"'>
            <b>排序：</b>
            <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
            </el-radio-group>
            <span style='margin-left:3em;font-weight:bold'>筛选:</span><span style='margin-left:5px'></span>
            <el-checkbox v-model="wor" style='color:#F56C6C;font-weight:bold'>Work</el-checkbox>
            <el-checkbox v-model="lab" style='color:#409EFF;font-weight:bold'>Lab</el-checkbox>
            <el-checkbox v-model="pro" style='color:#E6A23C;font-weight:bold'>Project</el-checkbox>
            <el-checkbox v-model="oth" style='color:#67C23A;font-weight:bold'>Other</el-checkbox>
        </div>

        <div class="radio" v-if='language=="English"'>
            <b>Sort:</b><span style='margin-left:5px'></span>
            <el-radio-group v-model="reverse">
            <el-radio :label="true">Reverse</el-radio>
            <el-radio :label="false">Positive</el-radio>
            </el-radio-group>
            <span style='margin-left:3em;font-weight:bold'>Filter:</span><span style='margin-left:5px'></span>
            <el-checkbox v-model="wor" style='color:#F56C6C;font-weight:bold'>Work</el-checkbox>
            <el-checkbox v-model="lab" style='color:#409EFF;font-weight:bold'>Lab</el-checkbox>
            <el-checkbox v-model="pro" style='color:#E6A23C;font-weight:bold'>Project</el-checkbox>
            <el-checkbox v-model="oth" style='color:#67C23A;font-weight:bold'>Other</el-checkbox>
        </div>

        <!---------------------------------------------------------------->

         <el-timeline :reverse="reverse" v-if='language=="Chinese"'>
            


            <el-timeline-item timestamp="2020-03 to 2020-11" type="primary" placement="top" v-if="lab">
                <el-card>
                    <Tag type='lab'/>
                    <h3 class='activity-title'>统计与数据科学院,耶鲁大学 </h3>
                    <div>
                        <p class='sub-activity-title'><b>关键词:</b> Biology, Python, Front-end, R Language</p>
                        
                        <p class='activity-content'></p>
                        <el-divider></el-divider>
                        <p><b>工作经历:</b></p>
                        <p><b><i>I SCAN-ATAC 项目</i></b></p>
                        <ul class='activity-content'>
                            <li>阅读了R语言wrswoR package的源代码，并且使用python和C++复现了其中的expj和expjs算法</li>
                            <li>通过算法优化将时间复杂度从O(n^2)减少至O(nlogn). 通过这种方式，我们对于100个细胞的取样用时从50分钟减少到了1分钟.</li>
                            <li>使用Vue.js和Element UI完成了项目主页的设计.</li>
                            <li>项目主页链接: <a href='http://www.scan-atac-sim.gersteinlab.org/#/' target='blank'>http://www.scan-atac-sim.gersteinlab.org/#/</a></li>
                            <li>项目论文链接:<a href='https://www.biorxiv.org/content/10.1101/2020.05.29.123638v1.abstract' target='blank'>SCAN-ATAC Sim: a scalable and efficient method to simulate single-cell ATAC-seq from bulk-tissue experiments.</a></li>
                        </ul>

                        <p><b><i>II PARSE 项目</i></b></p>
                        <ul class='activity-content'>
                            <li>负责部分论文的写作. 自学了相关生物学知识,例如GWAS,LD,转录调控等.</li>
                            <li>使用Github开源项目GIVE Browser实现了GWAS数据的可视化.</li>
                            <li>使用Python Tornato和Django框架完成了项目主页.</li>
                            <li>项目主页链接: <a href='http://parse.gersteinlab.org/' target='blank'>http://parse.gersteinlab.org/</a></li>   
                        </ul>


                    </div>
                </el-card>
            </el-timeline-item>


            <el-timeline-item timestamp="2020-03 to 2020-11" type="primary" placement="top" v-if="lab">
                <el-card>
                    <Tag type='lab'/>
                    <h3 class='activity-title'>清华大学, 计算机科学院, KEG 实验室</h3>
                    <div>
                        <p class='sub-activity-title'><b>关键词:</b> Active Learning, EM, Python Crawler</p>
                        
                        <p class='activity-content'></p>
                        <el-divider></el-divider>
                        <p><b>工作经历:</b></p>
                        <ul class='activity-content'>
                            <li>使用Python爬虫技术从ABC.news等网站摘取新闻的标题、内容、日期等信息. 并将这些信息以Json形式存储到txt文件之中.</li>
                            <li>使用Python来实现论文中的EM算法，并且使用这个算法来统计招募的标注人员的标注正确率.</li>
                            <li>完成了MTurk网站前端网页的配置.</li>
                        </ul>
                    </div>
                </el-card>
            </el-timeline-item>


            <el-timeline-item timestamp="2019-07 to 2019-10" type="danger" placement="top" v-if="wor">
                <el-card>
                    <Tag type='wor'/>
                    <h3 class='activity-title'>字节跳动, 懂车帝部门, 前端实习生 </h3>
                    <div>
                        <p class='sub-activity-title'><b>关键词:</b> Front-end, Vue.js, Element UI, git</p>
                        <p class='activity-content'>
                            我于2019年的暑期以前端实习生的身份加入到字节跳动懂车帝部门进行工作, 在实习的过程中, 我负责车型库MIS系统、供应商订购系统等的页面实现. 除了日常完成产品的需求外, 还将部分代码从旧的框架迁移到了新框架之中,
                            通过这次实习，我成功掌握了许多前端方向的知识, 熟悉了前后端的交互, 并且提升了我的工程能力并改良了我的代码习惯.
                        </p>
                        <el-divider></el-divider>
                        <p><b>项目经历:</b></p>
                        <p><b><i>I 车型库MIS管理系统</i></b></p>
                        <ul class='activity-content'>
                            <li>使用Vue.js和Element UI完成了MIS系统的各项页面需求.</li>
                            <li>完成产品部门的需求, 并于后端同事合作完成前后端之间数据的传输.</li>
                            <li>与同事合作修改了一个与汽车颜色相关的接口, 该接口的数据结构不够合理导致包含了过多冗余的信息, 我们剔除了冗余的信息并且修改检查了每个用到该接口的页面.</li>
                            <li>完成了几个较大程度的更新, 并且将页面打开时间从分钟级减少到了秒级 to seconds</li>
                        </ul>
                        <p><b><i>II MIS管理系统框架迁移</i></b></p>
                        <ul class='activity-content'>
                            <li>项目中一些网页使用了一位前辈自创的框架, 然而这个框架没有相关的文档, 导致与这些网页有关的产品需求难以进行.</li>
                            <li>研究了这个框架, 并且将部分使用该框架的网页迁移到目前使用的Vue框架. 通过这种方式, 随后的产品需求可以更方便的得到满足.</li>
                        </ul>
                        <p><b><i>III 供应商手机端预定网页</i></b></p>
                    </div>
                </el-card>
            </el-timeline-item>

            <el-timeline-item timestamp="2019-06 to 2020-06" type="warning" placement="top" v-if="pro">
                <el-card>
                    <Tag type='pro'/>
                    <h3 class='activity-title'>大学生创新创业竞赛</h3>
                    <div>
                        <p class='sub-activity-title'><b>关键词:</b> Vue.js, E-Charts, Elasticsearch, Postman, Python Crawler, Data Visualization</p>
                        <p class='activity-content'>如今, 伴随着人工智能研究领域的愈发深入, 越来越多的人开始关注起算法方面的学习和研究.</p>
                        <p class='activity-content'>
                            这个项目使用Python爬虫从论文网站抓取与算法有关的论文以及作者、摘要、论文年份等相关信息. 通过我们的项目网站, 我们可以直观了解到近几年算法研究的相关趋势. 例如同一算法在不同年份的热度趋势, 或者查询同一年分里最热门的算法
                                              </p>
                        <el-divider></el-divider>
                        <p><b>项目经历:</b></p>
                        <ul class='activity-content'>
                            <li>使用Python爬虫从顶会论文网站中爬取相关信息.</li>
                            <li>将数据存储到MongoDB之中, 并且使用E-Charts完成数据的可视化. </li>
                            <li>使用Vue.js axios等技术完成前端网页的制作.</li>
                            <li>使用Elasticsearch Java等技术完成后端部分的制作.</li>
                        </ul>
                    </div>
                </el-card>
            </el-timeline-item>


            <el-timeline-item timestamp="2019-06 to 2019-09" type="warning" placement="top" v-if="pro">
                <el-card>
                    <Tag type='pro'/>
                    <h3 class='activity-title'>基于Mega板的Arduino导盲犬</h3>
                    <div>
                        <p class='sub-activity-title'><b>关键词:</b> Arduino, C, Mega Board</p>
                        <p class='activity-content'>这是一个使用基于C语言的Arduino语言的编程项目, 项目中我们使用Mega板来构建了一个装载多种传感器( 蓝牙传感器, 红外线传感器, 温度传感器等... )的导盲犬.</p>
  
                        <el-divider></el-divider>
                        <p><b>项目经历:</b></p>
                        <ul class='activity-content'>
                            <li>使用Arduino语言完成了导盲犬移动和转向等的逻辑编程.</li>
                            <li>设计了一个安卓上使用的app来通过蓝牙远程控制导盲犬.</li>
                        </ul>
                    </div>
                </el-card>
            </el-timeline-item>
        

            <el-timeline-item timestamp="2019-01 to 2019-02" type="success" placement="top" v-if="oth">
                <el-card>
                    <Tag type='oth'/>
                    <h3 class='activity-title'>伦敦玛丽女王大学交换学习 </h3>
                    <div>
                        <p class='sub-activity-title'><b>关键词:</b> Exchange program, Queen Mary</p>
                        <p class='activity-content'>公费赴英国伦敦玛丽女王进行交流学习, 与当处的计算机科学专业的学生进行交流讨论.</p>
                        <p class='activity-content'>熟悉了英语环境的交流以及学习生活.</p>
                    </div>
                </el-card>
            </el-timeline-item>


        </el-timeline>











        <el-timeline :reverse="reverse" v-if='language=="English"'>

            <el-timeline-item timestamp="2021-08 to 2022-06" type="danger" placement="top" v-if="wor">
                <el-card>
                    <Tag type='wor'/>
                    <h3 class='activity-title'>TikTok, ByteDance Ltd. </h3>
                    <h3 class='activity-title'><i>Full-time Software Development Engineer</i></h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b> Front-End, Full-Stack, Node.js, React.js, Cross-Platform, To Client, Mobile Application Development</p>
                        <p class='activity-content'>
                            In August 2021, I started a full-time job in the TikTok R&D team. In this year's work, my main business is the video playback page. This project is one of the most important projects of the TikTok live broadcast team last year. The purpose is to open up the market of TikTok's medium and long video playback platform.
                        </p>
                        <p class='activity-content'>
                            As a project running on the mobile phone, the page experience developed using JS is generally weaker than that developed using Native. So last year I made a lot of effort and optimization, and finally made the page experience comparable to Native development.
                        </p>
                        <el-divider></el-divider>
                        <p><b>Part of Project Experience:</b></p>
                        <p><b><i>Tiktok Mobile Application Live Broadcast Product (To Client)</i></b></p>
                        <ul class='activity-content'>
                            <li>Led the creation of Video Playback webpage with 2,000,000+ daily Page Views(PV) by cross-platform (Android and IOS) technology based on React.js. With a First Paint Time (FP) of less than 50 ms and a Time to Interactive (TTI) of less than 100 ms, the page usage experience is comparable to native development.</li>
                            <li>Designed several H5 interactive components with React.js, allows streamers and users to interact with each other. Utilized in six S-Level activities with 30+% interactive rate, and 300,000+ daily Page Views(PV).</li>
                            <li>Designed and implemented a centralized program distribution page. Increased the viewing volume of programs by 2+% and the repeat viewing rate of viewers by 10+%.</li>
                            <li>Implemented a general H5 video playback module. Allow non-technical employees to configure H5 pages to generate event posters through a low-code platform. It has been applied to 20+ activities and has 3,000,000+ Page Views.</li>
                            <li>Innovated optimization of projects and organized the AB experiment. Ultimately lead to a 40% decrease in FP and TTI.</li>
                            <li>Initiated migration of codebase to monorepo, developers only need to maintain one repository, the code deployment process was 50% faster, and enhance the manpower of 20%.</li>
                            <li>Organized online Oncall of websites and successfully handled 70+ on-calls totally, with a 100% favorable rate.</li>
                        </ul>
    
                    </div>
                </el-card>
            </el-timeline-item>


            <el-timeline-item timestamp="2021-04 to 2021-08" type="danger" placement="top" v-if="wor">
                <el-card>
                    <Tag type='wor'/>
                    <h3 class='activity-title'>TikTok, ByteDance Ltd. </h3>
                    <h3 class='activity-title'><i>Front-End Software Development Engineer Intern</i></h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b> Front-End, Vue.js, Node.js, React.js, To Business</p>
                        <p class='activity-content'>
                            In April 2021, I joined the R&D team of TikTok as an intern. During the internship, I was mainly responsible for the research and development of the background management system of the live broadcast team. This is a To Business project, and the main target users are internal employees. Internal employees can modify the display content on the TikTok mobile app by configuring in this platform.
                        </p>
                        <p class='activity-content'>
                            In this project, we chose a more appropriate RPC(Remote Procedure Call) method for data request and rendering. We used React.js to implement Presentation Layer, and Node.js is used to implement Business Layer.
                        </p>
                        <el-divider></el-divider>
                        <p><b>Part of Project Experience:</b></p>
                        <p><b><i>I Starfish Management Platform Programming (To Business)</i></b></p>
                        <ul class='activity-content'>
                            <li>Developed the MIS system based on React.js and Node.js.</li>
                            <li>Complete 13 product iteration requirements and 3 performance improvement requirements using React.js and Node.js in three months.</li>
                            <li>Use Node.js's ReadStream module, allows users to configure entries by uploading a CSV form. Enhance the efficiency of operation staff by 25%. Save five or more manpower per week.</li>
                            <li>Write SOP document, guide code release standard process for new employees.</li>
                            <li>Initiated an A/B experimentation and recovered experimental data. Optimized user experience.</li>
                        </ul>
    
                    </div>
                </el-card>
            </el-timeline-item>

            <el-timeline-item timestamp="2020-03 to 2020-11" type="primary" placement="top" v-if="lab">
                <el-card>
                    <Tag type='lab'/>
                    <h3 class='activity-title'>Department of Statistics and Data Science, Yale University </h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b> Biology, Python, Front-end, R Language</p>
                        
                        <p class='activity-content'></p>
                        <el-divider></el-divider>
                        <p><b>Part of Project Experience:</b></p>
                        <p><b><i>I SCAN-ATAC Project</i></b></p>
                        <ul class='activity-content'>
                            <li>Read the source code of the R language package wrswoR, use C++ and Python to implement the code.</li>
                            <li>Optimized the algorithms and reduced the time complexity from O(n^2) to O(nlogn). In this way, the sampling rate for 100 cells has been reduced from 50 minutes to 1 minute.</li>
                            <li>Completed the design of the project webpage using Vue.js and Element UI</li>
                            <li>Project web link: <a href='http://www.scan-atac-sim.gersteinlab.org/#/' target='blank'>http://www.scan-atac-sim.gersteinlab.org/#/</a></li>
                            <li>Project paper link:<a href='https://www.biorxiv.org/content/10.1101/2020.05.29.123638v1.abstract' target='blank'>SCAN-ATAC Sim: a scalable and efficient method to simulate single-cell ATAC-seq from bulk-tissue experiments.</a></li>
                        </ul>

                        <p><b><i>II PARSE Project</i></b></p>
                        <ul class='activity-content'>
                            <li>Responsible for the writing of part of the content of the thesis and self-learned biology related knowledge, such as GWAS, SNP, transcription regulation etc.</li>
                            <li>Realized the visualization of GWAS data by using the open source project GIVE browser</li>
                            <li>Completed the project page design using Python Django framework and Tornato framework</li>
                            <li>Project web link: <a href='http://parse.gersteinlab.org/' target='blank'>http://parse.gersteinlab.org/</a></li>   
                        </ul>


                    </div>
                </el-card>
            </el-timeline-item>


            <el-timeline-item timestamp="2020-03 to 2020-11" type="primary" placement="top" v-if="lab">
                <el-card>
                    <Tag type='lab'/>
                    <h3 class='activity-title'>KEG Lab Intern, Computer Science Department, Tsinghua University</h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b> Active Learning, EM, Python Crawler</p>
                        
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


            <el-timeline-item timestamp="2019-07 to 2019-10" type="danger" placement="top" v-if="wor">
                <el-card>
                    <Tag type='wor'/>
                    <h3 class='activity-title'>Intern, Front-end Department, ByteDance Ltd. </h3>
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
        
        

            <el-timeline-item timestamp="2019-06 to 2020-06" type="warning" placement="top" v-if="pro">
                <el-card>
                    <Tag type='pro'/>
                    <h3 class='activity-title'>College Students Innovation and Entrepreneurship Competition</h3>
                    <div>
                        <p class='sub-activity-title'><b>Key Words:</b>  Data Visualization, Vue.js, E-Charts, Elasticsearch, Postman, Python Crawler</p>
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


            <el-timeline-item timestamp="2019-06 to 2019-09" type="warning" placement="top" v-if="pro">
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
        

            <el-timeline-item timestamp="2019-01 to 2019-02" type="success" placement="top" v-if="oth">
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
        lab:true,
        wor:true,
        pro:true,
        oth:true,
      };
    },
    mounted(){
        // this.$http.get('../../static/data/experience.json')
        // .then((res)=>{
        //     //console.log(res);
        //     this.reverse = false;
        //     this.activities=res.data.contents;
        // });
        // this.$http.get('../../static/data/experience_english.json')
        // .then((res)=>{
        //     //console.log(res);
        //     this.reverse = false;
        //     this.activities_e=res.data.contents;
        // });
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