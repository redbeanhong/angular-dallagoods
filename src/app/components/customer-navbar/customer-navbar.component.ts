import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.scss'],
})
export class CustomerNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navItems = [
    {
      title: '設計館故事',
      path: 'Customer_story',
      icon:'fas fa-book-open'
    },
    {
      title: '全部商品',
      path: 'customer_orders/all',
      icon:'fas fa-shopping-basket'
    },
    {
      title: '購買評價',
      path: 'Customer_comment',
      icon:'fas fa-comment-dots'
    },
    {
      title: '領取優惠券',
      path: 'Customer_coupon',
      icon:'fas fa-ticket-alt'
    },
    {
      title: '注意事項',
      path: 'Customer_notice',
      icon:'fas fa-info-circle'
    },
  ];
}
