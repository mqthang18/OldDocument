const title = 'Công nghệ lên men'

const data = [
    // Cô N. Vương Câu 1
    {
        'subject': 'Công nghệ lên men',
        'number': 'V1',
        'question': '1. Định nghĩa lên men? Kể tên 1 số sản phẩm lên men truyền thống có sự tham gia của nấm mốc?',
        'author': 'Cô N. Vương',
        'answer': `
            <p>Định nghĩa</p>
            <ul>
                <li>Lên men là <span class="mark_one">quá trình nuôi cấy VSV để tạo ra sinh khối</span> (tăng sinh) hoặc thúc đẩy VSV tạo ra sản phẩm trao đổi chất (các hợp chất sinh hóa)</li>
                <li>Lên men là <span class="mark_two">quá trình Công nghệ lên men các chất hữu cơ</span> nhờ các VSV tạo thành năng lượng hóa học dưới dạng ATP có hay không có sự có mặt của O2</li>
            </ul>
            <p>Ví dụ: chao, tương hột, nước tương...</p>
        `,
    },
    // Cô N. Vương Câu 2
    {
        'subject': 'Công nghệ lên men',
        'number': 'V2',
        'question': '2. Giải thích sơ đồ kích thích và ức chế cho quá trình lên men sữa chua?',
        'author': 'Cô N. Vương',
        'answer': `
            <ul>
                <li><span class="mark_one">Streptococcus thermophillus và Lactobacillus bulgaricus</span> đều hình thành acid lactic, khi lượng acid lactic sinh ra nhiều cho pH giảm dưới sức chịu đựng của vi khuẩn, sẽ ức chế hoạt động của 2 vi khuẩn này</li>
                <li><span class="mark_one">Streptococcus thermophillus</span> tạo ra <span class="mark_two">formic và CO2</span> kích thích hoạt động của <span class="mark_one">Lactobacillus bulgaricus</span>. Đồng thời <span class="mark_two">amino acids</span> sinh từ Lactobacillus bulgaricus cũng kích thích hoạt động của Streptococcus thermophillus</li>
            </ul>
        `
    },
    // Cô N. Vương Câu 3
    {
        'subject': 'Công nghệ lên men',
        'number': 'V3',
        'question': '3. Tại sao phải thực hiện quá trình đồng hóa sữa trước khi lên men?',
        'author': 'Cô N. Vương',
        'answer': `
            <ul>
                <li>Làm cho sản phẩm có <span class="mark_one">độ mịn cao</span>, tăng độ tiêu hóa <span class="mark_one">ít bị phân lớp, phân tầng trong bảo quản.</span></li>
                <li>Ngăn chặn hay làm chậm sự tách lớp béo sữa bằng cách giảm đường kính hạt béo.</li>
                <li>Các hạt cầu béo được xé nhỏ và phân bố đều trong pha liên tục => tăng hệ số truyền nhiệt của sữa => tiệt trùng sữa sẽ diễn ra tốt hơn.</li>
            </ul>
        `
    },
    // Cô N. Vương Câu 4
    {
        'subject': 'Công nghệ lên men',
        'number': 'V4',
        'question': '4. Tại sao người ta phải kết hợp men rennet và vi khuẩn lactic trong quá trình chế biến phô mai?',
        'author': 'Cô N. Vương',
        'answer': `
            <p><span class="mark_two">Chủng vi khuẩn lactic</span></p>
            <ul>
                <li>Vi khuẩn lactic <span class="mark_one">convert lactose into acid lactic</span> => giảm pH môi trường và thúc đẩy quá trình đông tụ cũng như loại nước khỏi gel</li>
                <li>Rennet: tác nhân enzyme đông tụ sữa, nó là một protease có tính acid được chiết rút chủ yếu từ dạ dày bê dưới 5 tháng tuổi. No là hỗn hộp của Chymosin và pepsin nên đặc tính thủy phân casein phụ thuộc vào pH môi trường.</li>
            </ul>
        `
    },
    // Cô N. Vương Câu 5
    {
        'subject': 'Công nghệ lên men',
        'number': 'V5',
        'question': '5. Quy trình chế biến phô mai gồm mấy giai đoạn?',
        'author': 'Cô N. Vương',
        'answer': `
            <p>Quy trình chế biến phô mai gồm 5 giai đoạn:</p>
            <ul>
                <li>Giai đoạn 1: Thanh trùng
                    <p>Theo pp Pastuer 85 - 90 độ/15-20 phút</p>
                </li>
                <li>Giai đoạn 2: Trầm hiện casein/đông tụ casein
                    <ol>
                        <li>Xử lí renin => khối nhầy phủ gelatin, mềm dẻo, không thấm nước</li>
                        <li>Sử dụng thêm VK Lactic</li>
                    </ol>
                </li>
                <li>Giai đoạn 3: Giai đoạn khử nước
                    <p>Ép cục sữa tách huyết thanh 20 - 24 h, 30 - 35 độ => Phô mai gồm casein và lipit</p>
                </li>
                <li>Giai đoạn 4: Muối phô mai</li>
                <li>Giai đoạn 5: Làm chín phô mai
                    <p>Đưa vào hầm chín 50 - 57 độ, ẩm 80 - 90%</p>
                </li>
            </ul>
        `
    },
    // Cô N. Vương Câu 6
    {
        'subject': 'Công nghệ lên men',
        'number': 'V6',
        'question': '6. Mục đích quá trình muối phô mai? Giải thích công đoạn muối phô mai?',
        'author': 'Cô N. Vương',
        'answer': `

            <p>Mục đích giai đoạn muối phô mai:</p>
            <ul>
                <li>Làm chậm quá trình lên men tiếp theo</li>
                <li>Tăng vị mặn cho phô mai</li>
                <li>Ngăn sự phát triển của VSV có hại</li>
                <li>Muối cũng góp phần loại bỏ nước dư trong phô mai</li>
            </ul>
            <p>Giải thích công đoạn muối phô mai:</p>
            <ul>
                <li>Phô mai được ngâm vào NaCl 24% hoặc rắt muối trực tiếp lên phô mai để tạo vị, tạo động nhất về thành phần cho khối phô mai và chặn phát triển VSV có hại, chủ yếu là trực khuẩn đường ruột</li>
                <li>KQ => các chất bề mặt phô mai, muối khoáng khuếch tán; NaCl thì thầm vào khối phô mai=> tạo lớp bảo vệ chống VSV có hại xâm nhập.</li>
            </ul>

        `
    },
    // Cô N. Vương Câu 7
    {
        'subject': 'Công nghệ lên men',
        'number': 'V7',
        'question': '7. Mục đích quá trình muối phô mai? Giải thích công đoạn muối phô mai??',
        'author': 'Cô N.Vương',
        'answer': `
            <ul>
                <li>Tốc độ lên men nhanh, sử dụng đường có hiệu quả, tạo độ cồn cao</li>
                <li>Có khả năng chịu cồn, áp suất thẩm thấu, O2, nhiệt độ và nồng độ CO2 phù hợp với từng nhà máy</li>
                <li>Có khả năng kết lắng và tạo vị tốt cho thành phẩm</li>
                <li>Đặc tính tồn trữ tốt</li>
                <li>Ổn định với các biến đổi, chống lại sự thoái hóa</li>
            </ul>
        `
    },
    // Cô N. Vương Câu 8
    {
        'subject': 'Công nghệ lên men',
        'number': 'V8',
        'question': '8. Anh/chị hãy viết qui trình lên men chao?',
        'author': 'Cô N. Vương',
        'answer': `
            <img src="./publish/image/CNLM/diagram_c8.png" alt="illustrate">
        `
    },
    // Cô N. Vương Câu 9
    {
        'subject': 'Công nghệ lên men',
        'number': 'V9',
        'question': '9. Một số hiện tượng hư hỏng chao??',
        'author': 'Cô N. Vương',
        'answer': `
            <p><span class="mark_two">Hiện tượng chao bị đắng</span></p>
            <ul>
                <li><span class="red">Do mốc xấu, nuôi trong điều kiện không đạt yêu cầu</span></li>
                <li>Do nhiễm vi khuẩn gây vị đắng</li>
                <li>Do dùng quá nhiều CaSO4</li>
                <li>Do chất đắng có sẵn trong nguyên liệu</li>
            </ul>
            <p><span class="mark_two">Có mùi khó chịu</span></p>
            <ul>
                <li>Do nhiễm mốc đen</li>
                <li>Do mốc phát triển quá mạnh</li>
                <li><span class="red">Bánh đậu sau khi ép còn độ ẩm quá cao</span></li>
            </ul>
        `
    },
    // Cô N. Vương Câu 10
    {
        'subject': 'Công nghệ lên men',
        'number': 'V10',
        'question': '10. Anh/Chị hãy cho biết quá trình lên men bia gồm mấy giai đoạn?',
        'author': 'Cô N. Vương',
        'answer': `
            <p>Quá trình lên men bia gồm 2 giai đoạn</p>
            <ul>
                <li>
                    <p>Quá trình lên men chính</p>
                    <p>C6H12O6 -> 2C2H5OH + 2CO2 + Q</p>
                    <p>Mục đích</p>
                    <ul>
                        <li>Tăng sinh khối nấm men</li>
                        <li>Chuyển từ kiểu lên men hiếu khí (để tăng sinh khối nấm men) sang lên men kỵ khí (để tạo CO2 và ethanol)</li>
                        <li>Thời kỳ lên men mạnh nhất</li>
                        <li>Cường độ lên men yếu dần, sinh khối nấm men cùng với các thành phần keo tụ của protein, tanin, nhựa đắng hoa houblon... lắng dần xuống đáy thùng lên men.</li>
                        <li>Nhiệt độ lên men 10 - 25 độ</li>
                    </ul>
                </li>
                <li>
                    <p>Quá trình lên men phụ</p>
                    <ul>
                        <li>Tiếp tục lên men phần chất khô còn sót lại sau lên men chính, <span class="red">bão hòa CO2</span></li>
                        <li><span class="red">Tăng cường mùi vị cho bia, thực hiện quá trình ủ chín của bia, làm trong bia.</span></li>
                        <li>Hạn chế sự xâm nhập và phá hủy VSV</li>
                        <li>Thời gian lên men phụ từ 15 - 35 ngày</li>
                        <li>Nhiệt độ lên men phụ giữ ở 1-4 độ</li>
                    </ul>
                </li>
            </ul>
        `
    },
    // Cô N. Vương Câu 11
    {
        'subject': 'Công nghệ lên men',
        'number': 'V11',
        'question': '11. Các yếu tố ảnh hưởng đến quá trình lên men rượu vang?',
        'author': 'Cô N. Vương',
        'answer': `
        <ul>
            <li>Nhiệt độ: thích hợp đối với sinh trưởng của nấm men trong khoảng 25oC - 30oC, còn nhiệt độ tối thiểu 2-3oC, ở 40oC sinh trưởng ngừng lại và nấm men bị chết.</li>
            <li>Oxy: Yeast lên men rượu chỉ trong điều kiện anaerobic</li>
            <li>pH: tối thích của yeast là khoảng 4-6. Trong sản xuất rượu vang môi trường nước quả có độ pH bằng 3 - 3.5, có thể điều chỉnh bằng acid tartric, acid citric, NaHCO3</li>
            <li>Nồng độ CO2 và rượu: Khi nồng độ rượu môi trường là 2% sự sản của nấm bị chậm lại, Chúng chỉ lên men được tới nồng độ rượu 12 - 14%. Khí CO2 thoát ra giúp nấm men di động vì vậy tăng nhanh tốc độ</li>
        </ul>
        `
    },
    // Cô N. Vương Câu 12
    {
        'subject': 'Công nghệ lên men',
        'number': 'V12',
        'question': '12. Tại sao trong quy trình sản xuất bia phải có giai đoạn đường hóa nguyên liệu và houblon hóa?',
        'author': 'Cô N. Vương',
        'answer': `
            <ul>
                <li>Đường hóa nguyên liệu nhằm: chuyển các <span class="red">chất của malt và nguyên liệu thay thế</span> từ trạng thái không hòa tan sang trạng thái hòa tan nhờ tác động của hệ enzyme thủy phân</li>
                <li>
                    <p>Houblon hóa nhằm mục đích:</p>
                    <ul>
                        <li><span class="red">Ổn định thành phần dinh dưỡng</span></li>
                        <li>Truyền  mùi và vị của hoa houblon cho bia</li>
                        <li><span class="red">Tạo keo tụ các protein, vô hoạt enzyme và thanh trùng dịch đường</span></li>
                    </ul>
                </li>
            </ul>
        `
    },
    // Cô N. Vương Câu 13
    {
        'subject': 'Công nghệ lên men',
        'number': 'V13',
        'question': '13. Anh/chị cho biết các nguyên liệu dùng để sản xuất bia?',
        'author': 'Cô N. Vương',
        'answer': `
            <p>Nước, đại mạch, hoa bia (hoa houblon), men bia, các phụ gia trong sản xuất bia</p>
            <ul>
                <li>Malt: nguyên liệu chính nấu bia, nguôn cung tinh bột cho đường hóa. Ngoài malt từ đại mạch có thể thay thế thành lúa mì, gạo</li>
                <li>Hoa houblon: tạo vị đắng và mùi thơm, trong SX sử dụng hoa khô của cây hoa cái</li>
                <li>Nước là yếu tố rất quan trọng trong quá trình SX, chất lượng nước quyết định chất lượng bia. Nó phải được đảm bảo các tiêu chuẩn về độ cứng. kim loại nặng... và phải được xử lý trước khi vào nấu bia.</li>
                <li>Nâm men sử dụng thuộc chi Saccharomyces, lên men nổi: S. cerevisiae, lên men chìm: S. carlsbergensis.</li>
                <li>Phụ gia: 
                    <ul>
                        <li>Các chế phẩm enzyme bổ sung hỗ trợ thủy phân nếu dùng nguyên liệu thay thế</li>
                        <li>Nhóm chất để Oxy hóa cho bia</li>
                        <li>Nhóm chất dùng xử lí nước như sunfit, Na2SO4</li>
                        <li>Nhóm chất dùng thu hồi bia</li>
                        <li>Nhóm chất trợ lọc làm trong dịch đường, bia, nước</li>
                    </ul>
                </li>
            </ul>
        `
    },
    // Cô N. Vương Câu 14
    {
        'subject': 'Công nghệ lên men',
        'number': 'V14',
        'question': '14. Anh/Chị hãy cho biết vì sao trong quá trình sản xuất rượu trắng cần có công đoạn chưng cất và tinh chế cồn?',
        'author': 'Cô N. Vương',
        'answer': `
            <p>Vì</p>
            <ul>
                <li>Kết thúc quá trình lên men, để được tinh khiết cần chưng cất dịch lên men.</li>
                <li>Chưng cất: tách cồn cùng với các tạp chất dễ bay hơi; kết thúc quá trình chưng cất cồn thô</li>
                <li>Tinh chế: tách tạp chất ra khỏi cồn thô và cuối cùng nhận được cồn tinh khiết</li>
            </ul>
        `
    },
    // Cô Thảo Câu 1
    {
        'subject': 'Công nghệ lên men',
        'number': 'T1',
        'question': '1. Những điều kiện cần thiết cho một quá trình lên men trong sản xuất công nghiệp?',
        'author': 'Cô Thảo',
        'answer': `
            <ul>
                <li>Nguyên liệu: rẻ, dồi dào...</li>
                <li>Vi sinh vật: sự tăng trưởng, phẩm chất, sản phẩm...</li>
                <li>Yếu tố lý hóa: nhiệt độ, pH, ẩm độ</li>
            </ul>
        `
    },
    // Cô Thảo Câu 2
    {
        'subject': 'Công nghệ lên men',
        'number': 'T2',
        'question': '2. Các phương pháp khử trùng thường dùng trong sản xuất công nghiệp?',
        'author': 'Cô Thảo',
        'answer': `
            <ul>
                <li>Khử trùng bằng nồi hấp</li>
                <li>Khử trùng bằng hóa chất: Ethylenoxyl hỗn hợp với không khí theo tỉ lệ 3 - 8% sẽ gây nổ, vì vậy khi dùng phải trộn lẫn với CO2 hoặc N2</li>
            </ul>
        `
    },
    // Cô Thảo Câu 3
    {
        'subject': 'Công nghệ lên men',
        'number': 'T3',
        'question': '3. Những ưu và nhược điểm của phương pháp nuôi cấy gián đoạn và liên tục?',
        'author': 'Cô Thảo',
        'answer': `
            <table>
                <tr>
                    <td></td>
                    <td class="Continue">Liên tục</td>
                    <td class="Batch">Gián đoạn</td>
                </tr>
                <tr>
                    <td>Ưu điểm</td>
                    <td class="Continue">
                        <ul>
                            <li>Giảm bớt thời gian làm vệ sinh thiết bị, khử khuẩn và làm nguội</li>
                            <li>Giảm bớt thể tích toàn bộ thiết bị</li>
                            <li>Lao động dễ dàng và có khả năng tự động hóa các thao tác</li>
                            <li>Hiệu suất toàn bộ quá trình công nghệ nhờ chọn lọc tốt nhất các điều kiện thao tác.</li>
                        </ul>
                    </td>
                    <td class="Batch">
                        <ul>
                            <li>Kéo dài được thời gian làm việc -> mật độ nuôi cấy cao</li>
                            <li>Kiểm soát nồng độ cơ chất</li>
                            <li>Hạn chế sự mất nước do bay hơi, giảm độ nhớt môi trừng</li>
                            <li>Duy trì nồng độ kháng sinh ổn định trong nuôi cấy VSV tái tổ hợp, đảm bảo sự ổn định của plasmid</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Nhược điểm</td>
                    <td class="Continue">
                        <ul>
                            <li>Đòi hỏi cán bộ và công nhân thành thạo chuyên môn</li>
                            <li>Trong quá trình nuôi cấy tế bào VSV có thể có những đột biến bất ngờ xảy ra làm hỏng cả quá trình.</li>
                            <li>Vô khuẩn tuyệt đối.</li>
                            <li>Đối với các VSV như: nấm mốc, xạ khuẩn rất khó tách hệ sợi một cách vô khuẩn và đặc biệt là hiệu suất chuyển hóa thường thấp hơn so với nuôi cấy từng mẻ với những chủng sinh ra chất chuyển hóa không gắn với sự phát triển</li>
                        </ul>
                    </td>
                    <td class="Batch">
                        <ul>
                            <li>Năng suất thấp và chu kỳ sản xuất bị kéo dài</li>
                            <li>Cần hiểu rõ đặc tính sinh lý và năng suất của VSV</li>
                            <li>Đòi hỏi yêu cầu kỹ thuật cao, thiết lập, xác định và phát triển của các quá trình.</li>
                        </ul>
                    </td>
                </tr>
            </table>
        `
    },
    // Cô Thảo Câu 4
    {
        'subject': 'Công nghệ lên men',
        'number': 'T4',
        'question': '4. Hãy phân loại quá trình lên men dựa vào kỹ thuật nuôi cấy?',
        'author': 'Cô Thảo',
        'answer': `
            <ul>
                <li>
                    <p>Dựa vào cách nạp liêu và thu sản phẩm</p>
                    <ul>
                        <li>Lên men từng mẻ (Batch-fermentation)</li>
                        <li>Lên men bán liên tục (Semicontinuous fermentation)</li>
                        <li>Lên men liên tục (Continuous fermentation)</li>
                    </ul>
                </li>
                <li>
                    <p>Dựa vào thành phần đồng nhất của canh trường</p>
                    <ul>
                        <li>Bề mặt (nổi)</li>
                        <li>Bề sâu (chìm)</li>
                        <li>Bán rắn</li>
                    </ul>
                </li>
            </ul>
        `
    },
    // Cô Thảo Câu 5
    {
        'subject': 'Công nghệ lên men',
        'number': 'T5',
        'question': '5. Hãy nêu vai trò của cánh khuấy và hệ thống thổi khí trong lên men chìm?',
        'author': 'Cô Thảo',
        'answer': `
            <ul>
                <li>Khi số vòng quay của cánh khuất và tốc độ thổi khí tăng thì độ hòa tan của O2 vào dịch nuôi cấy tăng, đồng thời tăng sự xáo trộn môi trường, thúc đẩy quá trình trao đổi chất và tăng tốc sinh sản VSV.</li>
                <li>Tuy nhiên, việc tăng tốc khuất và tốc độ thổi khí chỉ đến một giới hạn nhất định. Nếu tốc độ của hai yếu tố này quá cao sẽ làm tăng hiện tượng tự phân của tế bào và bọt sẽ tạo ra nhiều</li>
            </ul>
        `
    },
    // Cô Thảo Câu 6
    {
        'subject': 'Công nghệ lên men',
        'number': 'T6',
        'question': '6. Hãy nêu quy trình sản xuất bột ngọt bằng phương pháp lên men?',
        'author': 'Cô Thảo',
        'answer': `
            <img src="./publish/image/CNLM/LMBN.png" alt="Len men bot ngot">
        `
    },
    // Cô Thảo Câu 7
    {
        'subject': 'Công nghệ lên men',
        'number': 'T7',
        'question': '7. Liệt kê tên một số chủng vi sinh vật dùng trong sản xuất bột ngọt bằng phương pháp lên men?',
        'author': 'Cô Thảo',
        'answer': `
            <ul>
                <li>Arthrobacter paraffineus</li>
                <li>Bacillus megaterium</li>
                <li>Brevibacterium sp.: B. flavus, B. thiogentalis</li>
                <li>Corynebacterium sp.: C. glutamicum, C. hydrocarboclastus</li>
                <li>Microbacterium ammoniaphilum</li>
            </ul>
            <img src="./publish/image/CNLM/Process_fermentation.png" style="width: 20vw; height: 100vh" alt="Quy trinh len men">
        `
    },
    // Cô Thảo Câu 8
    {
        'subject': 'Công nghệ lên men',
        'number': 'T8',
        'question': '8. Tiêu chuẩn chọn giống và nguyên liệu trong quá trình sản xuất acid citric?',
        'author': 'Cô Thảo',
        'answer': `
            <ul>
                <li>
                    <p>Tiêu chuẩn chọn giống</p>
                    <ul>
                        <li>Hoạt lực sinh acid citric cao và ổn định, ít biến đổi và thoái hóa.</li>
                        <li>Chịu được nồng độ acid cao, hình thành citric nhanh, hạn chế tạp khuẩn phát triển.</li>
                        <li>Không hoặc ít hình thành các acid hữu cơ khác (oxalic, gluconic, fumaric,...)</li>
                    </ul>
                </li>
                <li>
                    <p>Bản chất lên men citric là quá trình Oxy hóa đường thành acid citric dưới tác dụng của VSV</p>
                    <p>Các nguyên liệu tinh bột (ngô, sắn, khoai...) trải qua giai đoạn thủy phân tinh bột thành đường, từ đường tạo thành acid citric nhờ vai trò vsv.</p>
                    <ul>
                        <li>Mật rỉ</li>
                        <li>Tinh bột sắn</li>
                        <li>Bắp</li>
                        <li>Khoai lang</li>
                        <li>Khoai tây</li>
                    </ul>
                    <p>Nồng đồ acid citric cao nhất ở môi trường có nồng độ đường ban đầu (15 - 20% w/v), nếu không đủ lượng đường cho VSV sử dụng thì khả năng tổng hợp acid citric kém.</p>
                    <p>Nguyên liệu không lẫn nhiều tạp, kim loại nặng đặc biệt là sắt nếu hàm lượng sắt quá giới hạn thì cần phải loại bỏ.</p>
                </li>
            </ul>
        `
    },
    // Cô Thảo Câu 9
    {
        'subject': 'Công nghệ lên men',
        'number': 'T9',
        'question': '9. Hãy nêu các giai đoạn của quá trình lên men sản xuất acid citric bằng phương pháp lên men?',
        'author': 'Cô Thảo',
        'answer': `
            <ol>
                <li>Chuẩn bị môi trường nhân giống và lên men</li>
                <li>Giống gốc được chuyển vào nhân giống trong PTN và SX</li>
                <li>
                    Lên men
                    <ul>
                        <li>Theo phương pháp nuôi cấy bề mặt</li>
                        <li>Theo phương pháp nuôi cấy chìm</li>
                    </ul>
                </li>
                <li>Tách sinh khối lấy nuôi cấy (lên men)</li>
                <li>Kết tủa canxi citrat từ dịch nuôi cấy</li>
                <li>Tinh luyện acid citric từ canxi citrat</li>
                <li>Sấy thành phẩm (tinh thể acid citric)</li>
            </ol>
        `
    },
    // Cô Thảo Câu 10
    {
        'subject': 'Công nghệ lên men',
        'number': 'T10',
        'question': '10. Liệt kê tên các loài vi sinh vật tham gia vào quá trình lên men sản xuất acid citric. Vai trò của chúng trong quy trình sản xuất?',
        'author': 'Cô Thảo',
        'answer': `
            <ul class="red">
                <li>VSV có khả năng sinh tổng hợp acid citric: vi nấm (Aspergillus Penicillium), nấm men (Candida lipolytica, C. guillermondii,...)</li>
                <li>Vi khuẩn (Arthrobacter) trên môi trường glucose, saccharose...</li>
                <li>Nấm: Citromyces glaber, Citromyces pfefferianus, Citromyces comidiophore, Penicillium luteum...</li>
                <li>Aspergillus niger có hoạt lực cao và được dùng rộng rãi trong CN citric</li>
            </ul>
            <p>Vai trò</p>
            <ul>
                <li>Có khả năng sinh acid citrit</li>
                <li>Không bị biến đổi và thoái hóa</li>
                <li>Hiệu suất lên men ít bị ảnh hưởng bởi các ion kim loại vi lượng và tốc độ len men cao hơn</li>
                <li>Hoạt lực cao</li>
                <li>Được dùng rộng rãi</li>
                <li>Các chủng giống VSV có hiệu quả cao sẽ chịu được nồng độ acid cao, hạn chế được sự phát triển của tạp khuẩn</li>
                <li>Ít hình thành các acid hữu cơ khác</li>
            </ul>
        `
    },
]

