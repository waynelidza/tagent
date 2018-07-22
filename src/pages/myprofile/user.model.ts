export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  is_staff: boolean;
}

export interface Position {
  id: number;
  name: string;
  level: string;
  sort: number;
}

export interface EmployeeNextOfKin {
  id: number;
  name: string;
  relationship: string;
  phone_number: string;
  email: string;
  physical_address: string;
  employee: number;
}

export interface EmployeeReview {
  id: number;
  date: string;
  salary: string;
  type: string;
}

export interface RootObject {
  id: number;
  user: User;
  position: Position;
  employee_next_of_kin: EmployeeNextOfKin[];
  employee_review: EmployeeReview[];
  id_number: string;
  phone_number: string;
  physical_address: string;
  tax_number: string;
  email: string;
  personal_email: string;
  github_user: string;
  birth_date: string;
  start_date: string;
  end_date?: any;
  id_document?: any;
  visa_document?: any;
  is_employed: boolean;
  is_foreigner: boolean;
  gender: string;
  race: string;
  years_worked: number;
  age: number;
  next_review: string;
  days_to_birthday: number;
  leave_remaining: string;
}


