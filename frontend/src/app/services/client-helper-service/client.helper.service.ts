import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

export abstract class ClientHelperService {
  protected defaultOptions(body:any|undefined, observeResponse:string = "response"): Object {
    let headers: HttpHeaders = new HttpHeaders({"content-type":"application-json"});
    let options:any = {
      headers: headers,
      withCredentials:true,
      body: body,
      observe: observeResponse,
      reportProgress: false
    };
    return options;
  }
}
