import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import * as emailjs from 'emailjs-com';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private _emailService: EmailService) { }

  ngOnInit() {
  }
model:any={}
message
      submitForm() {
      	var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
var userID = 'user_hMZsdmxw5F1ZSRsdv8q5W';
  var template_id = "raju_template_123_vj_01";
  myform.find("button").text("Sending...");
  emailjs.send(service_id, template_id,params,userID)
  	.then(function(){ 
       alert("Sent!");
       myform.find("button").text("Send");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });

  return false;
});
// var email = emailjs;
//   var serviceID = 'raju';
//    var userID = 'user_hMZsdmxw5F1ZSRsdv8q5W';
            

// emailjs.send(serviceID, 'raju_template_123_vj_01',this.model,userID)
//     .then(function(response) {
//        console.log('SUCCESS!',response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });
	
//         }

}
}