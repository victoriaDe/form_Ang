import {Component, OnInit} from '@angular/core';
import {HttpService} from 'src/app/app.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [HttpService]
})


export class FormComponent implements OnInit {
  form: FormGroup | any;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, [Validators.required, Validators.pattern("^[0-9]{8,10}$")]],
      comment: [null],
      code: ["+7"],
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  untouch(field: string) {
    this.form.get(field).markAsUntouched();
  }

  onSubmit() {
    if (this.form.valid) {
      console.info('Form was submitted.');
      this.httpService.postData(this.form.value.name, this.form.value.code, this.form.value.phone, this.form.value.comment);
    } else {
      this.form.markAllAsTouched()
    }
  }

  closePopUp(event: Event) {
    let elem = event.target;
    const btn = document.getElementById('formBtn');
    const cross = document.getElementById('cross');
    const container = document.getElementById('form-container');
    if ((elem === btn && this.form.valid) || elem === cross || elem === container) {
      console.log('Modal was closed.');
      container?.classList.remove('container-opened');
      const link = document.querySelector('.contact-btn');
      link?.classList.remove('hide');
    }
  }
}

