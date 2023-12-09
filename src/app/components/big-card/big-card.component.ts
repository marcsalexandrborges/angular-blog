import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{

  @Input()
  photoCover:string="https://s2-techtudo.glbimg.com/jBWRLpzFfnoaaDUgIUMJTTORCyM=/0x0:896x505/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/T/a/A0BpXZRG2ERko5MF8gJw/captura-de-tela-2019-03-19-as-13.56.29.png"
  cardTitle:string="A emoção do Call of Duty em movimento"
  cardDescription:string="Call of Duty: Mobile is a free-to-play first-person shooter video game developed by Tencent Games and published by Activision for Android and iOS. It was released on October 1, 2019. The game received over 20 million downloads within a day of its release, earning over $2 million in revenue."

  constructor(){}

  ngOnInit(): void {

  }

}
