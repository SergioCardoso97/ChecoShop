 import { Component, Input, 
    Output, EventEmitter, 
    OnChanges, SimpleChange, 
    OnInit, DoCheck,  OnDestroy} from "@angular/core";

 import { Product } from "src/app/product.model";
import { CartService } from "src/app/core/services/cart.service";

 @Component({
     selector: 'app-product',
     templateUrl: './product.component.html',
     styleUrls: ['./product.component.scss']
 })
 export class ProductComponent implements OnInit, OnDestroy{

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private cartService:CartService
    )
    {
        console.log('1. constructor')
    }

    /* ngOnChanges(changes: SimpleChange){
        console.log('2. ngOnChanges');
        console.log(changes);
    } */

    ngOnInit()
    {
        console.log('3. ngOnInit');
    }

    ngOnDestroy()
    {
        console.log('5. ngOnDestroy');
    }



    addCart(){
        console.log('añadir al carrito');
        this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product.id);
    }

 }