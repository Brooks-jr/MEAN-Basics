import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductEditComponent,
    ProductLandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
