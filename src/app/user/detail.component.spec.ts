import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { UserDetailComponent } from './detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../account/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent, DashboardComponent, LogoutComponent ],
      imports: [ MaterialModule.forRoot(), RouterTestingModule, AppRoutingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'},{provide: UserService, useClass: UserService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test save, scenario:', () => {
    console.log(component.save);
    const user: any = {
      'id': 4,
      'buyer_id': 4,
      'first_name': 'test',
      'last_name': 'test',
      'email': 'test@test.com'
    };
    component.save(user, true);
    expect(component).toBeTruthy();
  });
});
