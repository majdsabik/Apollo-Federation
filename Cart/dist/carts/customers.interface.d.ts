import { Cart } from './carts.interface';
export interface Customer {
    id: string;
    cart?: Cart;
}
