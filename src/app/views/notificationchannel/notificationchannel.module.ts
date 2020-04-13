import { NgModule } from '@angular/core';
import { NotificationChannelRoutingModule } from './notificationchannel-routing.module';
import { Email } from './email.component';
import { Sms } from './sms.component';
import { CommonModule } from '@angular/common';




@NgModule({
  imports: [ NotificationChannelRoutingModule, CommonModule],
  declarations: [
      Email,
      Sms
  ]
})
export class NotificationChannelModule { }
