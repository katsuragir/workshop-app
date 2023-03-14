import { Injectable } from '@angular/core';
import { evenList } from '@assets/mock/event.mock';
import { memberList } from '@assets/mock/member.mock';
import { BehaviorSubject, of } from 'rxjs';
import { DateFormatPipe } from '../pipe/date-format.pipe';

@Injectable({
  providedIn: 'root',
})
export class MockServiceService {
  register: BehaviorSubject<any> = new BehaviorSubject<any>({});

  get registerUser(): any {
    return this.register.value;
  }

  constructor(private dateFormat: DateFormatPipe) {}

  setRegister(val: any) {
    val.dateRegis = this.dateFormat.transform(new Date());
    this.register.next(val);
  }

  getEvent() {
    return of(evenList);
  }

  getMember() {
    return of(memberList);
  }
}
