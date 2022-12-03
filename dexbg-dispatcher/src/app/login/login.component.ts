import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  trigger,
  style,
  transition,
  animate
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('error', [
      transition(':enter', [style({
        opacity: 0,
        scale: 0.1,
      }), animate('150ms', style({opacity: 1, scale: 1}))]),
      transition(':leave', [style({
        opacity: 1,
        scale: 1,
      }), animate('150ms', style({opacity: 0, scale: 0}))]),
    ])
  ]
})
export class LoginComponent {

  showError: boolean = false;

  constructor( private router: Router, private authService: AuthService ) { }

  loginHandler(name: string, pass : string){
    this.authService.getNewDelivery(name, pass).subscribe({
      next: ( value: any ) => {
        if(value.status === 500){
          alert("Нещо се обърка! Опитайте пак по-късно!")
          return;
        }
        if(!value.error){
          sessionStorage.setItem("key", value.key);
          this.authService.key = value.key;
          this.router.navigate(['/deliveries/active']);
        }else{
          this.showError = true;
        }
      },
      error: ( err ) => {
        console.log(err)
        alert("Нещо се обърка! Опитайте пак по късно!")
      }
    });
  }

  hideErrorMessageHandler(){
    this.showError = false;
  }
}
