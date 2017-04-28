import { TestBed, inject } from '@angular/core/testing';

import { UserService} from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      providers: [UserService]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('#getUsers should populate users array',
    inject([UserService], (service: UserService) => {
    service.getUsers();
    expect(service.users[0].id).toEqual(1);
  }));

  it('#getUser should return a single user',
    inject([UserService], (service: UserService) => {
    const user = service.getUser(1);
    expect(user.id).toEqual(1);
  }));

  it('#getUserformErrors should return error responses',
    inject([UserService], (service: UserService) => {
    const user = service.getUserformErrors();
    expect(user.email).toEqual([ "can\'t be blank" ]);
  }));

  it('#addUser should add a user to the userDictionary',
    inject([UserService], (service: UserService) => {
    const user: any = {
      'id': 4,
      'buyer_id': 4,
      'first_name': 'test',
      'last_name': 'test',
      'email': 'test@test.com'
    };

    const router: any = {
      navigateByUrl: function(){
        return true;
      }
    };
    service.addUser(user, router);
    const newUser = service.getUser(4);
    expect(newUser.email).toEqual('test@test.com');
  }));

  it('#updateUser should update an user',
    inject([UserService], (service: UserService) => {
      const user: any = {
        'id': 2,
        'buyer_id': 2,
        'first_name': 'test',
        'last_name': 'test',
        'email': 'test@test.com'
      };
      service.updateUser(user, 2);
      const newUser = service.getUser(2);
      expect(newUser.email).toEqual('test@test.com');
    }));
});
