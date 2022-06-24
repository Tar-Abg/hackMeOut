import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() applyed: EventEmitter<number> = new EventEmitter<number>();
  @Input() bank: any;
  // amunt: number = 50000;
  // month: number = 60;
  // interstateRate: number = 12;
  // commission: number = 3;
  firsRepaymentAmount = 0;


  constructor() { }

  ngOnInit(): void {
    this.firsRepaymentAmount = (this.bank.amunt + this.bank.amunt * 15 / 100) / 60;
  }

  reCount(event: any): void {
    this.firsRepaymentAmount = (event.value + event.value * 15 / 100) / this.bank.month;

  }
  reCountFee(event: any): void {
    this.firsRepaymentAmount = (this.bank.amunt + this.bank.amunt * 15 / 100) / event.value;
  }



}
