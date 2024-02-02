import {Component, NgModule, forwardRef} from '@angular/core';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { ProfileStepperComponent } from '../profile-stepper/profile-stepper.component';
import { CommonModule } from '@angular/common';
import { YourInfoComponent } from '../your-info/your-info.component';
import { VerifyOtpComponent } from '../verify-otp/verify-otp.component';
import { ProfileInfoComponent } from '../profile-info/profile-info.component';
import { UploadProfilePhotoComponent } from '../upload-profile-photo/upload-profile-photo.component';

@Component({
  selector: 'app-profile-fields',
  templateUrl: './profile-fields.component.html',
  styleUrls: ['./profile-fields.component.scss'],
  standalone: true,
  imports: [forwardRef(() => ProfileStepperComponent), 
    CdkStepperModule , 
    CommonModule, 
    ProfileInfoComponent,
    YourInfoComponent, 
    VerifyOtpComponent,
    UploadProfilePhotoComponent
  ]

})


export class ProfileFieldsComponent {

}





