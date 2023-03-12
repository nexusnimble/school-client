import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ExamsService {
    getExams(){
        return of([
            { 
                className: "1st grade",
                section: "Section 1",
                subject: "Maths",
                date: "12-03-2023",
                startTime: { hours: 2, minutes: 30, meridiem: "PM" },
                endTime: { hours: 3, minutes: 30, meridiem: "PM" }
            }
        ])
    }
}