import { Task } from './model/task';
import {Component} from '@angular/core';

 @Component({
     moduleId: module.id,
     selector: 'my-app',
     templateUrl: 'app.component.html'
 })
 export class AppComponent{
     private tasks: Task[] = [
        {
            content: "lrn2code",
            completed: true
        },
        {
            content: "Get some work",
            completed: false
        }
     ]
 }