import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'notification-channel',
        loadChildren: () => import('./views/notificationchannel/notificationchannel.module').then(m => m.NotificationChannelModule)
      },
      {
        path: 'message-configuration',
        loadChildren: () => import('./views/messageconfiguration/msgconfig.module').then(m => m.MessageConfigurationModule)
      },
      {
        path: 'user-management',
        loadChildren: () => import('./views/usermanagement/usermanagement.module').then(m => m.UserManagementModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./views/report/report.module').then(m => m.ReportModule)
      },
      {
        path: 'customer-registration',
        loadChildren: () => import('./views/customerregistration/customer-registration.module').then(m => m.CustomerRegistrationModule)
      },
      {
        path: 'bulk-notification',
        loadChildren: () => import('./views/groupnotification/groupnotification.module').then(m => m.GroupNotificationModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'account-statement-generation',
        loadChildren: () => import('./views/accountstatementgeneration/account-statement-generation.module').then(m => m.AccountStatementGenerationModule)
      },
      {
        path: 'interface-gateway',
        loadChildren: () => import('./views/interfacegateway/interfacegateway.module').then(m => m.InterfaceGatewayModule)
      },
      {
        path: 'job',
        loadChildren: () => import('./views/jobs/job.module').then(m => m.jobModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
