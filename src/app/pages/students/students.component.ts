import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { BehaviorSubject, combineLatest, debounceTime } from "rxjs";
import { StudentsService } from "src/app/services/students.service";

const SORT_CICLE = {
  '' : 'asc',
  'asc': 'desc',
  'desc': ''
}

type SORT_DIRECTION = '' | 'asc' | 'desc';

@Component({
    templateUrl: "./students.component.html",
    styleUrls: ["./students.component.scss"],
    providers: [NgbModalConfig, NgbModal],
})
export class StudentsComponent implements OnInit{
    @ViewChild('fileImportInput') fileImportInput: ElementRef | undefined;
    columns = [
        { title: 'Admission number' },
        { title: 'Student name', sortable: true },
        { title: 'Class' },
        { title: 'Section' },
        { title: 'Phone' },
        { title: 'Details' }
    ]
    
    students: any[] = [];
    newStudents: any[] = [];
    selectedGrade: any;
    selectedSections: any = [];
    csvRecords: any = [];
    //sortingOptions: any = {column: 'Student Name', direction: 1};
    
    focus = false;
    readonly searchQuery$ = new BehaviorSubject<string>("");
    private totalStudents: any[] = [];
    readonly sortOptions$ = new BehaviorSubject<{ 
      column: string, 
      direction : SORT_DIRECTION
    }>({ column: 'Student name', direction: '' }); 
 
    constructor(
      private ngxCsvParser: NgxCsvParser,
      config: NgbModalConfig, 
      private modalService: NgbModal,
      private studentsService: StudentsService
    ) {
      // customize default values of modals used by this component tree
		  config.backdrop = 'static';
      config.size = 'xl';
		  config.keyboard = false;
      config.scrollable = true;
    }

    ngOnInit(): void {
      combineLatest([this.searchQuery$, this.sortOptions$])
      .pipe(
        debounceTime(300)
      ).subscribe(data => {
        const query = data[0];
        const sortOptions = data[1];
        let students;
        if(query) {
          const pattern = new RegExp(query, 'i');
          students = this.totalStudents.filter((s) => pattern.test(s.surName) || pattern.test(s.firstName) || pattern.test(s.lastName) )
        } else {
          students = this.totalStudents;
        }

        if(sortOptions.direction !== '' && sortOptions.column === 'Student name' ){
          const direction = sortOptions.direction === 'desc' ? 1 : -1;
          students = students.sort((a, b) => {
            return a.surName < b.surName ? direction: -1 * direction;
          })
        }

        this.students = students;

      });

    }

    onFilter(data: any) {
      this.selectedGrade = data.selectedGrade;
      this.selectedSections = data.selectedSections;

      if(this.selectedGrade && this.selectedSections.length){
        this.studentsService.getStudents({
          selectedGrade: this.selectedGrade,
          selectedSections: this.selectedSections
        }).subscribe((data) => {
          this.students = data;
          this.totalStudents = data;
        });
      }
    }

    fileChangeListener($event: any, newStudentsModal: any): void {
      const files = $event.srcElement.files;
      this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',', encoding: 'utf8' })
        .pipe().subscribe({
          next: (result): void => {
            console.log('Result', result);
            this.csvRecords = result;
            console.log(this.csvRecords);
            this.newStudents = this.csvRecords;
            this.open(newStudentsModal);
          },
          error: (error: NgxCSVParserError): void => {
            console.log('Error', error);
          }
        });
    }

    onUploadStudents(){
      if(this.fileImportInput){
        this.fileImportInput.nativeElement.click();
      }
    }


    open(content: any) {
      this.modalService.open(content);
    }

    onSearch(e: Event){
      const query = (e.currentTarget as HTMLInputElement).value;
      this.searchQuery$.next(query);
    }

    onSort(column: any) {
      if(column.sortable === true){
        const sortOptions = this.sortOptions$.value;
          this.sortOptions$.next({
            ...sortOptions,
            direction: SORT_CICLE[sortOptions.direction] as SORT_DIRECTION
          });
        }
    }

}