import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { AlbumGalleryImage } from '../models/albumimage.model';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@Injectable()
export class AlbumimageService {

  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  getImages(): Observable<AlbumGalleryImage[]> {
    return this.db.list('/uploads');
  }

  getUploadedData(key: string) {
    return firebase.database().ref('uploads/' + key).once('value')
      .then((snap) => snap.val());
  }

}
