import {Component, forwardRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {CdkStepper, CdkStepperModule} from '@angular/cdk/stepper';

@Component({
  selector: 'app-profile-stepper',
  templateUrl: './profile-stepper.component.html',
  styleUrls: ['./profile-stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: ProfileStepperComponent}],
  standalone: true,
  imports: [NgTemplateOutlet, CdkStepperModule],
})
export class ProfileStepperComponent extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
}
}






