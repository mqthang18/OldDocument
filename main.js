
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
    template: menubarT
})


try {MenuBarF(topic);} 
catch (error) {
    window.location.href=url;
}

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

