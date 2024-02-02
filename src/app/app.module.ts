import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { NavigationComponent } from './pages/common/navigation/navigation.component';
import { HomeAboutComponent } from './pages/home-about/home-about.component';
import { HomeHeaderComponent } from './pages/home-header/home-header.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { FamousProfilesComponent } from './pages/famous-profiles/famous-profiles.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReserveNameComponent } from './pages/reserve-name/reserve-name.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SuccessComponent } from './pages/success/success.component';
import { ProfileStepperComponent } from './pages/profile-stepper/profile-stepper.component';
import { GlobalSocialMediaComponent } from './pages/global-social-media/global-social-media.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { ProfileFieldsComponent } from "./pages/profile-fields/profile-fields.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        HomeHeaderComponent,
        HomeAboutComponent,
        BenefitsComponent,
        FamousProfilesComponent,
        ExploreComponent,
        FooterComponent,
        HomePageComponent,
        ReserveNameComponent,
        GlobalSocialMediaComponent,
        SuccessComponent,
        CreateProfileComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ProfileFieldsComponent
    ]
})
export class AppModule { }
