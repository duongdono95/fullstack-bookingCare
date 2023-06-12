'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: '1',
        firstName: 'admin',
        lastName: 'admin',
        email: 'admin@gmail.com',
        password: '123456',
        address: 'vietnam',
        phoneNumber: 'vietnam',
        gender: '1',
        roleId: 'R1',
        positionId: 'P2',
        image: 'dsadsadsad',
        createdAt: '2023-05-24 20:52:20',
        updatedAt: '2023-05-29 21:01:20',
      },
      {
        id: '11',
        firstName: 'Hưng',
        lastName: 'Duy Nguyễn',
        email: 'doctor1@gmail.com',
        password: '$2a$10$YxkNcmiVcTcyYlsdJJZKuOlKogULFzO5.JvexfoJcE5DopWbujilq',
        address: 'Hà Giang',
        phoneNumber: '111111',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P0',
        image: 'https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg',
        createdAt: '2023-05-29 22:30:53',
        updatedAt: '2023-05-29 22:30:53',
      },
      {
        id: '12',
        firstName: 'Khuyên',
        lastName: 'Trần Minh',
        email: 'doctor2@gmail.com',
        password: '$2a$10$YxkNcmiVcTcyYlsdJJZKuOlKogULFzO5.JvexfoJcE5DopWbujilq',
        address: 'Hà Nội',
        phoneNumber: '123456',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P2',
        image:
          'https://media.istockphoto.com/id/1389245890/photo/portrait-of-young-asian-male-doctor-on-blue-background.jpg?b=1&s=170667a&w=0&k=20&c=Ff18kO6n9x4-vUJ5HQAbDxX7hL1zBGWdSTWoqlFyQXM=',
        createdAt: '2023-05-29 22:33:47',
        updatedAt: '2023-05-29 22:33:47',
      },
      {
        id: '13',
        firstName: 'Lan',
        lastName: 'Đoàn Thị',
        email: 'doctor3@gmail.com',
        password: '$2a$10$YxkNcmiVcTcyYlsdJJZKuOlKogULFzO5.JvexfoJcE5DopWbujilq',
        address: 'Hà Nôi',
        phoneNumber: '123456',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P3',
        image:
          'https://img.freepik.com/free-photo/portrait-asian-doctor-woman-cross-arms-standing-medical-uniform-stethoscope-smiling-camera-white-background_1258-83220.jpg?w=2000',
        createdAt: '2023-05-29 22:36:09',
        updatedAt: '2023-05-29 22:36:09',
      },
      {
        id: '14',
        firstName: 'Thủy',
        lastName: 'Nguyễn Thanh',
        email: 'doctor4@gmail.com',
        password: '$2a$10$YxkNcmiVcTcyYlsdJJZKuOlKogULFzO5.JvexfoJcE5DopWbujilq',
        address: 'Hà Nội',
        phoneNumber: '123456',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P4',
        image:
          'https://img.freepik.com/premium-photo/portrait-asian-female-doctor-holding-hands-smiling_296537-155.jpg',
        createdAt: '2023-05-29 22:37:16',
        updatedAt: '2023-05-29 22:37:16',
      },
      {
        id: '15',
        firstName: 'Tước',
        lastName: 'Nguyễn Ngọc',
        email: 'doctor5@gmail.com',
        password: '$2a$10$YxkNcmiVcTcyYlsdJJZKuOlKogULFzO5.JvexfoJcE5DopWbujilq',
        address: 'Hà Nội',
        phoneNumber: '123456',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P4',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqg-7kGrtFjnj4AKyPcINNTqJFXtUThyNzrtGZ6Gn90m7glWSLKacVEKC_gpzfmgKzKEM&usqp=CAU',
        createdAt: '2023-05-29 22:38:40',
        updatedAt: '2023-05-29 22:38:40',
      },
      {
        id: '16',
        firstName: 'Quý',
        lastName: 'Nguyễn Văn',
        email: 'doctor6@gmail.com',
        password: '$2a$10$YxkNcmiVcTcyYlsdJJZKuOlKogULFzO5.JvexfoJcE5DopWbujilq',
        address: 'Hà Giang',
        phoneNumber: '123456',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P3',
        image:
          'https://media.istockphoto.com/id/1019862020/photo/portrait-senior-asian-doctor-over-radiography-background-asian-medical-concept.jpg?s=612x612&w=0&k=20&c=I-bYJJZQUqGqe_HPYKnRWzv2Q_xTyGG5maChoOcwKLA=',
        createdAt: '2023-05-29 22:39:56',
        updatedAt: '2023-05-29 22:39:56',
      },
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
