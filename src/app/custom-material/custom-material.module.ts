/**
 * this module is intended to be included only required componants from angular material library
 */
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule} from '@angular/material';
// add only required modules
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule]
})
export class CustomMaterialModule { }
