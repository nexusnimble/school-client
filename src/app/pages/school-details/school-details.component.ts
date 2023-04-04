import { Component } from "@angular/core";

@Component({
    selector: "app-school-details",
    templateUrl: "./school-details.component.html",
    styleUrls: ["./school-details.component.scss"]
})
export class SchoolDetailsComponent{
    detailSections = [
        { 
            id: "school-information",
            title: "school information" 
        },
        { 
            id: "contact-information",
            title: "contact information" 
        },
        { 
            id: "principal-information",
            title: "principal information" 
        },
    ]
    selectedSection = this.detailSections[0];

    onSelect(event: any, selectedSection: any){
        event.preventDefault();
        this.selectedSection = selectedSection;
    }
}