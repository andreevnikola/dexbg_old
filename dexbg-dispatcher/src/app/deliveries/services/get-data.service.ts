import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  newDelivery: boolean = false;
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getActiveDeliveries(){
    return this.httpClient.get(`https://dexbg-api.herokuapp.com/api/delivery/active/${this.authService.key}`);
  }

  getAnsweredDeliveries(){
    return this.httpClient.get(`https://dexbg-api.herokuapp.com/api/delivery/answered/${this.authService.key}`);
  }

  getNewDelivery(id: string){
    return this.httpClient.get(`https://dexbg-api.herokuapp.com/api/delivery/new/${id}/${this.authService.key}`);
  }

  sendAnswer(id: string, time: string, confirmed: string){
    return this.httpClient.get(`https://dexbg-api.herokuapp.com/api/delivery/answer/${id}/${time}/${confirmed}/${this.authService.key}`);
  }
}
