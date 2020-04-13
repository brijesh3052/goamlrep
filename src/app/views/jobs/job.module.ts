import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Jobs } from './job.component';
import { JobsRoutingModule } from './job-routing.module';

@NgModule({
  imports: [ JobsRoutingModule],
  declarations: [
    Jobs
  ],
  providers: [],
})
export class jobModule { }
