import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showBackground = false;
  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      // @ts-ignore
      filter((e) => e instanceof NavigationEnd)).subscribe((data: RouterEvent) => {
     if (data?.url.includes('auth')) {
       this.showBackground = true;
     } else {
       this.showBackground = false;
     }
   })

  }

}
