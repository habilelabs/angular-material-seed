import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
@NgModule({
  imports: [FormsModule,CommonModule, RouterModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})

export class LoginModule {
}
