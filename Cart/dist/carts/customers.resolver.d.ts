import { CartsService } from './carts.service';
import { Customer } from './customers.interface';
export declare class CustomersResolver {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    cart(customer: Customer): Promise<any>;
}
