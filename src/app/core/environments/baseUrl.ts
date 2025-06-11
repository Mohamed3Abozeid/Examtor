export const baseUrl = {
  url: 'http://127.0.0.1:80/api',
};

export const authEndPoints = {
  login: `${baseUrl.url}/auth/token/`,
};

export const studentEndPoints = {
  getStudent: `${baseUrl.url}/accounts/students/`,
  getAllStudents: `${baseUrl.url}/accounts/students`,
  addStudent: `${baseUrl.url}/student/add`,
  updateStudent: `${baseUrl.url}/student/update`,
  deleteStudent: `${baseUrl.url}/accounts/students/`,
};

export const InstractorEndPoints = {
  getInstractor: `${baseUrl.url}/accounts/instructors/`,
  getAllInstractors: `${baseUrl.url}/accounts/Instractors`,
  addInstractor: `${baseUrl.url}/Instractor/add`,
  updateInstractor: `${baseUrl.url}/Instractor/update`,
  deleteInstractor: `${baseUrl.url}/accounts/instructors/`,
};

export const AdminEndPoints = {
  getAdmin: `${baseUrl.url}/accounts/admins/`,
  getAllAdmins: `${baseUrl.url}/admins`,
  addAdmin: `${baseUrl.url}/admin/add`,
  updateAdmin: `${baseUrl.url}/admin/update`,
  deleteAdmin: `${baseUrl.url}/admin/delete`,
};

export const CourseEndPoints = {
  getCourse: `${baseUrl.url}/course`,
  getAllCourses: `${baseUrl.url}/courses`,
  addCourse: `${baseUrl.url}/course/add`,
  updateCourse: `${baseUrl.url}/course/update`,
  deleteCourse: `${baseUrl.url}/course/delete`,
};
