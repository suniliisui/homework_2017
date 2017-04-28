import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ ]
})
export class UserDetailComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean;
  public formErrors: any;

  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    // Fetching user form errors from service
    this.formErrors = this.userService.getUserformErrors();

    const id = +this.route.snapshot.params['id'];
    // fetch user model from user service
    if (id) {
      this.user = this.userService.getUser(id);
    }

    // Creating form group
    this.userForm = this.formBuilder.group({
      email: [this.user && this.user.email ? this.user.email : '', [<any>Validators.required, <any>Validators.maxLength(50)]],
      first_name: [this.user && this.user.first_name ? this.user.first_name : '', [<any>Validators.required, <any>Validators.maxLength(50)]],
      last_name: [this.user && this.user.last_name ? this.user.last_name : '', [<any>Validators.required, <any>Validators.maxLength(50)]],
    });
  }

  save(model: User, isValid: boolean) {
    const id = +this.route.snapshot.params['id'];
    if (isValid) {
      if (id) {
        // Call API to update user
        this.userService.updateUser(model, id);
      }else {
        // Call API to create user
        this.userService.addUser(model, this.router);
      }
    }
  }
}
