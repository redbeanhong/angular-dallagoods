import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './views/customer/customer.component';
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

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: '', component: CustomerHomeComponent },
      {
        path: 'customer_orders/:productType',
        component: CustomerOrdersComponent,
      },
      {
        path: 'product_detail/:productId',
        component: ProductDetailComponent,
      },
      {
        path: 'customer_cart',
        component: CustomerCartComponent,
      },
      {
        path: 'customer_form',
        component: CustomerFormComponent,
      },
      {
        path: 'customer_checkout/:orderId',
        component: CustomerCheckoutComponent,
      },
      {
        path: 'Customer_coupon',
        component: CustomerCouponComponent,
      },
      {
        path: 'Customer_story',
        component: CustomerStoryComponent,
      },
      {
        path: 'Customer_comment',
        component: CustomerCommentComponent,
      },
      {
        path: 'Customer_notice',
        component: CustomerNoticeComponent,
      },
      {
        path: 'Customer_finished',
        component: CustomerFinishedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
