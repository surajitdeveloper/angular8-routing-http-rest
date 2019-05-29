import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestServService {

  a: number = 50;
  b: number = 6;

  api_url = "https://reqres.in/api/"

  constructor(private http: HttpClient) { }

  login(data)
  {
    return this.http.post(this.api_url+"login", data).toPromise();
  }
  getuser()
  {
    return this.http.get(this.api_url+"users?page=2").toPromise();
  }
}
