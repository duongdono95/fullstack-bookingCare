'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('specialties', [
      {
        id: '1',
        specialty: 'SPE1',
        contentHTML:
          '<h2>Cơ Xương Khớp</h2>\n<p><strong>Bác sĩ Cơ Xương Khớp giỏi</strong></p>\n<p>Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:</p>\n<ul>\n<li>\n<p>Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm</p>\n</li>\n<li>\n<p>Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội</p>\n</li>\n<li>\n<p>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.</p>\n</li>\n<li>\n<p>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...</p>\n</li>\n<li>\n<p>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</p>\n</li>\n<li>\n<p>Bệnh Cơ Xương Khớp</p>\n</li>\n<li>\n<p>Gout</p>\n</li>\n<li>\n<p>Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ</p>\n</li>\n<li>\n<p>Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân</p>\n</li>\n<li>\n<p>Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai</p>\n</li>\n<li>\n<p>Loãng xương, đau nhức xương</p>\n</li>\n<li>\n<p>Viêm xương, gai xương</p>\n</li>\n<li>\n<p>Viêm cơ, Teo cơ, chứng đau mỏi cơ</p>\n</li>\n<li>\n<p>Yếu cơ, Loạn dưỡng cơ</p>\n</li>\n<li>\n<p>Các chấn thương về cơ, xương, khớp</p>\n</li>\n</ul>\n',
        contentMarkdown:
          '\n## Cơ Xương Khớp\n\n**Bác sĩ Cơ Xương Khớp giỏi**\n\nDanh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:\n\n* Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm\n* Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội\n* Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.\n\n* Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...\n* Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...\n* Bệnh Cơ Xương Khớp\n* Gout\n\n* Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ\n* Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân\n* Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai\n* Loãng xương, đau nhức xương\n* Viêm xương, gai xương\n* Viêm cơ, Teo cơ, chứng đau mỏi cơ\n* Yếu cơ, Loạn dưỡng cơ\n* Các chấn thương về cơ, xương, khớp',
        doctorId: '11,13,15',
        image:
          'https://www.pbmchealth.org/application/files/3015/7441/8826/PBMC_Top_Considerations_When_Choosing_Orthopedic_Surgeon_IMAGE1_Replacement.jpeg',
        createdAt: '2023-06-12 01:24:46',
        updatedAt: '2023-06-12 01:24:46',
      },
      {
        id: '2',
        specialty: 'SPE2',
        contentHTML:
          '<h2>Thần kinh</h2>\n<p><strong>Bác sĩ Thần kinh giỏi</strong></p>\n<p><em>Danh sách các giáo sư, bác sĩ chuyên khoa Thần kinh giỏi:</em></p>\n<ul>\n<li>Các giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Thần kinh đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện 108, Bệnh viện Đại học Y Hà Nội, Bệnh viện 103.</li>\n<li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội Thần kinh Việt Nam, Hội Phẫu thuật Thần kinh...</li>\n<li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp.</li>\n<li>Khám bệnh chuyên khoa Thần kinh</li>\n<li>Bại Não</li>\n<li>Đau đầu, chóng mặt, buồn nôn</li>\n<li>Bệnh Pakison, bệnh tiền đình</li>\n<li>Bị co cơ, căng dây thần kinh</li>\n<li>Động kinh, có những cơn vãng ý thức</li>\n<li>Bị tê bì nửa mặt, chèn dây thần kinh</li>\n<li>Bồn chồn, lo lắng, hồi hộp, chân tay run</li>\n<li>Có dấu hiệu tăng động</li>\n<li>Co rút cổ, đau đầu với mặt, chân tay, vã mồ hôi</li>\n<li>Chấn thương đầu, dây thần kinh</li>\n</ul>\n',
        contentMarkdown:
          '## Thần kinh\n\n\n**Bác sĩ Thần kinh giỏi**\n\n*Danh sách các giáo sư, bác sĩ chuyên khoa Thần kinh giỏi:*\n\n* Các giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Thần kinh đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện 108, Bệnh viện Đại học Y Hà Nội, Bệnh viện 103.\n* Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội Thần kinh Việt Nam, Hội Phẫu thuật Thần kinh...\n* Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp.\n* Khám bệnh chuyên khoa Thần kinh\n* Bại Não   \n* Đau đầu, chóng mặt, buồn nôn   \n* Bệnh Pakison, bệnh tiền đình   \n* Bị co cơ, căng dây thần kinh       \n* Động kinh, có những cơn vãng ý thức   \n* Bị tê bì nửa mặt, chèn dây thần kinh\n* Bồn chồn, lo lắng, hồi hộp, chân tay run   \n* Có dấu hiệu tăng động    \n* Co rút cổ, đau đầu với mặt, chân tay, vã mồ hôi   \n* Chấn thương đầu, dây thần kinh',
        doctorId: '12,14,16',
        image:
          'https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327331/a-radiologist-busy-looking-at-some-x-rays.jpg',
        createdAt: '2023-06-12 01:31:06',
        updatedAt: '2023-06-12 01:31:06',
      },
      {
        id: '3',
        specialty: 'SPE3',
        contentHTML:
          '<h2>Tiêu hoá</h2>\n<p><strong>Bác sĩ Chuyên khoa Tiêu hóa</strong></p>\n<p><em>Danh sách các bác sĩ Tiêu hóa uy tín đầu ngành tại Việt Nam:</em></p>\n<ul>\n<li>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tiêu hóa tại Hà Nội</li>\n<li>Các giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội</li>\n<li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Nhi Trung ương, Bệnh viện Y học Cổ truyền Việt Nam...</li>\n<li>Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,...</li>\n<li>Tư vấn, khám và điều trị các Bệnh Tiêu hóa</li>\n<li></li>\n<li>Ăn uống kém, không ngon</li>\n<li>Rối loạn tiêu hóa, táo bón, trĩ</li>\n<li>Nhiễm vi khuẩn HP (Helicobacter pylori)</li>\n<li>Nội soi dạ dày, đại tràng, tiêu hóa</li>\n<li>Buồn nôn, chướng bụng, đầy bụng ợ chua, đầy hơi</li>\n<li>Co thắt thực quản, Hội chứng ruột kích thích</li>\n<li>Đau bụng, dạ dày, đại tràng, thượng vị</li>\n<li>Viêm đại tràng, dạ dày, tá tràng</li>\n<li>Ung thư dạ dày, U nang tuyến tụy</li>\n<li>Bệnh lý về gan, mật</li>\n</ul>\n',
        contentMarkdown:
          '\n## Tiêu hoá\n\n**Bác sĩ Chuyên khoa Tiêu hóa**\n\n*Danh sách các bác sĩ Tiêu hóa uy tín đầu ngành tại Việt Nam:*\n\n* Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tiêu hóa tại Hà Nội\n* Các giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội\n* Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Nhi Trung ương, Bệnh viện Y học Cổ truyền Việt Nam...\n* Được nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,...\n* Tư vấn, khám và điều trị các Bệnh Tiêu hóa\n* \n* Ăn uống kém, không ngon\n* Rối loạn tiêu hóa, táo bón, trĩ\n* Nhiễm vi khuẩn HP (Helicobacter pylori)\n* Nội soi dạ dày, đại tràng, tiêu hóa\n* Buồn nôn, chướng bụng, đầy bụng ợ chua, đầy hơi\n* Co thắt thực quản, Hội chứng ruột kích thích\n* Đau bụng, dạ dày, đại tràng, thượng vị\n* Viêm đại tràng, dạ dày, tá tràng\n* Ung thư dạ dày, U nang tuyến tụy\n* Bệnh lý về gan, mật',
        doctorId: '12,11,13',
        image: 'https://www.ligastrohealth.com/hubfs/Blog/LICDH-Blog-6-Signs.jpg',
        createdAt: '2023-06-12 01:35:59',
        updatedAt: '2023-06-12 01:35:59',
      },
      {
        id: '4',
        specialty: 'SPE4',
        contentHTML:
          '<h2>Tim mạch</h2>\n<p><strong>Bác sĩ tim mạch giỏi</strong></p>\n<p><em>Danh dách các bác sĩ tim mạch uy tín đầu ngành tại Việt Nam:</em></p>\n<ul>\n<li>Các chuyên gia được đào tạo bài bản về chuyên ngành Tim mạch tại các trường đại học trong nước và quốc tế.</li>\n<li>Các giáo sư, phó giáo sư nghiên cứu và giảng dạy tại Đại học Y Hà Nội</li>\n<li>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Viện Tim Mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh Viện E, Bệnh Viện Tim Hà Nội</li>\n<li>Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Tim Mạch Việt Nam</li>\n<li>Đạt danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</li>\n<li>Khám tư vấn tim mạch</li>\n<li>Khó thở, Đau ngực, đau tim</li>\n<li>Tăng huyết áp, hạ huyết áp</li>\n<li>Rối loạn mỡ máu, cao huyết áp, chóng mặt</li>\n<li>Bệnh van tim (Hẹp hở van tim), Hẹp động mạch chủ</li>\n<li>Cảm giác hồi hộp, tim đập nhanh</li>\n<li>Tim bẩm sinh, có tiền sử bệnh tim to, tiền sử tai biến</li>\n<li>Đã đặt stent tim, nong động mạch vành</li>\n<li>Giãn tĩnh mạch chân</li>\n</ul>\n',
        contentMarkdown:
          '\n## Tim mạch\n\n**Bác sĩ tim mạch giỏi**\n\n*Danh dách các bác sĩ tim mạch uy tín đầu ngành tại Việt Nam:*\n\n* Các chuyên gia được đào tạo bài bản về chuyên ngành Tim mạch tại các trường đại học trong nước và quốc tế.\n* Các giáo sư, phó giáo sư nghiên cứu và giảng dạy tại Đại học Y Hà Nội\n* Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Viện Tim Mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh Viện E, Bệnh Viện Tim Hà Nội\n* Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Tim Mạch Việt Nam\n* Đạt danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...\n* Khám tư vấn tim mạch\n* Khó thở, Đau ngực, đau tim\n* Tăng huyết áp, hạ huyết áp\n* Rối loạn mỡ máu, cao huyết áp, chóng mặt\n* Bệnh van tim (Hẹp hở van tim), Hẹp động mạch chủ\n* Cảm giác hồi hộp, tim đập nhanh   \n* Tim bẩm sinh, có tiền sử bệnh tim to, tiền sử tai biến   \n* Đã đặt stent tim, nong động mạch vành\n* Giãn tĩnh mạch chân',
        doctorId: '14,15,16',
        image:
          'https://media.istockphoto.com/id/1296447730/photo/close-up-of-doctors-analysing-radiological-chest-x-ray-film.jpg?s=612x612&w=0&k=20&c=t5P38CvCU129gJmydOfWBaFL0pRJeXVySYWFcvyOZoE=',
        createdAt: '2023-06-12 01:37:27',
        updatedAt: '2023-06-12 01:37:27',
      },
      {
        id: '5',
        specialty: 'SPE5',
        contentHTML:
          '<h2>Tai Mũi Họng</h2>\n<p><strong>Bác sĩ Chuyên khoa Tai Mũi Họng</strong>\n<em>Danh sách các bác sĩ uy tín đầu ngành tại Việt Nam:</em></p>\n<ul>\n<li>\n<p>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tai Mũi Họng tại Hà Nội</p>\n</li>\n<li>\n<p>Các giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội</p>\n</li>\n<li>\n<p>Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Tai Mũi Họng Trung ương, Bệnh viện Quân Y 108...</p>\n</li>\n<li>\n<p>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ cao cấp,...</p>\n</li>\n<li>\n<p>Các bệnh Tai Mũi Họng</p>\n</li>\n<li>\n<p>Ù tai, đau tai, chảy máu tai</p>\n</li>\n<li>\n<p>Thủng màng nhĩ, điếc đột ngột</p>\n</li>\n<li>\n<p>Viêm tai giữa</p>\n</li>\n<li>\n<p>Amidan, V.A</p>\n</li>\n<li>\n<p>Viêm xoang</p>\n</li>\n<li>\n<p>Nghẹt mũi</p>\n</li>\n<li>\n<p>Hay bị chảy máu cam</p>\n</li>\n<li>\n<p>Đau cổ họng, khó nuốt</p>\n</li>\n<li>\n<p>Ho kéo dài</p>\n</li>\n<li>\n<p>Ngủ ngáy</p>\n</li>\n</ul>\n',
        contentMarkdown:
          '\n## Tai Mũi Họng\n\n**Bác sĩ Chuyên khoa Tai Mũi Họng**\n*Danh sách các bác sĩ uy tín đầu ngành tại Việt Nam:*\n\n* Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tai Mũi Họng tại Hà Nội\n* Các giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội\n* Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Tai Mũi Họng Trung ương, Bệnh viện Quân Y 108...\n* Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ cao cấp,...\n* Các bệnh Tai Mũi Họng\n\n* Ù tai, đau tai, chảy máu tai\n* Thủng màng nhĩ, điếc đột ngột\n* Viêm tai giữa\n* Amidan, V.A\n* Viêm xoang\n* Nghẹt mũi\n* Hay bị chảy máu cam\n* Đau cổ họng, khó nuốt\n* Ho kéo dài\n* Ngủ ngáy',
        doctorId: '14,15,16',
        image: 'https://www.150harleyst.co.uk/wp-content/uploads/2020/03/nose-examination.jpg',
        createdAt: '2023-06-12 01:39:44',
        updatedAt: '2023-06-12 01:39:44',
      },
      {
        id: '6',
        specialty: 'SPE6',
        contentHTML:
          '<h2>Cột sống</h2>\n<p><strong>Bác sĩ Chuyên khoa Cột sống</strong>\n<em>Danh sách các bác sĩ Cột sống uy tín đầu ngành tại Việt Nam.</em></p>\n<ul>\n<li>\n<p>Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Thần kinh - Cột sống - Xương khớp tại Hà Nội</p>\n</li>\n<li>\n<p>Các giáo sư, tiến sĩ, bác sĩ là giảng viên Đại học Y khoa Hà Nội, Học viện Quân Y.</p>\n</li>\n<li>\n<p>Các bác sĩ đã, đang công tác tại chuyên Khoa Thần Kinh, Cột sống, Xương Khớp - Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Trung ương Quân đội 108, Bệnh viện 103...</p>\n</li>\n<li>\n<p>Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...</p>\n</li>\n<li>\n<p>Bệnh Thần kinh - Cột sống</p>\n</li>\n<li>\n<p>Đau cột sống, đau thắt lưng</p>\n</li>\n<li>\n<p>Chấn thương cột sống</p>\n</li>\n<li>\n<p>Cột sống bị đau, sưng, cong, vẹo</p>\n</li>\n<li>\n<p>Đau mỏi cổ vai gáy, bả vai</p>\n</li>\n<li>\n<p>Đau tê mông xuống chân</p>\n</li>\n<li>\n<p>Phồng đĩa đệm</p>\n</li>\n<li>\n<p>Tê bì tay chân</p>\n</li>\n<li>\n<p>Thóa hóa đốt sống</p>\n</li>\n<li>\n<p>Thoái hóa L4, L5</p>\n</li>\n<li>\n<p>Thoát vị đĩa đệm</p>\n</li>\n<li>\n<p>Vôi hóa cột sống</p>\n</li>\n<li>\n<p>Xẹp cột sống</p>\n</li>\n</ul>\n',
        contentMarkdown:
          '\n## Cột sống\n\n**Bác sĩ Chuyên khoa Cột sống**\n*Danh sách các bác sĩ Cột sống uy tín đầu ngành tại Việt Nam.*\n\n* Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Thần kinh - Cột sống - Xương khớp tại Hà Nội\n* Các giáo sư, tiến sĩ, bác sĩ là giảng viên Đại học Y khoa Hà Nội, Học viện Quân Y.\n* Các bác sĩ đã, đang công tác tại chuyên Khoa Thần Kinh, Cột sống, Xương Khớp - Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Trung ương Quân đội 108, Bệnh viện 103...\n* Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...\n* Bệnh Thần kinh - Cột sống\n\n* Đau cột sống, đau thắt lưng\n* Chấn thương cột sống\n* Cột sống bị đau, sưng, cong, vẹo\n* Đau mỏi cổ vai gáy, bả vai\n* Đau tê mông xuống chân\n* Phồng đĩa đệm\n* Tê bì tay chân\n* Thóa hóa đốt sống\n* Thoái hóa L4, L5\n* Thoát vị đĩa đệm\n* Vôi hóa cột sống\n* Xẹp cột sống',
        doctorId: '12,13,14',
        image:
          'https://media.istockphoto.com/id/1217561470/photo/doctor-diagnosing-patient%C3%A2s-health-on-asthma-lung-disease-covid-19-or-bone-cancer-illness.jpg?s=612x612&w=0&k=20&c=beOvSZCzJ8w2hRn2jJiJaZwZ59Xrci7FKyBK65NayTA=',
        createdAt: '2023-06-12 01:42:00',
        updatedAt: '2023-06-12 01:42:00',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
