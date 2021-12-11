
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


var PostBlock = new Vue({
    el: '#post',
    template: PostT,
    data: {
        title:titleT,
        listBlogs: dataT
    }
})

// var app = new Vue({
//     el: '#app',
//     template: data
// })