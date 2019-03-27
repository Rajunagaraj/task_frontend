import { Injectable } from '@angular/core';

import { HttpClient} from  '@angular/common/http';

//send email in angular 6 EmailService
@Injectable()
export class EmailService {
  constructor(private http:  HttpClient) { }
  sendEmail(argparam) {
  return this.http.post('httpspakainfo.com/email/', argparam);
  }
}