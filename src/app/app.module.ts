import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './auth.guard';
 
//angularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

//pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';

//containers
import { AddShoeContainerComponent } from './containers/add-shoe-container/add-shoe-container.component';
import { ShoesCardsContainerComponent } from './shoes-cards/containers/shoes-cards-container/shoes-cards-container.component';
import { ShoesCardsComponentComponent } from './shoes-cards/components/shoes-cards-component/shoes-cards-component.component';

//components
import { AddShoeFormComponent } from './components/add-shoe-form/add-shoe-form.component';
import { DeleteShoeModalComponent } from './delete-shoe-modal/delete-shoe-modal.component';

//filter
import { FilterPipe } from './filter.pipe';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { NewsContainerComponent } from './news/containers/news-container/news-container.component';
import { NewsComponentComponent } from './news/components/news-component/news-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AddShoeContainerComponent,
    AddShoeFormComponent,
    DeleteShoeModalComponent,
    FilterPipe,
    ShoesCardsContainerComponent,
    ShoesCardsComponentComponent,
    DashboardComponent,
    UserProfileComponent,
    LoginComponent,
    NewsContainerComponent,
    NewsComponentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddShoeContainerComponent,
    DeleteShoeModalComponent,
    LoginComponent
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
