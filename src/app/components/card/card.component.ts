import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  amunt: number = 50000;
  month: number = 60;
  interstateRate: number = 12;
  commission: number = 3;
  firsRepaymentAmount = 0;


  constructor() { }

  ngOnInit(): void {
    this.firsRepaymentAmount = (this.amunt + this.amunt * 15 / 100) / 60;
  }

  reCount(event: any): void {
    this.firsRepaymentAmount = (event.value + event.value * 15 / 100) / 60;

  }

}
