import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import * as firebase from 'firebase/app'
import { UserInfo } from 'firebase/app';

interface User {

  emailVerified: boolean
  providerData: UserInfo[];
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
  uid: string;
  email: string; 
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: Observable<User>;
  text: string;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = afAuth.authState;
   }

   getEmail(): any {
    return firebase.auth().currentUser;
  
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }


   login(username: string, password: string) {this.afAuth.auth.signInWithEmailAndPassword(username, password).then(value => {
      localStorage.setItem('username', 'user');
      this.text = '';
      console.log('logIN???!!!');
      this.router.navigate(['/businesscards']);
    }).catch(err => {this.text = 
      'Username or Password is not correct Please try again'; });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('username');this.router.navigate(['/login']);
      console.log('logout???!!!');
    });
  }
  

}
