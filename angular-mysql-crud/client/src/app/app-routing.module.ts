import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { StoreDetailsComponent } from './components/store-details/store-details.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ClientCourseComponent } from './components/client-course/client-course.component';
import { VendorCourseComponent } from './components/vendor-course/vendor-course.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ManageStoreComponent } from './components/manage-store/manage-store.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'catalogue',
    children: [
        { path: 'product', component: CatalogueComponent },
        { path: 'service', component: CatalogueComponent },
        { path: '', component: CatalogueComponent }
    ]
  },
  {
    path: 'store',
    component: StoreDetailsComponent
  },
  {
    path: 'search',
    component: SearchResultsComponent
  },
  {
    path: 'product/:idProduct',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'course',
    component: ClientCourseComponent
  },
  {
    path: 'vendor-course',
    component: VendorCourseComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'manage-store',
    component: ManageStoreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
