import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from './../../shared';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, TaskRoutingModule, PageHeaderModule,ReactiveFormsModule],
    declarations: [TaskComponent]
})
export class TaskModule {}
