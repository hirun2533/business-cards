import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<User>;
  Templogin: FormGroup;
  text: string;


  constructor(
    public builder: FormBuilder,public router: Router,public authService: AuthService,public afAuth: AngularFireAuth,   
  ) { 
    this.text ='';
    this.user = afAuth.authState;
  }
  login() {
    this.authService.login(
    this.Templogin.value.username, this.Templogin.value.password);
  }

  ngOnInit() {
    this.Templogin = this.builder.group({username: ['', Validators.required],  
    password: ['', Validators.required]
    });
  }
 
}
