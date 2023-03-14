import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ContentAdminComponent } from './content-admin/content-admin.component';
import { SharedModule } from './shared/shared.module';
import { PaymentComponent } from './payment/payment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
  MissingTranslationHandler,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeId from '@angular/common/locales/id';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { MyMissingTranslationHandler } from './shared/helper/missing-translation.handler';
import { environment } from '@environments/environment';
registerLocaleData(localeId, 'id');
registerLocaleData(localeEn, 'en');

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ContentAdminComponent,
    PaymentComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler,
      },
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'id',
    }),
    HttpClientModule,
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, environment.i18nFile, '.json');
}
