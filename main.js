
try {
    var menubarT = MenuBar;
    var PostT = Post;
    var dataT = data;
    var titleT = title;
} catch (error) {
    window.location.href=url;
}


var menubarBlock = new Vue({
    el: '#menubar',
    methods: {
        MenuBarF(topic) {
            const ul = document.getElementById('navbar');
            const listItems = ul.getElementsByTagName('li');
                
            // Loop through the NodeList object.
            for (let i = 0; i <= listItems.length - 1; i++) {
                var url_imm = new URL('https://'.concat(listItems[i].getElementsByTagName('a')[0].getAttribute('href')));
                var topic_imm = url_imm.searchParams.get("topic");
                if (topic_imm == topic) {
                    listItems[i].setAttribute("class", 'active');
                } else {
                    listItems[i].removeAttribute("class");
                }
            }
        }
    },
    template: menubarT
})
menubarBlock.MenuBarF(topic);

var PostBlock = new Vue({
    el: '#post',
    template: PostT,
    data: {
        title:titleT,
        listBlogs: dataT
    },
    methods: {
        scrollToBottom(e,id) {
            console.log(id)
            e.preventDefault();
            var element = document.getElementById(id);

            // var top = element.offsetTop;
            var y = element.offsetTop; 
            // console.log(y)
            // window.scrollTo(0, top);
            // element.scrollIntoView({behavior: "smooth", block: "end"});
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }
})

