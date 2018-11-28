import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>(); //Define como recebendo um inteiro. No método Emit é passodo o lastNumber;
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit() { }

  onStartGame(){
    //este é um método nativo do javascript. Neste caso ele vai ser chamado a cada 1000 milisegundos.
    this.interval = setInterval(() => {  //essa function é chamada a cada intervalo de tempo
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }
}
