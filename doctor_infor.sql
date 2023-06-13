-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2023 at 03:51 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookingcare`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctor_infor`
--

CREATE TABLE `doctor_infor` (
  `id` int(11) NOT NULL,
  `doctorId` int(11) NOT NULL,
  `contentHTML` longtext NOT NULL,
  `contentMarkdown` longtext NOT NULL,
  `description` longtext DEFAULT NULL,
  `priceId` varchar(255) NOT NULL,
  `provinceId` varchar(255) NOT NULL,
  `paymentId` varchar(255) NOT NULL,
  `clinicName` varchar(255) NOT NULL,
  `clinicAddress` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor_infor`
--

INSERT INTO `doctor_infor` (`id`, `doctorId`, `contentHTML`, `contentMarkdown`, `description`, `priceId`, `provinceId`, `paymentId`, `clinicName`, `clinicAddress`, `createdAt`, `updatedAt`) VALUES
(2, 12, '<h2>Phó Giáo sư, Tiến sĩ, Bác sĩ Cao cấp Nguyễn Duy Hưng</h2>\n<h4>Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu</h4>\n<p><strong>Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương</strong></p>\n<p><strong>Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương</strong></p>\n<p><strong>Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan</strong></p>\n<p>Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu</p>\n<p>Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới</p>\n<p>Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội</p>\n<p>Trưởng Bộ môn Da liễu, Trường Đại học Kinh doanh và Công nghệ</p>\n<p>Tốt nghiệp Đại học Y Hà Nội (1977)</p>\n<p>Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam</p>\n', '\n## Phó Giáo sư, Tiến sĩ, Bác sĩ Cao cấp Nguyễn Duy Hưng\n\n\n#### Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu\n\n**Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương**\n\n**Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương**\n\n**Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan**\n\nBác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu\n\nHội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới\n\nGiảng viên bộ môn Da liễu tại Đại Học Y Hà Nội\n\nTrưởng Bộ môn Da liễu, Trường Đại học Kinh doanh và Công nghệ\n\nTốt nghiệp Đại học Y Hà Nội (1977)\n\nNguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam\n', 'Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam', 'PRI6', 'PRO5', 'PAY1', 'Phòng khám Bệnh viện Đại học Y Dược 1', '207 Phố Huế - Hai Bà Trưng - Hà Nội', '2023-06-06 01:55:21', '2023-06-06 01:55:21'),
(3, 13, '<h2>Tiến sĩ, Bác sĩ Nguyễn Thị Thanh Thủy</h2>\n<h4>35 năm kinh nghiệm lĩnh vực Cơ xương khớp</h4>\n<h4>Hiện là Giám đốc chuyên môn, Bác sĩ Nội Cơ Xương Khớp - Phòng khám Bệnh</h4>\n<p>viện Đại học Y Dược 1</p>\n<p>Từng công tác tại các bệnh viện lớn:</p>\n<p>Bệnh viện An Bình</p>\n<p>Bệnh viện Trưng Vương</p>\n<p>Bệnh viện Nhân dân 115</p>\n<p>Bác sĩ nhận khám từ 15 tuổi lên</p>\n<p>Khám và điều trị</p>\n<p>Đau thần kinh tọa</p>\n<p>Thoát vị đĩa đệm</p>\n<p>Viêm khớp dạng thấp</p>\n<p>Viêm cột sống dính khớp</p>\n<p>Thoái hóa khớp, cột sống cổ, cột sống thắt lưng</p>\n<p>Viêm quanh khớp vai, điểm bám các gân</p>\n<p>Bệnh loãng xương</p>\n<p>Nội soi các khớp, yếu cơ</p>\n', '\n## Tiến sĩ, Bác sĩ Nguyễn Thị Thanh Thủy\n\n\n\n#### 35 năm kinh nghiệm lĩnh vực Cơ xương khớp\n\n\n\n#### Hiện là Giám đốc chuyên môn, Bác sĩ Nội Cơ Xương Khớp - Phòng khám Bệnh \nviện Đại học Y Dược 1\n\n\nTừng công tác tại các bệnh viện lớn: \n\nBệnh viện An Bình\n\n Bệnh viện Trưng Vương\n\n Bệnh viện Nhân dân 115\n\nBác sĩ nhận khám từ 15 tuổi lên\n\nKhám và điều trị\n\nĐau thần kinh tọa\n\nThoát vị đĩa đệm\n\nViêm khớp dạng thấp\n\nViêm cột sống dính khớp\n\nThoái hóa khớp, cột sống cổ, cột sống thắt lưng\n\nViêm quanh khớp vai, điểm bám các gân\n\nBệnh loãng xương\n\nNội soi các khớp, yếu cơ\n', '35 năm kinh nghiệm lĩnh vực Cơ xương khớp Hiện là Giám đốc chuyên môn, Bác sĩ Nội Cơ Xương Khớp - Phòng khám Bệnh viện Đại học Y Dược 1 Từng công tác tại các bệnh viện lớn: Bệnh viện An Bình, Bệnh viện Trưng Vương, Bệnh viện Nhân dân 115 Bác sĩ nhận khám từ 15 tuổi lên', 'PRI3', 'PRO1', 'PAY2', 'Phòng khám Chuyên khoa Da Liễu', '20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM', '2023-06-06 01:58:31', '2023-06-06 01:58:31'),
(4, 14, '<h2>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</h2>\n<h4>Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng</h4>\n<h4>Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương</h4>\n<p>Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương</p>\n<p>Bác sĩ Nội trú chuyên ngành Tai Mũi Họng</p>\n<p>Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng</p>\n<p><strong>Khám &amp; điều trị</strong></p>\n<p>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn</p>\n<p>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em</p>\n<p>Nội soi Tai Mũi Họng</p>\n<p>Thực hiện các qui trình kỹ thuật Tai Mũi Họng</p>\n', '\n## Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An\n\n\n\n#### Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng\n\n\n\n#### Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương\n\nTrên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương\n\nBác sĩ Nội trú chuyên ngành Tai Mũi Họng\n\nBác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng\n\n**Khám & điều trị**\n\nChuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn\n\nChuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em\n\nNội soi Tai Mũi Họng\n\nThực hiện các qui trình kỹ thuật Tai Mũi Họng', 'Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em', 'PRI6', 'PRO8', 'PAY2', 'Phòng khám Bệnh viện Đại học Y Dược 1', '207 Phố Huế - Hai Bà Trưng - Hà Nội', '2023-06-06 02:02:11', '2023-06-06 02:02:11'),
(5, 15, '<h2>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</h2>\n<h4>Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng</h4>\n<h4>Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương</h4>\n<p>Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương</p>\n<p>Bác sĩ Nội trú chuyên ngành Tai Mũi Họng</p>\n<p>Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng</p>\n<p><strong>Khám &amp; điều trị</strong></p>\n<p>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn</p>\n<p>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em</p>\n<p>Nội soi Tai Mũi Họng</p>\n<p>Thực hiện các qui trình kỹ thuật Tai Mũi Họng</p>\n', '\n## Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An\n\n\n\n#### Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng\n\n\n\n#### Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương\n\nTrên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương\n\nBác sĩ Nội trú chuyên ngành Tai Mũi Họng\n\nBác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng\n\n**Khám & điều trị**\n\nChuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn\n\nChuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em\n\nNội soi Tai Mũi Họng\n\nThực hiện các qui trình kỹ thuật Tai Mũi Họng', 'Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em', 'PRI6', 'PRO8', 'PAY2', 'Phòng khám Bệnh viện Đại học Y Dược 1', '20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM', '2023-06-06 02:02:40', '2023-06-06 02:02:40'),
(12, 16, '<p>PGS, TS, Giảng viên cao cấp Trần Hữu Bình</p>\n<h4>Danh hiệu Thầy thuốc Nhân dân</h4>\n<h4>Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh</h4>\n<h4>Nguyên Viện trưởng Viện Sức khoẻ Tâm thần quốc gia, Bệnh viện Bạch Mai</h4>\n<h4>Nguyên Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội</h4>\n<p><strong>Bác sĩ nhận khám mọi độ tuổi</strong></p>\n<p><strong>Bác sĩ không nhận khám tự kỉ và chậm nói</strong></p>\n<h4>Quá trình công tác</h4>\n<ul>\n<li>PGS.TS.BS Khám bệnh tại Trung tâm Y khoa số 1, Bệnh viện Đại học Y Hà Nội</li>\n<li>Chủ trì Hội chẩn lâm sàng bệnh nhân Tâm thần tại Viện Sức khỏe Tâm thần, Bệnh viện Bạch Mai</li>\n<li>Đào tạo (giảng dạy, hướng dẫn, chấm luận án) Tiến sĩ, Thạc sĩ, Bác sĩ chuyên khoa II, Bác sĩ nội trú chuyên ngành Tâm thần, Y tế công cộng của Trường Đại học Y Hà Nội</li>\n<li>Viện trưởng Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (2008 – 2011)</li>\n<li>Trưởng khoa điều trị Nghiện chất Viện Sức khoẻ Tâm thần, Bệnh viện Bạch Mai (2010 – 2014)</li>\n<li>Trưởng khoa điều trị loạn thần Nam Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (1995 – 2008)</li>\n<li>Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội (1995 - 2014)</li>\n<li>Bác sĩ – cán bộ giảng dạy, Bộ môn Tâm thầnTrường Đại học Y Hà Nội (1978 - 1994)</li>\n</ul>\n', 'PGS, TS, Giảng viên cao cấp Trần Hữu Bình\n\n#### Danh hiệu Thầy thuốc Nhân dân\n\n\n#### Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh\n\n\n#### Nguyên Viện trưởng Viện Sức khoẻ Tâm thần quốc gia, Bệnh viện Bạch Mai\n\n\n#### Nguyên Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội\n\n**Bác sĩ nhận khám mọi độ tuổi**\n\n**Bác sĩ không nhận khám tự kỉ và chậm nói**\n\n#### Quá trình công tác\n\n* PGS.TS.BS Khám bệnh tại Trung tâm Y khoa số 1, Bệnh viện Đại học Y Hà Nội\n* Chủ trì Hội chẩn lâm sàng bệnh nhân Tâm thần tại Viện Sức khỏe Tâm thần, Bệnh viện Bạch Mai\n* Đào tạo (giảng dạy, hướng dẫn, chấm luận án) Tiến sĩ, Thạc sĩ, Bác sĩ chuyên khoa II, Bác sĩ nội trú chuyên ngành Tâm thần, Y tế công cộng của Trường Đại học Y Hà Nội\n* Viện trưởng Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (2008 – 2011)\n* Trưởng khoa điều trị Nghiện chất Viện Sức khoẻ Tâm thần, Bệnh viện Bạch Mai (2010 – 2014)\n* Trưởng khoa điều trị loạn thần Nam Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (1995 – 2008)\n* Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội (1995 - 2014)\n* Bác sĩ – cán bộ giảng dạy, Bộ môn Tâm thầnTrường Đại học Y Hà Nội (1978 - 1994)', 'Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh Nguyên Viện trưởng Viện Sức khoẻ Tâm thần quốc gia, Bệnh viện Bạch Mai Nguyên Phó Chủ nhiệm Bộ môn Tâm thần trường Đại học Y Hà Nội Bác sĩ nhận khám mọi độ tuổi Bác sĩ không nhận khám tự kỉ và chậm nói', 'PRI3', 'PRO4', 'PAY3', 'Phòng khám Chuyên khoa Yên Hòa', 'số 11 i4, ngõ 37 Trần Kim Xuyến, khu Đô Thị Mới Yên Hoà, Yên Hoà, Cầu Giấy, Hà Nội', '2023-06-06 02:30:35', '2023-06-06 02:30:35'),
(15, 11, '<h2>PGS, TS, Giảng viên cao cấp Trần Hữu Bình</h2> <h4>Danh hiệu Thầy thuốc Nhân dân</h4> <ul> <li>Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh</li> <li>Nguyên Viện trưởng Viện Sức khoẻ Tâm thần quốc gia, Bệnh viện Bạch Mai</li> <li>Nguyên Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội</li> <li>Bác sĩ nhận khám mọi độ tuổi</li> <li>Bác sĩ không nhận khám tự kỉ và chậm nói</li> <li>Quá trình công tác</li> <li>PGS.TS.BS Khám bệnh tại Trung tâm Y khoa số 1, Bệnh viện Đại học Y Hà Nội</li> </ul> <p>Chủ trì Hội chẩn lâm sàng bệnh nhân Tâm thần tại Viện Sức khỏe Tâm thần, Bệnh viện Bạch Mai</p> <p>Đào tạo (giảng dạy, hướng dẫn, chấm luận án) Tiến sĩ, Thạc sĩ, Bác sĩ chuyên khoa II, Bác sĩ nội trú chuyên ngành Tâm thần, Y tế công cộng của Trường Đại học Y Hà Nội</p> <p>Viện trưởng Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (2008 – 2011) Trưởng khoa điều trị Nghiện chất Viện Sức khoẻ Tâm thần, Bệnh viện Bạch Mai (2010 – 2014)</p> <p>Trưởng khoa điều trị loạn thần Nam Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (1995 – 2008)</p> <p>Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội (1995 - 2014) Bác sĩ – cán bộ giảng dạy, Bộ môn Tâm thầnTrường Đại học Y Hà Nội (1978 - 1994)</p>', '## PGS, TS, Giảng viên cao cấp Trần Hữu Bình   #### Danh hiệu Thầy thuốc Nhân dân  * Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh * Nguyên Viện trưởng Viện Sức khoẻ Tâm thần quốc gia, Bệnh viện Bạch Mai * Nguyên Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội * Bác sĩ nhận khám mọi độ tuổi * Bác sĩ không nhận khám tự kỉ và chậm nói * Quá trình công tác * PGS.TS.BS Khám bệnh tại Trung tâm Y khoa số 1, Bệnh viện Đại học Y Hà Nội  Chủ trì Hội chẩn lâm sàng bệnh nhân Tâm thần tại Viện Sức khỏe Tâm thần, Bệnh viện Bạch Mai  Đào tạo (giảng dạy, hướng dẫn, chấm luận án) Tiến sĩ, Thạc sĩ, Bác sĩ chuyên khoa II, Bác sĩ nội trú chuyên ngành Tâm thần, Y tế công cộng của Trường Đại học Y Hà Nội  Viện trưởng Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (2008 – 2011) Trưởng khoa điều trị Nghiện chất Viện Sức khoẻ Tâm thần, Bệnh viện Bạch Mai (2010 – 2014)  Trưởng khoa điều trị loạn thần Nam Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (1995 – 2008)  Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội (1995 - 2014) Bác sĩ – cán bộ giảng dạy, Bộ môn Tâm thầnTrường Đại học Y Hà Nội (1978 - 1994)', '	 PGS, TS, Giảng viên cao cấp Trần Hữu Bình (Bác sĩ từ xa) Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh Nguyên Viện trưởng Viện Sức khoẻ Tâm thần quốc gia, Bệnh viện Bạch Mai Nguyên Phó Chủ nhiệm Bộ môn Tâm thần trường Đại học Y Hà Nội Bác sĩ nhận khám mọi độ tuổi Bác sĩ không nhận khám tự kỉ và chậm nói', 'PRI1', 'Ha Noi', 'PAY2', 'Phòng khám Chuyên khoa Yên Hòa', 'số 11 i4, ngõ 37 Trần Kim Xuyến, khu Đô Thị Mới Yên Hoà, Yên Hoà, Cầu Giấy, Hà Nội', '2023-06-06 02:32:09', '2023-06-06 02:32:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctor_infor`
--
ALTER TABLE `doctor_infor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctor_infor`
--
ALTER TABLE `doctor_infor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
