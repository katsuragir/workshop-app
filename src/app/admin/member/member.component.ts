import { Component, OnInit } from '@angular/core';
import { MockServiceService } from '@app/shared/service/mock-service.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  memberList: any[];

  constructor(private service: MockServiceService) {}

  ngOnInit(): void {
    this.service.getMember().subscribe((res) => {
      this.memberList = res;
    });
  }
}
