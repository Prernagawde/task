import { Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

export const routes: Routes = [
   {path:'',component:FirstpageComponent},
   {path:'secondpage/:name',component:SecondpageComponent}
]
  
