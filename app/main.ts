// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { nativeScriptBootstrap } from "nativescript-angular/application";
import { AppComponent } from "./app.component";
import { HTTP_PROVIDERS, Headers, BaseRequestOptions, RequestOptions } from "@angular/http";
import { provide } from "@angular/core";
import { APP_ROUTER_PROVIDERS } from "./app.routes";


class AppBaseRequestOptions extends BaseRequestOptions {
  headers: Headers = new Headers({"Content-Type":"application/json"})
}

nativeScriptBootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  provide(
    RequestOptions, {useClass: AppBaseRequestOptions})
]);
