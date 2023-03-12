import { Component, ViewChild } from "@angular/core";
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { StudentsService } from "src/app/services/students.service";

@Component({
    selector: "app-attendance",
    templateUrl: "./attendance.component.html",
    styleUrls: ["./attendance.component.scss"]
})
export class AttendanceComponent {
    @ViewChild('fileImportInput') fileImportInput: any;
    @ViewChild('checkboxAll') chackAll: any;

    selectedGrade: any;
    selectedSections: any = [];
    attendance: any = {};
    students: any = [];
    columns = [{
        title: "Student name"
    }, {
      title: "Parent name"
    }, {
      title: "Date of birth"
    },    
    {
      title: "Address"
    }, {
      title: "Phone number"
    }];

    csvRecords: any = [];
    constructor(
      private ngxCsvParser: NgxCsvParser,
      private studentsService: StudentsService  
    ) {}

    fileChangeListener($event: any): void {
        const files = $event.srcElement.files;
    
        this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',', encoding: 'utf8' })
          .pipe().subscribe({
            next: (result): void => {
              this.csvRecords = result;
            },
            error: (error: NgxCSVParserError): void => {
              console.log('Error', error);
            }
          });
      }

    onFilter(data: any){
        this.selectedGrade = data.selectedGrade;
        this.selectedSections = data.selectedSections;

        if(this.selectedGrade && this.selectedSections.length){
          this.studentsService.getStudents().subscribe(data => {
            this.students = data.slice(0,10);
          });
          /*
          setTimeout(() => {
            this.chackAll.nativeElement.indeterminate = true;
          })
          */
        }
    }

    onCheckAll(){
      if(this.chackAll.nativeElement.checked){
          
      } else {

      }
    }

    onAllChange(event: any) {
      if(event.currentTarget.checked){
        const attendance: any = {};
        this.students.forEach((s: any) => {
          attendance[s.id] = true;
        });
        this.attendance = attendance;
      } else {
        this.attendance = {};
      };
    }
  
}