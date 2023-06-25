import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { ToDo } from '../data';
import { map } from 'rxjs/operators'
import { RouteAPiService } from '../route-api.service';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoLIstComponent {
  ToDoList!: any[]


  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    id: new FormControl("")
  })
  test: string = "a"
  constructor(private RouteAPiService: RouteAPiService) { }

  ngOnInit() {
    this.RouteAPiService.getToDoLists().subscribe((results: any[]) => {
      this.ToDoList = results

    })
  }

  addToDo() {
    let idCounter = this.ToDoList.length;
    console.log(idCounter)
    const newToDo = {
      id: (idCounter + 1).toString(),
      title: this.form.get('title')?.value,
      description: this.form.get('description')?.value,
      date: this.form.get('description')?.value
    }
    this.ToDoList.push(newToDo)


  }

  console() {
    console.log(this.ToDoList)
  }
  editToDo() {
    // console.log(this.ToDoList.length)
  }
}
