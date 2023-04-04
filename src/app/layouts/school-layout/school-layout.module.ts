import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SchoolLayoutRoutes } from './school-layout.routing';
import { SimpleCalendarComponent } from 'src/app/components/simple-calendar/simple-calendar.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SchoolLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxCsvParserModule,
    NgbModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [
    SimpleCalendarComponent,
  ]
})

export class SchoolLayoutModule {}
