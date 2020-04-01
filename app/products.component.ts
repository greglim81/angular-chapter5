import { Component } from '@angular/core'
import { ProductService } from './product.service'

@Component({
    selector: 'products',
    template: `
        <h2>Products</h2>
        <div *ngIf="products.length > 0; else loading">
            <div *ngFor="let product of products">
                <product [data]="product"></product>                
            </div>  
        </div>
        <ng-template #loading>
            <div>
                No products to display                
            </div>
        </ng-template>
    `,
    providers: [ProductService]    
})
export class ProductsComponent{
    products;

    constructor(productService: ProductService){
        this.products = productService.getProducts();
    }

} 
