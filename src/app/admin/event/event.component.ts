import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockServiceService } from '@app/shared/service/mock-service.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  eventList: any[];

  constructor(private service: MockServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getEvent().subscribe((res) => {
      this.eventList = res;
    });
  }

  add() {
    this.router.navigateByUrl('/add');
  }
}
