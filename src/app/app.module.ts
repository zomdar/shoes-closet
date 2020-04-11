import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthGuard } from './auth.guard';
 
//angularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

//pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';

//containers
import { AddShoeContainerComponent } from './add-shoe/containers/add-shoe-container/add-shoe-container.component';
import { ShoesCardsContainerComponent } from './shoes-cards/containers/shoes-cards-container/shoes-cards-container.component';
import { NewsContainerComponent } from './news/containers/news-container/news-container.component';
import { NewReleaseShoeModalContainerComponent } from './news/new-release-shoe-modal/containers/new-release-shoe-modal-container/new-release-shoe-modal-container.component';

//components
import { AddShoeFormComponent } from './add-shoe/components/add-shoe-form/add-shoe-form.component';
import { DeleteShoeModalComponent } from './delete-shoe-modal/delete-shoe-modal.component';
import { NewsComponentComponent } from './news/components/news-component/news-component.component';
import { ShoesCardsComponentComponent } from './shoes-cards/components/shoes-cards-component/shoes-cards-component.component';
import { NewReleaseShoeModalComponent } from './news/new-release-shoe-modal/components/new-release-shoe-modal-component/new-release-shoe-modal-component.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './authentication/login/login.component';

//filter
import { FilterPipe } from './filter.pipe';
import { ShoesPageComponent } from './shoes-page/shoes-page-component/shoes-page.component';
import { ShoesPageContainerComponent } from './shoes-page/shoes-page-container/shoes-page-container.component';
import { AddLinksComponent } from './shoes-page/add-links/add-links-component/add-links.component';
import { AddLinksContainerComponent } from './shoes-page/add-links/add-links-container/add-links-container.component';
import { FooterComponent } from './footer/footer.component';


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
    NewsComponentComponent,
    NewReleaseShoeModalContainerComponent,
    NewReleaseShoeModalComponent,
    ShoesPageComponent,
    ShoesPageContainerComponent,
    ContactComponent,
    AboutComponent,
    AddLinksComponent,
    AddLinksContainerComponent,
    FooterComponent
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
    FlexLayoutModule
  ],
  entryComponents: [
    NewReleaseShoeModalContainerComponent,
    AddShoeContainerComponent,
    DeleteShoeModalComponent,
    LoginComponent,
    AddLinksContainerComponent
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
