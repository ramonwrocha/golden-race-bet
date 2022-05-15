import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private formSubmitAttempt!: boolean;

  form = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  isFieldInvalid(field: string): boolean {

    const isFieldInvalidTouched = !this.form.controls[field].valid && this.form.controls[field].touched;
    const isFieldInvalidUntouched = this.form.controls[field].untouched && this.formSubmitAttempt;

    return isFieldInvalidTouched || isFieldInvalidUntouched;
  }

  onSubmit() {

    if (this.form.valid) {
      this.authService.login(this.form.value);
    }

    this.formSubmitAttempt = true;
  }

}
