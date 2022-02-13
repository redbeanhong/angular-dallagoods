import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './views/customer/customer.component';
import { CustomerNavbarComponent } from './components/customer-navbar/customer-navbar.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { CustomerOrdersComponent } from './views/customer/pages/customer-orders/customer-orders.component';
import { ProductDetailComponent } from './views/customer/pages/product-detail/product-detail.component';
import { CustomerCartComponent } from './views/customer/pages/customer-cart/customer-cart.component';
import { CustomerFormComponent } from './views/customer/pages/customer-form/customer-form.component';
import { CustomerCheckoutComponent } from './views/customer/pages/customer-checkout/customer-checkout.component';
import { CustomerCouponComponent } from './views/customer/pages/customer-coupon/customer-coupon.component';
import { CustomerStoryComponent } from './views/customer/pages/customer-story/customer-story.component';
import { CustomerCommentComponent } from './views/customer/pages/customer-comment/customer-comment.component';
import { CustomerNoticeComponent } from './views/customer/pages/customer-notice/customer-notice.component';
import { CustomerFinishedComponent } from './views/customer/pages/customer-finished/customer-finished.component';
import { CustomerHomeComponent } from './views/customer/pages/customer-home/customer-home.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerNavbarComponent,
    InfoBarComponent,
    BannerComponent,
    AlertMessageComponent,
    FooterBarComponent,
    CustomerOrdersComponent,
    ProductDetailComponent,
    CustomerCartComponent,
    CustomerFormComponent,
    CustomerCheckoutComponent,
    CustomerCouponComponent,
    CustomerStoryComponent,
    CustomerCommentComponent,
    CustomerNoticeComponent,
    CustomerFinishedComponent,
    CustomerHomeComponent,
    NavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
