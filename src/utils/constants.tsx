import { languageArr } from "./types";
export const paths = {
  HOME: '/',
  HOMEPAGE: '/home',
  LOGIN: '/login',
  LOG_OUT: '/logout',
  SYSTEM: '/system',
  DETAIL_DOCTOR: '/detail-doctor/:id',
  VERIFY_EMAIL_BOOKING: '/verify-booking'
}

export const LANGUAGES:languageArr = {
  VI: 'vi',
  EN: 'en'
};

export const CRUD_ACTIONS = {
  CREATE: "CREATE",
  EDIT: "EDIT",
  DELETE: "DELETE",
  READ: "READ"
};