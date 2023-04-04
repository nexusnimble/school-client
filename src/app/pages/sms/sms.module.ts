import { NgModule } from "@angular/core";
import { SmsComponent } from "./sms.component";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            { path: '', component: SmsComponent }
        ]),
    ],
    declarations: [
        SmsComponent
    ],
    exports: []
})
export class SmsModule { }
