const title = 'Vi sinh vật thủy sản'

const data = [
    // C.Nguyệt Câu 1
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '1. Hãy phân biệt prebiotic, probiotic, synbiotic? Cho ví dụ về probiotic, tác dụng của prebiotic và probiotic trong nuôi trông thủy sản?',
        'author': 'Cô Nguyệt',
        'answer': `
            <table>
                <tr>
                    <td></td>
                    <td class="obj">Probiotic</td>
                    <td class="obj">Prebiotic</td>
                    <td class="obj">Synbiotic</td>
                </tr>
                <tr>
                    <td class="obj">Khái niệm</td>
                    <td class="obj">Là lợi khuẩn sống</td>
                    <td class="obj">Là hợp chất tiền sinh học, thành phần không tiêu hóa được</td>
                    <td class="obj">Là sự kết hợp của Prebiotic và probiotic</td>
                </tr>
                <tr>
                    <td class="obj">Tác dụng</td>
                    <td class="obj">Ngăn chặn bám dính của tác nhân gây bệnh và giảm lượng chất độc của chúng trên biểu mô ruột</td>
                    <td class="obj">Làm dày niêm mạc thành ruột và là thức ăn cho lợi khuẩn</td>
                    <td class="obj">Giúp cơ thể hình thành một hệ vi sinh hùng hậu, mạnh mẽ và hoạt động hiệu quả</td>
                </tr>
            </table>
            <p>Ví dụ</p>
            <h3>Ảnh hưởng tiêu hóa chất béo</h3>
            <p>Bacillus sp tăng cường hoạt động enzyme lipase trên tôm</p>
            <p>Fructooligosaccharides (FOS) và Mannanoligosaccharides (MOS)tăng hoạt động enzyme lipase</p>
            <p>Enzyme lipase sẽ gia tăng cao nhất khi bổ sung synbiotics chứa các thành phần trên</p>
        `,
    },
    // C.Nguyệt Câu 2
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '2. Việc sử dụng chất kháng sinh trong nuôi trồng thủy sản có được khuyến khích trong giai đoạn hiện nay không? Chất kháng sinh ảnh hưởng như thế nào đến việc nuôi trồng thủy sản?',
        'author': 'Cô Nguyệt',
        'answer': `
            <p>Việc sử dụng kháng sinh không được khuyến khích</p>
            <p>Nguy cơ: VSV kháng kháng sinh (1); Kháng sinh diệt cả VSV có lợi và hại (2) => Mật độ VSV có lợi < mật độ VSV có hại => Các loại có thể bệnh càng thêm bệnh</m></p>
            <p>Gây ô nhiễm môi trường do lượng lớn chất thải từ vật nuôi trồng có chứa các tác nhân gây bệnh và các loại gen kháng thuốc gây ra.</p>
            <p>Làm cho hệ vi sinh có sẵn ở các vật nuôi và con người kháng kháng sinh khi dùng thực phẩm tồn dư => Kháng sinh tổng mất tác dụng</p>
        `
    },
    //  C.Nguyệt Câu 3
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '3. Chế phẩm sinh học là gì? Các chế phẩm sinh học ảnh hưởng như thế nào đến việc nuôi trồng thủy sản?',
        'author': 'Cô Nguyệt',
        'answer': `
            <p>Theo Fuller (1989), chế phẩm sinh học (probiotics) là sự bổ sung một loại thức ăn VSV sống có tác dụng có ích lợi cho vật chủ qua việc cải tiến cân bằng hệ vi sinh trong đường ruột của vật chủ. Trong nuôi trồng thủy sản. Chế phẩm sinh học thường được dùng như một phương tiện kiểm soát dịch bệnh, bổ sung các chất kháng khuẩn.</p>
            <p>Mục đích dùng probiotics: để loại trừ các VK gây bệnh bằng quá trình cạnh tranh. Nó làm tằng các lợi khuẩn và giảm các VK có hại. Ngoài ra, nó còn là chế phẩm xử lý môi trường, giúp cho MT ao nuôi thuận lợi cho sự phát triển của tôm cá.</p>
            <p>Các chế phẩm sinh học giúp</p>
            <p>Khống chế sinh học, tăng cường sức khỏe và ngăn chặn mầm bệnh</p>
            <p>Những lợi khuẩn trong chế phẩm có thể sinh chất kháng khuẩn để tiêu diệt các mầm bệnh trong đường ruột, bằng cách diệt các khuẩn gây bệnh bám trên thành ruột vật chủ => một rào cản hữu hiệu ngăn chặn sự phát triển của mầm bệnh.</p> 
            <p>Cạnh tranh vị trí bám và thức ăn trong thành ruột với các vi sinh gây bệnh, không cho chúng bám vào cơ thể vật nuôi, ngăn ngừa dịch bệnh, đảm bảo sức khỏe vật nuôi và hệ miễn dịch => giúp vật nuôi phát triển khỏe hơn.</p>
            <p>Cải thiện hệ tiêu hóa: nguồn cung cấp dinh dưỡng và enzyme cho hệ tiêu hóa vật nuôi</p>
            <p>Xử lí sinh học, cải thiện môi trường nước ngăn ngừa và giảm thiểu ô nhiễm môi trường trong ao nuôi.</p>
            <span class="red">Các VSV có lợi giúp phân hủy các CHC trong nước giải phóng acid amin, glucose, cung cấp thức ăn VSV có lợi, giảm thiểu thành phần nito vô cơ như: amoni, nitrit, giảm mùi hôi thối, cải thiện chất lượng nước. Góp phần làm giảm thiểu việc hình thành các lớp bùn và chất cặn bã, giảm các khí độc hại như H2S, CH4, CO2 nhờ vậy chất lượng nước trong ao nuôi được cải thiện, làm tăng số lượng của động vật phù du, giảm mùi hôi, từ đó tăng sản lượng nuôi trồng, đảm bảo sản xuất sản phẩm an toàn cho sức khỏe con người và góp phần phát triển nghành nuôi trồng thủy sản bền vững.</span>
        `
    },
    //  C.Nguyệt Câu 4
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '4. Sự hiện diện của tảo trong môi trường nuôi trồng thủy sản có những mặt tích cực và tiêu cực gì? Ví dụ?',
        'author': 'Cô Nguyệt',
        'answer': `
            <p>Tích cực</p>
            <ul>
                <li>Nguồn thức ăn</li>
                <li>Nguồn cung O2</li>
                <li>Chất chỉ thị môi trường</li>
                <li>Máy lọc tự nhiên khổng lồ</li>
                <li>Tảo tốt hạn chế sự hình thành (tảo, rong, rêu) độc.
                    <br>
                    Làm phân giải CHC trong nước diễn ra chậm hơn, khí độc sinh ra ít hơn.</li>
            </ul>
            <p>Tiêu cực</p>
            <ul>
                <li>Tảo nở hoa, nhờn nước, sinh nhiều chất độc - VD. tảo lam, tảo giáp, tảo mắt, Euglena sanguinea, E. granulata</li>
            </ul>
        `
    },
    //  C.Nguyệt Câu 5
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '5. Tại sao nên sử dụng chế phẩm sinh học trong bể nuôi trồng thủy sản. Ví dụ?',
        'author': 'Cô Nguyệt',
        'answer': `
            <p>Lợi ích</p>
            <ul>
                <li>
                    <p>Phân hủy CHC trong nước, hấp thu xác tảo chết và giảm lớp bùn đáy ao. Giảm khí độc (NH3, H2S,...) trong môi trường nước</p>
                    <p>VD:</p>
                    <ul>
                        <li><span class="red">Biofloc Technology: Phân hủy chất thải, giải phóng khí độc, ổn định màu nước</span></li>
                        <li>Bio water: chứa các loại VS xử lý, cải tạo môi trường nuôi trồng thủy sản, có tác dụng phân hủy động thực vật, thức ăn dư. ổn định màu nước, giải phóng khí độc</li>
                        <li><span class="red">EMC: là chế phẩm làm sạch nước và nền đáy ao nuôi thủy sản</span></li>            
                    </ul>
                </li>
                <li>
                    <p>Tăng cường hệ miễn dịch</p>
                    <p>VD</p>
                    <ul>
                        <li><span class="red">Lactobacillus plantarum giúp tăng cường hệ miễn dịch và tác động đến gen của tôm chân trắng.</span></li>
                        <li><span class="red">Pediococcus acidilactici hiệu quả chống OXH và thừa O2 trong tế bào tôm chân trắng khi thử nghiệm với V. nigripulchiritudo</span></li>                
                    </ul>
                </li>
                <li>
                    <p>Ổn định pH, màu nước do chế phẩm sinh học hấp thu chất dinh dưỡng hòa tan trong nước hạn chế tảo phát triển, giảm chi phí xử lí nước trong quá trình nuôi làm tăng O2 hòa tan trong nước giúp động vật thủy sản khỏe mạnh và phát triẻn</p>
                    <p>VD</p>
                    <ul>
                        <li><span class="red">Rhodobacter: SV tự dưỡng, có tác dụng chuyển hóa CO2 => O2 mà không cần quang hợp Tảo, giúp bổ sung O2</span></li>
                        <li><span class="red">Bacillus: cân bằng MT ao nuôi và tăng hệ miễn dịch Tôm, cá.</span></li>
                    </ul>
                </li>
                <li>
                    <p>Khi trộn chế phẩm sinh học vào thức ăn có tác dụng hỗ trợ tiêu hóa, giúp hấp thụ tốt thức ăn, tăng hiệu quả sử dụng thức ăn và thúc đẩy tăng trưởng</p>
                    <p><span class="red">VD: Lactic có tác dụng phòng ngừa ngăn chặn rối loạn tiêu hóa, hệ VS đường ruột, hạn chế dị ứng cho vật nuôi.</span></p>
                </li>
            </ul>
        `
    },
    //  C.Nguyệt Câu 6
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '6. Nêu vai trò và chức năng của VSV có ích (BMs) trong nuôi trồng thủy sản. Ví dụ minh họa?',
        'author': 'Cô Nguyệt',
        'answer': `
            <ul>
                <li>
                    <p>Tăng nhanh lợi khuẩn ao, gây tảo nhanh, không nhớt đáy, làm màu nước luôn ổn định</p>
                    <p>VD</p>
                    <p>Chế phẩm EM-aqua với sự hiện diện của Bacillus subtilis, Bacillus amyloquefeciens thúc đẩy phân hủy hữu cơ, ngừa tảo bùng phát, giảm bùn tích tụ</p>
                </li>
                <li>
                    <p>Giảm hàm lượng khí độc NH3, NO2, H2S trong ao nuôi</p>
                    <ul>
                        <li>Biowater: chứa VS xử lý, cải tạo môi trường nuôi tròng thủy sản, có thể phân hủy xác ĐV, thức ăn dư, ổn định màu nước, giải phóng khí độc</li>
                        <li>Biofloc technology: phân hủy chất thải, giải phóng khí độc, ổn định màu nước</li>
                    </ul>
                </li>
                <li>
                    <p>Ổn định đường ruột giúp tiêu hóa tốt thức ăn, ngăn bệnh cho tôm</p>
                    <p>VD</p>
                    <ul>
                        <li>Bacillus, Lactobacillus, Saccharomyces... thường dùng trộn vào thức ăn, giúp cân bằng VK đường ruột, tăng cường chuyển hóa và hấp thu thức ăn.</li>
                        <li>Lactic có thể phòng ngừa và ngăn chặn rối loạn tiêu hóa, cân bằng hệ VK đường ruột, hạn chế dị ứng thực phẩm</li>
                    </ul>
                </li>
                <li>
                    <p>BMs có thể tích hợp ViB và các chất kháng sinh</p>
                    <p>VD: Streptomyces sp. có khả năng sản xuất nhiều loại kháng sinh kháng lại các bệnh do Vibrio sp. gây ra</p>
                </li>
                <li>
                    <p>BMs tác động lớn đến hệ miễn dịch của ĐV thủy sản</p>
                    <p>VD: Phosphorus Solubilizing bacteria làm tăng tỷ lệ sống tôm sú.</p>
                </li>
            </ul>
        `
    },
    //  C.Nguyệt Câu 7
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '7. Kể tên một số tác hại VSV trong nuôi trồng thủy sản. VD minh họa?',
        'author': 'Cô Nguyệt',
        'answer': `
            <ul>
                <li>
                    <p>VSV gây bệnh giảm năng suất các sản phẩm thủy hải sản</p>
                    <ul>
                        <li>Vi khuẩn Vibrio gây bệnh</li>
                        <li>Aeromonas hydrophila gây xuất huyết</li>
                        <li>Trichodina spp gây bệnh trùng bánh xe</li>
                        <li>Aeromonas hydrophila và Pseudomonas sp gây bệnh đốm đỏ, xuất huyết</li>
                        <li>Aeromonas sobria gây phù mắt. Cá bơi lờ đờ trên mặt nước, xuất huyết và xưng nặng</li>
                        <li>Edwardsiella ictaluri gây bệnh mủ gan</li>
                    </ul>   
                </li>
                <li>
                    <p>VSV là nguồn dinh dưỡng không tốt khi hải sản hấp phụ.</p>
                    <p>VD: nhiễm khuẩn Aeromonas trên cá basa cá tra</p>
                </li>
                <li>
                    <p>VSV làm tăng ô nhiễm môi trường nguồn nước.</p>
                    <p>VD: lượng tảo phát triển mạnh gây thiếu O2 cho động vật dưới nước</p>
                </li>
                <li>
                    <p>Mất kiểm soát dịch bệnh ao, tác động lên môi trường nước thải</p>
                </li>
            </ul>
        `
    },
    //  C.Nguyệt Câu 8
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '8. Phân loại chế phẩm sinh học trong nuôi trồng thủy sản. Cho ví dụ minh họa?',
        'author': 'Cô Nguyệt',
        'answer': `
            <table>
                <tr>
                    <td>Loại</td>
                    <td class="obj">CPSH xử lý ao nuôi</td>
                    <td class="obj">CPSH xử lý khí độc</td>
                    <td class="obj">CPSH xử lý bùn đáy</td>
                </tr>
                <tr>
                    <td class="obj">Mục đích</td>
                    <td class="obj">Xử lý tảo và làm sạch nước ao nuôi.</td>
                    <td class="obj">Loại bỏ NO2, H2S, NH3 và các tạp CHC gây mùi.</td>
                    <td class="obj">Loại bỏ ô nhiễm bùn đáy ao, xử lý khí độc và tạp CHC gây mùi.</td>
                </tr>
                <tr>
                    <td>Ví dụ</td>
                    <td class="obj">
                        <ul>
                            <li>Lasachu: thành phần chính B. subtilis và S. cereviseae xử lí môi trường ao nuôi</li>
                            <li>ESM-Proof: thành phần chính L. plantarium, B. subtilis, B. coagulán ức chế và ngừa vi khuẩn Vibrio trên tôm và môi trường ao nuôi</li>
                        </ul>
                    </td class="obj">
                    <td class="obj">MicrobeLift gồm 13 chủng VS chọn lọc có hoạt tính mạnh dùng xử lí khí độc ao nuôi</td>
                    <td class="obj">Pond Max: gồm B. subtilis, B. pumilus, B. amyloliquefaciens, B. licheniformis xử lí bùn đáy ao nuôi</td>
                </tr>
            </table>
        `
    },
    // C.Nguyệt Câu 9
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '9. Lợi ích của vi khuẩn Bacillus subtilis trong SX probiotic cho nuôi trồng thủy sản?',
        'author': 'Cô Nguyệt',
        'answer': `
            <ul>
                <li>Hỗ trợ tăng nguồn dinh dưỡng cũng như enzyme tiêu hóa</li>
                <li>Hỗ trợ tăng cường hệ miễn dịch</li>
                <li>Hỗ trợ cải thiện môi trường</li>
                <li><span class="red">Giảm khí độc</span></li>
                <li>Ức chế tác nhân gây bệnh</li>
            </ul>
        `
    },
    // C.Nguyệt Câu 10
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '10. Nêu một số ứng dụng EMs (VSV có ích) trong nuôi trồng thủy sản??',
        'author': 'Cô Nguyệt',
        'answer': `
            <p>Ứng dụng</p>
            <ul>
                <li>Phân hủy CHC trong H2O, giảm ô nhiễm nước, ổn định pH</li>
                <li>Thức ăn trộn EMs thúc đẩy quá trình chuyển hóa, kích thích tốc độ phát triển, tăng sản lượng vật nuôi</li>
                <li>Ức chế hoạt động và phát triển của VSV có hại</li>
                <li>Diệt khuẩn gây bệnh: Coliform, Vibrio, Aeromonas...</li>
                <li>Cho phép tăng nuôi thả, giảm time và product's price</li>
            </ul>
        `
    },
    // C.Nguyệt Câu 11
    {
        'subject': 'Chuyển hóa sinh học',
        'question': '11. Chức năng của BMs là gì??',
        'author': 'Cô Nguyệt',
        'answer': `
            <p>BMs biểu hiện chức năng trên 2 khía cạnh</p>
            <ul>
                <li>Điều chỉnh hệ VSV trong cơ thể vật chủ, thúc đẩy quá trình trao đổi chất</li>
                <li>Phân hủy CHC, cân bằng SV trong nước và trầm tích</li>
            </ul>
            <p>VD</p>
            <ol>
                <li>Điều chỉnh mật độ tảo trong nước tránh suy thoái chất lượng nước</li>
                <li>Giảm lượng C, N, P và tảo lam</li>
                <li>Ức chế phát tán bệnh cá và suy thoái của một số loài thực vật thủy sinh vào mùa hè</li>
                <li>Nâng cao hệ miễn dịch ĐV thủy sản.</li>
                <li>Khắc phục các vấn đề về dioxin và PCBs</li>
            </ol>
        `
    }
]

