const localhost = "http://127.0.0.1:8000";

const apiURL = "/api";

export const endpoint = `${localhost}${apiURL}`;

export const teacherSignUpURL = `${endpoint}/teacher-signup`;
export const studentSignUpURL = `${endpoint}/student-signup`;
export const userLoginURL = `${endpoint}/api-auth/login`;
export const userLogOUtURL = `${endpoint}/api-auth/logout`;
export const userProfileURL = `${endpoint}/account/profile`;