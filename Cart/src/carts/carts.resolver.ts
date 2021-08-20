import { Resolver, Query, Args } from '@nestjs/graphql';
import { CartsService } from './carts.service';

@Resolver('Cart')
export class CartsResolver {
  constructor(private readonly cartsService: CartsService) {}

  @Query()
  listCarts() {
    return this.cartsService.findAll();
  }

  @Query()
  findCart(@Args('customerId') customerId: string) {
    return this.cartsService.findByCustomerId(customerId);
  }

  @Query()
  showCart(@Args('id') id: string) {
    return this.cartsService.findOne(id);
  }
}
