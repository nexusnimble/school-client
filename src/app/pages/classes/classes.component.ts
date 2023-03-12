import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";
import { NgbModalConfig, NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { SchoolConfigService } from "src/app/services/school-config";

@Component({
    selector: "app-classes",
    templateUrl: "./classes.component.html",
    styleUrls: ["./classes.component.scss"]
})
export class ClassesComponent implements  OnInit{

    @ViewChild('newSectionInput') newSectionInput: ElementRef | undefined;
    
    classes: any = [];
    teachers: any = [];
    sections: any = [];
    newSection: boolean = false;

    classForm = this.fb.group({
        className: [''],
        sections: this.fb.array([ ]),
        teacher: ['']
    });

    constructor(
        config: NgbModalConfig, 
        private modalService: NgbModal,
        private schoolService: SchoolConfigService,
        private fb: FormBuilder
    ){
        config.backdrop = 'static';
        config.size = 'sm';
        config.keyboard = false;
        config.scrollable = true;
    }
    ngOnInit(): void {
        this.schoolService.getClassesWithTeachers().subscribe((data: any) => {
            this.classes = data.classes;
            this.teachers = data.teachers;
        });
    }

    onAddClass(content: any){
        this.modalService.open(content);
    }

    onNewSection(){
        this.newSection = true;
        setTimeout(() => {
            const elem = document.getElementById("new-section-input");
            elem?.focus();
            //this.newSectionInput?.nativeElement.focus();
        }, 100);
    }

    onCloseNewSection(){
        this.newSection = false;
    }

    onNewSectionEnter(event: Event){

        const newSectionValue = (event.currentTarget as HTMLInputElement).value.trim();
        if(newSectionValue){
            this.newSection = false;
            this.sections.push({ title: newSectionValue });
        };
    }

    onSectionRemove(section: any){
        this.sections = this.sections.filter((s: any) => s.title !== section.title);
    }
 
    onClassSubmit(c: any){
        console.log("submitted");
    }
}