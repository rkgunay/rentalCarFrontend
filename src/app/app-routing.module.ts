import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/list/:carId",pathMatch:"full", component:CarDetailsComponent},
  {path:"cars/brand/:brandId",  component:CarComponent},
  {path:"cars/color/:colorId",  component:CarComponent},
  {path:"cars/:colorId/:brandId", component:CarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
