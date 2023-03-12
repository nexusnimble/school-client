import { Component, OnInit } from "@angular/core";
import { SchoolConfigService } from "src/app/services/school-config";

@Component({
    selector: "app-fees",
    templateUrl: "./fees.component.html",
    styleUrls: ["./fees.component.scss"]
})
export class FeesComponent implements OnInit {
    feesTypes: any[] = [];
    isNewType: boolean = false;
    editableType: number | null = null;
    
    selectedGrade: any = null;
    selectedSections: any[] = [];

    constructor(private schoolConfigService: SchoolConfigService){}
    ngOnInit(): void {
        this.schoolConfigService.getFeesTypes().subscribe((feesTypes) => {
            this.feesTypes = feesTypes;
        });

    }

    onFilter(data: any){
        this.selectedGrade = data.selectedGrade;
        this.selectedSections = data.selectedSections;
        console.log(this.selectedGrade.classNumber);
        if(this.selectedGrade && this.selectedSections.length){
            //this.schoolConfigService.getFeesDetails({ classId : this.selectedGrade. })
        }
    }

    onAddFeeType(){
        this.isNewType = !this.isNewType;
    }

    addFeeType(newFeeType: any){
        const val = newFeeType.value
        if(val){
           this.feesTypes.push({
                id: 1,
                type: val
           });
           this.isNewType = false;
        }
    }

    onEdit(id: number){
        if(this.editableType === id){
            const elem = document.getElementsByClassName("updated-fee-type")[0] as HTMLInputElement;
            const updatedType = elem.value;
            if(updatedType){
                this.feesTypes = this.feesTypes.map((ft) => {
                    if(ft.id === id){
                        ft.type = updatedType
                    }
                    return ft;
                });
                this.editableType = null;    
            }
        } else {
            this.editableType = id;
        }
    }
}