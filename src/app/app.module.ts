import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/components/product/product.component';
import { ProductsComponent } from './product/components/products/products.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { DemoComponent } from './demo/components/demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
