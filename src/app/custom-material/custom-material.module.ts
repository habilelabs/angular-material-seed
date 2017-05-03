import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
//add only required modules
@NgModule({
  imports: [MdButtonModule, MdCheckboxModule],
  exports: [MdButtonModule, MdCheckboxModule],
})
export class CustomMaterialModule { }
