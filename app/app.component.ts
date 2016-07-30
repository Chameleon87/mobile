import { Component } from "@angular/core";
import { NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS } from "nativescript-angular/router";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { DataService } from "./services/data-service";
import { APIService } from "./services/api-service";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [ NS_ROUTER_DIRECTIVES, ROUTER_DIRECTIVES ],
    providers: [ NS_ROUTER_PROVIDERS, APIService, DataService ]
})
export class AppComponent {

}
