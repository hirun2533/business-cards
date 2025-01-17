import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string;
  phone

  constructor(public authService: AuthService) {
    this.email =  this.authService.getEmail().email;
  
   }

  ngOnInit() {
    
  }

}
