export const adminMenu = [
  {
    name: 'menu.admin.user-management',
    title: 'User Management',
    path: '/system',
    menus: [
      {
        name: 'menu.admin.manage-doctors',
        title: 'Manage Doctors',
        path: '/system/manage-doctor',
      },
      {
        name: 'menu.admin.doctor-schedules',
        title: 'Manage Schedules',
        path: '/system/manage-schedules',
      },
    ],
  },
  {
    name: 'menu.admin.clinic-management',
    title: 'Clinic Management',
    path: '/system/clinic-management',
  },
  {
    name: 'menu.admin.specialty-management',
    title: 'Medical Specialty Management',
    path: '/system/specialty-management',
  },
];

export const doctorMenu = [
  {
    name: 'menu.admin.clinic-management',
    title: 'Clinic Management',
    path: '/system/clinic-management',
  },
  {
    name: 'menu.admin.specialty-management',
    title: 'Medical Specialty Management',
    path: '/system/specialty-management',
  },
];
