import { Component, OnInit } from '@angular/core';
import { Modello } from '../model/modello.model';
import { OperationsService } from '../operations/operations.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private operations: OperationsService) {}

  posts: Modello[] = [];

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.operations.getAll().subscribe((res) => {
      this.posts = res;
    });
  }
}
