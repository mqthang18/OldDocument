const title = 'Công nghệ thực phẩm'

const data = [
    // Cô N. Vương Câu 1
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V1',
        'question': '1. Giải thích lộ trình lên men của vi khuẩn lactic??',
        'author': 'Cô N. Vương',
        'answer': `
            <h3>Lên men đồng hình</h3>
            <p>Đối với nhóm vi khuẩn lactic đồng hình như giống Lactococcus, S. thermophilus, L. bulgaricus,... chu trình đường phân là con đường chính chuyển hóa glucose thành acid lactic, acid này cũng là sản phẩm chủ lực trong quá trình lên men đồng hình.</p>
            <p>Phương trình tổng quát:</p>
            <p>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> => CH<sub>3</sub>COCOOH + 2H =Lacticodehydrogenase=>2CH<sub>3</sub>CHOHCOOH + 22,5 kcal</p>
            <h3>Lên men dị hình</h3>
            <p>Các vi khuẩn lactic dị hình như Leuconostoc do không có một số enzyme (<span style="color:red; font-weight: bolder;">aldolase</span>) của chu trình đường phân nên chúng chuyển hóa glucose giai đoạn theo chu trình pentose-phosphate và tạo ra sản phẩm trung gian là xylulose-5-phosphate. Chất này sẽ được chuyển hóa tiếp thành glyceraldehyde-3-phosphate rồi tiếp tục đi theo giai đoạn cuối của chu trình đường phân để tạo thành acid pyruvic rồi acid lactic như trong quá trình lên men đồng hình.</p>
            <p>Theo một con đường khác, xylulose-5-phosphate được chuyển thành acetyl-phosphate và tiếp sau đó tạo ethanol, acid lactic, CO2</p>
            <img src="./publish/image/CNTP/q1.jpeg" alt="lactic processs">
        `
    },
    // Cô N. Vương Câu 2
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V2',
        'question': '2. Anh/chị hãy viết quy trình lên men bánh mì? Giải thích từng giai đoạn trong quá trình lên men?',
        'author': 'Cô N. Vương',
        'answer': `
        <h3>Giải thích quy trình</h3>
            <ol>
                <li>
                    <h4>Nhào bột và lên men</h4>
                    <ul>
                        <li>Khi nhào bột protein và tinh bột hút nước trương nở và kết lại thành khối cùng với các cấu tử khác. Đồng thời tạo cho tế bào nấm men dịch chuyển làm cho khối bột có độ nở cao và đồng đều.</li>
                        <li>Các gluten của bột mì hút nước trương lên tạo mạng dây chằng chịt giữ khí. Sự lên men cũng diễn ra trong giai đoạn này, nấm men dùng chất dinh dưỡng trong khối bột để tăng sinh khối.</li>
                    </ul>
                </li>
                <li>
                    <h4>Chia bánh, tạo hình và ủ</h4>
                    <ul>
                        <li>Chia bánh, tạo hình: làm khối bột đồng đều có kích thước và khối lượng theo từng loại bánh, bề mặt nhẵn và sít lại tạo điều kiện giữ CO<sub>2</sub> cho bột nở</li>
                        <li>Ủ: gồm 2 quá trình
                            <br>
                            Lên men rượu C<sub>2</sub>H<sub>12</sub>O<sub>6</sub> ===Nấm men===> 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub>
                            <br>
                            Lên men lactic C<sub>2</sub>H<sub>12</sub>O<sub>6</sub> ===VK lactic===> 2CH<sub>3</sub>CHOHCOOH
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>Nướng bánh</h4>
                    <ul>
                        <li>Làm chín bánh đồng thời tạo phản ứng Maillard và Caramel làm bánh có màu đẹp</li>
                        <li>Tạo hương thơm cho sản phẩm</li>
                        <li>Chế độ nướng bánh đặc trưng bởi 3 thông số
                            <ol>
                                <li>Độ ẩm tương đối</li>
                                <li>Nhiệt độ</li>
                                <li>Thời gian</li>
                            </ol>
                        </li>
                        <li>Nướng bánh chia làm 3 GĐ
                            <h5>GĐ 1</h5>
                            <ul>
                                <li>Nhiệt độ 110 - 120<sup>0</sup>C, ẩm độ 70 - 75%</li>
                                <li>Trong quá trình này có sự chênh lệch nhiệt giữa bề mặt bánh và không khí trong lò nên ngưng tụ ẩm ở bề mặt. Ở nhiệt độ cao bánh bị hồ hóa tạo lớp vỏ mỏng có tác dụng giữ khí CO<sub>2</sub></li>
                                <li>Nhiệt độ bánh tăng từ đầu đến 40 - 50<sup>o</sup>C, nấm men hoạt động mạnh tiếp tục sinh CO<sub>2</sub> tăng tính nở của bánh - khi nhiệt độ lên tới 70<sup>0</sup>C nấm men bị tiêu diệt hoàn toàn.</li>
                            </ul>
                            <h5>GĐ 2</h5>
                            <ul>
                                <li>Nhiệt lò 220 - 250<sup>0</sup>C, ẩm độ 40 - 50%</li>
                                <li>GĐ này có tác dụng làm chín bánh, vỏ bánh hình thành. Bề mặt có màu vàng đẹp và hương thơm CO<sub>2</sub> thoát ra mạnh</li>
                            </ul>
                            <h5>GĐ 3</h5>
                            Phản ứng caramel và mailard tiếp tục xảy ra, hương thơm được hình thành hơi nước và CO2 tiếp tục thoát ra.
                        </li>
                    </ul>
                </li>
            </ol>
            <img src="../Publish/image/CNTP/q2.jpeg" alt="">
        `
    },
    //  Cô N. Vương Câu 3
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V3',
        'question': '3. Trong quá trình sản xuất bánh mì thì giai đoạn nào quyết định đến chất lượng bánh?',
        'author': 'Cô N. Vương',
        'answer': `
            <p>Giai đoạn lên men ảnh hưởng quyết định đến chất lượng bánh.</p>
            <h3>Lên men cuối:</h3>
            <p> Là 1 khâu quan trọng trong quá trình sản xuất bánh mì. Trong quá trình chia và tạo hình thì một phần lớn CO<sub>2</sub> trong khối bột nhào thoát ra ngoài. Muốn cho bánh nở, có thể tích, hình dáng cần thiết thì phải để khối bột nhào lên men kết thúc trước khi đưa vào lò nướng. Trong thời gian lên men kết thúc thì CO2 tiếp tục được tạo thành và làm cho khối bột nở lên.</p>
            <h3>Những yếu tố ảnh hưởng đến GĐ này</h3>
            <p>Chủ yếu là nhiệt độ và độ ẩm không khí phòng lên men. Khi ẩm độ của không khí lớn thì phải rút ngắn thời gian lên men kết thúc. Không nên đặt độ ẩm tương đối phòng lên men quá 85% vì với độ ẩm này cục bột sẽ dính vào vải lót, khay bánh, khuôn bánh.</p>
        `
    },
    //  Cô N. Vương Câu 4
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V4',
        'question': '4. Cơ chế của quá trình lên men muối chua?',
        'author': 'Cô N. Vương',
        'answer': `
            <p>Lượng đường có sẵn trong rau quả được chuyển hóa thành acid lactic nhờ VK lactic</p>
            <p>Acid lactic và các sản phẩm khác được tạo thành trong quá trình lên men làm cho sản phẩm có mùi vị đặc trưng đồng thời vừa là chất bảo quản cho sản phẩm</p>
            <img src="./Publish/image/CNTP/q4.jpeg" alt="Process lactic" style="height: 300px">
        `
    },
    //  Cô N. Vương Câu 5
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V5',
        'question': '5. Các yếu tố ảnh hưởng đến quá trình muối chua rau quả? Tại sao phải có công đoạn làm héo hay chần trước khi chế biến?',
        'author': 'Cô N. Vương',
        'answer': `
            <h3>Các yếu tố ảnh hưởng lên men</h3>
            <h4>Rau củ mềm, nước ngâm nhớt</h4>
            <ul>
                <li>[Salt] low</li>
                <li>Temp's so high, level of anaerobic's so low</li>
                <li>Some lactic strain grow's so strong at high temp</li>
                <li>[Acid] high at final stage => facilitate for yeast, mold grow to make layer and damage lactic</li>
            </ul>
            <h4>Sẫm màu</h4>
            <ul>
                <li>OXH by O2 in atm</li>
                <li>Action of stranging organism: B. nigrificans</li>
                <li>Dist. of salt not same.</li>
                <li>Yeast, Mold resistance high [salt] => OXH lactic</li>
            </ul>
            <h3>Cần làm héo hay chần trước khi chế biến vì:</h3>
            <ul>
                <li>Decrease [H<sub>2</sub>O] => Keep color of material, decrease softing product</li>
                <li>Stable color: Chlorophyll's not converted into Pheofitin</li>
                <li>Remove atm from "Khoảng gian bào"</li>
                <li>Kill risking bacteria</li>
                <li>Unactive enzyme</li>
            </ul>
        `
    },
    //  Cô N. Vương Câu 6
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V6',
        'question': '6. Enzyme là gì? Enzyme được sản xuất từ nguồn nào? Kể tên một vài enzyme ứng dụng trong thực phẩm?',
        'author': 'Cô N. Vương',
        'answer': `
            <h3>Khái niệm</h3>
            <p>E là 1 protein có khả năng tham gia xúc tác các phản ứng hóa học trong và ngoài cơ thể. E có thể tham gia cả những phản ứng độc lập và hàng loạt phản ứng dây chuyền trong chuỗi phản ứng sinh hóa.</p>
            <h3>Nguồn gốc</h3>
            <p>E được sản xuất từ: TV, ĐV, VSV</p>
            <h3>Enzyme ứng dụng trong thực phẩm</h3>
            <ul>
                <li>Enzyme protease (EC 3.4.x.x)</li>
                <li>Enzyme amylase (EC 3.2.1.1)</li>
                <li>Enzyme pectinase (EC 3.x.x.x)</li>
                <li>Enzyme cellulase (EC 3.2.1.3)</li>
                <li>Enzyme lipoxygenase (EC 1.13.11.12)</li>
            </ul>

        `
    },
    //  Cô N. Vương Câu 7
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V7',
        'question': '7. Nêu ứng dụng của enzyme protease, pectinase. Giải thích cơ chế của việc lắng enzyme pectinase?',
        'author': 'Cô N. Vương',
        'answer': `
        <h3>Enzyme protease</h3>
        <ul>
            <li>SX nước chấm, nước mắm, tương chao...</li>
            <li>CN thực phẩm làm mềm thịt: enzyme bromelin, papain..</li>
            <li>Hương liệu mỹ phẩm, trộn một lượng nhỏ enzyme protease vào kem thoa, kem cạo râu, dầu gội, dầu bôi tóc, kem giặt... để làm da, tóc mềm mại, tẩy bỏ dễ dàng lớp tế bào già</li>
            <li>Xà phòng, kem giặt có enzyme sẽ dễ tẩy các chất bẩn đặc biệt ứng dụng giặt sạch các vết máu, sữa trên vai...</li>
            <li>Trong CN sản xuất protease như renin, pepsin có thể đông tụ sữa dùng cho SX phô mai, yoghurt</li>
            <li>Trong y học, protease để SX MT dinh dưỡng nuôi VSV, SX huyết thanh miễn dịch...</li>
        </ul>
        <h3>Enzyme pectinase</h3>
        <ul>
            <li>Enzyme thủy phân pectic ứng dụng làm nước giải khát, nước quả, rượu vang... giúp quá trình lọc dễ dàng hơn.</li>
            <li>Pectinase cũng được dùng trong SX các sản phẩm từ quả, nước quả cô đặc, mứt đông do tính tạo keo của nó khi có đường, sản xuất cafe và cafe hòa tan</li>
        </ul>
        <h3>Cơ chế lắng enzyme pectinase</h3>
        <p>Các hạt dạng huyền phù =>  dưới pectinase tác động làm cho phần vỏ pectin bị thủy phân các điện tích tách ra và trung hòa tĩnh điện => sau khi trung hòa các phần thịt dư sẽ tủa lắng ở đáy</p>
        <img src="./Publish/image/CNTP/q7.png" alt="pectinase mechanism">
        `
    },
    //  Cô N. Vương Câu 8
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V8',
        'question': '8. Phân loại enzyme. Nguồn và phạm vi sử dụng?',
        'author': 'Cô N. Vương',
        'answer': `
            <h3>Phân loại</h3>
            <ul>
                <li>Oxydoreductase - xúc tác OXH-khử</li>
                <li>Transpherase - xúc tác phản ứng chuyển vị</li>
                <li>Hydrolase - xúc tác thủy phân</li>
                <li>Lyase - xúc tác phản ứng phân cắt, không hiện diện H<sub>2</sub>O</li>
                <li>Isomerase - xúc tác phản ứng đồng phân hóa</li>
                <li>Ligase - các enzyme xúc tác phản ứng tổng hợp có sử dụng liên kết giàu năng lượng ATP</li>
            </ul>
            <h3>Nguồn gốc và phạm vi dùng</h3>
            <ul>
                <li>
                    <h4>Thực vật</h4>
                    <ul>
                        <li>Papain, Bromelain, Ficin: làm mềm thịt</li>
                        <li>Lipoxygenase lúa mì: tăng phẩm chất và làm trắng bột qua sự OXH sắc tốt thực vật</li>
                    </ul>
                </li>
                <li>
                    <h4>Động vật</h4>
                    <ul>
                        <li>Chymosin (làm phô mát), trypsin (thủy phân protein, các chất tạo hương thực phẩm)</li>
                        <li>Lysozyme và Lactoperoxydase: Có tính kháng khuẩn, dùng hạn chế sự ôi hóa phô mát và sữa</li>
                    </ul>
                </li>
                <li>
                    <h4>Vi sinh vật</h4>
                </li>
            </ul>
        `
    },
    // C. Vương Câu 9
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V9',
        'question': '9. Thực phẩm chức năng là gì? Cho ví dụ? So sánh thực phẩm chức năng với thuốc và với thực phẩm truyền thống?',
        'author': 'Cô N. Vương',
        'answer': `
            <h3>Khái niệm</h3>
            Là loại thực phẩm không chỉ cung cấp dinh dưỡng cơ bản mà còn có chức năng phòng chống bệnh tật và tăng cường sức khỏe nhờ các chất chống OXH, chất xơ và một số thành phần khác.
            <h3>Ví dụ:</h3>
            <ol>
                <li>Tảo xoắn spirulina</li>
                <li>Ginkgo Biloba</li>
                <li>Collagen</li>
                <li>Vitamin</li>
                <li>Chất khoáng</li>
                <li>Glucosamine</li>
                <li>&omega;-3 Fish oil</li>
            </ol>
            <h3>So sánh TPCN với thuốc</h3>
            <ul>
                <li>Nhà sản xuất công bố trên nhãn sản phẩm là thực phẩm</li>
                <li>Đối với thuốc, nhà sản xuất công bố trên nhãn là sản phẩm thuốc, có thể chữa bệnh, phòng bệnh với công dụng, liều chỉ định, liều dùng, chống chỉ định</li>
                <li>Có thể dùng thường xuyên, lâu dài</li>
                <li>Thuốc: Người dùng sử dụng theo "hướng dẫn sử dụng" nhà SX</li>
            </ul>
            <h3>So sánh TPCN với TPTT</h3>
            <ul>
                <li>Được SX, chế biến theo công thức: bổ sung một số thành phần có lợi hoặc loại bớt một số thành phần bất lợi (để kiêng)</li>
                <li>Có tác dụng với sức khỏe nhiều hơn</li>
                <li>Liều dùng thường nhỏ, thậm chí tính bằng miligram, gam</li>
                <li>Đối tượng dùng có chỉ định rõ rệt</li>
            </ul>
        `
    },
    // Cô N. Vương Câu 10
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V10',
        'question': '10. Vitamin tan trong nước tan trong chất béo/trong nước gồm những loại nào? Nêu đặc điểm của Vitamin C, A, D, E?',
        'author': 'Cô N. Vương',
        'answer': `
                <h3>Vi tan trong nước: B(1-12), C</h3>
                <h3>Vi tan trong dầu: A, D, E, K</h3>
                <table style="text-align: justify; border: 2px solid;">
                    <tr>
                        <th>ViC</th>
                        <th>ViA</th>
                        <th>ViD</th>
                        <th>ViE</th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li>Tham gia OXH - khử trong cơ thể; duy trì mô liên kết, sức đề kháng, kìm hãm chuyển hóa cholesterol</li>
                                <li>ViC có nhiều trong thực phẩm nguồn TV</li>
                                <li>Dễ bị OXH do ion kim loại. Thất thoát nhiều khi náu chín dùng.</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Các thực phẩm nguồn gốc động vật. Trong thực vật có ở dạng tiền ViA (carotenoid) tạo màu vàng đỏ cho TV</li>
                                <li>ViA có nhiều trong mỡ cá thu, gan động vật, dầu gan cá, lòng đỏ trứng</li>
                                <li>Carotenoid có nhiều trong rau củ: cà rốt, hành tươi, ớt ngọt, cà chua, cải bó xôi</li>
                                <li>ViA không bị phá hủy trong các quá trình thông thường nhưng có thể bị biến tính, phá hủy ở nhiệt độ cao</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>ViD đóng vai trò điều chỉnh trao đổi P, Ca</li>
                                <li>Khi [Ca<sup>2+</sup>] cao => ViD chuyển Ca ở màu => răng, xương tích lũy. Ngược lại, giải phóng Ca để [Ca<sup>2+</sup>] cân bằng</li>
                                <li>Có nhiều trong lòng đỏ, mỡ bò, sữa, mỡ cá. Nhu cầu ViD phụ thuộc vào điều kiện dinh dưỡng, nhiệt độ, khí hậu và điều kiện hấp thu Ca, P cơ thể</li>
                                <li>Thiếu ViD => khoáng hóa xương và tổn thương xương => bệnh mềm xương</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Thực phẩm giàu E: đậu xanh, cà rốt, salade, mầm ngô, lúa mì; lòng đỏ trứng, thịt bò, sữa bò và cá mè.</li>
                                <li>ViE bị mất trong quá trình điều chế thực phẩm ở nhiệt độ cao, hay các quá trình chế biến dầu thực vật thành các sản phẩm margarine, shortening</li>
                                <li>Thiếu ViE xảy ra tình trạng teo cơ, biến đổi sâu sắc ở đại não và tủy.</li>
                            </ul>
                        </td>
                    </tr>
                </table>
        `
    },
    // Cô N. Vương Câu 11
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V11',
        'question': '11. Một số biện pháp bảo vệ và tạo màu sắc đẹp cho thực phẩm?',
        'author': 'Cô N. Vương',
        'answer': `
            <ul>
                <li>Xây dựng qui trình công nghệ bảo vệ màu sắc tự nhiên</li>
                <li>Trích ly, cô đặc và bảo quản màu thực vật sau đó cho trở lại sản phẩm</li>
                <li>Tổng hợp các màu giống như màu tự nhiên để nhuộm khi màu tự nhiên không đủ mạnh hay mất màu trong quá trình chế biến</li>
                <li>Dùng các biện pháp kỹ thuật thích hợp để điều chỉnh sự biến màu theo hướng mong muốn từ những hợp phần có sẵn trong nguyên liệu và các chất thêm</li>
            </ul>
        `
    },
    // Cô N. Vương Câu 12
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V12',
        'question': '12. Sắc tố chlorophyll, carotenoid, anthocyanin?',
        'author': 'Cô N. Vương',
        'answer': `
            <h3>Chlorophyll</h3>
            <p>Là chất tạo màu xanh lá cây ở lục lạp, có vai trò quan trọng trong quang hợp: tổng hợp carbohydrate</p>
            <p>Có nhiều loại chlorophyll a, b, c, d nhưng chủ yếu có hai loại chính</p>
            <ol>
                <li>Chlorophyll A: C<sub>55</sub>H<sub>72</sub>O<sub>5</sub>N<sub>4</sub>Mg</li>
                <li>Chlorophyll B: C<sub>55</sub>H<sub>70</sub>O<sub>6</sub>N<sub>4</sub>Mg, có màu nhạt hơn Chlorophyll A</li>
            </ol>
            <p>Tỷ lệ A:B = 3:1</p>

            <h3>Carotenoid</h3>
            <ul>
                <li>Sắc tố phân bố rất rộng rãi trong thiên nhiên có màu vàng, cam, đỏ</li>
                <li>Carotenoid có vai trò quan trong đối với dinh dưỡng người và gia súc</li>
                <li>Ảnh hưởng đến nguy cơ ung thư ở người và làm chậm lão hóa</li>
                <li>
                    Được tìm thấy ở
                    <ul>
                        <li>Trái như đào, cà chua, ớt, gấc, cam, quýt, bắp...</li>
                        <li>Củ: carot, khoai lang, nghệ</li>
                        <li>Động vật như sữa, máu, lòng đỏ trứng, cá, tôm, cua..</li>
                    </ul>
                </li>
            </ul>

            <h3>Anthocyanin</h3>
            Là hợp chất màu, nguồn gốc tự nhiên, thuộc nhóm flavoid, màu đỏ tía.
            <ul>
                <li>Tồn tại trong hầu hết TV bậc cao và tìm thấy trong một số loại rau, hoa, quả có màu từ đỏ đến tìm như: nho, dâu, bắp cải tím, lá tía tô, hoa hibicut, đậu đen, quả cà tím, gạo nếp, gạo đỏ</li>
                <li>Là hợp chất có nhiều hoạt tính sinh học quý: chống OXH, làm bền thành mạch, chống viêm, hạn chế phát triển của các tế bào ung thư, chống tia phóng xạ... => Không thể thiếu trong các lĩnh vực thực phẩm.</li>
            </ul>
        `
    },
    // Cô N. Vương Câu 13
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V13',
        'question': '13. GMO, GMF là gì? Kể tên một vài thực phẩm hiện đại?',
        'author': 'Cô N. Vương',
        'answer': `
            <h3>Khái niệm GMO - Genetically modified organism</h3>
            <p>Là 1 SV mà vật liệu di truyền của nó đã bị biến đổi theo ý muốn chủ quan của con người. Ngoài ra có những SV được tạo ra do quá trình lan truyền của gen trong tự nhiên.</p>
            <h3>Khái niệm GMF - Genetically modified food</h3>
            <p>Thực phẩm chuyển gen hay biến đổi gen là thực phẩm mà bản thân chúng hoặc chế biến từ các cơ thể động, thực vật mang các gen tái tổ hợp được chuyển vào một cách nhân tạo nhằm phục vụ các lợi ích kinh tế</p>
            <h3>Thực phẩm chuyển gen</h3>
            <p>Ngô, Lúa, Đậu nành, Cà chua, Đu đủ, Bí gợ, Cà phê, Canola, Bông vải, Thỏ, Bò, Heo, Cá, Gà...</p>
        `
    },
    // Cô N. Vương Câu 14
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V14',
        'question': '14. Kể tên các phương pháp chế biến thực phẩm hiện đại??',
        'author': 'Cô N. Vương',
        'answer': `
            <ol>
                <li>KT áp suất cao</li>
                <li>Microwave</li>
                <li>Sấy thăng hoa</li>
                <li>Sấy phun</li>
                <li>Thẩm thấu</li>
                <li>Chiếu xạ</li>
            </ol>
        `
    },
    // Cô N. Vương Câu 15
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V15',
        'question': '15. Nêu ưu, nhược điểm của phương pháp microwave, sấy phun?',
        'author': 'Cô N. Vương',
        'answer': `
            <table>
                <tr>
                    <th></th>
                    <th>Microwave</th>
                    <th>Sấy phun</th>
                </tr>
                <tr>
                    <td>Ưu điểm</td>
                    <td>
                        <ul>
                            <li>Save energy</li>
                            <li>Save time to cook</li>
                            <li>Decreasing nutrient lost</li>
                            <li>Easy clean</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Quick</li>
                            <li>SX liên tục ở quy mô lớn</li>
                            <li>Vận hạnh và bảo dưỡng đơn giản</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Nhược điểm</td>
                    <td>
                        <ul>
                            <li>Expensive</li>
                            <li>Có thể rò bức xạ</li>
                            <li>Phụ thuộc loại thực phẩm</li>
                            <li>Phân bố nhiệt không đều</li>
                            <li>Vận hành nghiêm ngặt</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Phí đầu tư cao</li>
                            <li>Cần nguyên liệu ban đầu có độ ẩm cao để có thể bơm</li>
                            <li>Đến thiết bị tạo giọt lỏng, do đó chi phí năng lượng cao</li>
                        </ul>
                    </td>
                </tr>
            </table>
        `
    },
    // Cô N. Vương Câu 16
    {
        'subject': 'Công nghệ thực phẩm',
        'number': 'V16',
        'question': '16. Thực phẩm chiếu xạ là gì? Thực phẩm chiếu xạ có an toàn không, vì sao?',
        'author': 'Cô N. Vương',
        'answer': `
            <h3>Khái niệm TPCX</h3>
            Là thực phẩm được khử trùng theo phương pháp <span style="color:red; font-weight:bolder;">điện tử (khử trùng lạnh)</span> bằng cách sử dụng tia bức xạ (<span style="color: red; font-weight: bolder;">tia &gamma;</span>), nó sẽ <span style="color: red; font-weight: bolder;">tác động vào DNA</span> quyết định tính chất di truyền, làm tế bào không thể phân cắt.
            <h3>Thực phẩm chiếu xạ an toàn vì:</h3>
            - Trong quá trình chiếu xạ, thực phẩm không hề tiếp xúc chất phóng xạ mà chỉ bị chiếu tia &gamma;, do đó <span style="color: red; font-family: Segoe UI; font-style: italic;">không thể bị nhiễm và trở thành "thực phẩm phóng xạ"</span> được.
            <br>
            - Việc chiếu xạ đúng liệu lượng trong một số trường hợp cũng có thể làm mất đi một phần nhỏ Vi, các a.a và acid béo không no, nhưng tổn thất này không đáng kể nên <span style="color: red; font-family: Segoe UI; font-style: italic;">không ảnh hưởng chất lượng, giá trị dinh dưỡng của thực phẩm.</span>
            <br>
            - <span style="color: red; font-family: Segoe UI; font-style: italic;">Hương vị, hình thức của thực phẩm đã được chiếu xạ không đổi</span> so với mẫu gốc. Người tiêu dùng chỉ có thể nhận biết và chọn lựa dùng thông qua biểu tượng Radura và các ghi chú trên bao bì.
            <br>
            - Chưa có ghi nhận nào cho thấy chiếu xạ có thể tạo thành các chất độc hại làm ảnh hưởng sức khỏe người tiêu dùng.
        `
    }
]

