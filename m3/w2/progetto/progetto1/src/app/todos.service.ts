import { Injectable } from '@angular/core';
import { title } from 'process';
import { Class } from './class/class';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  cose:Class[] = [
    {
    id:1,
    title: 'American Sniper',
    completed: true
    },
    {
    id:1,
    title: 'il Capitano Mike',
    completed: true
    }
  ]
}
