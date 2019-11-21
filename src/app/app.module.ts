import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { NewBusinessCardComponent } from './new-business-card/new-business-card.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { BusinesscardsService } from './businesscards.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { WebcamModule } from 'ngx-webcam';
import { HttpClient } from 'selenium-webdriver/http';
import { ImageService } from './image.service';
import {RouterModule,Routes} from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ImageComponent } from './image/image.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      LogoutComponent,
      ProfileComponent,
      DashboardComponent,
      BusinessCardComponent,
      BusinessCardsComponent,
      NewBusinessCardComponent,
      UpdateComponent,
      NotFoundComponent,
      ImageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      // RouterModule.forRoot(routes), 
      AngularFireModule.initializeApp(environment.config),
      AngularFireAuthModule,
      AngularFirestoreModule,
      WebcamModule,
   ],
   providers: [
      BusinesscardsService,
      ImageService,
      AuthService,
      AuthGuard
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
