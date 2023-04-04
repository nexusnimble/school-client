import { NgModule } from "@angular/core";
import { StudentsComponent } from "./students.component";
import { RouterModule } from "@angular/router";
import { AppCalendarModule } from "../calendar/calendar.module";
import { StudentFormComponent } from "./student-form/student-form.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        ReactiveFormsModule,
        AppCalendarModule,
        RouterModule.forChild([
            { path: '', component: StudentsComponent }
        ]),
    ],
    declarations: [
        StudentsComponent,
        StudentFormComponent,
        StudentDetailsComponent
    ],
    exports: [
        StudentsComponent,
        StudentFormComponent,
        StudentDetailsComponent
    ]
})
export class StudentsModule { }
