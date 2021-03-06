import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewMarsupilamiComponent } from './entity/marsupilami/add-new-marsupilami/add-new-marsupilami.component';
import { AddMarsupilamiComponent } from './entity/marsupilami/add/add-marsupilami.component';
import { EditMarsupilamiComponent } from './entity/marsupilami/edit/edit-marsupilami.component';
import { ListMarsupilamiComponent } from './entity/marsupilami/list/list-marsupilami.component';
import { LoginComponent } from './entity/marsupilami/login/login.component';
import { RegisterComponent } from './entity/marsupilami/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login/register',
    component: RegisterComponent
  },
  {
    path: 'marsupilami/addNewMarsupilami',
    component: AddNewMarsupilamiComponent
  },
  {
    path: 'marsupilami/add',
    component: AddMarsupilamiComponent
  }, 
  {
    path: 'marsupilami/edit',
    component: EditMarsupilamiComponent
  },
  {
    path: 'marsupilami/list',
    component: ListMarsupilamiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
