import { Component } from '@angular/core';
import { Input, EventEmitter } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  ///EventEmmiter notify= new EventEmitter();

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('notified!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/