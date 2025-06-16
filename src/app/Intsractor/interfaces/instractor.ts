export interface Instructor {
  url: string;
  id: number;
  username: string;
  email: string;
  first_name: string;
  second_name: string;
  third_name: string;
  fourth_name: string;
  last_name: string;
  gender: string;
  birth_date: string;
  city: string;
  address: string;
  phone: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  date_joined: string;
  user_type: number;
  specialized_in: string;
}

export interface InstructorsApiRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: Instructor[];
}
export interface InstructorData {
  // Required Fields
  username: string; // Must be unique
  email: string; // Must be unique
  password: string;
  first_name: string;
  second_name: string;
  gender: 'm' | 'f';
  birth_date: string; // ISO format: YYYY-MM-DD
  user_type: 1 | 2 | 3; // 1 => Admin, 2 => Instructor, 3 => Student
  specialized_in: string;

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
