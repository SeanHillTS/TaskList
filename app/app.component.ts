import { Task } from './model/task';
import {Component} from '@angular/core';

 @Component({
     moduleId: module.id,
     selector: 'my-app',
     templateUrl: 'app.component.html',
     styleUrls: [
         'app.component.css'
     ]
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

     private currentTask : Task = new Task(null,false);

     addTask(){
         let task = new Task(this.currentTask.content,this.currentTask.completed);
         this.tasks.push(task);
         this.currentTask.content = null;
     }
 }