import {Component, Input, OnInit} from '@angular/core';
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  public name: string
  @Input()
  public number: string
  @Input()
  public amount: string
  @Input()
  public expirationDate: string
  @Input()
  public paymentSystem : string
  imagePayment = "/assets/images/Vector.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
