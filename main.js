import MenuBar from "./source/views/blocks/MenuBar.js";
import Post from "./source/views/blocks/Post.js";

import {TitleCHSH, DataCHSH} from './source/views/pages/CHSH/data.js';
import {TitleCNLM, DataCNLM} from './source/views/pages/CNLM/data.js';
import {TitleCNTP, DataCNTP} from './source/views/pages/CNTP/data.js';
import {TitleDTVSV, DataDTVSV} from './source/views/pages/DTVSV/data.js';
import {TitleVSTS, DataVSTS} from './source/views/pages/VSTS/data.js';
import {TitleVSVTY, DataVSVTY} from './source/views/pages/VSVTY/data.js';
import { TitleVSVYH, DataVSVYH } from "./source/views/pages/VSVYH/data.js";
var menubarBlock = new Vue({
    el: '#menubar',
    methods: {
        MenuBarF(topic) {
            const ul = document.getElementById('navbar');
            const listItems = ul.getElementsByTagName('li');
             // Loop through the NodeList object.
            for (let i = 0; i <= listItems.length - 1; i++) {
                if (topic==listItems[i].getAttribute('id')) {
                    console.log(topic)
                    PostBlock.title = eval('Title'+topic);
                    PostBlock.listBlogs = eval('Data'+topic)
                    listItems[i].setAttribute("class", 'active');
                } else {
                    listItems[i].removeAttribute("class");
                }
            }           
        }
    },
    template: MenuBar
})


var PostBlock = new Vue({
    el: '#post',
    template: Post,
    data: {
        title:TitleCHSH,
        listBlogs: DataCHSH
    },
    methods: {
        scrollToBottom(e,id) {
            console.log(id)
            e.preventDefault();
            var element = document.getElementById(id);
            var y = element.offsetTop; 
            window.scrollTo({top: y, behavior: 'smooth'});
        },
        ChangeIDTemplate() {
            $('#change').attr('id', 'post');
        }
    }
})

PostBlock.ChangeIDTemplate();
