import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'bi-box-seam-fill text-primary', class: '' },
    { path: 'students', title: 'Students', icon: 'bi-person-fill text-primary',class: '' },
    { path: 'attendance', title: 'Attendance', icon: 'bi-check-circle-fill text-primary', class: '' },
    { path: 'home-work', title: 'Home work', icon: 'bi-pencil-fill text-primary', class: '' },
    { path: 'exams', title: 'Exams', icon: 'bi-journal-text text-primary', class: '' },
    { path: 'collect-fees', title: 'Collect fees', icon: 'bi-cash-stack text-primary', class: '' },
    { path: 'transport', title: 'Transport', icon: 'bi-bus-front-fill text-primary', class: '' },
    { path: 'sms', title: 'Sms', icon: 'bi-chat-dots-fill text-primary', class: '' },
];

export const SCHOOL_ROUTES: RouteInfo[] = [
  { path: 'school-details', title: 'School details', icon: 'bi-building-fill-gear text-primary', class: '' },
  { path: 'classes', title: 'Classes', icon: 'bi-book-half text-primary',class: '' },
  { path: 'teachers', title: 'Teachers', icon : 'bi-person-workspace text-primary', class: '' },
  { path: 'config-fees', title: 'Setup fees', icon: 'bi-cash text-primary', class: '' }
]


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[] = [];
  public schoolMenuItems: any[] = [];

  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES;
    this.schoolMenuItems = SCHOOL_ROUTES;
    /*
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   */
  }
}
