import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { StudentsService } from "src/app/services/students.service";

@Component({
    selector: "app-student-form",
    templateUrl: "./student-form.component.html",
    styleUrls: ["./student-form.component.scss"]
})
export class StudentFormComponent implements OnInit{
    student: any;
    studentForm = this.fb.group({
        surName: [''],
        firstName: [''],
        middleName: [''],
        lastName: [''],
        gender: [''],
        dob: [''],
        parentName: [''],
        phone: [''],
        address: [''],
        city: [''],
        state: [''],
        zip: ['']
      });

    isNew: boolean = true;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private studentsService: StudentsService
    ) { }

    ngOnInit(): void {
        const studentId = this.route.snapshot.paramMap.get('id') || '';

        if(studentId) {
            this.isNew = false;
            this.studentsService.getStudentById(studentId).subscribe((student) => {
                this.student = student;
                this.populateStudent(student);
            });
        } else {
            console.log("create");
        }
    }

    populateStudent(student: any){
        this.studentForm.setValue({
            surName: student.surName,
            firstName: student.firstName,
            middleName: student.middleName,
            lastName: student.lastName,
            gender: student.gender,
            dob: student.dateOfBirth,
            parentName: student.parentName,
            phone: student.phone,
            address: student.address,
            city: student.city,
            state: student.state,
            zip: student.zip
        });
    }

    onSubmit(){
        if(this.isNew){
            console.log("add student");
        } else {
            console.log("update student");
        }
    }

}