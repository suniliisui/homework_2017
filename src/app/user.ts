export class User {
  id: string;
  buyer_id: string;
  first_name: string;
  last_name: string;
  email: string;

  constructor(id: string, first_name: string, last_name: string, email: string = null) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
  }
}
