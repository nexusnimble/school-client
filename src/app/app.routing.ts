import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout-one/home-layout.component';
import { SchoolLayoutComponent } from './layouts/school-layout/school-layout.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
    //component: HomeLayoutComponent
  }, {
    path: 'school',
    component: SchoolLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/school-layout/school-layout.module').then(m => m.SchoolLayoutModule)
      }
    ]
  }, {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, 
  {
    path: "calendar",
    component: CalendarComponent
  },  
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
