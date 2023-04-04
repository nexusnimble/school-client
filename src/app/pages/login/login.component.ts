import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolLoginService } from 'src/app/services/school-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  isSubmitted = false;
  isCredError = false;
  isLoading = false;

  constructor(
    private fb: FormBuilder, private router: Router,
    private schoolLoginService: SchoolLoginService) { }

  schoolLoginForm = this.fb.group({
    schoolName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit() {
  }

  onSchoolLogin() {
    this.isSubmitted = true;
    if(this.schoolLoginForm.valid){
      this.isLoading = true;
      this.schoolLoginService.schoolLogin(this.schoolLoginForm.value).subscribe(
        {
          next: (data) => {
            this.router.navigateByUrl("/school");    
          },
          error: () => {
            this.isCredError = true;
            this.isLoading = false;
          },
          complete: () => {
            this.isLoading = false;
          }
        }
      )
    }
  }

  ngOnDestroy() {
  }

}
