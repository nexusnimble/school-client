import { Component } from "@angular/core";

@Component({
    selector: "app-sms",
    templateUrl: "./sms.component.html",
    styleUrls: ["./sms.component.scss"]
})
export class SmsComponent {

    selectedGrade: any;
    selectedSections: any = [];

    onFilter(data: any){
        this.selectedGrade = data.selectedGrade;
        this.selectedSections = data.selectedSections;
    }
}