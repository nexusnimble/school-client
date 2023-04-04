import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

const TEACHERS = [
    {
      "id": "1",
      "surName": "Lancaster",
      "name": "Sharp",
      "gender": "male",
      "phone": "9834822222",
      "address": {
        "street": "",
        "city": "",
        "state": "",
        "zip": ""
      },     
      "dateOfBirth": "2021-12-23",
      "qualification": "BTech"
    },
    {
      "id": "2",
      "surName": "Walls",
      "name": "Owens",
      "gender": "male",
      "phone": "8905203069",
      "address": "461 Bragg Street, Interlochen, Vermont, 4992",
      "dateOfBirth": "2020-02-03",
      "qualification": "Msc"
    },
    {
      "id": "3",
      "surName": "Munoz",
      "name": "Petersen",
      "gender": "male",
      "phone": "9324992867",
      "address": "819 Battery Avenue, Martinez, Maine, 6199",
      "dateOfBirth": "2020-12-14",
      "qualification": "Msc"
    },
    {
      "id": "4",
      "surName": "Pratt",
      "name": "Juanita",
      "gender": "female",
      "phone": "9674173997",
      "address": "188 Hubbard Street, Shindler, South Carolina, 9091",
      "dateOfBirth": "2016-01-07",
      "qualification": "Msc"
    },
    {
      "id": "5",
      "surName": "Robertson",
      "name": "Eva",
      "gender": "female",
      "phone": "8824672235",
      "address": "459 Montague Street, Spelter, Maryland, 5061",
      "dateOfBirth": "2018-02-26",
      "qualification": "Msc"
    },
    {
      "id": "6",
      "surName": "Shaffer",
      "name": "Michael",
      "gender": "male",
      "phone": "9225982083",
      "address": "777 Ralph Avenue, Zortman, Massachusetts, 6478",
      "dateOfBirth": "2014-08-21",
      "qualification": "Msc"
    },
    {
      "id": "7",
      "surName": "Mcdowell",
      "name": "Sykes",
      "gender": "male",
      "phone": "9494352866",
      "address": "917 Baltic Street, Robinson, Wisconsin, 5336",
      "dateOfBirth": "2018-12-21",
      "qualification": "MA"
    },
    {
      "id": "8",
      "surName": "Pickett",
      "name": "Liza",
      "gender": "female",
      "phone": "9895232887",
      "address": "567 Wortman Avenue, Cashtown, Tennessee, 9333",
      "dateOfBirth": "2015-05-12",
      "qualification": "MTech"
    },
    {
      "id": "9",
      "surName": "Foster",
      "name": "Buchanan",
      "gender": "male",
      "phone": "8454532952",
      "address": "148 Canarsie Road, Wakarusa, Kentucky, 4119",
      "dateOfBirth": "2015-06-29",
      "qualification": "BTech"
    },
    {
      "id": "10",
      "surName": "Moore",
      "name": "Durham",
      "gender": "male",
      "phone": "9995273098",
      "address": "156 Euclid Avenue, Naomi, Virgin Islands, 7061",
      "dateOfBirth": "2016-11-27",
      "qualification": "Msc"
    },
    {
      "id": "11",
      "surName": "Rodgers",
      "name": "Gutierrez",
      "gender": "male",
      "phone": "8874262894",
      "address": "205 Madison Place, Wescosville, New Mexico, 8720",
      "dateOfBirth": "2014-11-30",
      "qualification": "Msc"
    },
    {
      "id": "12",
      "surName": "Dennis",
      "name": "Baldwin",
      "gender": "male",
      "phone": "8775043298",
      "address": "845 Perry Terrace, Jackpot, Connecticut, 9284",
      "dateOfBirth": "2014-02-16",
      "qualification": "MTech"
    }

]

@Injectable({
    providedIn: "root"
})
export class TeachersService {
    getTeachers(): Observable<any>{
        return of(TEACHERS)
    }
}