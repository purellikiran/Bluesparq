import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators,FormArray,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    animations: [routerTransition()]
})
export class TaskComponent implements OnInit {
    taskForm: FormGroup;
    submitted = false;
     users:any=[];
     

    constructor(private formBuilder: FormBuilder,public httpClient: HttpClient) { }

    ngOnInit() {
        this.taskForm = this.formBuilder.group({
            taskName: ['', Validators.required],
            taskDescription: ['', Validators.required],
            priority: ['', Validators.required],
            targetDate: ['', Validators.required],
            users: ['', Validators.required]
            
        });

        this.httpClient.get('http://localhost:3000/users').subscribe((res)=>{
            console.log(res);
            
            this.taskForm.value.users = res;
            this.users = res;
            console.log(this.users)
        });


    }
     
   
    // convenience getter for easy access to form fields
    get f() { return this.taskForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.taskForm.invalid) {
            return;
        }

        // display form values on success
        var passwordStr = Math.random().toString(36).slice(-8);
        this.taskForm.value.password = passwordStr;
        var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            this.taskForm.value.created_date = dd + '-' + mm + '-' + yyyy;
            this.taskForm.value.targetDate = this.taskForm.value.targetDate.split('-').reverse().join('-');

            
        this.httpClient.post('http://localhost:3000/add_task',this.taskForm.value).subscribe((res:any[])=>{

           console.log(res);
           this.submitted = false;
        this.taskForm.reset();

    });
   
    

        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.taskForm.value, null, 4));
    }

    
}
