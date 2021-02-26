import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    animations: [routerTransition()]
})
export class UserComponent implements OnInit {
    userForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,public httpClient: HttpClient) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.minLength(10)]],
            address: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.userForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }

        // display form values on success
        var passwordStr = Math.random().toString(36).slice(-8);
        this.userForm.value.password = passwordStr;
        this.userForm.value.type = 'U';
        this.userForm.value.status = 1;

        this.httpClient.post('http://localhost:3000/add_user',this.userForm.value).subscribe((res)=>{

            //console.log(res);
            this.submitted = false;
            this.userForm.reset();
    });

        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));
    }

    onReset() {
       
    }
}
