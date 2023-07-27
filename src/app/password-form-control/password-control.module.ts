import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';

import { PasswordFormComponent } from './password-form/password-form.component';
import { PasswordCheckComponent } from './password-check/password-check.component';


@NgModule({
  declarations: [PasswordFormComponent, PasswordCheckComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [PasswordFormComponent],
})
export class PasswordControlModule { }
