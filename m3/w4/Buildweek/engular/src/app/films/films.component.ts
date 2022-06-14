import { Component, OnInit } from '@angular/core';
import { Modello } from '../model/modello.model';
import { OperationsService } from '../operations/operations.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  constructor(private operations: OperationsService) {}

  films: Modello[] = [];

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.operations.getAll().subscribe((res) => {
      this.films = res;
    });
  }
}
