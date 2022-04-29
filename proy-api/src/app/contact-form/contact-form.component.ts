import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../service/contact.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  FormData: FormGroup;
  isVisible: boolean = true;

  constructor(private builder: FormBuilder, private contact: ContactService, private router: Router, private notification: NzNotificationService) { }

  ngOnInit(): void {

    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
      })
  }

  onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
      // this.router.navigate(['/catalogo']);
      this.createNotification('success', "Envío exitoso", "Tu correo se ha enviado exitosamente!")
    this.FormData.reset();
    }, error => {
    console.log(error);
    this.createNotification('error', "Envío fallido", "No se ha podido realizar la operación correctamente.")
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
