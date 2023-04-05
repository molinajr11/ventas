import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from '../models/cliente';
import { Response } from '../models/response';

const httOption={
  headers:{
    'Content-Type':'application/json'
  }
}
@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {
  url:string ='http://localhost:29899/api/Cliente';

  constructor(
    private http: HttpClient
  ) { }

  getClientes():Observable<Response>{
    return this.http.get<Response>(this.url);
  }

  addClientes(cliente:ICliente):Observable<Response>{
    return this.http.post<Response>(this.url, cliente,httOption);
  }

}
