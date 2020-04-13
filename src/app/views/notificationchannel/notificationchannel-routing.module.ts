import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Email } from './email.component';
import { Sms } from './sms.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Notification Channel'
    },
    children: [
      {
        path: '',
        redirectTo: 'email'
      },
      {
        path: 'email',
        component: Email,
        data: {
          title: 'Email'
        }
      },
      {
        path: 'sms',
        component: Sms,
        data: {
          title: 'SMS'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationChannelRoutingModule {}
