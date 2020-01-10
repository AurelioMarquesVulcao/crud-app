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
 

