import { Component } from "@angular/core";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
    birtdays = [
        {
            name: "Carlson Josefa Alford",
            birthDay: "11/11/2019",
            class: {
                name: "1",
                section: "section 1"
            }
        },
        {
            name: "Dickson Esther Mosley",
            birthDay: "11/11/2019",
            class: {
                name: "1",
                section: "section 1"
            }
        },
        {
            name: "Hopper Kitty Schneider",
            birthDay: "11/11/2019",
            class: {
                name: "1",
                section: "section 1"
            }
        },
        {
            name: "Maxwell Debbie West",
            birthDay: "11/11/2019",
            class: {
                name: "1",
                section: "section 1"
            }
        }
    ]
}