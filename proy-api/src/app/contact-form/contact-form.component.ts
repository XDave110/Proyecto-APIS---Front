import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  FormData: FormGroup;
  isVisible: boolean = true;

  constructor(private builder: FormBuilder, private contact: ContactService, private router: Router) { }

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
      alert("Tu correo ha sido enviado con éxito!");
    this.FormData.reset();
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    alert('Tu correo no ha podido ser enviado');
    }) 
  }

}
