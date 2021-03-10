const localhost = 'http://127.0.0.1:8000';

const apiURL = '/api';

const endpoint = `${localhost}${apiURL}`;

export const teacherSignUpURL = `${endpoint}/signup/teacher/`;
export const studentSignUpURL = `${endpoint}/signup/student/`;
export const userLoginURL = `${endpoint}/auth/token/login/`;
export const userLogOUtURL = `${endpoint}/auth/token/logout/`;
export const userProfileURL = `${endpoint}/whoami/`;
export const userProfileCheckURL = `${endpoint}/session/`;
export const csrfURL = `${endpoint}/csrf/`;
export const DEMO_VIEO_URL = `${endpoint}/teacher/teacher-video`;
