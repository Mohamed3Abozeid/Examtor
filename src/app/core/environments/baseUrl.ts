export const baseUrl = {
  url: 'http://127.0.0.1:80/api',
};

export const authEndPoints = {
  login: `${baseUrl.url}/auth/token/`,
};

export const studentEndPoints = {
  getStudent: `${baseUrl.url}/accounts/students/`,
  getAllStudents: `${baseUrl.url}/accounts/students`,
  addStudent: `${baseUrl.url}/accounts/students/`,
  updateStudent: `${baseUrl.url}/student/update`,
  deleteStudent: `${baseUrl.url}/accounts/students/`,
};

export const InstractorEndPoints = {
  getInstractor: `${baseUrl.url}/accounts/instructors/`,
  getAllInstractors: `${baseUrl.url}/accounts/Instractors`,
  addInstractor: `${baseUrl.url}/accounts/instructors/`,
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
  getCourse: `${baseUrl.url}/levels/courses/`,
  getAllCourses: `${baseUrl.url}/courses`,
  addCourse: `${baseUrl.url}/course/add`,
  updateCourse: `${baseUrl.url}/course/update`,
  deleteCourse: `${baseUrl.url}/course/delete`,
};

export const DepartmentEndPoints = {
  getDepartment: `${baseUrl.url}/levels/departments/`,
};
export const LevelEndPoints = {
  getLevel: `${baseUrl.url}/levels/`,
};

export const ExamEndPoints = {
  getExam: `${baseUrl.url}/exams/`,
  getAllExams: `${baseUrl.url}/exams/`,
  addExam: `${baseUrl.url}/exams/`,
  updateExam: `${baseUrl.url}/exam/update`,
  deleteExam: `${baseUrl.url}/exam/delete`,
  addquestion: `${baseUrl.url}/exams/questions/`,
  addChoices: `${baseUrl.url}/exams/choices/`,
};
