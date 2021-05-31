import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableCustumersComponent } from './shared/table-custumers/table-custumers.component';
import { MaterialModule } from './material/material.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { CreateCustomerModule } from './components/customers/create-customer/create-customer.module';
import { CreateCustomerComponent } from './components/customers/create-customer/create-customer.component';
import { PromotersComponent } from './components/promoters/promoters.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    CustomersComponent,
    HomeComponent,
    TableCustumersComponent,
    ModalComponent,
    CreateCustomerComponent,
    PromotersComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    MaterialModule,
    CreateCustomerModule,
    ReactiveFormsModule 
  ],
  entryComponents:[ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
