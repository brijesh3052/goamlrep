import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Configuration } from './configuration.component';
import { MessageLogs } from './messagelogs.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Interface Gateway'
    },
    children: [
      {
        path: '',
        redirectTo: 'configuration'
      },
      {
        path: 'configuration',
        component: Configuration,
        data: {
          title: 'Configuration'
        }
      },
      {
        path: 'messagelogs',
        component: MessageLogs,
        data: {
          title: 'Logs'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfaceGatewayRoutingModule { }
