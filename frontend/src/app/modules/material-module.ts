import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";


const IMPORTS_EXPORTS:any [] = [
  MatButtonModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatExpansionModule,
  MatCheckboxModule
];
@NgModule({
  imports:[IMPORTS_EXPORTS],
  exports:[IMPORTS_EXPORTS],
  providers:[MatDatepickerModule]
})
export default class MaterialModule{}
