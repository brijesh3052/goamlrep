import { NgModule } from '@angular/core';
import { ReportsRoutingModule } from './reports.routing.module';
import { GeneralReportsComponent } from './general-report.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatAutocompleteModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountStatementGeneration } from './account-statement-generation';

import { SelectDropDownModule } from 'ngx-select-dropdown'



@NgModule({
  imports: [
     ReportsRoutingModule,
     MatFormFieldModule,
     MatInputModule,
    MatAutocompleteModule,
    CommonModule,ReactiveFormsModule,
    FormsModule,
    SelectDropDownModule,

    ],
  declarations: [
    GeneralReportsComponent,
    AccountStatementGeneration
  ]
})
export class ReportModule { }
