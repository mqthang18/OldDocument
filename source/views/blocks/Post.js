const Post = `
    <div class="post">
        <h2>{{ title }}</h2>
        <ul style="list-style-type:none; background: #e1e1ff; padding: 5px">
            <li v-for="abc in listBlogs">{{ abc.question }} - Giảng viên: {{ abc.author }} </li>
        </ul>
        <div v-for="abc in listBlogs">
            <h4>{{ abc.question }}</h4>
            <span class="label label-danger">Công nghệ sinh học</span> <span class="label label-primary">{{ abc.subject }}</span>
            <p style="text-align:right;">Câu hỏi của giảng viên: {{ abc.author }}</p>
            <p style="text-align:justify; overflow: auto; background-color: #e7e6e6; padding: 5px;" v-html="abc.answer"></p>
            <br><br>
        </div>
    </div> 
`