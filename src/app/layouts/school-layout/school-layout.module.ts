import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsComponent } from 'src/app/pages/students/students.component';
import { ClassFilter } from 'src/app/components/class-filter/class-filter.component';
import { AttendanceComponent } from 'src/app/pages/attendance/attendance.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { TeachersComponent } from 'src/app/pages/teachers/teachers.component';
import { TeacherFormComponent } from 'src/app/pages/teachers/teacher-form/teacher-form.component';
import { ClassesComponent } from 'src/app/pages/classes/classes.component';
import { HomeWorkComponent } from 'src/app/pages/home-work/home-work.component';
import { ExamsComponent } from 'src/app/pages/exams/exams.component';
import { FeesComponent } from 'src/app/pages/fees/fees.component';
import { StudentDetailsComponent } from 'src/app/pages/students/student-details/student-details.component';
import { SchoolLayoutRoutes } from './school-layout.routing';
import { StudentFormComponent } from 'src/app/pages/students/student-form/student-form.component';
import { SimpleCalendarComponent } from 'src/app/components/simple-calendar/simple-calendar.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SchoolLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxCsvParserModule,
    NgbModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    StudentsComponent,
    ClassFilter,
    AttendanceComponent,
    TeachersComponent,
    TeacherFormComponent,
    ClassesComponent,
    HomeWorkComponent,
    ExamsComponent,
    FeesComponent,
    StudentDetailsComponent,
    StudentFormComponent,
    SimpleCalendarComponent
    ]
})

export class SchoolLayoutModule {}
