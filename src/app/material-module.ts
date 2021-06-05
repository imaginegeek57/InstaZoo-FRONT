import {NgModule} from "@angular/core";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  exports: [
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatDividerModule
  ]

  })

export class MaterialModule {

}


