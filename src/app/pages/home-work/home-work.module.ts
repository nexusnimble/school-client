import { NgModule } from "@angular/core";
import { HomeWorkComponent } from "./home-work.component";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule.forChild([
            { path: '', component: HomeWorkComponent }
        ]),
    ],
    declarations: [
        HomeWorkComponent
    ],
    exports: []
})
export class HomeWorkModule { }
