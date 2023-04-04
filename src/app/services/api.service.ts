import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class ApiService {
    constructor(private _httpClient: HttpClient){}
    getTeachers() {
        this._httpClient.get("https://4rf4meogg3.execute-api.ap-northeast-1.amazonaws.com/development/teachers").subscribe((data) => {
            console.log(data);
        })
    }
}