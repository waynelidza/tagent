declare module namespace {

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

  export interface RootObject {
    user: User;
    position: Position;
    phone_number: string;
    email: string;
    github_user: string;
    birth_date: string;
    gender: string;
    race: string;
    years_worked: number;
    age: number;
    days_to_birthday: number;
  }

}

