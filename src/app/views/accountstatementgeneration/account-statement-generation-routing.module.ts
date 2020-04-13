import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountStatementGeneration } from './account-statement-generation.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'account-statement-generation'
  },
  {
    path: 'account-statement-generation',
    component: AccountStatementGeneration,
    data: {
      title: 'Account Statement Generation'
    }
  },

  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountStatementGenerationRoutingModule { }
