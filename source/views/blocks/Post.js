

const Post = `
    <div id="change" class="post">
        <h2>{{ title }}</h2>
        <ul style="list-style-type:none; background: #e1e1ff; padding: 5px">
            <li v-for="abc in listBlogs"><a v-on:click="scrollToBottom($event,'block'+abc.number)" v-bind:href="'#'+abc.number">{{ abc.question }} - Giảng viên: {{ abc.author }} </a></li>
        </ul>
        <div v-for="abc in listBlogs" v-bind:id="'block'+abc.number">
            <h4 v-bind:id="abc.number" >{{ abc.question }}</h4>
            <span class="label label-danger">Công nghệ sinh học</span> <span class="label label-primary">{{ abc.subject }}</span>
            <p style="text-align:right;">Câu hỏi của giảng viên: {{ abc.author }}</p>
            <p style="text-align:justify; overflow: auto; background-color: #e7e6e6; padding: 5px;" v-html="abc.answer"></p>
            <br><br>
        </div>
    </div> 
`

export default Post; 