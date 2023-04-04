import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import {  NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

const ROUTES_CONFIG: any = {
   '/school/dashboard': {
      title: "dashboard",
      back: null
   },
   '/school/students': {
      title: 'students',
      back: null
   },
   '/school/attendance': {
      title: "attendance",
      back: null
    },
   '/school/home-work': {
      title: "home work",
      back: null
   },
   '/school/exams': {
      title: "exams",
      back: null
   },
   '/school/collect-fees': {
      title: "collect fee",
      back: null
   }, 
   '/school/transport': {
      title: "transport",
      back: null
   },
   '/school/sms': {
    title: "sms",
    back: null
 },

}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  public focus = false;
  public currentRoute: any;
  constructor(
    private router: Router
  ) {
  }
  ngOnInit(): void {
    console.log(this.router.url);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)  
    ).subscribe((event: any) => {
      console.log(event.url)
       this.currentRoute = ROUTES_CONFIG[event.url];
       console.log(this.currentRoute);
       if(!this.currentRoute){
        console.log("came")
        console.log(event.url)
          if(event.url.startsWith('/school/students/edit/')){
            this.currentRoute = {
              title: "back to students",
              back: {
                path: "/school/students"
              }
            }
          }
       }

       if(!this.currentRoute){
        this.currentRoute = {}
       }

    });  
  }

  onLinkClicked(event: any) {
    event.preventDefault();
    if(this.currentRoute && this.currentRoute.back){
      this.router.navigateByUrl(this.currentRoute.back.path);
    }
  }

}
