import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BaseHttpService } from './base-http.service';
import { Customer } from '../models/customer';


@Injectable()
export class CustomerService {

  constructor(private _baseHttp: BaseHttpService, private _http: HttpClient) {
  }

  getAll() {
    return this._baseHttp.get<Array<Customer>>('/Customer');
  }

  getCustomerById(id: string) {
    return this._baseHttp.get<Customer>("/Customer/" + id);
  }

  saveClient(customer: Customer) {
    return this._baseHttp.post('/Customer', customer);
  }

}
