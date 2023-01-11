

const MenuBar = `
    <div class="col-sm-3 sidenav">
        <h4>Ôn thi học kì</h4>
        <ul id="navbar" class="nav nav-pills nav-stacked">
            <li id="CHSH" class="active"><a href="#" v-on:click="MenuBarF('CHSH')">Chuyển hóa sinh học</a></li>
            <li id="CNLM"><a href="#" v-on:click="MenuBarF('CNLM')">Công nghệ lên men</a></li>
            <li id="CNTP"><a href="#" v-on:click="MenuBarF('CNTP')">Công nghệ thực phẩm</a></li>
            <li id="DTVSV"><a href="#" v-on:click="MenuBarF('DTVSV')">Di truyển vi sinh vật</a></li>
            <li id="VSTS"><a href="#" v-on:click="MenuBarF('VSTS')">Vi sinh thủy sản</a></li>
            <li id="VSVTY"><a href="#" v-on:click="MenuBarF('VSVTY')">Vi sinh vật thú y</a></li>
            <li id="VSVYH"><a href="#" v-on:click="MenuBarF('VSVYH')">Vi sinh vật y học</a></li>
        </ul>
        <br>
    </div>
`

export default MenuBar;