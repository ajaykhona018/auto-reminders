import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"]
})
export class InvoiceComponent implements OnInit {
  @Input()
  invoice;
  constructor() {}

  ngOnInit() {
    console.log(typeof this.invoice.invoiceDate);
    // console.log(this.invoice);
  }
  formatDate(d){
    let date = new Date(d);
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + '-' + monthNames[monthIndex].substring(0,3) + '-' + year;
  }
}
