import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarComponent } from './calendar.component';


@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  declarations: [
    CalendarComponent,
    CalendarHeaderComponent
  ],
  providers: [],
  exports:[
    CalendarComponent,
    CalendarHeaderComponent
  ]
})
export class AppCalendarModule { }
