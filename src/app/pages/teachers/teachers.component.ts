import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { TeachersService } from "src/app/services/teachers.service";

@Component({
    selector: "app-teachers",
    templateUrl: "./teachers.component.html",
    styleUrls: ["./teachers.component.scss"]
})
export class TeachersComponent implements OnInit, OnDestroy{
    teachers: any[] = [];
    columns = [{
        title: "Teacher's name"
    }, {
        title: "qualification"
    }, 
    {
        title: "phone"
    }, {
        title: "dob"
    }, {
        title: "address"
    }];    
    private sub: Subscription | undefined;
    constructor(
        private teachersService: TeachersService,
        config: NgbModalConfig, 
        private modalService: NgbModal,
        ){
            config.backdrop = 'static';
            config.size = 'lg';
            config.keyboard = false;
            config.scrollable = true;
        }
    
    ngOnInit(): void {
        this.sub = this.teachersService.getTeachers().subscribe((data) => {
            this.teachers = data;
        });
    }

    onAddTeacher(content: any){
        this.modalService.open(content);
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}