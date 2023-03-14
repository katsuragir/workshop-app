import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateFormatPipe } from '@app/shared/pipe/date-format.pipe';
import { MockServiceService } from '@app/shared/service/mock-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DateFormatPipe],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dateFormat: DateFormatPipe,
    private service: MockServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      idRegis: [''],
      dateRegis: [
        { value: this.dateFormat.transform(new Date()), disabled: true },
      ],
      name: ['', Validators.required],
      nickName: ['', Validators.required],
      gender: ['', Validators.required],
      province: ['', Validators.required],
      email: ['', Validators.required],
      option: ['', Validators.required],
      seminar: [''],
      workshop: [''],
    });
  }

  onSubmit() {
    const event =
      this.registerForm.get('option').value == 'seminar'
        ? this.registerForm.get('seminar').value
        : this.registerForm.get('workshop').value;
    this.registerForm.get('idRegis').setValue(this.onSetIdRegis());
    console.log(this.registerForm.value);
    if (this.registerForm.invalid || event == '') {
      return;
    }

    this.service.setRegister(this.registerForm.value);

    this.router.navigate(['/payment']);
  }

  onSetIdRegis(): string {
    let value: string = '';
    if (this.registerForm.get('option').value == 'seminar') {
      value =
        'SM' +
        this.dateFormat.transform(new Date(), 'yyMM', null, null, 'idRegis') +
        '1';
    } else {
      value =
        'WS' +
        this.dateFormat.transform(new Date(), 'yyMM', null, null, 'idRegis') +
        '1';
    }

    return value;
  }
}
