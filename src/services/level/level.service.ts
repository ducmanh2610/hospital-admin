import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from 'src/models';

const HTTP_API = "http://localhost:8081/api/v1/level";

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) { }

  public getLevelList(): Observable<Level[]> {
    return this.http.get<Level[]>(`${HTTP_API}/list`);
  }

  public saveNewLevel(level: Level): Observable<Level> {
    return this.http.post<Level>(`${HTTP_API}/new`, level);
  }

  public deleteLevelById(id: string): Observable<string> {
    return this.http.delete(`${HTTP_API}/delete/${id}`, { responseType: 'text' });
  }
}
