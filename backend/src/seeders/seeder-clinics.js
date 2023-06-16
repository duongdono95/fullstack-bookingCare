'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clinics', [
      {
        "id": "1",
        "clinicId": "CLI1",
        "address": "Số 16 - 18 Phủ Doãn, Hoàn Kiếm, Hà Nội",
        "contentHTML": "<p><strong>Thời gian làm việc:<\/strong> Thứ 2 đến thứ 7<\/p>\n<p><strong>Sáng:<\/strong> 7h00 - 12h00<\/p>\n<p><strong>Chiều:<\/strong> 13h30 - 16h30<\/p>\n<p>Bệnh viện Việt Đức là một trong 5 bệnh viện tuyến Trung ương, hạng đặc biệt của Việt Nam. Bệnh viện có lịch sử trên 100 năm, bề dày truyền thống danh tiếng, là cái nôi của ngành ngoại khoa Việt Nam gắn liền với những thành tựu Y học quan trọng của đất nước.<\/p>\n<p>Việt Đức là địa chỉ uy tín hàng đầu về ngoại khoa, tiến hành khám bệnh, chữa bệnh và thực hiện các kỹ thuật chụp chiếu, xét nghiệm, thăm dò chức năng cơ bản và chuyên sâu hàng ngày cho người dân.<\/p>\n<p>Bệnh viện có đội ngũ y bác sĩ hùng hậu, nhiều người kiêm là cán bộ giảng dạy tại Đại học Y khoa Hà Nội hoặc Khoa Y Dược - Đại học Quốc gia Hà Nội. Trong số họ nhiều người là chuyên gia đầu ngành và bác sĩ giàu kinh nghiệm ở các chuyên khoa khác nhau.<\/p>\n<h4>Lưu ý quan trọng<\/h4>\n<p>Bệnh viện có nhiều khu khám bệnh, do đó để thuận tiện và tiết kiệm thời gian khi đi khám, người bệnh nên tìm hiểu kĩ về vị trí khu khám bệnh của mình trước khi đi khám.\nBệnh viện Hữu nghị Việt Đức là bệnh viện chuyên về Ngoại khoa, vì vậy, lịch các bác sĩ thường linh động và ưu tiên khám cho các ca cấp cứu.\nNgười bệnh nên chủ động chuẩn bị một số câu hỏi liên quan đến tình trạng của mình trước khi đi khám để hành trình khám bệnh được hiệu quả hơn.\nChi phí khám<\/p>\n<p>Người bệnh có thể lựa chọn một trong các gói khám sau:<\/p>\n<p><strong>Gói 1:<\/strong>\nKhám Giáo sư, Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II - Chi phí 500.000 đồng\/lần khám\nKhám với bác sĩ Trưởng khoa hoặc Phó khoa - Chi phí 500.000 đồng\/lần khám<br>\n<strong>Gói 2:<\/strong>\nKhám Thạc sĩ, Bác sĩ Chuyên khoa I - Chi phí: 300.000 đồng\/lần khám<\/p>\n",
        "contentMarkdown": "**Thời gian làm việc:** Thứ 2 đến thứ 7\n\n**Sáng:** 7h00 - 12h00\n\n**Chiều:** 13h30 - 16h30\n\nBệnh viện Việt Đức là một trong 5 bệnh viện tuyến Trung ương, hạng đặc biệt của Việt Nam. Bệnh viện có lịch sử trên 100 năm, bề dày truyền thống danh tiếng, là cái nôi của ngành ngoại khoa Việt Nam gắn liền với những thành tựu Y học quan trọng của đất nước. \n\nViệt Đức là địa chỉ uy tín hàng đầu về ngoại khoa, tiến hành khám bệnh, chữa bệnh và thực hiện các kỹ thuật chụp chiếu, xét nghiệm, thăm dò chức năng cơ bản và chuyên sâu hàng ngày cho người dân. \n\nBệnh viện có đội ngũ y bác sĩ hùng hậu, nhiều người kiêm là cán bộ giảng dạy tại Đại học Y khoa Hà Nội hoặc Khoa Y Dược - Đại học Quốc gia Hà Nội. Trong số họ nhiều người là chuyên gia đầu ngành và bác sĩ giàu kinh nghiệm ở các chuyên khoa khác nhau. \n\n\n#### Lưu ý quan trọng\n\n\nBệnh viện có nhiều khu khám bệnh, do đó để thuận tiện và tiết kiệm thời gian khi đi khám, người bệnh nên tìm hiểu kĩ về vị trí khu khám bệnh của mình trước khi đi khám.\nBệnh viện Hữu nghị Việt Đức là bệnh viện chuyên về Ngoại khoa, vì vậy, lịch các bác sĩ thường linh động và ưu tiên khám cho các ca cấp cứu.\nNgười bệnh nên chủ động chuẩn bị một số câu hỏi liên quan đến tình trạng của mình trước khi đi khám để hành trình khám bệnh được hiệu quả hơn.\nChi phí khám\n\nNgười bệnh có thể lựa chọn một trong các gói khám sau:\n\n**Gói 1:**\nKhám Giáo sư, Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II - Chi phí 500.000 đồng\/lần khám\nKhám với bác sĩ Trưởng khoa hoặc Phó khoa - Chi phí 500.000 đồng\/lần khám\\\n**Gói 2:**\nKhám Thạc sĩ, Bác sĩ Chuyên khoa I - Chi phí: 300.000 đồng\/lần khám",
        "image": "https:\/\/www.kokoromedi.com\/wp-content\/uploads\/2020\/08\/hinh-c%E1%BA%A3nh-up-youtube-vi%E1%BB%87t-%C4%91%E1%BB%A9c.png",
        "doctorId": "11,13",
        "createdAt": "2023-06-14 19:32:19",
        "updatedAt": "2023-06-14 19:32:19"
      },
      {
        "id": "2",
        "clinicId": "CLI2",
        "address": "201B Nguyễn Chí Thanh, Phường 12, Quận 5, Hồ Chí Minh",
        "contentHTML": "<h4>THẾ MẠNH CHUYÊN MÔN<\/h4>\n<p>Bệnh viện có 05 Trung tâm\nTrung tâm Ung bướu Chợ Rẫy.\nTrung tâm Đào tạo – Chỉ đạo tuyến.\nTrung tâm Thông tin thuốc và theo dõi phản ứng thuốc có hại của thuốc khu vực Thành phố HCM.\nTrung tâm Truyền máu Chợ Rẫy.\nTrung tâm Tim mạch.\n38 Khoa Lâm sàng<\/p>\n<h4>04 Khoa khám bệnh ngoại trú:<\/h4>\n<ul>\n<li>\n<p>Khoa Khám bệnh I<\/p>\n<\/li>\n<li>\n<p>Khoa Khám bệnh II<\/p>\n<\/li>\n<li>\n<p>Khoa Chăm sóc sức khỏe theo yêu cầu.<\/p>\n<\/li>\n<li>\n<p>Khoa Khám xuất cảnh.<\/p>\n<\/li>\n<li>\n<p>34 Khoa lâm sàng.<\/p>\n<\/li>\n<li>\n<p>Khoa Phẫu thuật – gây mê hồi sức.<\/p>\n<\/li>\n<li>\n<p>Khoa Hồi sức – phẫu thuật tim.<\/p>\n<\/li>\n<li>\n<p>Khoa Phẫu thuật mạch máu.<\/p>\n<\/li>\n<li>\n<p>Khoa Hồi sức cấp cứu.<\/p>\n<\/li>\n<li>\n<p>Khoa Hồi sức ngoại thần kinh.<\/p>\n<\/li>\n<li>\n<p>Khoa Chấn thương sọ não.<\/p>\n<\/li>\n<li>\n<p>Khoa Ngoại thần kinh (3B1,3B3, Đơn vị Gamma knife).<\/p>\n<\/li>\n<li>\n<p>Khoa Ngoại Tiêu hóa.<\/p>\n<\/li>\n<li>\n<p>Khoa Gan Mật Tụy.<\/p>\n<\/li>\n<li>\n<p>Khoa Ngoại Tiết Niệu.<\/p>\n<\/li>\n<li>\n<p>Khoa Chấn thương chỉnh hình.<\/p>\n<\/li>\n<li>\n<p>Khoa Tai Mũi họng.<\/p>\n<\/li>\n<li>\n<p>Khoa Tạo hình thẩm mỹ.<\/p>\n<\/li>\n<li>\n<p>Khoa Mắt.<\/p>\n<\/li>\n<li>\n<p>Khoa Ngoại lồng ngực.<\/p>\n<\/li>\n<li>\n<p>Khoa Nội tim mạch.<\/p>\n<\/li>\n<li>\n<p>Khoa Tim mạch can thiệp và Đơn vị Nhịp học.<\/p>\n<\/li>\n<li>\n<p>Khoa Nội phổi.<\/p>\n<\/li>\n<li>\n<p>Khoa Nội thận.<\/p>\n<\/li>\n<li>\n<p>Khoa Nội tiêu hóa.<\/p>\n<\/li>\n<li>\n<p>Khoa Nội thần kinh và Đơn vị Thăm dò chức năng thần kinh.<\/p>\n<\/li>\n<li>\n<p>Khoa Nội tổng quát (Lầu 9B1).<\/p>\n<\/li>\n<li>\n<p>Khoa Nội tổng quát – quốc tế (Lầu 10B1).<\/p>\n<\/li>\n<li>\n<p>Khoa Nội tổng quát (Lầu 10B3).<\/p>\n<\/li>\n<li>\n<p>Khoa Điều trị theo yêu cầu (T6).<\/p>\n<\/li>\n<li>\n<p>Khoa Bệnh nhiệt đới và Đơn vị Chống độc.<\/p>\n<\/li>\n<li>\n<p>Khoa Nghiên cứu &amp; điều trị viêm gan.<\/p>\n<\/li>\n<li>\n<p>Khoa Phỏng – tạo hình.<\/p>\n<\/li>\n<li>\n<p>Khoa Nội tiết và Đơn vị Bàn chân đái tháo đường.<\/p>\n<\/li>\n<li>\n<p>Khoa Nội cơ xương khớp.<\/p>\n<\/li>\n<li>\n<p>Khoa Huyết học lâm sàng - Bộ phận Xét nghiệm huyết học và Đơn vị Điều trị trong ngày.<\/p>\n<\/li>\n<li>\n<p>Khoa Cấp cứu.<\/p>\n<\/li>\n<li>\n<p>Khoa Thận nhân tạo.<\/p>\n<\/li>\n<li>\n<p>Khoa Vật lý trị liệu.<\/p>\n<\/li>\n<\/ul>\n",
        "contentMarkdown": "\n\n#### THẾ MẠNH CHUYÊN MÔN\n\n\nBệnh viện có 05 Trung tâm\nTrung tâm Ung bướu Chợ Rẫy.\nTrung tâm Đào tạo – Chỉ đạo tuyến.\nTrung tâm Thông tin thuốc và theo dõi phản ứng thuốc có hại của thuốc khu vực Thành phố HCM.\nTrung tâm Truyền máu Chợ Rẫy.\nTrung tâm Tim mạch.\n38 Khoa Lâm sàng\n\n#### 04 Khoa khám bệnh ngoại trú:\n\n\n* Khoa Khám bệnh I\n* Khoa Khám bệnh II\n* Khoa Chăm sóc sức khỏe theo yêu cầu.\n* Khoa Khám xuất cảnh.\n* 34 Khoa lâm sàng.\n\n* Khoa Phẫu thuật – gây mê hồi sức.\n* Khoa Hồi sức – phẫu thuật tim.\n* Khoa Phẫu thuật mạch máu.\n* Khoa Hồi sức cấp cứu.\n* Khoa Hồi sức ngoại thần kinh.\n* Khoa Chấn thương sọ não.\n* Khoa Ngoại thần kinh (3B1,3B3, Đơn vị Gamma knife).\n* Khoa Ngoại Tiêu hóa.\n* Khoa Gan Mật Tụy.\n* Khoa Ngoại Tiết Niệu.\n* Khoa Chấn thương chỉnh hình.\n* Khoa Tai Mũi họng.\n* Khoa Tạo hình thẩm mỹ.\n* Khoa Mắt.\n* Khoa Ngoại lồng ngực.\n* Khoa Nội tim mạch.\n* Khoa Tim mạch can thiệp và Đơn vị Nhịp học.\n* Khoa Nội phổi.\n* Khoa Nội thận.\n* Khoa Nội tiêu hóa.\n* Khoa Nội thần kinh và Đơn vị Thăm dò chức năng thần kinh.\n* Khoa Nội tổng quát (Lầu 9B1).\n* Khoa Nội tổng quát – quốc tế (Lầu 10B1).\n* Khoa Nội tổng quát (Lầu 10B3).\n* Khoa Điều trị theo yêu cầu (T6).\n* Khoa Bệnh nhiệt đới và Đơn vị Chống độc.\n* Khoa Nghiên cứu & điều trị viêm gan.\n* Khoa Phỏng – tạo hình.\n* Khoa Nội tiết và Đơn vị Bàn chân đái tháo đường.\n* Khoa Nội cơ xương khớp.\n* Khoa Huyết học lâm sàng - Bộ phận Xét nghiệm huyết học và Đơn vị Điều trị trong ngày.\n* Khoa Cấp cứu.\n* Khoa Thận nhân tạo.\n* Khoa Vật lý trị liệu.",
        "image": "https:\/\/bookingcare.vn\/_next\/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2021%2F09%2F14%2F095119-benh-vien-cho-ray-h1.jpg&w=3840&q=75",
        "doctorId": "11,13",
        "createdAt": "2023-06-14 19:36:14",
        "updatedAt": "2023-06-14 19:36:14"
      },
      {
        "id": "3",
        "clinicId": "CLI3",
        "address": "20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM",
        "contentHTML": "<ul>\n<li>\n<p>BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.<\/p>\n<\/li>\n<li>\n<p>Từ nay, người bệnh có thể đặt khám Phòng khám Bệnh viện Đại học Y Dược 1 thông qua hệ thống đặt khám BookingCare.<\/p>\n<\/li>\n<li>\n<p>Được lựa chọn khám với các bác sĩ chuyên khoa giàu kinh nghiệm<\/p>\n<\/li>\n<li>\n<p>Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch)<\/p>\n<\/li>\n<li>\n<p>Giảm thiểu thời gian chờ đợi xếp hàng làm thủ tục khám<\/p>\n<\/li>\n<li>\n<p>Nhận được hướng dẫn đi khám chi tiết sau khi đặt lịch<\/p>\n<\/li>\n<\/ul>\n",
        "contentMarkdown": "* BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.\n* Từ nay, người bệnh có thể đặt khám Phòng khám Bệnh viện Đại học Y Dược 1 thông qua hệ thống đặt khám BookingCare.\n\n* Được lựa chọn khám với các bác sĩ chuyên khoa giàu kinh nghiệm\n* Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch)\n* Giảm thiểu thời gian chờ đợi xếp hàng làm thủ tục khám\n* Nhận được hướng dẫn đi khám chi tiết sau khi đặt lịch",
        "image": "https:\/\/tuyensinhso.vn\/images\/files\/tuyensinhso.com\/truong-dai-hoc-y-duoc-thanh-pho-ho-chi-minh-3.jpg",
        "doctorId": "11,12,16",
        "createdAt": "2023-06-14 19:38:07",
        "updatedAt": "2023-06-14 19:38:07"
      },
      {
        "id": "4",
        "clinicId": "CLI4",
        "address": "20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM",
        "contentHTML": "<ul>\n<li>\n<p>BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.<\/p>\n<\/li>\n<li>\n<p>Từ nay, người bệnh có thể đặt khám Phòng khám Bệnh viện Đại học Y Dược 1 thông qua hệ thống đặt khám BookingCare.<\/p>\n<\/li>\n<li>\n<p>Được lựa chọn khám với các bác sĩ chuyên khoa giàu kinh nghiệm<\/p>\n<\/li>\n<li>\n<p>Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch)<\/p>\n<\/li>\n<li>\n<p>Giảm thiểu thời gian chờ đợi xếp hàng làm thủ tục khám<\/p>\n<\/li>\n<li>\n<p>Nhận được hướng dẫn đi khám chi tiết sau khi đặt lịch<\/p>\n<\/li>\n<\/ul>\n",
        "contentMarkdown": "* BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.\n* Từ nay, người bệnh có thể đặt khám Phòng khám Bệnh viện Đại học Y Dược 1 thông qua hệ thống đặt khám BookingCare.\n\n* Được lựa chọn khám với các bác sĩ chuyên khoa giàu kinh nghiệm\n* Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch)\n* Giảm thiểu thời gian chờ đợi xếp hàng làm thủ tục khám\n* Nhận được hướng dẫn đi khám chi tiết sau khi đặt lịch",
        "image": "https://images2.thanhnien.vn/Uploaded/dieutrang-qc/2022_06_20/tam-tri-1-7301.jpg",
        "doctorId": "16,13,14",
        "createdAt": "2023-06-14 19:38:27",
        "updatedAt": "2023-06-14 19:38:27"
      },
      {
        "id": "5",
        "clinicId": "CLI5",
        "address": "20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM",
        "contentHTML": "<ul>\n<li>\n<p>BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.<\/p>\n<\/li>\n<li>\n<p>Từ nay, người bệnh có thể đặt khám Phòng khám Bệnh viện Đại học Y Dược 1 thông qua hệ thống đặt khám BookingCare.<\/p>\n<\/li>\n<li>\n<p>Được lựa chọn khám với các bác sĩ chuyên khoa giàu kinh nghiệm<\/p>\n<\/li>\n<li>\n<p>Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch)<\/p>\n<\/li>\n<li>\n<p>Giảm thiểu thời gian chờ đợi xếp hàng làm thủ tục khám<\/p>\n<\/li>\n<li>\n<p>Nhận được hướng dẫn đi khám chi tiết sau khi đặt lịch<\/p>\n<\/li>\n<\/ul>\n",
        "contentMarkdown": "* BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.\n* Từ nay, người bệnh có thể đặt khám Phòng khám Bệnh viện Đại học Y Dược 1 thông qua hệ thống đặt khám BookingCare.\n\n* Được lựa chọn khám với các bác sĩ chuyên khoa giàu kinh nghiệm\n* Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch)\n* Giảm thiểu thời gian chờ đợi xếp hàng làm thủ tục khám\n* Nhận được hướng dẫn đi khám chi tiết sau khi đặt lịch",
        "image": "https://baodaklak.vn/file/fb9e3a03798789de0179a1704dea238e/052023/benh_vien_da_khoa_thien_hanh_buon_ma_thuot_20230527113042.jpg",
        "doctorId": "16,13,14",
        "createdAt": "2023-06-14 19:38:30",
        "updatedAt": "2023-06-14 19:38:30"
      },
      {
        "id": "6",
        "clinicId": "CLI6",
        "address": "20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM",
        "contentHTML": "<ul>\n<li>\n<p>BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.<\/p>\n<\/li>\n<li>\n<p>Từ nay, người bệnh có thể đặt khám Phòng khám Bệnh viện Đại học Y Dược 1 thông qua hệ thống đặt khám BookingCare.<\/p>\n<\/li>\n<li>\n<p>Được lựa chọn khám với các bác sĩ chuyên khoa giàu kinh nghiệm<\/p>\n<\/li>\n<li>\n<p>Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch)<\/p>\n<\/li>\n<li>\n<p>Giảm thiểu thời gian chờ đợi xếp hàng làm thủ tục khám<\/p>\n<\/li>\n<li>\n<p>Nhận được hướng dẫn đi khám chi tiết sau khi đặt lịch<\/p>\n<\/li>\n<\/ul>\n",
        "contentMarkdown": "* BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao.\n* Từ nay, người bệnh có thể đặt khám Phòng khám Bệnh viện Đại học Y Dược 1 thông qua hệ thống đặt khám BookingCare.\n\n* Được lựa chọn khám với các bác sĩ chuyên khoa giàu kinh nghiệm\n* Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch)\n* Giảm thiểu thời gian chờ đợi xếp hàng làm thủ tục khám\n* Nhận được hướng dẫn đi khám chi tiết sau khi đặt lịch",
        "image": "https://cdn.luatvietnam.vn/uploaded/Images/Original/2020/12/24/benh-vien_2808175558_2412092857.jpg",
        "doctorId": "16,13,14",
        "createdAt": "2023-06-14 19:38:33",
        "updatedAt": "2023-06-14 19:38:33"
      }
    ],);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
