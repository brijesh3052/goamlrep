import { NgModule } from '@angular/core';
import { MessageConfigurationRoutingModule } from './msgconfig-routing.module';
import { MessageConfigurationEmail } from './msg-config-email.component';
import { MessageConfigurationSms } from './msg-config-sms.component';
import { UserManagmentService } from '../../services/usermanagment.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CollapseModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';





@NgModule({
  imports: [ 
    MessageConfigurationRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    CollapseModule,
    FormsModule ],
  declarations: [
      MessageConfigurationEmail,
      MessageConfigurationSms,
      
  ],
  providers: [UserManagmentService],
})
export class MessageConfigurationModule { }
