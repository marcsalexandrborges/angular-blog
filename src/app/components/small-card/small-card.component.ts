import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string ="https://overplay.com.br/wp-content/uploads/2021/06/cod-mobile-2.jpg"
  @Input()
  cardTitle:string="Crossfire"

  constructor(){}

  ngOnInit(): void {

  }

}
