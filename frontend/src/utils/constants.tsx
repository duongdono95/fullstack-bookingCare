import { SpecialtyDetails, languageArr } from './types';
import { initialLoginInputsType } from './types';
export const paths = {
  HOME: '/',
  HOMEPAGE: '/home',
  LOGIN: '/login',
  LOG_OUT: '/logout',
  SYSTEM: '/system',
  DETAIL_DOCTOR: '/detail-doctor/:id',
  VERIFY_EMAIL_BOOKING: '/verify-booking',
};

export const LANGUAGES: languageArr = {
  VI: 'vi',
  EN: 'en',
};

export const CRUD_ACTIONS = {
  CREATE: 'CREATE',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
  READ: 'READ',
};

export const bannerFeatures = [
  {
    title: 'banner.specialist-consultation',
    img: 'fa-solid fa-building-user',
  },
  {
    title: 'banner.remote-consultation',
    img: 'fa-solid fa-mobile-screen-button',
  },
  {
    title: 'banner.general-checkup',
    img: 'fa-solid fa-stethoscope',
  },
  {
    title: 'banner.medical-laboratory-testing',
    img: 'fa-solid fa-house-medical',
  },
  {
    title: 'banner.mental-health',
    img: 'fa-solid fa-user-nurse',
  },
  {
    title: 'banner.dental-examination',
    img: 'fa-solid fa-tooth',
  },
];

export const initialLoginInputs: initialLoginInputsType = {
  email: '',
  password: '',
};

export const ROLES = {
  R1: 'admin',
  R2: 'doctor',
  R3: 'patient',
};

export const initialInputForm = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  address: '',
  phoneNumber: '',
  gender: 'M',
  roleId: 'R1',
  positionId: 'P0',
  image: '',
};

export const inititalInputSpecialty: SpecialtyDetails = {
  specialty: 'SPE1',
  contentHTML: '',
  contentMarkdown: '',
  doctorId: null,
  image: '',
};
