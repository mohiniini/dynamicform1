import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(private http: HttpClient ) { }
  postNewPerson(emp) {
    return this.http.post<any>("http://localhost:3000/api/formmodel", emp)
      // .catch(this.handleError)
  }
}
