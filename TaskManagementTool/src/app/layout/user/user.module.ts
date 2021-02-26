import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from './../../shared';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, UserRoutingModule, PageHeaderModule,ReactiveFormsModule],
    declarations: [UserComponent]
})
export class UserModule {}
