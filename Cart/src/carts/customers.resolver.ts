import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CartsService } from './carts.service';
import { Customer } from './customers.interface';

@Resolver('Customer')
export class CustomersResolver {
  constructor(private readonly cartsService: CartsService) {}

  @ResolveField('carts')
  public cart(@Parent() customer: Customer): Promise<any> {
    return this.cartsService.findByCustomerId(customer.id);
  }
}
