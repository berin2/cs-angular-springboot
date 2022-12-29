import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgModule} from "@angular/core";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";

const IMPORTS_EXPORTS:any [] = [
  NgbCollapseModule
];
@NgModule({
  imports:[IMPORTS_EXPORTS],
  exports:[IMPORTS_EXPORTS]
})
export default class BootstrapModule {}
