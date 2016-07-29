import { Component } from "@angular/core";
import { APIService } from "../../services/api-service";

import { Customer } from "../../models/customer/customer";

@Component({
  moduleId: module.id,
  selector: "customerProfile",
  templateUrl: "./customer-profile.html"
})

export class CustomerProfile {

  constructor(private APIService: APIService) { }

  private customer: Customer = new Customer()

  onSubmit() {
    this.APIService.addCustomerInfo(this.customer).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
