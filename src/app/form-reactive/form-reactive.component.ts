import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { compareValidator } from '../shared/compare-validator.directive';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  reactiveForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = new FormGroup({
      email: new FormControl('', Validators.required),
      confirmEmail: new FormControl('', [Validators.required, compareValidator('email')]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [Validators.required, compareValidator('password')]),
    });
  }

  get email() {
    return this.reactiveForm.get('email')
  }

  get confirmEmail() {
    return this.reactiveForm.get('confirmEmail')
  }

  get password() {
    return this.reactiveForm.get('password')
  }

  get confirmPassword() {
    return this.reactiveForm.get('confirmPassword')
  }
}
