import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modello } from '../model/modello.model';

const APIURL = 'http://localhost:4201/posts';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  getFilms(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getAll(): Observable<Modello[]> {
    return this.http.get<Modello[]>(APIURL);
  }

  createPost(data: any): Observable<any> {
    return this.http.post(APIURL, data);
  }

  updatePost(id: any, data: any): Observable<any> {
    return this.http.put(APIURL + '/' + id, data);
  }

  getFilm(id: number): Observable<any> {
    return this.http.get(APIURL + '/' + id);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(APIURL + '/' + id);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(APIURL);
  }
}
