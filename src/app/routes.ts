import { Routes } from "@angular/router";
import { MusicgalleryComponent } from "../app/musicgallery/musicgallery.component";
import { MusicDetailComponent } from "../app/music-detail/music-detail.component";
import { LoginComponent } from "../app/login/login.component";
import { UploadComponent } from "../app/upload/upload.component";
import { AuthenticationGuard } from '../app/services/authenticationGuard.service';


export const appRoutes: Routes = [
    { path: 'gallery', component: MusicgalleryComponent, canActivate: [AuthenticationGuard] },
    { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard] },
    { path: 'image/:id', component: MusicDetailComponent, canActivate: [AuthenticationGuard] },
    { path: '', redirectTo: '/gallery', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];