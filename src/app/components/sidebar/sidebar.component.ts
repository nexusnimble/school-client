import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: 'students', title: 'Students', icon: 'ni-single-02 text-primary',class: '' },
    { path: 'classes', title: 'Classes', icon: 'ni-tablet-button text-primary',class: '' },
    { path: 'teachers', title: 'Teachers', icon : 'ni-hat-3 text-primary', class: '' },
    { path: 'parents', title: 'Parents', icon : 'ni-circle-08 text-primary', class: '' },
    { path: 'attendance', title: 'Attendance', icon: 'ni-check-bold text-primary', class: '' },
    { path: 'home-work', title: 'Home work', icon: 'ni-ruler-pencil text-primary', class: '' },
    { path: 'exams', title: 'Exams', icon: 'ni-hat-3 text-primary', class: '' },
    { path: 'fees', title: 'Fees', icon: 'ni-money-coins text-primary', class: '' },
    { path: 'reports', title: 'Transport', icon: 'ni-ungroup text-primary', class: '' },
    
   
    /*
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
    */
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[] = [];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
