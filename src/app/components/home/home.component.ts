import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {SuccessComponent} from "../success/success.component";
import {LoaddingComponent} from "../loadding/loadding.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isOpenSuccessModal = false;
  banks = [
    {
      amunt: 50000,
      month: 200,
      interstateRate: 12,
      commission: 3,
      firsRepaymentAmount: 0,
      img: 'acba.png',
      bankName: 'ACBA'
    },
    {
      amunt: 10000,
      month: 240,
      interstateRate: 12,
      commission: 3,
      firsRepaymentAmount: 0,
      img: 'vtb.png',
      bankName: 'VTB'

    },
    {
      amunt: 30000,
      month: 90,
      interstateRate: 12,
      commission: 3,
      firsRepaymentAmount: 0,
      img: 'uni.jpeg',
      bankName: 'UNI'
    },
    {
      amunt: 40000,
      month: 120,
      interstateRate: 12,
      commission: 3,
      firsRepaymentAmount: 0,
      img: 'mellat.png',
      bankName: 'Mellat'
    },
    {
      amunt: 20000,
      month: 180,
      interstateRate: 12,
      commission: 3,
      firsRepaymentAmount: 0,
      img: 'ineco.png',
      bankName: 'Ineco'
    },
    {
      amunt: 70000,
      month: 160,
      interstateRate: 12,
      commission: 3,
      firsRepaymentAmount: 0,
      img: 'convers.jpeg',
      bankName: 'Convers'
    },
    {
      amunt: 90000,
      month: 60,
      interstateRate: 12,
      commission: 3,
      firsRepaymentAmount: 0,
      img: 'abb.jpeg',
      bankName: 'ABB'

    }
  ]

  constructor(public dialog: MatDialog) {}

  applay(): void {
    this.dialog.open(LoaddingComponent, {
      width: '250px'
    });
    setTimeout(() => {
      this.dialog.closeAll();
      this.dialog.open(SuccessComponent);
    }, 3000)
  }


  ngOnInit() {
  }

}
