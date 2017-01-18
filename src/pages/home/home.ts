import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentProgress:number;
  
  constructor(public navCtrl: NavController) {

  }
  terminado(){

  }
  actualizaNum(ev){
    this.currentProgress = ev;
  }
}
