import { NgModule } from "@angular/core";
import { ClassesComponent } from "./classes.component";
import { RouterModule } from "@angular/router";
import { AppCalendarModule } from "../calendar/calendar.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppCalendarModule,
        RouterModule.forChild([
            { path: '', component: ClassesComponent }
        ]),
    ],
    declarations: [
        ClassesComponent
    ],
    exports: []
})
export class ClassesModule { }
