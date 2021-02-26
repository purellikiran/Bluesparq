import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from './../../shared';

import { TasksListRoutingModule } from './tasks.list-routing.module';
import { TasksListComponent } from './tasks.list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, TasksListRoutingModule, PageHeaderModule,ReactiveFormsModule],
    declarations: [TasksListComponent]
})
export class TasksListModule {}
