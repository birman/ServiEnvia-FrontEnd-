import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BaseHttpService } from './base-http.service';
import { Package } from '../models/Package';


@Injectable()
export class PackageService {

  constructor(private _baseHttp: BaseHttpService, private _http: HttpClient) {
  }

  getAll() {
    return this._baseHttp.get<Array<Package>>('/Package');
  }

  getPackageById(id: string) {
    return this._baseHttp.get<Package>("/Package/" + id);
  }

  savePackage(Package: Package) {
    return this._baseHttp.post('/Package', Package);
  }

}
