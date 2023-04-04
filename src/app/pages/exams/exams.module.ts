import { NgModule } from "@angular/core";
import { ExamsComponent } from "./exams.component";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            { path: '', component: ExamsComponent }
        ]),
    ],
    declarations: [
        ExamsComponent
    ],
    exports: []
})
export class ExamsModule { }
