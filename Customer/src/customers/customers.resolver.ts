import { Resolver, Query, Args, ResolveReference } from '@nestjs/graphql';
import { CustomersService } from './customers.service';

@Resolver('Customer')
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Query()
  listCustomers(): any {
    return this.customersService.findAll();
  }

  @Query()
  showCustomer(@Args('id') id: string): any {
    return this.customersService.findOne(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): any {
    return this.customersService.findOne(reference.id);
  }
}
