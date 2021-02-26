import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    constructor(public router: Router,private fb: FormBuilder,public httpClient: HttpClient) {}

    ngOnInit(): void {
      this.initForm();
    }
    initForm(): void {
        this.loginForm = this.fb.group({
          email: ['', [Validators.required,
          Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
          password: ['', Validators.required]
        });
      }
    
      isValidInput(fieldName): boolean {
        return this.loginForm.controls[fieldName].invalid &&
          (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
      }
    
      login(): void {
        console.log(this.loginForm.value);
        

        let data={};

        data['username'] = this.loginForm.value.email;
        data['password'] = this.loginForm.value.password;
        this.httpClient.post('http://localhost:3000/login',data).subscribe((res:any[])=>{
          console.log(res);
          if(res.length>0){
           localStorage.setItem('isLoggedin', 'true');
           let userData = res[0];
           localStorage.setItem('userData', JSON.stringify(userData));
            console.log(userData)

            if(userData.type ==='M')
              this.router.navigate(['manager/user']);

           else 
           this.router.navigate(['user/tasklist']);
             

         }
         else
           console.log('No Records')

          
          
      });
       

      }

  
}
