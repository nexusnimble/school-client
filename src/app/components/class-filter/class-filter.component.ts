import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { SchoolConfigService } from "src/app/services/school-config";

@Component({
    selector: "app-class-filter",
    templateUrl: "./class-filter.component.html",
    styleUrls: ["./class-filter.component.scss"]
})
export class ClassFilter implements OnInit{
    @Output() onFilter = new EventEmitter<any>();

    grades: any[] = [];

    sections: any[] = [];

    selectedGrade: any;
    selectedSections: any = [];

    constructor(private schoolConfigService: SchoolConfigService){}

    ngOnInit(): void {
        this.schoolConfigService.getClasses().subscribe((data) => {
            this.grades = data;
        })
    }

    onGradeSelection(grade: any){
        if(!this.selectedGrade || this.selectedGrade.className !== grade.className){
            this.selectedGrade = grade;
            this.schoolConfigService.getSections(this.selectedGrade.id).subscribe(data => {
                this.sections = data;
            });
            this.onFilter.emit({ 
                selectedGrade: this.selectedGrade,
                selectedSections: this.selectedSections
            })
        }
    }

    onSectionSelection(section: any){
        if(this.selectedSections.find((s: any) => s.title === section.title )){
            this.selectedSections = this.selectedSections.filter((s: any) => s.title !== section.title );
        } else {
            this.selectedSections.push(section);
        }

        this.onFilter.emit({ 
            selectedGrade: this.selectedGrade,
            selectedSections: this.selectedSections
        })
    }

    onSelectAllSections() {
        this.selectedSections = this.sections;
    }

}