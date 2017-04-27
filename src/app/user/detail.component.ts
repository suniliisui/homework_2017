import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ UserService ]
})
export class UserDetailComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean;
  public formErrors:any;

  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formErrors = this.userService.getUserformErrors();
    let id = +this.route.snapshot.params['id'];
    if(id){
      this.user = this.userService.getUser(id);
    }
    this.userForm = this.formBuilder.group({
      email: [this.user && this.user.email?this.user.email:'', [<any>Validators.required, <any>Validators.maxLength(5)]],
      first_name: [this.user && this.user.first_name?this.user.first_name:'', [<any>Validators.required, <any>Validators.maxLength(50)]],
      last_name: [this.user && this.user.last_name?this.user.last_name:'', [<any>Validators.required, <any>Validators.maxLength(50)]],
    });
  }

  save(model: User, isValid: boolean) {
    debugger;
    if (!isValid) {
       
    }
    console.log(model, isValid);
  }
}
