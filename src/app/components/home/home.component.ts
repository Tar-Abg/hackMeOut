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
