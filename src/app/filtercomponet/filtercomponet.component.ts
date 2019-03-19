import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtercomponet',
  templateUrl: './filtercomponet.component.html',
  styleUrls: ['./filtercomponet.component.css']
})
export class FiltercomponetComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  appointmentStatus = [
    {checked:false,status:'dispatched'},
    {checked:false,status:'open'}, 
    {checked:false,status:'closed'}]
    appointmentStatus1 = [
      {checked:false,status:'vedic'},
      {checked:false,status:'Fengushi'}, 
     ]
  name:string;
  filterArr = [];
  filterArr1 = [];
  
  allAppointments = [
    {id:1, status:'dispatched',type:"vedic"},
    {id:2, status:'dispatched',type:"vedic"},
    {id:3, status:'dispatched',type:"Fengushi"},
    {id:4, status:'open',type:"Fengushi"},
    {id:5, status:'open',type:"vedic"},
    {id:6, status:'closed',type:"Fengushi"}
  ]
  
  todaysAppointments = this.allAppointments;
  todaysapp;
  test1:boolean = true;
  updateFilter(appt:any) {
    console.log(appt);
 if(appt.checked) {
      this.filterArr.push(appt.status)
      if(this.filterArr1.length == 0){
       this.test1 = true;
      this.test2 = true;
        this.todaysAppointments = this.allAppointments.filter(a => {
          let test =this.filterArr.length ? this.filterArr.indexOf(a.status) != -1 : this.allAppointments;
          console.log(test,"test",this.filterArr, this.todaysAppointments);
          return test;
        })
      }
      else{
        if(this.filterArr.length > 0){
alert("dddd");
        this.test1 =true;
        this.test2 = true;
        alert('kjcheckedddkjj');
        this.todaysAppointments = this.todaysapp.filter(a => {
          let test =this.filterArr.length ? this.filterArr.indexOf(a.status) != -1 : this.todaysAppointments;
          console.log(test,"test",this.filterArr.length);
          return test;
        })
        }
     
      }
    }
    //uncheckedd
  
   else {
      if(this.filterArr1.length == 0){
        let index = this.filterArr.indexOf(appt.status)
        this.filterArr.splice(index,1)
        if(this.filterArr.length > 0){
             this.test1 = true;
             console.log("slic",this.filterArr,this.todaysAppointments);
        this.todaysAppointments = this.todaysAppointments.filter(a => {
          let test =this.filterArr.length ? this.filterArr.indexOf(a.status) != -1 : this.allAppointments;
          return test;
        }) 
        }
    else{
       this.test1 = true; 
       this.todaysAppointments = this.allAppointments;
    }
      }
      else{
         let index = this.filterArr.indexOf(appt.status)
        this.filterArr.splice(index, 1)
      if(this.filterArr.length > 0){
             this.test1 = true;
              this.test2 =  true;
               console.log(this.todaysapp,"helooo");
                console.log(this.todaysAppointments,"helooo");
        this.todaysAppointments = this.todaysapp.filter(a => {
          let test =this.filterArr.length ? this.filterArr.indexOf(a.status) != -1 : this.todaysAppointments;
          return test;
        }) 
        }
        else{
           this.todaysapp=this.todaysAppointments;
           console.log('this.todaysapp',this.todaysapp)
       this.test1 = false;
       this.test2 = true;
    }
      }
     
    }
  
  }
  //filter 2nd
  test2:boolean = true;
  updateFilter1(appt:any) {
 
    if(appt.checked) {
      this.filterArr1.push(appt.status)
      if(this.filterArr.length == 0){
        alert("secondd");
        this.test1 =false;
        this.test2 = true;
        this.todaysapp = this.allAppointments.filter(a => {
          // return this.filterArr.indexOf(a.status) != -1
          let test =this.filterArr1.length ? this.filterArr1.indexOf(a.type) != -1 : this.allAppointments;
          return test;
        })
      }
      else{
        this.test1 =false;
        this.test2 = true;
        alert('checkkkk');
        console.log("fffff",this.filterArr1);
        this.todaysapp = this.todaysAppointments.filter(a => {
          let test =this.filterArr1.length ? this.filterArr1.indexOf(a.type) != -1 : this.allAppointments;
          console.log(test,"test",this.filterArr.length);
          return test;
        })
      }
    }
    //unchecked
    else {
      if(appt === 'B'){
      this.test2 = true;
      if(this.filterArr.length == 0){
        alert("testt");
        let index = this.filterArr1.indexOf(!appt.status)
        this.filterArr1.splice(index,1)
        console.log("slic",this.filterArr1);
        if(this.filterArr1.length > 0){
          alert("sedddd");
             this.test1 = false;
        this.todaysapp = this.todaysAppointments.filter(a => {
          let test =this.filterArr1.length ? this.filterArr1.indexOf(a.type) != -1 : this.todaysapp;
          console.log(test,"test",this.filterArr1, this.todaysapp);
          return test;
        }) 
        }
    else{
       this.test1 = true;
       this.todaysAppointments = this.allAppointments;
    }
     
      }
      else{
        this.test1 = !this.test1;
        this.test2 =  true;
          let index = this.filterArr1.indexOf(!appt.status)
        this.filterArr1.splice(index, 1)
      if(this.filterArr1.length > 0){
             this.test1 = false;
        this.todaysapp = this.todaysAppointments.filter(a => {
          let test =this.filterArr1.length ? this.filterArr1.indexOf(a.type) != -1 : this.todaysapp;
          console.log(test,"test",this.filterArr1, this.todaysapp);
          return test;
        }) 
        }
        else{
       this.test1 = true;
    }
      }
      }
    }
  }

}