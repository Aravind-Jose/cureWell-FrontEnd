import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'

})


export class AuthService {

  private AUTH_URL = 'https://orca-app-jhg4l.ondigitalocean.app/api/auth'

  constructor(private http: HttpClient) { }
  
  register(data: any): Observable<any>{
    return this.http.post<any>(`${this.AUTH_URL}/register`, data)
  }

  login(data: any): Observable<any>{
    return this.http.post<any>(`${this.AUTH_URL}/login`, data)
  }

  checkToken():boolean{
    if (localStorage.getItem('token'))
      return true;
    else
      return false;
      
  }

  logout(){
    localStorage.clear();
  }

}
