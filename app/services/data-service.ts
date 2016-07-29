import { Http, Response, Request, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    public headers: Headers;

    constructor(public http: Http) { }

    get(uri: string, mapJson: boolean = true) {
        var http: any = this.http;

        if (mapJson)
            return http.get(uri)
                .map(response => <any>(<Response>response).json());
        else
            return http.get(uri);
    }

    post(uri: string, data?: any, mapJson: boolean = true) {
        var http: any = this.http;

        if (mapJson)
            return http.post(uri, data)
                .map(response => <any>(<Response>response).json());
        else
            return http.post(uri, data);
    }

    delete(uri: string) {
        var http: any = this.http;

        return http.delete(uri)
            .map(response => <any>(<Response>response).json())
    }
}
