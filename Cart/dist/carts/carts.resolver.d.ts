import { CartsService } from './carts.service';
export declare class CartsResolver {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    listCarts(): Promise<any>;
    findCart(customerId: string): Promise<any>;
    showCart(id: string): Promise<any>;
}
