import { Component, OnInit } from '@angular/core';
import { Class } from '../class/class';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  cose!:Class[]

  constructor(private todoService:TodosService) {
    this.cose = todoService.cose
   }

  ngOnInit(): void {
  }

}
