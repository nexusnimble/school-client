import { NgModule } from "@angular/core";
import { SchoolDetailsComponent } from "./school-details.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: SchoolDetailsComponent }
        ]),
    ],
    declarations: [
        SchoolDetailsComponent
    ],
    exports: []
})
export class SchoolaDetailsModule { }
