const MenuBar = `
    <div class="col-sm-3 sidenav">
        <h4>Ôn thi học kì</h4>
        <ul id="navbar" class="nav nav-pills nav-stacked">
            <li class="active"><a href="index.html?topic=CHSH">Chuyển hóa sinh học</a></li>
            <li><a href="index.html?topic=CNLM">Công nghệ lên men</a></li>
            <li><a href="index.html?topic=CNTP">Công nghệ thực phẩm</a></li>
            <li><a href="index.html?topic=DTVSV">Di truyển vi sinh vật</a></li>
            <li><a href="index.html?topic=VSTS">Vi sinh thủy sản</a></li>
            <li><a href="index.html?topic=VSVTY">Vi sinh vật thú y</a></li>
            <li><a href="index.html?topic=VSVYH">Vi sinh vật y học</a></li>
        </ul>
        <br>
        <!-- <div class="input-group">
        <input type="text" class="form-control" placeholder="Search Blog..">
        <span class="input-group-btn">
            <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
            </button>
        </span>
        </div> -->
    </div>
`

function MenuBarF(topic) {
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
        // console.log (listItems[i].getElementsByTagName('a')[0].getAttribute('href'));
        // console.log(topic_imm)
    }
}
