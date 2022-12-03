import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GetDataService } from 'src/app/deliveries/services/get-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMobileMenuShown: boolean = false;
  constructor( public router: Router, public authService: AuthService, public getDataService: GetDataService ) { }

  menuStarterHandler(): void{
    this.isMobileMenuShown = !this.isMobileMenuShown;
  }

  logOutHandler(): void{
    this.authService.key = undefined;
    this.router.navigate(['/login']);
  }

}
