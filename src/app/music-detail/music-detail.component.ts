import { Component, OnInit, OnChanges } from '@angular/core';
import { AlbumimageService } from '../services/albumimage.service';
import { ActivatedRoute } from '@angular/router';
import { AlbumGalleryImage } from '../models/albumImage.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  private imageUrl = '';
  description: string;

  constructor(private imageService: AlbumimageService,
    private route: ActivatedRoute) { }

  getImageUrl(key: string) {
    this.imageService.getUploadedData(key)
      .then(image => this.imageUrl = image.url);
  }

  getImageDescription(key: string) {
    this.imageService.getUploadedData(key)
      .then(image => this.description = image.description);
  }

  ngOnInit() {
    debugger;
    this.getImageUrl(this.route.snapshot.params['id']);
    this.getImageDescription(this.route.snapshot.params['id']);
    //this.description = this.imageService.getDescription(this.route.snapshot.params['id']);
  }
}