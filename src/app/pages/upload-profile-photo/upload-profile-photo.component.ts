import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-upload-profile-photo',
  templateUrl: './upload-profile-photo.component.html',
  styleUrls: ['./upload-profile-photo.component.scss'],
  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class UploadProfilePhotoComponent {

}
