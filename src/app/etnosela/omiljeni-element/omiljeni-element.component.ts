import {Component, Input, OnInit} from '@angular/core';
import {Etnoselo} from "../etnoselo.model";

@Component({
  selector: 'app-omiljeni-element',
  templateUrl: './omiljeni-element.component.html',
  styleUrls: ['./omiljeni-element.component.scss'],
})
export class OmiljeniElementComponent implements OnInit {
  @Input() etnoselo: Etnoselo = {id: '3', naziv: 'Etno selo 3', opis: 'Etno selo u Srbiji 3',
    slikaUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/05/55/57/etno-selo.jpg?w=1200&h=-1&s=1',
    userId: '123'};

  constructor() { }

  ngOnInit() {}

}
