import { NgModule } from "@angular/core";
import { TransportComponent } from "./transport.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: TransportComponent }
        ]),
    ],
    declarations: [
        TransportComponent
    ],
    exports: []
})
export class TransportModule { }
