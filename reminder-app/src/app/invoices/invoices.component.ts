import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import invoices from "./sample";
import { InvoiceComponent } from "./invoice/invoice.component";

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.scss"]
})
export class InvoicesComponent implements OnInit {
  invoices: Array<any>;
  
  constructor(private router: Router) {
    this.invoices = JSON.parse(JSON.stringify(invoices));
  }

  ngOnInit() {}

  navigateAddInvoice() {
    this.router.navigateByUrl("landing/invoices/add");
  }
}
