import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators,FormArray,FormControl } from '@angular/forms';
import { HttpClient, HttpParams} from '@angular/common/http';



@Component({
    selector: 'app-task-list',
    templateUrl: './tasks.list.component.html',
    styleUrls: ['./tasks.list.component.scss'],
    animations: [routerTransition()]
})
export class TasksListComponent implements OnInit {
     tasks:any=[];

     

    constructor(private formBuilder: FormBuilder,public httpClient: HttpClient) { }

    ngOnInit() {
       
        let id = JSON.parse(localStorage.getItem( 'userData')).id;
        console.log(id)
        var data ={};
        data['id'] = id;
        this.httpClient.post(`http://localhost:3000/taskslist`,data).subscribe((res)=>{
            console.log(res);
            
            this.tasks = res;
            console.log(this.tasks)
        });


    }
     
   
    
}
