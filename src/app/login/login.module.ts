import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MaterialModule } from '@angular/material';
@NgModule({
  imports: [FormsModule,CommonModule, RouterModule,MaterialModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})

export class LoginModule {
}
