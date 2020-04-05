import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseHttpService } from './services/base-http.service';
import { CustomerService } from './services/customer.service';
import { ApplicationSettingsService } from './services/app-settings.service';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';



// import { CldrIntlService, IntlModule, IntlService } from '@progress/kendo-angular-intl';

// import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DateInputsModule,
    InputsModule,
    DialogsModule
    // IntlModule
    // NgHttpLoaderModule.forRoot(),
  ],
  providers: [BaseHttpService,
    CustomerService,
    ApplicationSettingsService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
