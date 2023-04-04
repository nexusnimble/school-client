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
            //this.onGradeSelection(data[0]);
            //this.onSectionSelection(data[0].sections[0])
        });
        
    }

    onGradeSelection(grade: any){
        this.selectedSections = [];
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
        });
    }

    toggleSelectAllSections() {
        if(this.selectedSections === this.sections){
            this.selectedSections = [];
        } else {
            this.selectedSections = this.sections;
        }
        this.onFilter.emit({ 
            selectedGrade: this.selectedGrade,
            selectedSections: this.selectedSections
        }); 
    }

}