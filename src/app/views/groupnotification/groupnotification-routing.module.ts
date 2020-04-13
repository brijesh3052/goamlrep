import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulkEmail } from './bulkemail.component';
import { BulkSms } from './bulksms.component';


const routes: Routes = [

    {
    path: '',
    redirectTo: 'bulk-notification'
  },
  {
    path: 'bulk-notification',
    component: BulkEmail,
    data: {
      title: 'Bulk Notification'
    }
  },

  // {
  //   path: '',
  //   data: {
  //     title: 'Group Notification'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'bulkemail'
  //     },
  //     {
  //       path: 'bulkemail',
  //       component: BulkEmail,
  //       data: {
  //         title: 'bulkemail'
  //       }
  //     },
  //     {
  //       path: 'bulksms',
  //       component: BulkSms,
  //       data: {
  //         title: 'bulksms'
  //       }
  //     },

  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupNotificationRoutingModule {}
