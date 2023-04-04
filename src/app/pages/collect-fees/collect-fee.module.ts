import { NgModule } from "@angular/core";
import { CollectFeesComponent } from "./collect-fees.component";
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
            { path: '', component: CollectFeesComponent }
        ]),
    ],
    declarations: [
        CollectFeesComponent
    ],
    exports: []
})
export class CollectFeeModule { }
