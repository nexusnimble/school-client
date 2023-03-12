import { Injectable } from "@angular/core";
import { combineLatest, map, of } from "rxjs";
import { TeachersService } from "./teachers.service";


const CLASSES: any = [{
    "id": 1,
    "classNumber": 1,
    "className": "Nursery",
    "classTeacher": "",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 1
}, {
    "id": 2,
    "classNumber": 2,
    "className": "LKG",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 2
}, {
    "id": 3,
    "classNumber": 3,
    "className": "UKG",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 3
}, {
    "id": 4,
    "classNumber": 4,
    "className": "1st grade",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 4
}, {
    "id": 5,
    "classNumber": 5,
    "className": "2nd grade",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 5
}, {
    "id": 6,
    "classNumber": 6,
    "className": "3rd grade",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 6
}, {
    "id": 7,
    "classNumber": 7,
    "className": "4th grade",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 7
}, {
    "id": 8,
    "classNumber": 8,
    "className": "5th grade",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 8
}, {
    "id": 9,
    "classNumber": 9,
    "className": "6th grade",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 9
}, {
    "id": 10,
    "classNumber": 10,
    "className": "7th grade",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 10
}, {
    "id": 11,
    "classNumber": 11,
    "className": "8th grade",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 11
}, {
    "id": 12,
    "classNumber": 12,
    "className": "9th grade",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 12
}, {
    "id": 13,
    "classNumber": 13,
    "className": "10th grade",
    "sections": [{
        "id": 1,
        "title": "section 1",
        "feesDetails": {
            "1": 12000,
            "2": 13000
        }
    }, {
        "id": 1,
        "title": "section 2"
    }, {
        "id": 1,
        "title": "section 3"
    }, {
        "id": 1,
        "title": "section 4"
    }],
    "teacher": 1
}];

const FEES_TYPES = [
    { id: 1, type: 'School fee' },
    { id: 2, type: 'Tution fee' },
    { id: 3, type: 'Lab fee' },
    { id: 4, type: 'Transport fee' },
];

@Injectable({
    providedIn: "root"
})
export class SchoolConfigService {
    constructor(private teachersService: TeachersService){}
    getClasses(){
        return of(CLASSES);
    }

    getClassesWithTeachers(){
        return combineLatest([
                of(CLASSES),
                this.teachersService.getTeachers()
        ]).pipe(
            map(([classes, teachers]) => {
                const teachersMap: any = {};
                teachers.forEach((teacher: any) => {
                    teachersMap[teacher.id] = teacher.surName + " " + teacher.name;
                });

                classes = classes.map((c: any) => {
                    c.teacher = teachersMap[c.teacher];
                    return c;   
                });
                return { 
                    classes,
                    teachers
                }
            })
        )
    }
    getSections(classId: number){
        return of(
            CLASSES.find((c: any) => c.id === classId).sections
        )
    }
    getFeesTypes(){
        return of(FEES_TYPES);
    }

    getFeesDetails(filters: any){
        const classDetails = CLASSES.find((c: any) => c.id === filters.classId);
        const sectionDetails = classDetails.sections.find((s: any) => s.id === filters.sectionId);
        return sectionDetails.feesDetails;
    }
}
