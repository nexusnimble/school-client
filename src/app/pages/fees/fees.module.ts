import { NgModule } from "@angular/core";
import { FeesComponent } from "./fees.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            { path: '', component: FeesComponent }
        ]),
    ],
    declarations: [
        FeesComponent
    ],
    exports: []
})
export class FeesModule { }
