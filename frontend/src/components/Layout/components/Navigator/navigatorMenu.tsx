export const adminMenu = [
  {
    name: 'menu.admin.manage-user',
    title: 'User Management',
    path: '/system',
    menus: [
      {
        name: 'menu.admin.manage-doctor',
        title: 'Manage Doctors',
        path: '/system/manage-doctor',
      },
      {
        name: 'menu.admin.manage-schedule',
        title: 'Manage Schedules',
        path: '/system/manage-schedules',
      },
    ],
  },
  {
    name: 'menu.admin.manage-clinic',
    title: 'Clinic Management',
    path: '/system/clinic-management',
  },
  {
    name: 'menu.admin.manage-specialty',
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
