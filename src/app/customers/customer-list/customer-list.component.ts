import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];
  alerts = this.defaultAlerts;
  onClosed(dismissedAlert: any): void {
  	alert(123);
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    console.log(this.alerts,"filter");
  }
 reset(): void {
    this.alerts = this.defaultAlerts;
    console.log(this.alerts,"filter");
  }
}
