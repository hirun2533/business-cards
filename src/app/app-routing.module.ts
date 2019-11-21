import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewBusinessCardComponent } from './new-business-card/new-business-card.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebcamComponent } from 'ngx-webcam';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ]},
  { path: 'businesscards', component: DashboardComponent, canActivate: [ AuthGuard ]},
  { path: 'new-businesscard', component: NewBusinessCardComponent, canActivate: [ AuthGuard ]},
  { path: 'update', component: UpdateComponent, canActivate: [AuthGuard]},
  { path: 'image', component: ImageComponent, canActivate: [AuthGuard]},
  { path: 'notFound', component:NotFoundComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

