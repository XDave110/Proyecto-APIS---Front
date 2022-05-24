import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../node_modules/ng-zorro-antd/ng-zorro-antd.min.css']
})

export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      let email = this.validateForm.value.userName;
      let password = this.validateForm.value.password;
      this.authenticationService.iniciarSesion(email, password).subscribe(res => {
        console.log(res);
        if (res.message === "Login successfully") {
          this.tokenService.guardarToken(res.token);
          this.tokenService.mandarActualizacion(true);
          this.router.navigate(['/catalogo']);
        }
      },
      err => {
        console.log(err.error.message);
      })

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder, public router: Router, private authenticationService: AuthenticationService, private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

}
