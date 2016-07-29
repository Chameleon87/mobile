import { Component } from "@angular/core";

import { LoginComponent } from "../customers/login/customer-login";

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: "./home.html",
    directives: [ LoginComponent ]
})

export class Home {

}
