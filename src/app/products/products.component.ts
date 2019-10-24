import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'products',
    templateUrl: './products.html'
})
export class ProductsComponent implements OnInit {
    title = 'My Parts';
    products: any[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProducts()
            .subscribe((data) => this.products = data);
    }
}
