import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {

  users: User[] = [];

  private serverResponse = '{ "email": [ "can\'t be blank" ], "first_name": [ "can\'t be blank" ], "last_name": [ "can\'t be blank" ] }';
  private userDictionary = {
    1: '{ "id": 1, "buyer_id": 1, "first_name": "Fred", "last_name": "Flintstone", "email": "fred.flintstone@slaterockandgravel.com" }',
    2: '{ "id": 2, "buyer_id": 2, "first_name": "Barney", "last_name": "Rubble", "email": "barney.rubble@slaterockandgravel.com" }',
    3: '{ "id": 3, "buyer_id": 3, "first_name": "Wilma", "last_name": "Flintstone", "email": "wilma.flinstone@dailygranite.com" }'
  };

  constructor() { }


  getUsers() {
   this.users = JSON.parse( '[' + Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',') + ']');
  }

  getUser(id: number) {
    return JSON.parse(this.userDictionary[id]);
  }

  getUserformErrors() {
    return JSON.parse(this.serverResponse);
  }

  addUser(user: any, router: any) {
    const newUser: any = Object.assign({}, user);
    newUser.id = Object.keys(this.userDictionary).length + 1;
    newUser.buyer_id = Object.keys(this.userDictionary).length + 1;
    this.userDictionary[Object.keys(this.userDictionary).length + 1] = JSON.stringify(newUser);
    router.navigateByUrl('/users/' + newUser.id);
  }

  updateUser(user: any, id: number) {
    const newUser: any = Object.assign({}, user);
    newUser.id = id;
    newUser.buyer_id = id;
    this.userDictionary[id] = JSON.stringify(newUser);
  }

  private logError(error: any) {
    console.error('service found an error: ' + error);
  }

}
