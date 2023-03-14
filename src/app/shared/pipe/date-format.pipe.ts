import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(
    value: any,
    pattern: string = 'd MMM yyyy HH:mm:ss',
    zone: string = 'GMT+7',
    local: string = 'id',
    opt?: string
  ): any {
    const lang = this.translateService.currentLang;
    console.log(lang, opt);
    const datePipe: DatePipe = new DatePipe(lang);
    const timeZoneTranslation: string = lang === 'id' ? 'WIB' : zone;
    if (opt == undefined || opt == null || opt == '') {
      console.log(1);
      return (
        datePipe.transform(value, pattern, zone) + ` ${timeZoneTranslation}`
      );
    } else {
      console.log(2);
      return datePipe.transform(value, pattern, zone);
    }
  }
}
