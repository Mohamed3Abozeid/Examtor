export interface Department {
  id: number;
  title: string;
}

export interface Course {
  id: number;
  title: string;
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
