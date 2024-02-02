import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],

  standalone: true,
  imports: [
    MaterialModule
  ]
  
})
export class ProfileInfoComponent {

}
