import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onama',
  templateUrl: './onama.page.html',
  styleUrls: ['./onama.page.scss'],
})
export class OnamaPage implements OnInit {
  datum : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  prikaziDatum(){
  if(!this.datum){
    this.datum = true;
  }
  else{
    this.datum = false;
  }

  }

}
