import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'workshow-app';

  constructor(private translateService: TranslateService) {}

  ngAfterViewInit(): void {
    this.translateService.use('id');
  }
}
