import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-home-layout",
    templateUrl: "./home-layout.component.html",
    styleUrls: ["./home-layout.component.scss"]
})
export class HomeLayoutComponent {

    features = [
        "Student Information System",
        "Fee Management",
        "Acadamics",
        "Attendance",
        "Teachers Management",
        "Transport",
        "Reports",
        "Parents Portal"
    ];

    benefits = [
        "Our ERP will save your time & efforts",
        "Grow your quality by adopting digitally",
        "No more hustle in keeping physical reports"
    ];

    clients = [
        'assets/client-1.png',
        'assets/client-2.png',
        'assets/client-3.png',
        'assets/client-4.png'
    ];
    reviews = [
        { 
            name: "Walter White",
            degignation:"Chief Executive Officer",
            review: "Explicabo voluptatem mollitia et repellat qui dolorum quasi"
        },
        { 
            name: "Sarah Jhonson",
            degignation:"Product Manager",
            review: "Aut maiores voluptates amet et quis praesentium qui senda para"
        },
        { 
            name: "William Anderson",
            degignation:"CTO",
            review: "Quisquam facilis cum velit laborum corrupti fuga rerum quia"
        },
        { 
            name: "Amanda Jepson",
            degignation:"Accountant",
            review: "Dolorum tempora officiis odit laborum officiis et et accusamus"
        }
    ];

    constructor( private router: Router){}
    goToLogin(){
        this.router.navigateByUrl("auth/login");
    }
}