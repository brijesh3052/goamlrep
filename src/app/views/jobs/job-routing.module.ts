import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Jobs } from './job.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'job'
  },
  {
    path: 'job',
    component: Jobs,
    data: {
      title: 'Jobs'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
