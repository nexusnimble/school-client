import { Component, OnInit } from "@angular/core";
import { NgbModalConfig, NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ExamsService } from "src/app/services/exams.service";

@Component({
    selector: "app-exams",
    templateUrl: "./exams.component.html",
    styleUrls: ["./exams.component.scss"]
})
export class ExamsComponent implements OnInit {
    selectedSubject:any = {};
    exams: any = [];
    subjects = [
        { title: "maths" },
        { title: "science" },
        { title: "social" },
        { title: "english" },
        { title: "telugu" },
        { title: "hindi" },
        { title: "drawing" }
    ];

    modalRef: any;
    constructor(
        config: NgbModalConfig, 
        private modalService: NgbModal,
        private examsService: ExamsService
    ){
        config.backdrop = 'static';
        config.size = 'lgx';
        config.keyboard = false;
        config.scrollable = true;
    }

    ngOnInit(): void {
        this.examsService.getExams().subscribe((exams: any) => {
            this.exams = exams;
        })
    }

    onCreateExam(content: any){
        this.modalRef = this.modalService.open(content)
    }

    onClose(){
        console.log("came");
        //this.modalRef.close();
    }

    onFilter(data: any){
        console.log(data);
    }

    onSubjectSelection(subject: any){
        this.selectedSubject = subject;
    }
}