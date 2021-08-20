import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsResolver } from './carts.resolver';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { CustomersResolver } from './customers.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['./src/carts/carts.graphql'],
    }),
  ],
  providers: [CartsResolver, CartsService, CustomersResolver],
})
export class CartsModule {}
