export interface Department {
  id: number;
  title: string;
}

export interface Allstudents {
  count: number;
  next: boolean;
  previous: string;
  results: StudentApi[];
}

export interface StudentApi {
  url: string;
  id: number;
  username: string;
  email: string;
  first_name: string;
  second_name: string;
  third_name: string;
  fourth_name: string;
  last_name: string;
  gender: 'm' | 'f'; // or just string if it's not always 'm' or 'f'
  birth_date: string; // ISO 8601 date string, e.g. "2025-04-26"
  city: string;
  address: string;
  phone: string;
  department: Department;
  level: number;
  courses: Course[];
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  date_joined: string; // ISO timestamp
  user_type: number;
}

export interface StudentData {
  // Required Fields
  username: string; // Must be unique
  email: string; // Must be unique
  password: string;
  first_name: string;
  second_name: string;
  gender: 'm' | 'f';
  birth_date: string; // Format: YYYY-MM-DD
  user_type: 1 | 2 | 3; // 1 => Admin, 2 => Instructor, 3 => Student
  department: number; // Must refer to existing department
  level: number; // Must refer to existing level
  courses: number[]; // Array of course IDs

  // Optional Fields
  third_name?: string;
  fourth_name?: string;
  last_name?: string;
  city?: string;
  address?: string;
  phone?: string;
  is_active?: boolean;
  is_staff?: boolean;
  is_superuser?: boolean;
}

export interface departmentApiRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: Department[];
}

export interface Level {
  url: string;
  level_number: number;
}

export interface levelApiRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: Level[];
}

export interface InstructorInfo {
  id: number;
  username: string;
  first_name: string;
  second_name: string;
}

export interface Course {
  url: string;
  id: number;
  course_code: string;
  title: string;
  description: string;
  duration: number; // e.g., in weeks or hours
  level: number;
  instructor: InstructorInfo;
}

export interface CourseApiRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: Course[];
}
