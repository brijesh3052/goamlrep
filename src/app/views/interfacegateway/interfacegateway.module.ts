import { NgModule } from '@angular/core';
import { InterfaceGatewayRoutingModule } from './interfacegateway-routing.module';
import { Configuration } from './configuration.component';
import { MessageLogs } from './messagelogs.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [InterfaceGatewayRoutingModule, CommonModule, FormsModule, NgxPaginationModule, BsDropdownModule],
  declarations: [
    Configuration,
    MessageLogs
  ]
})
export class InterfaceGatewayModule { }
