import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private primengConfig: PrimeNGConfig, 
) { }
  message: any = null;
  ngOnInit() {
    this.primengConfig.ripple = true;

  }
}
