import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { MusicgalleryComponent } from './musicgallery/musicgallery.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { AuthenticationGuard } from './services/authenticationGuard.service';
import { AuthenticationService } from './services/authentication.service';
import { AlbumimageService } from './services/albumimage.service';
import { UploadService } from './services/upload.service';
import { appRoutes } from "./routes";
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MusicgalleryComponent,
    MusicDetailComponent,
    NavbarComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationGuard, AuthenticationService,AlbumimageService,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
