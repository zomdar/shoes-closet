import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
//angularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//containers
import { AddShoeContainerComponent } from './containers/add-shoe-container/add-shoe-container.component';
import { AddShoeFormComponent } from './components/add-shoe-form/add-shoe-form.component';
import { DeleteShoeModalComponent } from './delete-shoe-modal/delete-shoe-modal.component';

//components

//service


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AddShoeContainerComponent,
    AddShoeFormComponent,
    DeleteShoeModalComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddShoeContainerComponent,
    DeleteShoeModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
