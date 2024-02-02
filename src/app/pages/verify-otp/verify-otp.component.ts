import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss'],

  standalone: true,
  imports: [
    MaterialModule
  ]
})
export class VerifyOtpComponent {

}
