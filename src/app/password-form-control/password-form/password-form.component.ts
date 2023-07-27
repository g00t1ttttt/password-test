import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit{
  passForm: FormGroup;
  hide: boolean = true

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      this.passForm = this.fb.group({
        password: this.fb.control('', [Validators.required, Validators.minLength(8)])
      })
  }
}
