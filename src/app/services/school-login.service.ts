import { Injectable } from "@angular/core";
import { delay, map, mergeMap, Observable, of, tap, throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SchoolLoginService {
    schoolLogin(creds: any): Observable<any>{
        const resp = {
            status: 400
        }
        if(creds.schoolName === "test-school-1" && creds.password === "password1234"){
            resp.status = 200;
        }

        return of(resp).pipe(
            delay(1000),
            map((data) => {
                if(data.status == 200){
                    return data;
                }
                throw "Error";
            })
        )
    }
}