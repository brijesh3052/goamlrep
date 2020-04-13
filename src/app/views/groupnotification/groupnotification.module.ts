import { NgModule } from '@angular/core';
import { BulkEmail } from './bulkemail.component';
import { BulkSms } from './bulksms.component';
import { GroupNotificationRoutingModule } from './groupnotification-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { CommonModule } from '@angular/common';
import { UserManagmentService } from '../../services/usermanagment.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';




@NgModule({ 
  imports: [ 
    GroupNotificationRoutingModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),

   ],
   exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    GroupNotificationRoutingModule
,
  ],
  declarations: [
      BulkEmail,
      BulkSms
  ],
  providers: [UserManagmentService],
})
export class GroupNotificationModule { }
