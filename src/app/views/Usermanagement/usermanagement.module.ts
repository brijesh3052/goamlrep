import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './usermanagment-routing.module';
import { UserComponent } from './user.component';
import { UserRolesComponent } from './user-roles.component';
import { HttpClientModule } from '@angular/common/http';
import { UserManagmentService } from '../../services/usermanagment.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CollapseModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    UserManagementRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    CollapseModule,
    FormsModule
  ],
  declarations: [
    UserComponent,
    UserRolesComponent
  ],
  providers: [UserManagmentService],
})

export class UserManagementModule { }
