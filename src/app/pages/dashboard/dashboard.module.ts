import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from "@angular/router";
import { AppCalendarModule } from "../calendar/calendar.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        AppCalendarModule,
        RouterModule.forChild([
            { path: '', component: DashboardComponent }
        ]),
    ],
    declarations: [
        DashboardComponent
    ],
    exports: []
})
export class DashboardModule { }
