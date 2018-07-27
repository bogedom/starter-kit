import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '@app/home/models/joke';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public findJokes(query: string): Observable<Joke[]> {
    return this.http.get<Joke[]>('/jokes/search', {
      params: {
        query: query
      }
    });
  }

}
