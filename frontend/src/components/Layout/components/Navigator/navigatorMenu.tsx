export const adminMenu = [
  {
    name: 'menu.admin.manage-user',
    title: 'User Management',
    path: '/system',
    menus: [
      {
        name: 'menu.admin.manage-doctor',
        title: 'Manage Doctors',
        path: '/system/managing-doctors',
      },
      {
        name: 'menu.admin.manage-schedule',
        title: 'Manage Schedules',
        path: '/system/managing-schedules',
      },
    ],
  },
  {
    name: 'menu.admin.manage-clinic',
    title: 'managing-clinics',
    path: '/system/managing-clinics',
  },
  {
    name: 'menu.admin.manage-specialty',
    title: 'Medical Specialty Management',
    path: '/system/managing-specialties',
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
