import { Component, OnInit, OnChanges } from '@angular/core';
import { AlbumimageService } from '../services/albumimage.service';
import { Observable } from 'rxjs/Observable';
import { AlbumGalleryImage } from '../models/albumimage.model';

@Component({
  selector: 'app-musicgallery',
  templateUrl: './musicgallery.component.html',
  styleUrls: ['./musicgallery.component.css']
})
export class MusicgalleryComponent implements OnInit, OnChanges {

  albumImages: Observable<AlbumGalleryImage[]>;
  constructor(private albumImageService: AlbumimageService) { }

  ngOnInit() {
    this.albumImages = this.albumImageService.getImages();
  }

  ngOnChanges() {
    this.albumImages = this.albumImageService.getImages();
  }

}
