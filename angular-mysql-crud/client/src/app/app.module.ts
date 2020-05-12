import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StartComponent } from './start/start.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { StoreDetailsComponent } from './components/store-details/store-details.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ClientCourseComponent } from './components/client-course/client-course.component';
import { VendorCourseComponent } from './components/vendor-course/vendor-course.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManageStoreComponent } from './components/manage-store/manage-store.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    StartComponent,
    CatalogueComponent,
    StoreDetailsComponent,
    SearchResultsComponent,
    ProductComponent,
    CartComponent,
    ClientCourseComponent,
    VendorCourseComponent,
    ProfileComponent,
    ManageStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
