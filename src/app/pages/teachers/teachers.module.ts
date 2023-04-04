import { NgModule } from "@angular/core";
import { TeachersComponent } from "./teachers.component";
import { RouterModule } from "@angular/router";
import { TeacherFormComponent } from "./teacher-form/teacher-form.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: TeachersComponent }
        ]),
    ],
    declarations: [
        TeachersComponent,
        TeacherFormComponent
    ],
    exports: []
})
export class TeachersModule { }
