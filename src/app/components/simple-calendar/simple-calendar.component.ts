import { Component, OnInit } from "@angular/core";
import { CalendarCreator } from "./calendar-creator.service";
import { Day } from "./day.model";

@Component({
  selector: "app-simple-calendar",
  templateUrl: "./simple-calendar.component.html",
  styleUrls: ["./simple-calendar.component.scss"],
  providers: [ CalendarCreator ]
})
export class SimpleCalendarComponent implements OnInit {
  public monthDays: Day[] | undefined;
  public cDays:any;
  public monthNumber!: number;
  public year!: number;

  public weekDaysName: any = [];

  constructor(public calendarCreator: CalendarCreator) {}

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());

    this.weekDaysName.push("Mo");
    this.weekDaysName.push("Tu");
    this.weekDaysName.push("We");
    this.weekDaysName.push("Th");
    this.weekDaysName.push("Fr");
    this.weekDaysName.push("Sa");
    this.weekDaysName.push("Su");
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth() : void{
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    const cDays = [];
    cDays.push(days.slice(0,7));
    cDays.push(days.slice(7,14));
    cDays.push(days.slice(14,21));
    cDays.push(days.slice(21,28));

    const lastWeek = days.slice(28);

    if(lastWeek.length){
      cDays.push(lastWeek);
    }
    
    
    
    this.cDays = cDays;
    

    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }
}
