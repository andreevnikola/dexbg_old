import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  key: string | undefined | null = sessionStorage.getItem('key');

  constructor(private httpClient: HttpClient) { }

  getNewDelivery(name: string, pass: string){
    return this.httpClient.get(`https://dexbg-api.herokuapp.com/api/users/dispatcher/login/${name}/${pass}`);
  }

}
