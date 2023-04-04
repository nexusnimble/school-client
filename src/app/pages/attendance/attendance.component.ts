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
    allAttendance: boolean = false;
    private totalStudents: any[] = [];

    columns = [{
        title: "Student name"
    }, {
      title: "Parent / gardian"
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

        if(this.selectedGrade && this.selectedSections.length) {
          this.studentsService.getStudents({
            selectedGrade: this.selectedGrade,
            selectedSections: this.selectedSections
          }).subscribe(data => {
            this.students = data;
            this.totalStudents = data;
            this.allAttendance = false;
            this.onAllChange();
          });
        }
    }

    onAllChange() {
      this.allAttendance = !this.allAttendance;
      if(this.allAttendance){
        const attendance: any = {};
        this.students.forEach((s: any) => {
          attendance[s.id] = true;
        });
        this.attendance = attendance;
      } else {
        this.attendance = {};
      };
    }

    onAttendance(studentId: string){
      this.attendance[studentId] = !this.attendance[studentId];
    }

    onSearch(e: Event){
      const query = (e.currentTarget as HTMLInputElement).value;
      //this.searchQuery$.next(query);
    }

  
}