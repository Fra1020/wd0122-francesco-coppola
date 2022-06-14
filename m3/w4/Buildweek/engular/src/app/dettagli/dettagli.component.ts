import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations/operations.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent implements OnInit {
  constructor(private operations: OperationsService) {}

  data = {
    title: '',
    presentazione: '',
    id: '',
  };

  num: string = '';

  ngOnInit(): void {}

  getFilm(id: number) {
    this.operations.getFilm(id).subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
      },
    });
  }

  dettagliFilm() {
    const newPost = {
      id: this.data.id,
      title: this.data.title,
      presentazione: this.data.presentazione,
    };
    this.operations.updatePost(newPost.id, newPost).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
