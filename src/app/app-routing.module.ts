import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReserveNameComponent } from './pages/reserve-name/reserve-name.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SuccessComponent } from './pages/success/success.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';

const routes: Routes = [
  {path: '' , component : HomePageComponent},
  {path: 'reserve-name' , component : ReserveNameComponent},
  {path: 'profile' , component : CreateProfileComponent},
  {path: 'success' , component : SuccessComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
