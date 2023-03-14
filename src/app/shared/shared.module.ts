import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagginationComponent } from './component/paggination/paggination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [PagginationComponent, DateFormatPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  providers: [DateFormatPipe, TranslateService],
  exports: [
    PagginationComponent,
    FormsModule,
    ReactiveFormsModule,
    DateFormatPipe,
    TranslateModule,
  ],
})
export class SharedModule {}
