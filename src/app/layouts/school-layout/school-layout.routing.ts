import { Routes } from '@angular/router';

import { StudentsComponent } from 'src/app/pages/students/students.component';
import { ClassesComponent } from 'src/app/pages/classes/classes.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { TeachersComponent } from 'src/app/pages/teachers/teachers.component';
import { AttendanceComponent } from 'src/app/pages/attendance/attendance.component';
import { HomeWorkComponent } from 'src/app/pages/home-work/home-work.component';
import { ExamsComponent } from 'src/app/pages/exams/exams.component';
import { FeesComponent } from 'src/app/pages/fees/fees.component';
import { ReportsComponent } from 'src/app/pages/reports/reports.component';
import { StudentDetailsComponent } from 'src/app/pages/students/student-details/student-details.component';
import { StudentFormComponent } from 'src/app/pages/students/student-form/student-form.component';

export const SchoolLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { 
        path: 'students', 
        children: [
            {
                path: '',
                component: StudentsComponent
            },
            {
                path: 'add',
                component: TeachersComponent
            },
            {
                path: 'create',
                component: StudentFormComponent
            },
            {
                path: ":id",
                component: StudentDetailsComponent
            },
            {
                path: "edit/:id",
                component: StudentFormComponent
            }        
        ] 
    },
    { path: 'classes', component:  ClassesComponent },
    { path: 'teachers', component: TeachersComponent},
    { path: 'attendance', component: AttendanceComponent },
    { path: 'home-work', component: HomeWorkComponent },
    { path: 'exams', component: ExamsComponent },
    { path: 'fees', component: FeesComponent },
    { path: 'reports', component: ReportsComponent },
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];
