import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import * as socketIo from 'socket.io-client';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-answered-deliveries',
  templateUrl: './answered-deliveries.component.html',
  styleUrls: ['./answered-deliveries.component.scss']
})
export class AnsweredDeliveriesComponent implements OnInit {

  activeDeliveries: any;
  socket: any;
  constructor(private router: Router, private getDataService: GetDataService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getDataService.getAnsweredDeliveries().subscribe({
      next: (value) => {
        if((value as any).err){
          if((value as any).login){
            alert((value as any).err);
            this.router.navigate(['/login']);
            return;
          }
          alert("Нещо се обърка! Не можете да получите нова информация! Моля дайте REFRESH на страницата!");
          return;
        }
        this.activeDeliveries = (value as any).data;
        this.socket = socketIo.connect('https://dexbg-sockets.herokuapp.com/');
        this.socket.on(this.authService.key, (_id: string) => {
          this.getDataService.newDelivery = true;
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
