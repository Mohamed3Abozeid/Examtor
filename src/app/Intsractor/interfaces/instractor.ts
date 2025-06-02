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
