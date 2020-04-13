import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './groups.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customer Registration'
    },
    children: [
      {
        path: '',
        redirectTo: 'customers'
      },
      {
        path: 'customers',
        component: CustomerComponent,
        data: {
          title: 'customers'
        }
      },
      {
        path: 'groups',
        component: GroupComponent,
        data: {
          title: 'groups'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRegistrationRoutingModule {}
