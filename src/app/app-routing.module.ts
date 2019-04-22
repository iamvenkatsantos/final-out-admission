import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatAllocComponent } from './seat-alloc/seat-alloc.component';
import { AdmissionComponent } from './admission/admission.component';
import { FrontComponent } from './front/front.component';
import { StaffComponent } from './staff/staff.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'',redirectTo:'front',pathMatch:'full'},
{path:'seat',component:SeatAllocComponent},
{path:'admin',component:AdmissionComponent},
{path:'front',component:FrontComponent},
{path:'staff',component:StaffComponent},
{path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
