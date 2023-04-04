import { NgModule } from "@angular/core";
import { AttendanceComponent } from "./attendance.component";
import { RouterModule } from "@angular/router";
import { AppCalendarModule } from "../calendar/calendar.module";
import { ComponentsModule } from "src/app/components/components.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        AppCalendarModule,
        ComponentsModule,
        RouterModule.forChild([
            { path: '', component: AttendanceComponent }
        ]),
    ],
    declarations: [
        AttendanceComponent
    ],
    exports: []
})
export class AttendanceModule { }
