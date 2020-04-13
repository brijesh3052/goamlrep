import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageConfigurationEmail } from './msg-config-email.component';
import { MessageConfigurationSms } from './msg-config-sms.component';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'message-configuration'
  },
  {
    path: 'message-configuration',
    component: MessageConfigurationEmail,
    data: {
      title: 'Message Configuration'
    }
  },
  // {
  //   path: '',
  //   data: {
  //     title: 'Message Configuration'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'msg-config-email'
  //     },
  //     {
  //       path: 'msg-config-email',
  //       component: MessageConfigurationEmail,
  //       data: {
  //         title: 'Message Configuration Email'
  //       }
  //     },
  //     {
  //       path: 'msg-config-sms',
  //       component: MessageConfigurationSms,
  //       data: {
  //         title: 'Message Configuration Sms'
  //       }
  //     },

  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageConfigurationRoutingModule {}
