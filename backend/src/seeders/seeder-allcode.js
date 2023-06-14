'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('allcodes', [
      { "id": "1", "keyMap": "R1", "type": "ROLE", "valueEn": "Admin", "valueVi": "Quản trị viên", "createdAt": null, "updatedAt": null },
      { "id": "2", "keyMap": "R2", "type": "ROLE", "valueEn": "Doctor", "valueVi": "Bác sĩ", "createdAt": null, "updatedAt": null },
      { "id": "3", "keyMap": "R3", "type": "ROLE", "valueEn": "Patient", "valueVi": "Bệnh nhân", "createdAt": null, "updatedAt": null },
      { "id": "4", "keyMap": "S1", "type": "STATUS", "valueEn": "New", "valueVi": "Lịch hẹn mới", "createdAt": null, "updatedAt": null },
      { "id": "5", "keyMap": "S2", "type": "STATUS", "valueEn": "Confirmed", "valueVi": "Đã xác nhận", "createdAt": null, "updatedAt": null },
      { "id": "6", "keyMap": "S3", "type": "STATUS", "valueEn": "Done", "valueVi": "Đã khám xong", "createdAt": null, "updatedAt": null },
      { "id": "7", "keyMap": "S4", "type": "STATUS", "valueEn": "Cancel", "valueVi": "Đã hủy", "createdAt": null, "updatedAt": null },
      { "id": "8", "keyMap": "T1", "type": "TIME", "valueEn": "8:00 AM - 9:00 AM", "valueVi": "8:00 - 9:00", "createdAt": null, "updatedAt": null },
      { "id": "9", "keyMap": "T2", "type": "TIME", "valueEn": "9:00 AM - 10:00 AM", "valueVi": "9:00 - 10:00", "createdAt": null, "updatedAt": null },
      { "id": "10", "keyMap": "T3", "type": "TIME", "valueEn": "10:00 AM - 11:00 AM", "valueVi": "10:00 - 11:00", "createdAt": null, "updatedAt": null },
      { "id": "11", "keyMap": "T4", "type": "TIME", "valueEn": "11:00 AM - 0:00 PM", "valueVi": "11:00 - 12:00", "createdAt": null, "updatedAt": null },
      { "id": "12", "keyMap": "T5", "type": "TIME", "valueEn": "1:00 PM - 2:00 PM", "valueVi": "13:00 - 14:00", "createdAt": null, "updatedAt": null },
      { "id": "13", "keyMap": "T6", "type": "TIME", "valueEn": "2:00 PM - 3:00 PM", "valueVi": "14:00 - 15:00", "createdAt": null, "updatedAt": null },
      { "id": "14", "keyMap": "T7", "type": "TIME", "valueEn": "3:00 PM - 4:00 PM", "valueVi": "15:00 - 16:00", "createdAt": null, "updatedAt": null },
      { "id": "15", "keyMap": "T8", "type": "TIME", "valueEn": "4:00 PM - 5:00 PM", "valueVi": "16:00 - 17:00", "createdAt": null, "updatedAt": null },
      { "id": "16", "keyMap": "P0", "type": "POSITION", "valueEn": "None", "valueVi": "Bác sĩ", "createdAt": null, "updatedAt": null },
      { "id": "17", "keyMap": "P1", "type": "POSITION", "valueEn": "Master", "valueVi": "Thạc sĩ", "createdAt": null, "updatedAt": null },
      { "id": "18", "keyMap": "P2", "type": "POSITION", "valueEn": "Doctor", "valueVi": "Tiến sĩ", "createdAt": null, "updatedAt": null },
      { "id": "19", "keyMap": "P3", "type": "POSITION", "valueEn": "Associate Professor", "valueVi": "Phó giáo sư", "createdAt": null, "updatedAt": null },
      { "id": "20", "keyMap": "P4", "type": "POSITION", "valueEn": "Professor", "valueVi": "Giáo sư", "createdAt": null, "updatedAt": null },
      { "id": "21", "keyMap": "M", "type": "GENDER", "valueEn": "Male", "valueVi": "Nam", "createdAt": null, "updatedAt": null },
      { "id": "22", "keyMap": "F", "type": "GENDER", "valueEn": "Female", "valueVi": "Nữ", "createdAt": null, "updatedAt": null },
      { "id": "23", "keyMap": "O", "type": "GENDER", "valueEn": "Other", "valueVi": "Khác", "createdAt": null, "updatedAt": null },
      { "id": "24", "keyMap": "PRI1", "type": "PRICE", "valueEn": "10", "valueVi": "200000", "createdAt": null, "updatedAt": null },
      { "id": "25", "keyMap": "PRI2", "type": "PRICE", "valueEn": "15", "valueVi": "250000", "createdAt": null, "updatedAt": null },
      { "id": "26", "keyMap": "PRI3", "type": "PRICE", "valueEn": "20", "valueVi": "300000", "createdAt": null, "updatedAt": null },
      { "id": "27", "keyMap": "PRI4", "type": "PRICE", "valueEn": "25", "valueVi": "350000", "createdAt": null, "updatedAt": null },
      { "id": "28", "keyMap": "PRI5", "type": "PRICE", "valueEn": "30", "valueVi": "400000", "createdAt": null, "updatedAt": null },
      { "id": "29", "keyMap": "PRI6", "type": "PRICE", "valueEn": "35", "valueVi": "450000", "createdAt": null, "updatedAt": null },
      { "id": "30", "keyMap": "PRI7", "type": "PRICE", "valueEn": "40", "valueVi": "500000", "createdAt": null, "updatedAt": null },
      { "id": "31", "keyMap": "PAY1", "type": "PAYMENT", "valueEn": "Cash", "valueVi": "Tiền mặt", "createdAt": null, "updatedAt": null },
      { "id": "32", "keyMap": "PAY2", "type": "PAYMENT", "valueEn": "Credit card", "valueVi": "Thẻ ATM", "createdAt": null, "updatedAt": null },
      { "id": "33", "keyMap": "PAY3", "type": "PAYMENT", "valueEn": "All payment method", "valueVi": "Tất cả", "createdAt": null, "updatedAt": null },
      { "id": "34", "keyMap": "PRO1", "type": "PROVINCE", "valueEn": "Ha Noi", "valueVi": "Hà Nội", "createdAt": null, "updatedAt": null },
      { "id": "35", "keyMap": "PRO2", "type": "PROVINCE", "valueEn": "Ho Chi Minh", "valueVi": "Hồ Chí Minh", "createdAt": null, "updatedAt": null },
      { "id": "36", "keyMap": "PRO3", "type": "PROVINCE", "valueEn": "Da Nang", "valueVi": "Đà Nẵng", "createdAt": null, "updatedAt": null },
      { "id": "37", "keyMap": "PRO4", "type": "PROVINCE", "valueEn": "Can Tho", "valueVi": "Cần Thơ", "createdAt": null, "updatedAt": null },
      { "id": "38", "keyMap": "PRO5", "type": "PROVINCE", "valueEn": "Binh Duong", "valueVi": "Bình Dương", "createdAt": null, "updatedAt": null },
      { "id": "39", "keyMap": "PRO6", "type": "PROVINCE", "valueEn": "Dong Nai", "valueVi": "Đồng Nai", "createdAt": null, "updatedAt": null },
      { "id": "40", "keyMap": "PRO7", "type": "PROVINCE", "valueEn": "Quang Ninh", "valueVi": "Quảng Ninh", "createdAt": null, "updatedAt": null },
      { "id": "41", "keyMap": "PRO8", "type": "PROVINCE", "valueEn": "Hue", "valueVi": "Thừa Thiên Huế", "createdAt": null, "updatedAt": null },
      { "id": "42", "keyMap": "PRO9", "type": "PROVINCE", "valueEn": "Quang Binh", "valueVi": "Quảng Bình", "createdAt": null, "updatedAt": null },
      { "id": "43", "keyMap": "PRO10", "type": "PROVINCE", "valueEn": "Khanh Hoa", "valueVi": "Khánh Hòa", "createdAt": null, "updatedAt": null },
      { "id": "44", "keyMap": "SPE1", "type": "SPECIALTY", "valueEn": "Department of Orthopedics", "valueVi": "Khoa Cơ Xương Khớp", "createdAt": null, "updatedAt": null },
      { "id": "45", "keyMap": "SPE2", "type": "SPECIALTY", "valueEn": "Department of Neurology", "valueVi": "Khoa Thần Kinh", "createdAt": null, "updatedAt": null },
      { "id": "46", "keyMap": "SPE3", "type": "SPECIALTY", "valueEn": "Department of Gastroenterology", "valueVi": "Khoa Tiêu Hoá", "createdAt": null, "updatedAt": null },
      { "id": "47", "keyMap": "SPE4", "type": "SPECIALTY", "valueEn": "Department of Cardiology", "valueVi": "Khoa Tim Mạch", "createdAt": null, "updatedAt": null },
      { "id": "48", "keyMap": "SPE5", "type": "SPECIALTY", "valueEn": "Department of Otorhinolaryngology", "valueVi": "Khoa Tai Mũi Họng", "createdAt": null, "updatedAt": null },
      { "id": "49", "keyMap": "SPE6", "type": "SPECIALTY", "valueEn": "Department of Spine", "valueVi": "Khoa Cột Sống", "createdAt": null, "updatedAt": null },
      { "id": "50", "keyMap": "CLI1", "type": "CLINIC", "valueEn": "Viet Duc Hospital", "valueVi": "Bệnh Viện Việt Đức", "createdAt": null, "updatedAt": null },
      { "id": "51", "keyMap": "CLI2", "type": "CLINIC", "valueEn": "Cho Ray Hospital", "valueVi": "Bệnh Viện Chợ Rẫy", "createdAt": null, "updatedAt": null },
      { "id": "52", "keyMap": "CLI3", "type": "CLINIC", "valueEn": "Dai Hoc Y Duoc 1 Hospital", "valueVi": "Bệnh Viện Đại Học Y Dược 1", "createdAt": null, "updatedAt": null },
      { "id": "53", "keyMap": "CLI4", "type": "CLINIC", "valueEn": "Trung Uong Quan Doi Hospital", "valueVi": "Bệnh Viện Trung Ương Quân Đội 108", "createdAt": null, "updatedAt": null },
      { "id": "54", "keyMap": "CLI5", "type": "CLINIC", "valueEn": "Hung Viet Hospital", "valueVi": "Bệnh Viện Hưng Việt", "createdAt": null, "updatedAt": null },
      { "id": "55", "keyMap": "CLI6", "type": "CLINIC", "valueEn": "Thu Cuc Hospital", "valueVi": "Bệnh Viện Thu Cúc", "createdAt": null, "updatedAt": null }
    ]);
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
