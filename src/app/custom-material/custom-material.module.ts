/**
 * this module is intended to be included only required componants from angular material library
 */
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
// add only required modules
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule]
})
export class CustomMaterialModule { }
