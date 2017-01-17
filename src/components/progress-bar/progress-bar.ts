import { Component,Input,Output,EventEmitter } from '@angular/core';

/*
  Generated class for the ProgressBar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBar {
  @Input('total') totalSeconds:number = 100;
  @Input('interval') intervalSeconds:number = 1;
  @Output() refreshEvent = new EventEmitter();
  
  text: string;
  current: number;
  step: number;
  constructor() {
    console.log('Hello ProgressBar Component');
    this.text = 'Hello World';
    this.step = this.totalSeconds / this.intervalSeconds;
    this.current = this.totalSeconds / this.intervalSeconds;
  }

  eachSecond(){
    let i = setInterval(()=>{
      this.refreshEvent.emit(this.current);
      this.current = this.current + this.step;
    },this.intervalSeconds*1000);
  }

}
