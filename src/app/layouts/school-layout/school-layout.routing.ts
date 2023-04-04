import { Routes } from '@angular/router';

export const SchoolLayoutRoutes: Routes = [
    { 
        path: 'dashboard', 
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule)  
    },
    { 
        path: 'students', 
        loadChildren: () => import('../../pages/students/students.module').then(m => m.StudentsModule)       
        /*
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
        */
    },
    { 
        path: 'school-details', 
        loadChildren: () => import('../../pages/school-details/school-details.module').then(m => m.SchoolaDetailsModule)    
    },
    { 
        path: 'classes', 
        loadChildren: () => import('../../pages/classes/classes.module').then(m => m.ClassesModule)
    },
    { 
        path: 'teachers',
        loadChildren: () => import('../../pages/teachers/teachers.module').then(m => m.TeachersModule)
    },
    { 
        path: 'attendance', 
        loadChildren: () => import('../../pages/attendance/attendance.module').then(m => m.AttendanceModule)
    },
    { 
        path: 'home-work', 
        loadChildren: () => import('../../pages/home-work/home-work.module').then(m => m.HomeWorkModule)
    },
    { 
        path: 'exams', 
        loadChildren: () => import('../../pages/exams/exams.module').then(m => m.ExamsModule) 
    },
    { 
        path: 'fees', 
        loadChildren: () => import('../../pages/fees/fees.module').then(m => m.FeesModule) 
    },
    { 
        path: 'transport', 
        loadChildren: () => import('../../pages/transport/transport.module').then(m => m.TransportModule)
    },
    { 
        path: 'sms', 
        loadChildren: () => import('../../pages/sms/sms.module').then(m => m.SmsModule)  
    },
    { 
        path: 'collect-fees',
        loadChildren: () => import('../../pages/collect-fees/collect-fee.module').then(m => m.CollectFeeModule)  
    },
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];
