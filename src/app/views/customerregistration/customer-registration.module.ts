import { NgModule } from '@angular/core';
import { CustomerRegistrationRoutingModule } from './customer-registration-routing.module';
import { CustomerComponent } from './customer.component';
import { GroupComponent } from './groups.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CollapseModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserManagmentService } from '../../services/usermanagment.service';


@NgModule({
  imports: [ 
    CustomerRegistrationRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    CollapseModule,
    FormsModule
   ],
  declarations: [
      CustomerComponent,
      GroupComponent
  ],
  providers: [UserManagmentService]

})
export class CustomerRegistrationModule { }
