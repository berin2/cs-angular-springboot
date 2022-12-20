import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


const IMPORTS_EXPORTS:any [] = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];
@NgModule({
  imports:[IMPORTS_EXPORTS],
  exports:[IMPORTS_EXPORTS]
})
export default class MaterialModule{}
