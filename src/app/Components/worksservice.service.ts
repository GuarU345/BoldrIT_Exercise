import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorksserviceService {

  constructor(private httpclient:HttpClient) { }

  //consume main API
  getWorks():Observable<any>{
    return this.httpclient.get('https://api.crossref.org/works?Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36')
  }

  //consume API with specified data
  getSpecifiedWork(doi:any):Observable<any>{
    return this.httpclient.get(`https://api.crossref.org/works/${doi}`)
  }
}
