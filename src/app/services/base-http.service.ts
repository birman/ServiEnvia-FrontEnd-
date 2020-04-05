import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationSettingsService } from './app-settings.service';

@Injectable()
export class BaseHttpService {

  constructor(
    private _httpClient: HttpClient,
    private _appSettingsService: ApplicationSettingsService,

  ) {
  }

  public get<T>(methodUrl: string): Observable<T> {
    return this._httpClient.get<T>(this.getEndPointURL(methodUrl), { headers: this.getRequestHeaders() });
  }

  private getEndPointURL(methodUrl: string): string {
    return `${this._appSettingsService.ServiEnviaAPIEndPoint}${methodUrl}`;
  }

  private getRequestHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': ''
    });
  }

  public put<T>(methodUrl: string, data: any): Observable<T> {
    return this._httpClient.put<T>(this.getEndPointURL(methodUrl), data, { headers: this.getRequestHeaders() });
  }

  public post<T>(methodUrl: string, data: any): Observable<T> {
    return this._httpClient.post<T>(this.getEndPointURL(methodUrl), data, { headers: this.getRequestHeaders() });
  }

  public request(action: string, methodUrl: string, data: any) {
    return new HttpRequest<FormData>('POST', this.getEndPointURL(methodUrl), data, {
      reportProgress: true
    })
  }

}
