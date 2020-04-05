import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";


@Injectable()
export class ApplicationSettingsService {
  private _httpClient: HttpClient;
  private _configFilePath = "assets/config/config.json";

  public ServiEnviaAPIEndPoint: string;

  constructor(private _ngInjector: Injector) {
    this.ServiEnviaAPIEndPoint = 'http://localhost:44385/api';
  }

  public loadApplicationConfig(): Promise<boolean> {
    return new Promise((resolve) => {
      this._httpClient = this._ngInjector.get(HttpClient);
      this._httpClient.get(this._configFilePath).subscribe((config) => {
        this.ServiEnviaAPIEndPoint = config["ServiEnviaAPIEndPoint"];
        resolve(true);
      });
    });
  }
}
