import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountStatementGeneration } from './account-statement-generation';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reports'
    },
    children: [
      {
        path: '',
        redirectTo: 'account-statement-generation'
      },
      {
        path: 'account-statement-generation',
        component: AccountStatementGeneration,
        data: {
          title: 'Account Statment Generation'
        }
      },
      // {
      //   path: 'failed-notification-report',
      //   component: FailedNotificationReportComponent,
      //   data: {
      //     title: 'failed notification report'
      //   }
      // },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {}
