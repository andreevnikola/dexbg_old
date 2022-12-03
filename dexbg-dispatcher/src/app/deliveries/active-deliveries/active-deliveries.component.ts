import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import {
  trigger,
  style,
  transition,
  animate
} from '@angular/animations';
import * as socketIo from 'socket.io-client';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-active-deliveries',
  templateUrl: './active-deliveries.component.html',
  styleUrls: ['./active-deliveries.component.scss'],
  animations: [
    trigger('deliveryAnimation', [
      transition(':enter', [style({
        opacity: 0,
        scale: 0.1,
      }), animate('150ms', style({opacity: 1, scale: 1}))]),
      transition(':leave', [style({
        opacity: 1,
        scale: 1,
      }), animate('2000ms', style({opacity: 0, scale: 0.6, left: "150px"}))]),
    ])
  ]
})
export class ActiveDeliveriesComponent implements OnInit {

  activeDeliveries: any;
  socket: any;
  errorId: string | undefined;
  confirmInputErrorr: boolean = false;
  choosenFromYou: number = -1;
  choosenNotFromYou: number[] = [];
  constructor(private router: Router, private getDataService: GetDataService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getDataService.newDelivery = false;
    this.getDataService.getActiveDeliveries().subscribe({
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
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.socket = socketIo.connect('https://dexbg-sockets.herokuapp.com/');
    this.socket.on(this.authService.key, (_id: string) => {
      this.getDataService.getNewDelivery(_id).subscribe({
        next: (value) => {
          this.activeDeliveries.push((value as any).data);
        },
        error: (err) => {
          console.log(err)
        }
      });
      this.getDataService.newDelivery = false;
    });
    this.socket.on((this.authService.key + "_deliveryChosen"), (index: number) => {
      console.log("gay")
      this.choosenNotFromYou.push(index);
    });
    this.socket.on((this.authService.key + "_deliveryUnchosen"), (index: number) => {
      this.choosenNotFromYou.splice(this.choosenNotFromYou.indexOf(index));
    });
    this.socket.on((this.authService.key + "_deliveryAnswered"), (data: any) => {
      this.choosenNotFromYou.splice(this.choosenNotFromYou.indexOf(data.index), 1);
      this.activeDeliveries = this.activeDeliveries.filter((e: any) => { return e._id !== data.id });
    });
    this.socket.on((this.authService.key + "_deliveryCanceled"), (id: any) => {
      console.log("ya" + id)
      this.choosenNotFromYou.splice(this.activeDeliveries.indexOf(id), 1);
      this.activeDeliveries = this.activeDeliveries.filter((e: any) => { return e._id !== id });
    });
  }

  confirmDeliveryHandler(time: string, delivery: any, i: number){
    if(time.length === 0 && delivery.type !== "купи"){
      this.confirmInputErrorr = true;
      this.errorId = delivery._id;
    }else if(delivery.type == "купи"){
      time = "unknown";
    }
    this.getDataService.sendAnswer(delivery._id, time, "yes").subscribe({
      next: (value) => {
        if((value as any).err){
          if((value as any).login){
            alert((value as any).err);
            this.router.navigate(['/login']);
            return;
          }
          alert("Нещо се обърка!");
          return
        }
        this.socket.emit("answerDelivery", {id: delivery._id, index: i});
        this.activeDeliveries.splice(i, 1);
        this.choosenFromYou = -1;
        this.choosenNotFromYou.splice(i, 1);
      }
    });
  }

  cancelDeliveryHandler(time: string, delivery: any, i: number){
    if(time.length === 0){
      time = "unknown";
    }
    this.getDataService.sendAnswer(delivery._id, time, "no").subscribe({
      next: (value) => {
        if((value as any).err){
          if((value as any).login){
            alert((value as any).err);
            this.router.navigate(['/login']);
            return;
          }
          alert("Нещо се обърка!");
          return
        }
        this.socket.emit("answerDelivery", {id: delivery._id, index: i});
        this.activeDeliveries.splice(i, 1);
        this.choosenFromYou = -1;
        this.choosenNotFromYou.splice(i, 1);
      }
    });
  }

  isNotOutsideIndex: number = -1;

  chooseDelivery(index: number){
    if(!this.choosenNotFromYou.includes(index)){
      this.choosenFromYou = index;
      this.socket.emit("chooseDelivery", index);
    }
  }

  unchooseDelivery(index: number){
    if(this.choosenFromYou >= 0 && this.isNotOutsideIndex !== index){
      this.choosenFromYou = -1;
      this.socket.emit("unchooseDelivery", index);
    }
  }

  mouseOver(i: number){
    this.isNotOutsideIndex = i;
  }

  mouseOutside(i: number){
    this.isNotOutsideIndex = -1;
  }

}
