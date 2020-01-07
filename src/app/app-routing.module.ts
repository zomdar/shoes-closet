import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewsContainerComponent } from './news/containers/news-container/news-container.component';
import { ShoesPageContainerComponent } from './shoes-page/shoes-page-container/shoes-page-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },  
  { path: 'news', component: NewsContainerComponent },
  { path: 'login', component: UserProfileComponent },
  { path: 'shoes', component: ShoesPageContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
