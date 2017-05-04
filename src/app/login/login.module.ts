import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { CustomMaterialModule } from './../custom-material/index';
@NgModule({
  imports: [FormsModule,CommonModule, RouterModule, CustomMaterialModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})

export class LoginModule {
}
