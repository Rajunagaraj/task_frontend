import { Router } from  '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Component, ElementRef, ViewChild, OnInit, Inject, OnDestroy } from '@angular/core';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../../data';
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   @ViewChild('bidedpopupView') bidedpopupView: ElementRef;
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
gender = null; 
  constructor(private authService: AuthService, private router: Router) { 
        Object.assign(this, { single })
    }

  ngOnInit() {
  }
  countries = ['USA', 'Canada', 'Uk']
  states = [
  {name: 'Arizona', code: 'AZ'},
  {name: 'California', code: 'CA'},
  {name: 'Colorado', code: 'CO'}
];
keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      alert('ddd');
      event.preventDefault();
    }
  }
   model: any = {};
   selectedCountry
 hes: any ;
onSubmit(data): void {

  console.log(data)
  this.authService.createContact(data).subscribe(data => {
     console.log("backend",data)
      if (data == "sucesssfully") {
        // this.router.navigate(['crud']);
       $(this.bidedpopupView.nativeElement).modal('show');
      }
    });
}

Bidalloted_popup(){
  this.router.navigate(['crud']);
       $(this.bidedpopupView.nativeElement).modal('hide');

}

 index = 0;
  avatars = '12345'.split('').map((x, i) => {
    return {
      url: `https://picsum.photos/600/400/?${i}`,
      title: `${i}`
    };
  });

 single: any[];
  multi: any[];

  view: any[] = [500, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  onSelect(event) {
    console.log(event);
  }
}
