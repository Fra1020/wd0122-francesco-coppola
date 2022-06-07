import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  @ViewChild('f',{static:true}) form!:NgForm;

  nomi:string [] = []
  alter:string [] = []

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.nomi.push(this.form.value.nome)
    this.alter.push(this.form.value.Alterego)


  }

}
