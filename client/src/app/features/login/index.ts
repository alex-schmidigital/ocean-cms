import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './login.routing';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login.component';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ]
})

export class LoginModule {}
