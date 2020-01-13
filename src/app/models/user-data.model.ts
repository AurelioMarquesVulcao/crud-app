// Allows you to search the list of users,
//and details like photo, email and full name.
export class User {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;

  getName() {
    return `${this.first_name} ${this.last_name}`;
  }
}

export interface Data {
  page: number;
  per_page: number;
  total_pages: number;
  total: number;
  data: User[];
}

// To use the api, update, delete and create
export class Usernamejob {
  name: string;
  job: string;
  id: number;
  createdat: any;
}
