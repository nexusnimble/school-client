import { Component } from "@angular/core";

@Component({
    selector: "app-home-work",
    templateUrl: "./home-work.component.html",
    styleUrls: ["./home-work.component.scss"]
})
export class HomeWorkComponent {
    selectedGrade: any;
    selectedSections: any;
    subjects = [
        { title: "maths" },
        { title: "science" },
        { title: "Social" },
        { title: "english" },
        { title: "telugu" },
        { title: "hindi" },
        { title: "drawing" }
    ];

    onFilter(data: any) {
        this.selectedGrade = data.selectedGrade;
        this.selectedSections = data.selectedSections;
  
        if(this.selectedGrade && this.selectedSections) {
            console.log("Came 1");
        }
    }  
}