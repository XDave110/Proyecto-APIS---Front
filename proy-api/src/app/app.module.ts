import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LibroComponent } from './libro/libro.component';
import { ListaLibroComponent } from './lista-libro/lista-libro.component'
import { NzCardModule } from 'ng-zorro-antd/card';
import { CartComponent } from './cart/cart.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactService } from './service/contact.service';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { MangaComponent } from './manga/manga.component';
import { ListaMangasComponent } from './lista-mangas/lista-mangas.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    LibroComponent,
    ListaLibroComponent,
    CartComponent,
    FilterPipe,
    ContactFormComponent,
    MangaComponent,
    ListaMangasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzIconModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzCardModule,
    NgxPaginationModule,
    NzGridModule,
    NzDividerModule,
    NzModalModule,
    FormsModule,
    HttpClientModule,
    NzNotificationModule
  ],
  providers: [ ContactService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
