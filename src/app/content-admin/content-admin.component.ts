import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.scss'],
})
export class ContentAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirect(url1?, url2?) {
    if (url2) {
      return this.router.navigateByUrl(`${url1}/${url2}`);
    }
    this.router.navigateByUrl(`${url1}`);
  }
}
