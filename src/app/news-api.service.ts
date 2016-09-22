import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsApiService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://newsapi.org/v1';
  }

  fetchSources(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sources`)
      .map(response => response.json());
  }

}
