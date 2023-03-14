import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockServiceService } from '@app/shared/service/mock-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  register: any;

  constructor(private service: MockServiceService, private router: Router) {}

  ngOnInit(): void {
    this.register = this.service.registerUser;

    if (!this.register?.idRegis) {
      this.router.navigate(['/register']);
    }
  }

  getEvent(register): string {
    if (register.option == 'workshop') {
      return 'Workshop - ' + this.register.workshop;
    } else {
      return 'Seminar - ' + this.register.seminar;
    }
  }
}
