import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthenticationService } from '../service/authentication.service';
import { EmailService } from '../service/email.service';
import { FraseApiService } from '../service/frase-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  frase: string = '';
  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  

  submitForm(): void {
    if (this.validateForm.valid) {
      
      this.emailService.esDesechable(this.validateForm.value.email).subscribe((res: any) => { 
        let flag = res.disposable 
      
        if (flag) {
          // Si el correo es desechable pedimos el correo de nuevo
          this.validateForm.controls.email.reset();
          this.submitForm();
        } else {
          // Se registra el usuario
          let email = this.validateForm.value.email;
          let password = this.validateForm.value.password;
          let username = this.validateForm.value.nickname;
          this.authenticationService.registrarUsuario(username, email, password ).subscribe(res => {
            if (res.message === "Sign up successfully") {
              this.createNotification("success", "Registro exitoso", "Te has registrado exitosamente. Porfavor inicia sesión.");
              setTimeout(() => {
                this.router.navigate(['/login']);  
              }, 3000);
            }
          },
          err => {
            console.log(err.error.message);
          })
          this.validateForm.reset();
        }
      });


      

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder, 
    private emailService: EmailService, 
    private fraseService: FraseApiService, 
    private authenticationService: AuthenticationService,
    private notification: NzNotificationService,
    private router: Router) {
    this.obtenerFrase();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]]
    });
  }


  obtenerFrase() {
    this.fraseService.conectarAPI().subscribe((res: any) => {
      this.frase = res[0].fact;
    })
  }

  createNotification(type: string, titulo: string, mensaje: string): void {
    this.notification.create(
      type,
      titulo,
      mensaje
      );
  }
}
