import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AccountStatementGenerationRoutingModule } from './account-statement-generation-routing.module';
import { AccountStatementGeneration } from './account-statement-generation.component';




@NgModule({
  imports: [ AccountStatementGenerationRoutingModule],
  declarations: [
    AccountStatementGeneration
  ],
  providers: [],
})
export class AccountStatementGenerationModule { }
