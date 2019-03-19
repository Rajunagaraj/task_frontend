import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-customee-invoice',
  templateUrl: './customee-invoice.component.html',
  styleUrls: ['./customee-invoice.component.css']
})
export class CustomeeInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   netImage:any = "../assets/img/download.jpeg";
generatePdf() {
    const div = document.getElementById("html2Pdf");
    const options = {background: "white", height: div.clientHeight, width: div.clientWidth};

    html2canvas(div, options).then((canvas) => {
        //Initialize JSPDF
        let doc = new jsPDF("p", "mm", "a4");
        //Converting canvas to Image
        let imgData = canvas.toDataURL(this.netImage);
        //Add image Canvas to PDF
        doc.addImage(imgData, 'PNG', 20, 20);

        let pdfOutput = doc.output();
        // using ArrayBuffer will allow you to put image inside PDF
        // let buffer = new ArrayBuffer(pdfOutput.length);
        // let array = new Uint8Array(buffer);
        // for (let i = 0; i < pdfOutput.length; i++) {
        //     array[i] = pdfOutput.charCodeAt(i);
        // }

        //Name of pdf
        const fileName = "example.pdf";

        // Make file
        doc.save(fileName);

    });
}
}
