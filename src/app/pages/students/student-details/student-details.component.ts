import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StudentsService } from "src/app/services/students.service";

@Component({
    selector: "app-student-details",
    templateUrl: "./student-details.component.html",
    styleUrls: ["./student-details.component.scss"]
})
export class StudentDetailsComponent implements OnInit{
    studentDetails: any = {};
    constructor(
        private studentsService: StudentsService,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        const studentId = this.route.snapshot.paramMap.get('id') || '';
        this.studentsService.getStudentById(studentId).subscribe((studentDetails) => {
            console.log(studentDetails);
            this.studentDetails = studentDetails;
        });
    }
}