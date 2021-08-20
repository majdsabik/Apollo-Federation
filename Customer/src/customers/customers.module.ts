import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { GraphQLFederationModule } from '@nestjs/graphql';

@Module({
  providers: [CustomersResolver, CustomersService],
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: ['./src/customers/customers.graphql'],
    }),
  ],
})
export class CustomersModule {}
