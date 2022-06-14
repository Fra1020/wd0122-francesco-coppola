import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations/operations.service';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.scss'],
})
export class AggiungiComponent implements OnInit {
  constructor(private operations: OperationsService) {}

  ngOnInit(): void {}

  data = {
    title: '',
    body: '',
  };

  aggiungiPost() {
    this.operations.createPost(this.data).subscribe({
      next: (res) => console.log(res),
    });
  }
}
